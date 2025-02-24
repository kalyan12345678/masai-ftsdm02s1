let people = [
    { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } },
    { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } }
  ];
  
  let res = people.map(({ name, address: { city, street: { name: streetName number: streetnumber} } }) => 
    `${name} lives in ${city} on ${streetName} and ${streetnumber}`
  );
  
  console.log(res);
  