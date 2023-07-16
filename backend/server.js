const express = require("express");
const dotenv = require("dotenv").config();
const colore = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.port || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalsRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`listen on port ${port}`));
