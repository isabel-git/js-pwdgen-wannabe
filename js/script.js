// dichiarazione variabili globali
var password;


// chiedere all'utente nome, cognome e colore preferito
var name = prompt("Inserisci il tuo nome")

var lastName = prompt("Inserisci il tuo cognome")

var color = prompt("Inserisci il tuo colore preferito")

var number = "19";
console.log("dati input ",name, lastName, color, number)

var password = name + lastName + color + number;
console.log("dati output  ", password)

// dire all'utente la password generata
document.getElementById('titolo').innerHTML = "Ciao " + name + " grazie per l'accesso, la tua password generata è: " + password;
