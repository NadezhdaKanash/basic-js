const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  let age;

  if(typeof sampleActivity !== 'string') return false;
  sampleActivity = Number(sampleActivity);
  if(sampleActivity < 0 || isNaN(sampleActivity)) return false;

  const rate = Math.log(2) / HALF_LIFE_PERIOD;
  age = Math.ceil(Math.log( MODERN_ACTIVITY / sampleActivity) / rate );

  if(!Number.isInteger(age) || age < 0) return false;

  return age;
};
