// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5
// (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

var userChoice = prompt("scegli se puntare pari o dispari");
var userNum = getRandom(1, 5);
var pcNum = getRandom(1, 5);
console.log("il numero del pc è " + pcNum);
console.log("il numero dell'utente è " + userNum);
var somma = userNum + pcNum;
var msg = "il pc vince";
var listContent = document.getElementById('my_list');

if(somma % 2 == 0 && userChoice == "pari"){
  msg = "vince User1";
}else if (somma % 2 != 0 && userChoice == "pari"){
  msg;
}

console.log(msg);
document.getElementById('my_id').innerHTML = msg;
listContent.innerHTML = "<li>" + "numero utente: " + userNum + "</li>" + "<li>" + "numero PC: " + pcNum + "</li>";



function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
