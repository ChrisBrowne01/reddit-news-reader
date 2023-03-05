/**
 * Shortens numbers to thousand, millions billons, trillions.
 * 
 * @param {number} number 
 * @param {number} decimalPlaces 
 *  
 */

export const shortenNumber = (number, decimalPlaces = 1) => {
  const abbreviations = {
    K: 1000,
    M: 1000000,
    B: 1000000000,
    T: 1000000000000,
  };

  const keys = Object.keys(abbreviations).reverse();

  for (let i = 0; i < keys.length; i++) {
    const abbreviation = keys[i];
    const value = abbreviations[abbreviation];
    if (number >= value) {
      return (number / value).toFixed(decimalPlaces) + abbreviation;
    }
  }

  return number.toString();
}

export default shortenNumber;
