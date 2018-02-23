// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    minimumNumber = {};
    if (currency > 9999) {
        minimumNumber[error] = "You are rich, my friend! We don't have so much coins for exchange";
    }
    else {
        find(currency);
    }
    return minimumNumber;
}
function find(descr, val) {
    if (currency >= val) {
        minimumNumber[descr] = currency / val;
        currency = currency % val;
        return find('H', 50) || find('Q', 25) || find('D', 10) || find('N', 5) || find('P', 1);
    }
};