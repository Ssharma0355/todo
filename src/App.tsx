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
  
  return (
   <div>

   </div>
  );
}

export default App;
