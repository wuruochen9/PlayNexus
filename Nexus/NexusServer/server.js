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

//Set up the CRUD
// Create
app.post('/api/v1/games', (req, res) => {
  const { name, description } = req.body;
  const sql = 'INSERT INTO games (GameName, DetailedDescription) VALUES (?, ?)';
  connection.query(sql, [name, description], (err, result) => {
    if (err) throw err;
    res.send('Record created');
  });
});

// Read all
app.get('/api/v1/games', (req, res) => {
  const sql = 'SELECT * FROM games';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get the recommended games
app.get('/api/v1/recommend', (req, res) => {
  const { name, description } = req.body;
  const sql = "select * from (select * from games where PriceInitial>PriceFinal AND SteamRecommends>=109)AS T JOIN viewedgames ON (T.GameID=viewedgames.GameID) NATURAL JOIN Users WHERE Username='bmfzkkw' ORDER BY GameName;";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Read 1
app.get('/api/v1/games/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM games WHERE GameID = ?';
  connection.query(sql, [ id], (err, results1) => {
    if (err) throw err;
    res.json(results1);
  });
});






// Update
app.put('/api/v1/games/:id', (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;
  const sql = 'UPDATE games SET GameName = ?, DetailedDescription = ? WHERE GameID = ?';
  connection.query(sql, [name, description, id], (err, result) => {
    if (err) throw err;
    res.send('Record updated');
  });
});


// Delete
app.delete('/api/v1/games/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM games WHERE GameID = ?';
  connection.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send('Record deleted');
  });
});





// Read all users 这个是测试用的
app.get('/api/v1/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


//Start the server:
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});