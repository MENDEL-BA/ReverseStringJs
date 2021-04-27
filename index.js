
let monMot = "Hello world!";

let reverseMot = [];

let notReverseMot = "";

for(var i = 0; i < monMot.length; i++){
  reverseMot.push(monMot[i]);
}

for(var i = 0; i < monMot.length; i++){
  notReverseMot += reverseMot.pop();
}


console.log("Le mot inversé ",notReverseMot)

 