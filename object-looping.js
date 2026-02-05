const person = {
    name: "Rafid",
    age: 22,
    gender: "male",
    experience: "fresher",
    address: {
        city: "Dhaka",
        area: "Basundhara",
        house: "20/A Basundhara DOHS",
    },
};

// for...in loop
for(const key in person) {
    console.log(key, person[key]);
}

// Keys
const objKeys = Object.keys(person);
objKeys.forEach(key => console.log(key, person[key]));