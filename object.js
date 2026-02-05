const myObj = { name: 'harun', age: 25, gender: 'male' };
const myObj2 = { ...myObj };

// keys
console.log(Object.keys(myObj)); // ['name', 'age', 'gender']

// values
console.log(Object.values(myObj)) // ['harun', 25, 'male']

// entries
console.log(Object.entries(myObj)) // [ [ 'name', 'harun' ], [ 'age', 25 ], [ 'gender', 'male' ] ]

// delete
delete myObj.gender; // Will Delete "gender" property from the object
console.log(myObj); // { name: 'harun', age: 25 }

// seal
Object.seal(myObj); // Will lock the object except value modification
myObj.power = 'sleep'; // ❌ power property won't be added to the object
delete myObj.age; // ❌ won't delete age property
myObj.name = 'Rakib'; // ✅ will change value of name
console.log(myObj); // { name: 'Rakib', age: 25 }

// freeze
Object.freeze(myObj2); // Will lock the object etirely
myObj.power = 'sleep'; // ❌ power property won't be added to the object
delete myObj.age; // ❌ won't delete age property
myObj.name = 'Rakib'; // ❌ will change value of name
console.log(myObj); // { name: 'Rakib', age: 25 }