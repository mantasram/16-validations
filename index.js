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
 /*
console.assert(v.isValidFirstName('Vardenis') === true, 'ERROR');
console.assert(v.isValidLastName('Pavardenis') === true, 'ERROR');
console.assert(v.isValidEmail('demo@exmaple.com') === true, 'ERROR');
console.assert(v.isValidEmail('demo@exmaplecom') === false, 'ERROR');
console.assert(v.isValidEmail('21351') === false, 'ERROR');
console.assert(v.isValidEmail(23) === false, 'ERROR');
console.assert(v.isValidEmail(['45', 15]) === false, 'ERROR');
console.assert(v.isValidMessage('message') === true, 'ERROR');
console.assert(v.isValidPhoneNumber(+37061234567) === true, 'ERROR');
console.assert(v.isValidPhoneNumber('+37061234567') === false, 'ERROR');
console.assert(v.isValidPhoneNumber([1,1]) === false, 'ERROR');
console.assert(v.isValidMonthName('Sausis') === true, 'ERROR');
console.assert(v.isValidMonthName('January') === true, 'ERROR');
console.assert(v.isValidWeekdayName('Pirmadienis') === true, 'ERROR');
console.assert(v.isValidWeekdayName('Monday') === true, 'ERROR');
console.assert(v.isValidPersonID(39912311234), true);
*/

