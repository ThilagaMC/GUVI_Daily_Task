class PersonDetails
{
   constructor(Id)
   {
      this.Id=Id;
   }

   getDetails()
   {
     let Details=
     {
       "01":"Name :Thilaga, Age: 21, Gender: Female, profession: Security Analysist, Address: East Tambaram, Email: thilagavathi MC@gmailcom",
       "02":"Name :Pushparaj, Age: 26, Gender: Male, profession: Software Developer, Address: East Tambaram ,Email: Pushparaj@gmailcom",
       "03": "Name :Parvathi, Age: 46, Gender: Female, profession: House Wife, Address: East Tambaram, Email: Parvathi@gmailcom",
       "04":"Name :Chokkalingam,Age: 55, Gender: Male, profession: Business, Address: East Tambaram, Email: Chokkalingam@gmailcom"
       
     }
     return Details[this.Id];
     
   }


   PrintDetails()
   {
      console.log(this.getDetails());
   }

}

let Id=[];
Id.push(new PersonDetails("01"));
Id.push(new PersonDetails("02"));
Id.push(new PersonDetails("03"));

for(let i=0;i<Id.length;i++)
{
  Id[i].PrintDetails();
}




