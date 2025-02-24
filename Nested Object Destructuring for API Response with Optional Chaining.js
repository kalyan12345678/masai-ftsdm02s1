let  user = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } };


let {
  id,
  profile: {
    name,
    address: { city, zipcode } = {}
  } = {}
} = user;


let cityInfo = city ?? "Information not available";
let zipcodeInfo = zipcode ?? "Information not available";

// Constructing the output string
let res = `User ${name} (ID: ${id}) lives in ${cityInfo} (ZIP: ${zipcodeInfo})`;

console.log(res);
