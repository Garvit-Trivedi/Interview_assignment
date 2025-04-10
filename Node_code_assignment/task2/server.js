const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Hardcoded array of users
const users = [
  { id: 1, name: "user1", email: "user1@example.com" },
  { id: 2, name: "user2", email: "user3@example.com" },
  { id: 3, name: "user3", email: "user3@example.com" }
];

// Root route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
