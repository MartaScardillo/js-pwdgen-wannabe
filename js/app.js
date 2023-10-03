// # Password

// ## qual è il tuo nome?

// - creo la variabile
let userName;
// - chiedo il nome
userName = prompt("Qual è il tuo nome?");
// - controllo che il valore sia stato assegnato correttamente alla variabile
console.log(userName);

// ## qual è il tuo cognome

// - creo la variabile
let userLastName;
// - chiedo il cognome
userLastName = prompt("Qual è il tuo cognome?");
// - controllo che il valore sia stato assegnato correttamente alla variabile
console.log(userLastName);

// ## qual è il tuo colore preferito

// - creo la variabile
let userFavoriteColor;
// - chiedo il colore
userFavoriteColor = prompt("Qual è il tuo colore preferito?");
// - controllo che il valore sia stato assegnato correttamente alla variabile
console.log(userFavoriteColor);

// ## scelgo un numero

// - creo la variabile
// - assegno il valore
// let number = '21';
let randomNumber = Math.floor(Math.random() * 101);

// ## assegno i valori ottenuti alle variabili delle parti della password

// - assegno alla variabile relativa alla prima parte della password il nome
let firstPartOfPassword = userName;
// - assegno alla variabile relativa alla seconda parte della password il cognome
let secondPartOfPassword = userLastName;
// - assegno alla variabile relativa alla terza parte della password il colore preferito
let thirdPartOfPassword = userFavoriteColor;
// - assegno alla variabile relativa alla quarta parte della password il numero
let fourthPartOfPassword = randomNumber;

// ## creo password

// - assegno alla variabile password i relativi valori delle sue parti e la variabile del numero
let password =
firstPartOfPassword +
secondPartOfPassword +
thirdPartOfPassword +
fourthPartOfPassword;
// - controllo che il valore sia stato assegnato correttamente alla variabile
console.log(password);

// ## mostro la password nell'HTML

// - creo la variabile costante alla quale assegno l'elemento dell'HTML
const passwordDomElement = document.getElementById("password");
// - controllo che il valore sia stato assegnato correttamente alla variabile
console.log(passwordDomElement);
// - assegno all'innerHTML dell'elemento la password
passwordDomElement.innerHTML = password;
