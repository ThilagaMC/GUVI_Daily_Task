

var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var primeNumbers = [];

numbers.forEach(function(num) {
    if (num <= 1) return; // 
    if (num === 2) {
        primeNumbers.push(num); 
        return;
    }

    var isPrime = true;


    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false; 
            break;
        }
    }

    if (isPrime) {
        primeNumbers.push(num); 
    }
});

console.log(primeNumbers);

