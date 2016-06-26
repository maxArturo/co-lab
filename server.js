const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

// load routes
const indexRoute = require('./routes/index');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', indexRoute);
app.use('/static', express.static(`${__dirname}/public/`));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!'); // eslint-disable-line
});

