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
    
    let performancePriority = {
                                    "Excellent": 3,
                                    "Good": 2,
                                    "Needs Improvement": 1
    }

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
         }).sort((a, b) => performancePriority[b.performanceLevel] - performancePriority[a.performanceLevel]).forEach((employee) => {
          console.log(`Name: ${employee.name}, Performance: ${employee.performance}`);
         })
        
         
         
         
         