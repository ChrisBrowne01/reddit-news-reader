/**
 * Generates random number between min and max.
 * 
 * @param {number} min 
 * @param {number} max 
 * 
 */

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
}

export default getRandomNumber;