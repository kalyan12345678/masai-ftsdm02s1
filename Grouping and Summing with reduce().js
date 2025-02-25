let arr=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
let narr=arr.reduce((acc,curr)=>{
    acc[curr] = (acc[curr] || 0) + 1;
    return acc
}, {})
console.log(narr)
console.log(arr)
