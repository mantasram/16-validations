/*VALIDACIJOS

ar validus:
- email
- firstname
- lastname
- message
- phone number
- month name
- weekday name
- person ID (asmens kodas)  lyymmdd123x

naudojame: OOP
kiek imanoma optimizuoti - pasistengti nerasyti tu paciu validaciju skirtingose vietose */

const Validation = require('./js/Validation.js');

const v = new Validation();

console.log(v.isValidFirstName('Vardenis'), true);
console.log(v.isValidLastName('Pavardenis'), true);
console.log(v.isValidEmail('demo@exmaple.com'), true);
console.log(v.isValidMessage('message'), true);
console.log(v.isValidPhoneNumber(+37061234567), true);
console.log(v.isValidMonthName('Sausis'), true);
console.log(v.isValidMonthName('January'), true);
console.log(v.isValidWeekdayName('Pirmadienis'), true);
console.log(v.isValidWeekdayName('Monday'), true);
console.log(v.isValidPersonID(39912311234), true);
