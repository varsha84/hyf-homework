
//Flight booking fullname function and Formal fullname

function getFullname(firstname, surname, useFormalName, sex)
{
    
    if(useFormalName)
    {   
        if(sex === "M")
        {
            return ("Mr. " + "  " + firstname + " " + surname);
        }
        else
        {
            return ("Mrs. " + "  " + firstname + " " + surname);
        }      
    }
    else 
    {
        return (firstname + "  " + surname);
    }
}

const fullname1 = getFullname("Varsha", "Verma");
const fullname2 = getFullname ("Benjamin", "Huges");
const fullname3 = getFullname("Neena", "yadav");
const fullname4 = getFullname ("smita", "singh", true, "F");
const fullname5 = getFullname("megha", "gupta", true, "F");
const fullname6 = getFullname("Benjamin", "Huges", false, "M");
console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);
console.log(fullname5);
console.log(fullname6);
