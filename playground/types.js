
/* const sentence = 'she\'s so cool'; // escapes the symbol breaking the string
const sentence2 = `she's so "cool"`;

const song = `oh
yeah

I  love

pizza!!!`;


const hello = 'hello my name is ' + name + ". Nice to meet you";

let hello2 = 'hello my name is ';
hello2 = hello2 + name;
hello2 = hello2 + ' Nice to meet you';
*/

const name = 'April';
const middle = "Anne";
const last = `Cook`;

const hello = `hello my name is ${name}. Nice to meet you. I am ${4 * 8} years old`;

const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello}</p>
  </div>
`
document.body.innerHTML = html; 
