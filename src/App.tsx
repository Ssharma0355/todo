import React from 'react';

function App() {
  let name : string;
  let age: number;
  let isStudent: boolean;
  let hoobies: string[];
  let role:[string,number]; // tuple in typescript

  name = "Sachin";
  age = 23;
  isStudent = true;
  hoobies = ["Cricket", "MMA", "Coding"]
  role = ["Software Developer", 3]

  //making of interface for object

  type PersonInterface = {
    //creatign interface for objects and the types and if i want to make something optional we use ? 
    name:string,
    age:number,
    phone?:number
  }
  let person: PersonInterface ={
    name: "Sachin",
    age: 23
  }

  // if i want to make the array of type/interface of PersonInterface

  let lotsOfPerson: PersonInterface[];

  //using the interface
  lotsOfPerson = [{name:"Sachin", age:21},{name:"Sharma", age:90}]
  console.log(lotsOfPerson)

  // making union for type
  let salary: string | number;

  // salary = "32";
  // salary = 32;
  // console.log(salary)
  // we can add both string and number if we dont know what to keep the type then we use union | for defining both types in typescript
  
  return (
   <div>

   </div>
  );
}

export default App;
