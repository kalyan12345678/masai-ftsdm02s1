function outerFunction() {
    let message = "I'm from outerFunction";
  
    function innerFunction() {
      console.log(message);  
    }
  
    return innerFunction;
  }
  
  const myClosure = outerFunction();  
  myClosure();



