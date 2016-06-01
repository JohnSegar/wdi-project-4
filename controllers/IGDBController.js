var https = require('https');
var rp = require('request-promise');

module.exports = function getGames(req, res) {
  var options = {
    uri: 'https://www.igdb.com/api/v1/games/search',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Token token="GiphqcvtB67EfAQKxJJyyQi7h6Q-KjretolOTxjVmxU"'
    },
    qs: {
      q: req.body.query
    },
    json: true
  };

  rp(options)
    .then(function(response) {
      return res.send(response);
    })
    .catch(function(err) {
      return res.send(err);
    });
};
