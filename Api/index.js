import e from "express";
import mongoose from "mongoose";
// import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import cors from 'cors';

dotenv.config();

mongoose
  .connect(process.env.mongo)
  // .connect(
  //   // "mongodb+srv://prabhanjansconti:wHYb2KwPFNkIgFio@mern-blog.f3k1h.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog"
  // )
 
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
// mongoose.set('bufferCommands', false);

const app = e();
app.use(e.json()); // it will allow the  sending the data in the form of json in the body of the request
app.use(cors())
app.listen(3000, () => {
  console.log("server is running on the port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoute);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const message = err.message || "INternal message error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

