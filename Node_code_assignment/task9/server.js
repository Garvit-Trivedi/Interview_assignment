const express = require('express');
// const verifytoken = routes('./middleware/auth.js');
const verifyToken = require('./middleware/auth.js');


const app = express();
app.use(express.json());

app.get('./',(req,res)=>{
    res.send('hello my name is garvit trivedi');
})

app.get('/dashboard', verifyToken, (req, res) => {
    res.send(`Hello ${req.user.username}, welcome to your dashboard!`);
  });
  

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})