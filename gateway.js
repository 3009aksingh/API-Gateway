const express = require('express');

const app = express();
const PORT = 3000;
const routes = require('./routes');
// const app = express();
app.use('/', routes);
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});