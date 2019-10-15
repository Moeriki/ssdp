const { Client } = require('node-ssdp');

const client = new Client();

client.on('response', function onClientResponse(headers, statusCode, rinfo) {
  console.log('onClientResponse');
  console.dir({ headers, statusCode, rinfo });
  // console.log('Got a response to an m-search.');
});

// search for a service type
client.search('urn:schemas-upnp-org:service:ContentDirectory:1');

// Or get a list of all services on the network

client.search('ssdp:all');

(function keepAlive() {
  const ref = setInterval(() => {}, 1000);
  process.on('exit', () => {
    clearInterval(ref);
  });
})();
