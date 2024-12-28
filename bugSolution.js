const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Missing or invalid JSON data' });
  }
  console.log(req.body);
  res.send('User created');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});