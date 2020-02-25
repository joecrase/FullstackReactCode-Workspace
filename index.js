const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app); // javascript shorthand

const PORT = process.env.PORT || 5000; // Dynamic port binding
app.listen(PORT);
