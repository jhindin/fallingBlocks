var readline = require('readline');

var gamefield = require('../GameField.js');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

rl.setPrompt("tetris> ");
rl.prompt();


rl.on('line', function(line) {
    process.stdout.write("'" + line + "'\n");
    rl.prompt();
});


