const array = ["level", "hello", "radar", "world", "noon", "test", "madam"];
const palindromes = [];

array.forEach(str => {
    const lowercaseStr = str.toLowerCase();
    const reversedStr = lowercaseStr.split('').reverse().join('');
    if (lowercaseStr === reversedStr) 
    {
        palindromes.push(str);
    }
});

console.log( palindromes);
