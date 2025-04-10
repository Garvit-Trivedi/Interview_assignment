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


app.patch('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const updates = req.body;
  Object.assign(user, updates);
  res.status(200).json(user);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
