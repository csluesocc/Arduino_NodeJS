var pin = process.argv[2];
var five = require('johnny-five');
var board = new five.Board();


board.on("ready", function(){
  console.log("Encender led en pin "+pin);
  var led = new five.Led(pin);

  led.blink(500);
});

console.log("Hola mundo desde arduino");
