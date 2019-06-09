var http = require('http')
var console = require('console')

module.exports.function = function searchHor (sign) {

    var options = { 
    format: 'json',
    headers: {
      "X-RapidAPI-Key" :"fa8e615af3mshe43bc1e20b3e43fp1a0bd1jsn5e67a3865edd",
      "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
      "Content-Type": "application/x-www-form-urlencoded"
      }
    }

   var response = http.postUrl('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=' + sign + '&day=today',{},options);
  console.log(sign);
  response.sign = sign;
  return response;
}
