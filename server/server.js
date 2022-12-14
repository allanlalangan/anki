const express = require('express');
require('dotenv').config();
const { connectDB } = require('./config/db');

const app = express();

app.listen(
  process.env.PORT,
  console.log(`listening on port ${process.env.PORT}`)
);

connectDB();
