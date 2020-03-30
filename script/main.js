// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.
// --------------------------------------------
var wordU = document.getElementById('word');
var btn = document.getElementById('genera');
var answer;
var output = document.getElementById('my_id');


//funzione all'interno del click sul bottone;

btn.addEventListener('click',
  function checkWord(word1,word2) {
    //assegno l'argomento 1 al valore dell'input
    word1 = wordU.value;
    //trasformo il valore input(stringa) in un array
    var arr = word1.split('');
    //reverto l'ordine dell'array
    arr.reverse();
    //trasformo nuovamente l'array in una stringa
    word2 = arr.join('');
    console.log(word2);
    
    // condizioni in cui una parola è palindroma
    if (word2 === word1 && word1.length != 0 ) {
      answer = "parola palindroma";
      output.style.display = "block";
    }else if(word1.length == 0){
      alert("inserisci una parola");
      output.style.display = "none";
    }else {
      answer = "parola non palindroma";
      output.style.display = "block";
    }

    //output
    output.innerHTML = answer;
  }
);
