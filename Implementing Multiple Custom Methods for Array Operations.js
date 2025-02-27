let arr=[1,2,3,4,5]
let  filterEvenNumbers=arr.filter((num )=>{
    
    return num % 2 === 0
})
console.log(filterEvenNumbers)
 let sum=filterEvenNumbers.reduce((acc,curr)=>{
    return acc+curr
 },0)
 console.log(sum)
   
 let newarr=arr.concat(filterEvenNumbers)
  console.log(newarr)