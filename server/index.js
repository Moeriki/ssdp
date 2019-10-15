const { Server } = require('node-ssdp');

const server = new Server();

server.addUSN('upnp:rootdevice');
server.addUSN('urn:schemas-upnp-org:device:MediaServer:1');
server.addUSN('urn:schemas-upnp-org:service:ContentDirectory:1');
server.addUSN('urn:schemas-upnp-org:service:ConnectionManager:1');

server.on('advertise-alive', function onServerAdvertiseAlive(headers) {
  console.log('onServerAdvertiseAlive');
  console.dir({ headers });
  // Expire old devices from your cache.
  // Register advertising device somewhere (as designated in http headers heads)
});

server.on('advertise-bye', function onServerAdvertiseBye(headers) {
  console.log('onServerAdvertiseBye');
  console.dir({ headers });
  // Remove specified device from cache.
});

// start the server
server.start();

process.on('exit', function onProcessExit() {
  console.log('onProcessExit');
  server.stop(); // advertise shutting down and stop listening
});
