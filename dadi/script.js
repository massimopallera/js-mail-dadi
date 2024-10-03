// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

const player = Math.floor(Math.random() * 6)+1
const computer = Math.floor(Math.random() * 6)+1

if (player > computer){
    str = `Vince player.\nPlayer: ${player}\nComputer: ${computer}`
}
else if (player < computer){
    str = `Vince computer.\nPlayer: ${player}\nComputer: ${computer}`
}
else if (player == computer){
    str = `Pareggio.\nPlayer: ${player}\nComputer: ${computer}`
} 
else{
    str = 'Errore'
}

console.log(str);
