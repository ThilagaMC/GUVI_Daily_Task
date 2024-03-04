var array = ["level", "hello", "radar", "world", "noon", "test", "madam"];

var palindromes = [];

array.forEach(function(str)
 {
    var lowercaseStr = str.toLowerCase();

    var reversedStr = lowercaseStr.split('').reverse().join('');
    if (lowercaseStr === reversedStr) 
    {
        palindromes.push(str);
    }
});

console.log(palindromes);
