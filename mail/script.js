// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

const emails =[
    "pippo@gmail.com",
    "pluto@gmail.com",
    "mario@gmail.com",
    "massimo@gmail.com",
]

let loginEmail = prompt('Inserisci email:');


//verify if email is correct

//an email needs a @ at least
if (loginEmail.includes('@') && emails.includes(loginEmail) ){
    console.log('Accesso effettuato');
} else {
    console.log('Email non valida. Controllare input o Registrarsi');
}