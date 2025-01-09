import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFail,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error: errormessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFail('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFail(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFail(error.message));
    }
  };
  return (
    <>
      <div className="min-h-screen mt-2">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md: items-center gap-5">
          {/* left side */}
          <div className="flex-1">
            <Link to="/" className="font-bold dark:text-white">
              <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-600 to bg-pink-500  rounded-lg text-white text-4xl">
                Ps.dev's
              </span>
              Blogs
            </Link>
            <p className="text-sm mt-5">
              this is the official my blog page which is belongs to ps dev!
            </p>
          </div>
          {/* right side */}
          <div className="flex-1">
            <div>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <Label value="Your Email" />
                  <TextInput
                    type="email"
                    placeholder="name@company.com"
                    id="email"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label value="Your Password" />
                  <TextInput
                    type="password"
                    placeholder="********"
                    id="password"
                    onChange={handleChange}
                  />
                </div>
                <Button
                  gradientDuoTone="purpleToPink"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Spinner size="sm" />
                      <span className="pl-3">Loading</span>
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
                <OAuth/>
              </form>
              <div className="flex gap-2 text-sm mt-5">
                <span>don't have an account</span>
                <Link to="/signup" className="text-blue-600">
                  sign up
                </Link>
              </div>

              {errormessage && (
                <Alert className="mt-6" color="failure">
                  {errormessage}
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
