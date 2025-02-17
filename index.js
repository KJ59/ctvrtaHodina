/*document.body.innerHTML += '<h1>AHOJ</h1> Ahoj, ja jsem' + ' 555   ';
document.body.innerHTML += '<p> hello </p>';
//document.body.innerHTML += Math.random();

const firstName = 'Kvetoslava';
const lastName = 'Kudrnova';
const number = 'PISNICKA';*/

//document.body.innerHTML += firstName.slice(10, 26);
//document.body.innerHTML += '<p>'+ firstName.indexOf('oves') + '</p>';
//document.body.innerHTML += number.padStart(8, '0'); 

/* const lomikar = `26`;

document.body.innerHTML +=  `Pani ${firstName} ${number} ma vek ${lomikar}`;

document.body.innerHTML += `<p>Jmeno: ${firstName}<br>
  Prijmeni: ${lastName}<br>
  Vek: ${lomikar} <br>
</p>  `; 



const title = 'Rok dabla';

document.body.innerHTML += 'Pocet znaku: ' + title.length + '<br>';
document.body.innerHTML += `Pocet znaku: ${title.length}`;
document.body.innerHTML += title.toUpperCase() + '<br>';

//document.body.innerHTML += title.slice (0, 5);
document.body.innerHTML += title.slice (-5, title.length);

const email = String(prompt ('Zadejte svuj email'));

const atIndex = email.indexOf('@', 0);
//const username = email.slice(0,atIndex);
//const domain = email.slice (atIndex +1, email.length);

const parsedEmail = {
    username: email.slice(0,atIndex),
    domain: email.slice(atIndex +1, email.length) 
};

//parsedEmail.username = username;
//parsedEmail.domain = domain;

//document.body.innerHTML += `To je username: ${username} a to je domena ${domain}`;
//document.body.innerHTML +=`obsah objektu: ${parsedEmail}`;

console.log(parsedEmail);

document.body.innerHTML +=`username is ${parsedEmail.username} a domena je ${parsedEmail.domain}`;
document.body.innerHTML += JSON.stringify(parsedEmail); 

const street = String(prompt ('Street where you live: '));
const houseNumber = String(prompt ('Number of your house: '));
const city = String(prompt ('city you live in: '));
const zip = String(prompt ('PSC of your area: '));

document.body.innerHTML += `<address>
    <p> ${street} ${houseNumber} <br> </p>
    <p> ${zip} ${city} <br></p>
</address>`; */

/*document.title = 'Objekty v JavaScriptu | Můj blogísek';

document.body.innerHTML += window.navigator.language;

const hasDrivingLicense = true;
const isJavaScriptHero = false;
const age = 11;

if (age > 18) {
  document.body.innerHTML = 'Jsi dospela, jdi na vino';
} else {
  document.body.innerHTML = 'Birrel ti snad nalejou';
}

let count  = 7;

if (count == 7) {
  document.body.innerHTML = 'Cat is dead';
}

const firstName = prompt("what is your name?");
const user_age = Number(prompt ("how old are you?"));
const password = prompt ("type down your password");
let isOldEnough = '';

if (user_age >= 65) {
  document.body.innerHTML = 'Your age is fine';
  isOldEnough = true;
} else {
  document.body.innerHTML = 'Your age is too low!';
  isOldEnough = false;
}

if (isOldEnough) {
  if (password.length > 8) {
  document.body.innerHTML = 'Your password is fine';
  } else {
  document.body.innerHTML = 'Your password is weak';
  }
} else {   document.body.innerHTML = 'Bye'; } 

const user_age = Number(prompt ("how old are you?"));
const fullPrice = 12;
let price = '';

if (user_age < 6) {
   price = 0;
} else if (user_age <= 26) {
  price = 0.65*fullPrice;
} else if (user_age <= 64) {
  price = fullPrice;
} else {
  price = 0.5*fullPrice;
}

document.body.innerHTML = `Cena vasi vstupenky je ${Math.ceil(price)} EUR`;*/


const year = Number(prompt("Zadej rok: " ));

if (year%4 == 0 && !(year%100 == 0)) { 
  document.body.innerHTML += `Year ${year} je prestupny`;
} else if (year%100 == 0 && year%400 == 0) {
  document.body.innerHTML += `Year ${year} je specialne prestupny`;
} else {document.body.innerHTML += `Year ${year} neni prestupny`; }