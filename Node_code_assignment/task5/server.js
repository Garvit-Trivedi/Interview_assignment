const express = require('express');
const app = express();

app.use(express.json());


let users = [
    { id: 1, name: "user1", email: "user1@example.com" },
    { id: 2, name: "user2", email: "user2@example.com" },
    { id: 3, name: "user3", email: "user3@example.com" }
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


app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});


app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index !== -1) {
    const updatedUser = { ...req.body, id: userId }; // Preserve ID
    users[index] = updatedUser;
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
