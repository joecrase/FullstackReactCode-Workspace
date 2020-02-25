const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app); // javascript shorthand

const PORT = process.env.PORT || 5000; // Dynamic port binding
app.listen(PORT);
