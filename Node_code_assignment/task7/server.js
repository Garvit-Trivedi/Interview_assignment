const express = require('express');
const app = express();


app.use(express.json());


let users = [
  { id: 1, name: "user1", email: "user1@example.com" },
  { id: 2, name: "user2", email: "user2@example.com" },
  { id: 3, name: "user3", email: "user3@example.com" }
];





app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);
  res.status(204).send(); 
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
