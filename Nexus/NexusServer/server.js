const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const session = require('express-session');
const jwt = require('jsonwebtoken');

const secretKey = "12dfgiodag#rg^&2@"
// Create a MySQL connection:
const connection =
     mysql.createConnection({
       host: '127.0.0.1',
       user: 'root',
       password: 'ladys',
       database: 'nexusdata'
     });

var mytoken="";
// Connect to the MySQL database:
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Create an Express application:
const app = express();

// Use the required middleware:
app.use(bodyParser.json());
app.use(cors());
// app.use(session({
//   secret: 'your secret key',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false } // Note: In production, set this to true and ensure you use HTTPS
// }));


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

// Read recommended games
app.get('/api/v1/recommend', (req, res) => {
  const { name, description } = req.body;
  const sql = "select * from (select * from games where PriceInitial>PriceFinal AND SteamRecommends>=109)AS T JOIN viewedgames ON (T.GameID=viewedgames.GameID) NATURAL JOIN Users WHERE Username='bmfzkkw' ORDER BY GameName;";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Read one game
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


//用户管理系统

// app.get('/api/v1/registrationbegin', (req, res) => {
//   res.send('Welcome to the login and registration system!');
// });

// app.post('/api/v1/register', (req, res) => {
//   const { username, password } = req.query;

//   const sqlCheckUsername = 'SELECT * FROM users WHERE Username = ?';
//   const sqlInsertUser = 'INSERT INTO users (UserID, Username, Password) VALUES (?, ?, ?)';
//   const sqlCountUsers = 'SELECT COUNT(*) as userCount FROM users';

//   // Check if the username is already taken
//   connection.query(sqlCheckUsername, [username], (err, result) => {
//     if (err) throw err;

//     // If there is a result, the username is already taken
//     if (result.length > 0) {
//       res.send('Username has been used');
//     } else {
//       // Get the total count of users
//       connection.query(sqlCountUsers, (err, countResult) => {
//         if (err) throw err;

//         // Use the count to generate a new UserID and insert the new user
//         const newUserID = countResult[0].userCount + 1;
//         connection.query(sqlInsertUser, [newUserID, username, password], (err, insertResult) => {
//           if (err) throw err;
//           res.send('Registration Succeeded!');
//         });
//       });
//     }
//   });
// });


//用户登录系统
app.post('/api/v1/login', (req, res) => {
  const { userName, userPwd } = req.body;
  const sql = 'SELECT * FROM users WHERE Username = ? AND Password = ?';
  const sqlCheckPassword = 'SELECT * FROM users WHERE Username = ?';

  // Check if the user exists
  connection.query(sql, [userName,userPwd], (err,result) =>{
    if (err) throw err;

    
    if (result.length > 0){      
      // case1: user login successfully
      const token = jwt.sign({ userName}, secretKey, { expiresIn: '10min' });
      mytoken=token;
      res.json({ "key": token });
    }
    else{
      // case2: user entered wrong password
      connection.query(sqlCheckPassword, [userName], (err,result)=>{
        if (err) throw err;
        if (result.length > 0){
          res.send('Entered password is wrong!');
        }else{
          res.send('No username found!');
        }
        req.session.loggedIn = false;
      })
    }
  });

})


//用户查询系统
// 验证JWT并提取用户信息
app.get('/user', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(mytoken, secretKey, (err, decoded) => {
      if (err) {
        return res.send('Unauthorized');
      }

    // 此时decoded中包含用户信息
    const userName = decoded.userName;
    const sql = 'SELECT * FROM users WHERE Username = ?';
    connection.query(sql, [userName], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
});




// 这个是测试用的
app.get('/api/v1/test', (req, res) => {
});


//Start the server:
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});












// const express = require('express');
// const session = require('express-session');

// const app = express();

// app.use(session({
//   secret: 'your secret key',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false } // Note: In production, set this to true and ensure you use HTTPS
// }));

// app.post('/login', (req, res) => {
//   // Authentication logic...
//   if (authenticated) {
//     req.session.loggedIn = true;
//     res.send('You are now logged in!');
//   } else {
//     res.send('Invalid login credentials.');
//   }
// });

// app.get('/dashboard', (req, res) => {
//   if (req.session.loggedIn) {
//     res.send('Welcome to your dashboard!');
//   } else {
//     res.redirect('/login');
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
