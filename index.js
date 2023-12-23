const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./Routes/Auth");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(express.json({ limit: "50mb" }));
app.use(cors({ origin: "http://localhost:3000" }));

mongoose
  .connect(process.env.DB_URL)
  .then(console.log("Server is Connected to Database"))
  .catch((err) => console.log(err));

const port = process.env.PORT;

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log("Server is up and running at port " + port);
});
