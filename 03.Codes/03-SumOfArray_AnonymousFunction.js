(function()
{
   let Arr=[1,2,3];

   let SumOfArr=function(values)
   {
      let sum=0;
      for(let i=0; i<values.length; i++)
      {
        sum+=values[i];
      }
      console.log(sum);
   };
   SumOfArr(Arr);
})();