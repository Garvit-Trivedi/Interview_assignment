const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const dummyUser = {
  username: 'testuser',
  password: 'test123',
  id: 1
};

router.post('/', (req, res) => {
  const { username, password } = req.body;

  if (username !== dummyUser.username || password !== dummyUser.password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const payload = { id: dummyUser.id, username: dummyUser.username };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

module.exports = router;
