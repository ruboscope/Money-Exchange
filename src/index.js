// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    minimumNumber = {};
    function find(descr, val) {
        if (currency > 9999) {
            // при превышении лимита выводим сообщение
            minimumNumber['error'] = "You are rich, my friend! We don't have so much coins for exchange";
            return minimumNumber;
        }
        else if (currency <= 0) {
            // при отрицательных значениях, при нулевых, или при разборе валюты, когда в остатке получаем 0, то выводим результат.
            for (var key in minimumNumber) {
                if (minimumNumber[key] == 0) {
                    delete minimumNumber[key];// чистим объект от наличия нулевых валют
                }
            }
            return minimumNumber;
        }
        else if (currency >= val || isEmpty(minimumNumber)) {
            minimumNumber[descr] = Math.floor(currency / val);
            currency = currency % val;
            return find('Q', 25) || find('D', 10) || find('N', 5) || find('P', 1);
        }
    };
    return find('H', 50);
}
//функция проверки объекта на пустоту
function isEmpty(myObject) {
    for (var key in myObject) {
        if (myObject.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}