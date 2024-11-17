import User from "../modules/user.js";

export const signup = async (req, res) => {
//   console.log(req.body);

  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === " " ||
    email === " " ||
    password === " "
  ) {
    // return res.status(400).json({ message: "All fields are required" });
    return res.status(400).json({ message: "All fields are mandatory" });
  }
  const freshuser = new User({ username:username, email:email, password:password });
  // /saving the user to database
  try {
    await freshuser.save();
    res.json({ message: "Signup done" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
