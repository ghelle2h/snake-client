const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const name = 'Name: GH';
  const up = 'Move: up';
  const down = 'Move: down';
  const right = 'Move: right';
  const left = 'Move: left';

  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  

  conn.write(`${name}`);
  /*
  setTimeout(() => conn.write(`${up}`), 50);
  setTimeout(() => conn.write(`${down}`), 300);
  setTimeout(() => conn.write(`${right}`), 600);
  setTimeout(() => conn.write(`${left}`), 900);
  */
  

  conn.on('data', (data) => {
    console.log("you ded cuz you idled", data)
  })

  conn.on('connect', () => {
    console.log("You are connected");
  })
  conn.setEncoding("utf8");
  
  return conn;
};



module.exports = {connect};