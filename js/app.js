let userName;
userName = prompt("Qual è il tuo nome?");
console.log(userName);

let userLastName;
userLastName = prompt("Qual è il tuo cognome?");
console.log(userLastName);

let userFavoriteColor;
userFavoriteColor = prompt("Qual è il tuo colore preferito?");
console.log(userFavoriteColor);

let number = '23';

let firstPartOfPassword = userName;
let secondPartOfPassword = userLastName;
let thirdPartOfPassword = userFavoriteColor;

let password = firstPartOfPassword + secondPartOfPassword + thirdPartOfPassword + number;
console.log(password);

const passwordDomElement = document.getElementById('password');
console.log(passwordDomElement);

passwordDomElement.innerHTML = password;