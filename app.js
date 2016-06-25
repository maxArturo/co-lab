const app = require('express')();

// load routes
const indexRoute = require('./routes/index');
app.use('/', indexRoute);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!'); // eslint-disable-line
});

