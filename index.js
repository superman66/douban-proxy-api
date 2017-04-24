/**
 * Created by superman on 17/3/15.
 */

import express from 'express'
import MoviesRoutes from './routes/movie'
import BookRoutes from './routes/book'
import MusicRoutes from './routes/music'

var app = express();
app.set('port', (process.env.PORT || 8081));

/**
 * CORS support.
 */
app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  // res.set('Access-Control-Allow-Max-Age', 3600);
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

app.use('/movie', MoviesRoutes)
app.use('/book', BookRoutes)
app.use('/music', MusicRoutes)

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
