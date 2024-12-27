const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... database interaction to fetch user data using async/await ...
    const userData = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
    if (!userData) {
      return res.status(404).send('User not found');
    }
    res.send(userData);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Internal Server Error');
  }
});