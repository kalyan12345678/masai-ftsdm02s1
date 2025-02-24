let  profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } }

let updates = { age: 30, address: { zipcode: "94109", country: "USA" } }

let  mergedProfile = {
  ...profile,
  age: updates.age, 
  address: {
    ...profile.address,
    ...updates.address, 
  },
};

console.log(mergedProfile)

  
