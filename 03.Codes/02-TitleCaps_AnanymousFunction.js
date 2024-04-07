var stringArray = ["hello world"];

var titleCaseArray = (function(array) 
{
    var titleCaseArray = [];
    for (var i = 0; i < array.length; i++)
     {
        var titleCaseStr = array[i].split(' ').map(function(word)
         {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
        titleCaseArray.push(titleCaseStr);
    }
    return titleCaseArray;
})(stringArray);

console.log(titleCaseArray);
