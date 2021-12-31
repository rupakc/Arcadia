const process = require('process');

process.on('unhandledRejection', (error, promise) => {
  console.log(' Oh Lord! We forgot to handle a promise rejection here: ', promise);
  console.log(' The error was: ', error );
});

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
});

const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      routes = require('./routes/routes');

      const app = express();
      app.use(express.static('public'));
      app.use(bodyParser.json());
      app.use(cors());
      app.use('/', routes);
      const port = process.env.PORT || 4000;

      const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
      });
