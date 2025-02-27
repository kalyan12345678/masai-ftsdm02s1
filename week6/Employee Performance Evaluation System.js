arr= [{ name: "Alice", 
    tasksCompleted: 8, 
    rating: 4.7 },
{ name: "Bob", 
    tasksCompleted: 4,
     rating: 4.0 },
{ name: "Charlie", 
    tasksCompleted: 6, 
    rating: 3.5 },
{ name: "David", 
    tasksCompleted: 10, 
    rating: 4.9 },
{ name: "Eve", 
    tasksCompleted: 7, 
    rating: 2.8 }]


    let narr=arr.filter((ele,i,arr)=>{
         return ele.tasksCompleted>=5
        }).map((ele,i,arr)=>{
             if(ele.rating>4.5){
                ele.performance="Excellent"
             }
             else if(ele.rating>3){
                ele.performance="Good"
             }
             else
                ele.performance="need to improve"
                
                return ele
         })
         let obj={
             needtoimprove:0,
             Good: 1,
             Excellent:2,
         }
         console.log("need to improve")
         let newarr= narr.sort(ele.performance)
         console.log(newarr)
         
         
         
     console.log(narr)