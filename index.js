require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./Routes/Auth");

//routes
app.get("/", (req, res) => {
  res.send("anil kumar nayak");
});
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`server running at ${process.env.PORT}`);
});
