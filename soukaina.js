var http = require('http');
var url = require('url');
var express = require('express');
var server = http.createServer(function(req, res) {






var chemin = url.parse(req.url).pathname;
 if (chemin == '/'){
 res.end('Accueil');
 res.writeHead(200);
 
 }
 else
 if (chemin == '/souka'){
 res.end('Souka');
 res.writeHead(200);
 
 }
 else
  if (chemin == '/propos'){
 res.end('propos');
 res.writeHead(200);
 
 }
else {res.end('erreur 404');
res.writeHead(404);}

});
server.listen(8080);