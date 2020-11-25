const axios = require('axios');

module.exports = (code) => {
  console.log('Authorizer was called');

  const clientId = process.env.SLACK_CLIENT_ID;
  const clientSecret = process.env.SLACK_CLIENT_SECRET

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

