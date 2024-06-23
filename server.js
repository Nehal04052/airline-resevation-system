const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors()); // Enable CORS

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'Nehal@5268',
  database: 'airline_reservation_system'
}).promise();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Backend!'); // Replace with your desired response or serve your React application
});

// Route to handle user signup
app.post('/api/signup', (req, res) => {
  // Extract signup data from the request body
  const { username, email, password } = req.body;

  // Insert user data into the database
  const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  pool.query(query, [username, email, password])
    .then(result => {
      console.log('User signed up successfully');
      res.status(200).json({ message: 'Signup successful' });
      
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.post('/api/login', (req, res) => {
  // Extract login data from the request body
  const { username, password } = req.body;

  // Query the database for the user with the provided username
  const query = `SELECT name, password FROM users WHERE name = ?`;
  pool.query(query, [username])
    .then(result => {
      let result1=result[0];
      result1.forEach((Element)=>{
        result1=Element;
      })
      console.log('Query Result:', result1.password,password); // Check the result from the query

      if (result1.password === password) {
        console.log('User logged in successfully');
        res.status(200).json({ message: 'Login successful' });
      } else {
        console.log('Invalid username or password');
        res.status(401).json({ error: 'Invalid username or password' });
      }
    })
    .catch(error => {
      console.error('Error:', error); // Check the error message
      res.status(500).json({ error: 'An error occurred' });
    });
});




// Route to handle flight search
app.get('/api/flights', (req, res) => {
  const origin = req.query.origin;
  const destination = req.query.destination;
  console.log(origin, destination);

  // Query the database for flights based on origin, destination, and travel class
  const query = `SELECT *
  FROM flights
  WHERE origin = ? AND destination = ?
  ORDER BY STR_TO_DATE(deptime, '%H:%i') ASC`;

  pool.query(query, [origin, destination])
    .then(result => {
      console.log(result[0]);
      res.json(result[0]); // Sending the query result as a response
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' }); // Sending an error response
    });
});

// Start the server
const port = 3002; // Change the port if needed
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
