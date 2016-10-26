const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

// load routes
const indexRoute = require('./routes/index');

// parse params from either JSON or url
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', indexRoute);
app.use('/static', express.static(`${__dirname}/public/`));

app.listen(3000, () => {
  console.log('app listening on port 3000!'); // eslint-disable-line
});

