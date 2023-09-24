const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
// Create a MySQL connection:
const connection =
     mysql.createConnection({
       host: '127.0.0.1',
       user: 'root',
       password: 'ladys',
       database: 'nexusdata'
     });

//Connect to the MySQL database:

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

//Create an Express application:

const app = express();

//Use the required middleware:

app.use(bodyParser.json());
app.use(cors());

//Set up the CRUD routes:

// Create a new record
app.post('/api/records', (req, res) => {
  const { Name, LongDescript } = req.body;
  const sql = 'INSERT INTO records (Name, LongDescript) VALUES (?, ?)';
  connection.query(sql, [Name, LongDescript], (err, result) => {
    if (err) throw err;
    res.send('Record created');
  });
});

// Read all records
app.get('/api/records', (req, res) => {
  const sql = 'SELECT * FROM games';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// // Update a record
// app.put('/api/records/:id', (req, res) => {
//   const { name, email } = req.body;
//   const { id } = req.params;
//   const sql = 'UPDATE records SET name = ?, email = ? WHERE id = ?';
//   connection.query(sql, [name, email, id], (err, result) => {
//     if (err) throw err;
//     res.send('Record updated');
//   });
// });

// Delete a record
app.delete('/api/records/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM games WHERE id = ?';
  connection.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send('Record deleted');
  });
});

//Start the server:
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});