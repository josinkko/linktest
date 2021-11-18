const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/dist/LinkTest'));
app.get('/*', function(req,res){
  res.sendFile(path.join(__dirname, 'dist/LinkTest', 'index.html'))
});
// app.get('/hej/apple-app-site-association', function(req, res) {
//   res.set('Content-Type', 'application/json');
//   res.status(200)
//   res.sendFile(path.join(__dirname + '.well-known/apple-app-site-association'))
// })

var aasa = fs.readFileSync(__dirname + '.well-known/apple-app-site-association');
app.get('/apple-app-site-association', function(req, res, next) {
  res.set('Content-Type', 'application/pkcs7-mime');
  res.status(200).send(aasa);
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
