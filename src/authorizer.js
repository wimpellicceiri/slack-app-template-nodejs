const axios = require('axios');

module.exports = (code) => {
  console.log('Authorizer was called');

  const clientId = '<your_client_id_here>';
  const clientSecret = '<your_client_secret_here>';

  const oauthURL = 'https://slack.com/api/oauth.access?' +
    'client_id=' + clientId + '&' +
    'client_secret=' + clientSecret + '&' +
    'code=' + code;

  console.log(oauthURL);

  return axios.get(oauthURL)
    .then((response) => {
      console.log(response.access_token);
    })
    .catch((error) => error);
}

