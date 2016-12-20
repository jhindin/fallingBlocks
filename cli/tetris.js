var readline = require('readline');

var GF = require('../GameField.js');

var gameField = new GF.GameField(6, 8);

function printField(field) {
    var size = field.size();

    for (var y = 0; y < size.height; y++) {
	for (var x = 0; x < size.width; x++) {
	    if (field.isValid([x, y]))
		process.stdout.write(".");
	    else
		process.stdout.write("*");
	}
	process.stdout.write("\n");
    }
}




var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

rl.setPrompt("tetris> ");
rl.prompt();



function lFunc(letter) {
    console.log("Create letter " + letter);
    printField(gameField);
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


