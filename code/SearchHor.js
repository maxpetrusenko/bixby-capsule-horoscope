var http = require('http')
var console = require('console')

module.exports.function = function searchHor (sign) {
  
    // var user = '604455';
    // var api = '0096d683aa8ecf18ea6f4ae27dc54e6d';

    var options = { 
    format: 'json',
    headers: {
      "X-RapidAPI-Key" :"fa8e615af3mshe43bc1e20b3e43fp1a0bd1jsn5e67a3865edd",
      "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
      "Content-Type": "application/x-www-form-urlencoded"
      }
    }

//   unirest.post("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aries&day=today")
// .header("X-RapidAPI-Host", "sameer-kumar-aztro-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "fa8e615af3mshe43bc1e20b3e43fp1a0bd1jsn5e67a3865edd")
// .header("Content-Type", "application/x-www-form-urlencoded")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });
  
  
  // var response = http.post(config.get('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=') + sign + '&day=today',options);
   var response = http.postUrl('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=' + sign + '&day=today',{},options);
  console.log(sign);
  response.sign = sign;
  return response;
}
