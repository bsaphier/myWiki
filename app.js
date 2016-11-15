const express = require( 'express' );
const app = express();

const morgan = require('morgan');
const bodyparser = require('body-parser');

const nunjucks = require('nunjucks');
const env = nunjucks.configure('views', {noCache: true});

app.use(express.static('public'));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));

app.listen(3001, () => {
});
