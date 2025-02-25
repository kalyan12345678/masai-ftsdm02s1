


let products = [
    { name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }
];
function processProducts(products) {
    
    let productNames = products.map(product => product.name)
  console.log(productNames)
    
    productNames.forEach(name => {
        
        let product = products.find(product => product.name === name)
                console.log(product)
        
        if (product.price > 50) {
            console.log(`${name} is above $50`)
        } else {
            console.log(`${name} is below $50`)
        }
    });
}
processProducts(products)