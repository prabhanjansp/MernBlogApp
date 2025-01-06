import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formdata, setFormData] = useState({});
  const [errormessage, setErrormessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.id]: e.target.value.trim() });
    console.log(formdata);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formdata.username || !formdata.email || !formdata.password) {
      return setErrormessage("Please do fill out all the fields");
    }
    try {
      setLoading(true);
      setErrormessage(null);
      const res = await axios.post(
        "http://localhost:3000/api/auth/signup",
        formdata,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = res.data;
      alert("Registration Successfully");

      console.log(data);
      if (data.success === false) {
        return setErrormessage(data.message);
      }
      setLoading(false);
    
        navigate('/signin')
      
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      setErrormessage(error.message);
      setLoading(false);
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
                  <Label value="Your Username" />
                  <TextInput
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                  />
                </div>
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
                    placeholder="password"
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
                    "Sign Up"
                  )}
                </Button>
              </form>
              <div className="flex gap-2 text-sm mt-5">
                <span>Have an account</span>
                <Link to="/signin" className="text-blue-600">
                  Sign In
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

export default SignUp;
