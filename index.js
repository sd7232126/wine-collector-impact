const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Bottle');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// Setup body parser to get post requests
app.use(bodyParser.json());
// Setup cookie session mgmt
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,  // 30 days
    keys: [keys.cookieKey]
  })
);
// Initialize and use Passport library
app.use(passport.initialize());
app.use(passport.session());

// Setup routes (APIs)
require('./routes/authRoutes')(app);
require('./routes/bottleRoutes')(app);

// Instruct Express about routes it doesn't recoginze in production
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets like our main.js file, or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file if it doesn't recoginze the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Use 5000 as dev port or production port from env variable
const PORT = process.env.PORT || 5000;
app.listen(PORT);
