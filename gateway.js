const express = require('express');
const app = express();
app.use(express.json);
const PORT = 6000;
const routes = require('./routes');

app.use('/', routes);
console.log('Hello 1');
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
console.log('Hello 2');
