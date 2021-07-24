//Visual promise one by one
// using async/await
 async function translateOneByOne(){
    const liMarks = document.querySelectorAll(".marks >li");
    
    await moveElement(liMarks[0],{ x: 20, y: 300 } );
    await moveElement(liMarks[1],{ x: 400, y: 300 } );
    await moveElement(liMarks[2],{ x: 400, y: 20 } );
} 
translateOneByOne() 

//uisng Promise 
 function translateOneByOne(){
    const liMarks = document.querySelectorAll(".marks >li");
    moveElement(liMarks[0],{ x: 20, y: 300 } )
    .then(()=>{console.log("red target has moved")})
    .then(() => moveElement(liMarks[1],{ x: 400, y: 300 }))
    .then(()=> {console.log("blue target has moved")})
    .then(() => moveElement(liMarks[2],{ x: 400, y: 20 }))
    .then(() => {console.log("Green target has moved")})
    .catch(()=>{console.log("something went wrong")})
    .finally(()=>{console.log("we are done!!")})
}
translateOneByOne()

 //Visual promise all at once

 function translateAllAtOnce(){
    const liMarks = document.querySelectorAll(".marks >li");
    return Promise.all([moveElement(liMarks[0],{ x: 20, y: 300 })],[moveElement(liMarks[1],{ x: 400, y: 300 })],[moveElement(liMarks[2],{ x: 400, y: 20 })])
 
}
translateAllAtOnce().then(()=>{
    console.log("all are moved at once");
})  
 
 



