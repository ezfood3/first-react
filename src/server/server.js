const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Welcome !!');
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.listen(PORT, () => {
  console.log(PORT, '번 포트에서 대기중');
});
