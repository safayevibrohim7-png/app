const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/api/data', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
  res.json(data);
});

require('./bot.js');  // bot.js fon rejimida ishga tushadi

app.get('/', (req, res) => {
  res.send('Server ishga tushdi va bot ham ishlayapti!');
});

app.post('/api/add', (req, res) => {
  const { name, date, amount } = req.body;
  let data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

  // Ishchini topish yoki yangi qo‘shish
  let worker = data.find(w => w.name === name);
  if (!worker) {
    worker = { name: name, payments: [] };
    data.push(worker);
  }

  worker.payments.push({ date, amount });

  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
  res.json({ success: true });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
