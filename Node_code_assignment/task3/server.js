const express = require('express');
const app = express();


app.use(express.json());


let users = [
  { id: 1, name: "user1", email: "user1@example.com" },
  { id: 2, name: "user2", email: "user2@example.com" }
];


app.get('/', (req, res) => {
  res.send('Server is running');
});


app.get('/users', (req, res) => {
  res.json(users);
});


app.post('/users', (req, res) => {
  const newUser = req.body;

  
  newUser.id = users.length + 1;

  
  users.push(newUser);

  
  res.status(201).json(newUser);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
