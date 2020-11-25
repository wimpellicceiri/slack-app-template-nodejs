const axios = require('axios');

module.exports = (code) => {
  console.log('Authorizer was called');

  const clientId = '473066604338.1518457870594';
  const clientSecret = '4461f6820c17bdfca0fc3b8ca687a6e1';

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

