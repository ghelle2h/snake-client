const net = require("net");

// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  if(data){
    console.log("you ded cuz you idled")
  }

  return conn;
};

console.log("Connecting ...");
connect();