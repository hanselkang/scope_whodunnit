// ep1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function() { 
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);


// ep1
// The murdere is Miss Scarlet






//ep2

// const murderer = {name:'Professor Plum'};

// const changeMurderer = function() {
//   murderer.name = 'Mrs. Peacock';
// } // Can't change const, better first const be let or having name

// const declareMurderer = function() {
//   return `The murderer is ${murderer.name}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//ep2
//The murderer is Mrs. Peacock











//ep3

// let murderer = 'Professor Plum';

// const declareMurderer = function () {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//ep3
// First Verdict: Mrs. Peacock
// Second Verdict: Professor Plum











//ep4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function () {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//ep4
// The suspects are Miss Scarlet, Professor Plum, Mrs. Peacock
// Suspect three is Mrs.Peacock







//ep5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function (newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function () {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

//ep5
//The weapon is the Revolver






//ep6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function () {
//     murderer = 'Mr. Green';

//     const plotTwist = function () {
//         murderer = 'Mrs. White';
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//ep6
//The murderer is Mrs.White







//ep7*

// let murderer = 'Professor Plum';

// const changeMurderer = function () {
//     murderer = 'Mr. Green';

//     const plotTwist = function () {
//         let murderer = 'Colonel Mustard';

//         const unexpectedOutcome = function () {
//             murderer = 'Miss Scarlet';
//         }

//         unexpectedOutcome();
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//ep7
// The murderer is Mr.Green








//ep8
// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function () {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function (room) {
//         if (scenario.room === room) {
//             scenario.murderer = 'Colonel Mustard';
//         }

//         const unexpectedOutcome = function (murderer) {
//             if (scenario.murderer === murderer) {
//                 scenario.weapon = 'Candle Stick';
//             }
//         }

//         unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function () {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

//ep8
//The weapon is Candle Stick






//ep9*

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//     let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//ep9
// The murderer is Professor Plum