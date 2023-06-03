const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());                       // Enable CORS

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'Nehal@5268',
  database: 'airline_reservation_system'
}).promise()
 
app.get('/', (req, res) => {
  res.send('Hello, Backend!'); // Replace with your desired response or serve your React application
});

/*pool.query("SELECT * FROM flights WHERE origin = 'DEL' AND destination = 'BOM'")
  .then(result => {
    console.log(result[0]); // Log the first row of the query result
  })
  .catch(error => {
    console.error(error);
  }); */


// Route to handle flight search
app.get('/api/flights', (req, res) => {
  const origin = req.query.origin;
  const destination = req.query.destination;
  console.log(origin, destination);

  // Query the database for flights based on origin, destination, and travel class
  const query = `SELECT * FROM flights WHERE origin = ? AND destination = ?`;

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
