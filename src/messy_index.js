var Hapi = require('hapi');

// create the server
var server = new Hapi.server();
server.connection({ port : 3000 })

server.route({
  method: 'GET',
  path: '/api',
  handeler: function(request, reply) {
    reply({ 'api' : 'hello!' });
  }
});

server.start(function() {
  console.log('Running on 3000');
});
