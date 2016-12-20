var readline = require('readline');

var gamefield = require('../GameField.js');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

rl.setPrompt("tetris> ");
rl.prompt();

function lFunc(letter) {
    console.log("Create letter " + letter);
}

function hFunc() {
    console.log("Help");
}


var cliFunction = {
    "l": lFunc,
    "h": hFunc
};


rl.on('line', function(line) {
    var splitInput = line.split(" ");
    var cmdStr = splitInput[0];
    var cmd = cliFunction[cmdStr];
    if (cmd) {
	cmd.apply(this, splitInput.splice(1));
    } else {
	console.log("Unknown command " + cmdStr);
    }
    rl.prompt();
});


