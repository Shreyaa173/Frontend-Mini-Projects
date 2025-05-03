const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User'); 

const app = express();
app.use(express.json());
app.use(cors());

app.post('/signup', (req, res) => {
  User.create(req.body)
    .then(users => res.json(users))
    .catch(err => {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
    res.json({ message: 'Signup successful' });
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }
      if (user.password !== password) {
        return res.status(400).json({ error: 'Invalid Credentials' });
      }
      res.json({ message: 'Login successful' });
    })
    .catch(err => {
      console.error('Error during login:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
});


mongoose.connect('mongodb+srv://shreya173:shreya1735@cluster0.zocr4.mongodb.net/LoginSignup?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });