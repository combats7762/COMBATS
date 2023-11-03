const moment = require('diwali');
require('moment-hindu');

// Replace the 'year' with the desired year
const year = 2023; // Example year

const diwaliDate = diwali().hindu([year, 8, 15]); // 8 is the month of Kartik, 15 is the day of Diwali

console.log('Diwali date:', diwaliDate.format('MMMM D, YYYY')); 