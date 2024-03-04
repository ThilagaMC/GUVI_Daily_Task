const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const primeNumbers = [];

numbers.forEach(number => {
    if (number <= 1) return; 
    if (number === 2) {
        primeNumbers.push(number); 
        return;
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false; 
            break;
        }
    }

    if (isPrime) {
        primeNumbers.push(number); 
    }
});

console.log(primeNumbers);
