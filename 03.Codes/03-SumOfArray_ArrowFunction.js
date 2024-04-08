const numbers = [1, 2, 3];

const sum = (() => {
    let total = 0;
    numbers.forEach(number => {
        total += number;
    });
    return total;
})();

console.log(sum);
