const app = require('express')();
const http = require('http').createServer(app);
const port = process.env.PORT || 3000;
const authorizer = require('./authorizer');
const catApi = require('./catApi');

app.get('/slack/authorization', function (req, res) {
  const code = req.params.code;

  authorizer(code)
    .then(() => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Authorization was called',
        }),
      };

      res.json(response);
    })
    .catch((error) => {
      console.log('Could not authorize');

      const response = {
        statusCode: 500,
        body: JSON.stringify({
          message: error,
        }),
      };

      return res.json(response);
    });
});

app.post('/slack/catPlease', function (req, res) {
  res.send(catApi());
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});