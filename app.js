const express = require( 'express' );
const app = express();

const morgan = require('morgan');
const bodyparser = require('body-parser');

const nunjucks = require('nunjucks');
const env = nunjucks.configure('views', {noCache: true});

const models = require('./models');
const wikiRouter = require('./routes/wiki');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));
app.use(express.static('public'));

app.use('/wiki', wikiRouter);

models.User.sync()
.then( () => {
  return models.Page.sync();
})
.then( () => {
  app.listen(3001, () => {
    console.log('sSssSSSssssslowowlsssssSSSssSs');
  });
})
.catch(console.error);
