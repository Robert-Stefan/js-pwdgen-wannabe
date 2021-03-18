/**
 * 
 * PASSWORD
 * GENERATOR
 * 
 */

var username = prompt('Inserisci il tuo Nome: ');
var lastname = prompt('Inserisci il tuo Cognome: ');
var color = prompt('Inserisci il tuo colore preferito: ');

console.log(username);
console.log(typeof(username));

console.log(lastname);
console.log(typeof(lastname));

console.log(color);
console.log(typeof(color));

var pwdgenerator = username + lastname + color + '21';

document.getElementById('main-text').innerHTML = 'Password generata: ' + pwdgenerator;