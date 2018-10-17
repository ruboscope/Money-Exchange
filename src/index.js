module.exports = function makeExchange(currency) {
  // Your code goes here!
  // Return an object containing the minimum number of coins needed to make change

  const currencies = {
    H: 50,
    Q: 25,
    D: 10,
    N: 5,
    P: 1
  };


  if (currency > 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }
  

  let currentCurrency = currency;
  
  const result = {};

  for (let key in currencies) {
    if (currentCurrency >= currencies[key]) {
      const value = Math.floor(currentCurrency / currencies[key]);
      result[key] = value;
      currentCurrency -= value * currencies[key];
    }
  }

  return result;
}