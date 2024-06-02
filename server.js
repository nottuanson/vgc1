const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log('Middleware setup complete.');

// Endpoint to handle email submissions
app.post('/submit-email', (req, res) => {
  const email = req.body.email;
  console.log('Received email:', email);

  // Append email to a file
  fs.appendFile('emails.txt', email + '\n', (err) => {
    if (err) {
      console.error('Failed to save email:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email saved successfully.');
      res.status(200).send('Email saved successfully');
    }
  });
});

// Serve static files (your HTML file)
app.use(express.static('public'));

console.log('Static file serving setup complete.');

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});

console.log('Server setup complete.');
