(function() {
    let numbers = [2, 3, 2, 3, 4, 6, 1, 1];

    let removeDuplicates = function(values) 
    {
        for (let i = 0; i < values.length; i++) 
        {
            for (let j = i + 1; j < values.length; j++)
             {
                if (values[i] === values[j]) 
                {
                    values.splice(j, 1);
                }
            }
        }
        console.log(values);
    }
    removeDuplicates(numbers);
})();
