class Uber
{
  
  constructor(Vehical)
  {
      this.Vehical=Vehical;
  }
  getPrize()
   {

     let VehicalCalculate=
     {
       "Bike":20,
       "Auto":40,
       "Car":60,
       "6Seater":70,
       "Van":200
     }
    return (VehicalCalculate[this.Vehical]);
   }
}  

let Distance=10;
let Tips=20;

let total=(+Distance)*10;
total = total + (+Tips);
  
data = new Uber("Bike");
total = total+(data.getPrize());
 
console.log(total);