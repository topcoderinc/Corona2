const express = require('express');
const path = require('path');
const compression = require('compression');

const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
  }
});
