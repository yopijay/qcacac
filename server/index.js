// Libraries
const express = require('express');
const cors = require('cors');

// Variables
const app = express();
const port = process.env.PORT || 3005;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.listen(port, () => console.log(port));