const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // ✅ correct path

dotenv.config();

const app = express();
app.use(express.json()); // ✅ enables JSON body parsing

app.use('/login', authRoutes); // ✅ handles POST /login

app.listen(3000, () => console.log('Server running on port 3000'));
