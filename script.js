let numeroScelto = Math.floor(Math.random() * 100) + 1;
let numeroTentativi = 0;

let button = document.getElementById("guessButton");
let input = document.getElementById("guessNumber");

button.addEventListener("click", function() {
    let inputValue = input.value;
    if (inputValue < 1 || inputValue > 100) {
        alert("Inserisci un numero tra 1 e 100.");
        return;
    }
    numeroTentativi++;

    if (inputValue == numeroScelto) {
        alert("Hai indovinato il numero in " + numeroTentativi + " tentativi.");
    } else if (inputValue < numeroScelto) {
        alert("Il numero è più alto.");
    } else {
        alert("Il numero è più basso.");
    }
});
