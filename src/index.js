// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    minimumNumber = {};
    function find(descr, val) {
        if (currency > 9999) {
            minimumNumber['error'] = "You are rich, my friend! We don't have so much coins for exchange";
            return minimumNumber;
        }
        else if (currency >= val || Object.values(minimumNumber) != undefined) {
            minimumNumber[descr] = Math.floor(currency / val);
            currency = currency % val;
            return find('Q', 25) || find('D', 10) || find('N', 5) || find('P', 1);
        }
        else if(currency == 0){ return minimumNumber; }
    };
    return find('H', 50);
}
