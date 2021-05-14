//Student manager
const class07Students = [];
function addStudentToClass(studentName)
{
    if((studentName === "")||(studentName === null))
    {
        console.log("please provide student name");
    }
    else if(studentName === "Queen Margrethe")
    {
        class07Students.push(studentName);
        console.log(studentName + " has been added to class" )
    }
    else if(class07Students.length > 6)
    {
        console.log( studentName + " Cannot add more students to class 07");  
            
    }
    else if(class07Students.includes(studentName))
    {
        console.log(`Student ${studentName} is already in the class`);        
    }
    else
    {
        class07Students.push(studentName);
        console.log(studentName + " has been added to class" )
    }
       
}

addStudentToClass("varsha");  //1
addStudentToClass("Julia");   //2
addStudentToClass("Upasna");  //3
addStudentToClass("Saru");    //4
addStudentToClass("Upasna");  //already exist
addStudentToClass("");        // must provide student name
addStudentToClass("Simon");   //5
addStudentToClass("Fozia");   //6
addStudentToClass("Tom");     // should not add 
addStudentToClass("Queen Margrethe");   // should add due to Queen

function getNumberOfStudents() 
{
    return class07Students.length;
}

console.log(getNumberOfStudents());
