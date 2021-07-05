 class user{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //Create a class method
    getFullName(firstName, lastName){
        return `${ this.firstName} ${this.lastName}`
    }    
}


const userFullName = new user("varsha","Verma");
console.log(userFullName)
console.log(userFullName.firstName)
console.log(userFullName.getFullName()); 


 //Creating a CV class

function generateId() {
    return Math.floor(Math.random() * 10000)
}

class Job{
    constructor(id, title, description, startDate, endDate){
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;

    }
    getStartDate(){   
        return this.startDate;
    }
    getEndDate(){
        return this.endDate;
    }
}
class Education{
    constructor(id, title, school, address, startDate, endDate){
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
    }
    getStartDate(){   
        return this.startDate;
    }
    getEndDate(){
        return this.endDate;
    }
}
class CV {
    constructor(email) {
      this.jobs = [];
      this.educations = [];
      this.email = email;
    }
  
    addJob(job) {
      // add functionality here
      this.jobs.push(job);
      //const job = new job(1,"trainee","learnig web developement", new Date(2015,0,1), new Date(2015,5,30));
      
    }
  
    removeJob(job) {
      // add functional(ity here
        const index = this.jobs.findIndex(item => item.id === job.id)
        this.jobs.splice(index,1);  
    }
  
    addEducation(education) {
      // add functionality here
      this.educations.push(education);
    }
  
    removeEducation(education) {
      // add functionality here
 /*      const index = this.educations.findIndex(item => item.id === education.id)
      this.educations.splice(index,1);   */
      const upadatedEducations = this.educations.filter(item => education.id !== item.id)
      this.educations = upadatedEducations;

    }
    renderJobs()
    {
        const ul = document.querySelector("#jobs > ul")
        this.jobs.forEach(element => {
        const li = document.createElement("li");
        li.innerHTML = element.title;
        ul.appendChild(li);

        const liDesc = document.createElement("li");
        liDesc.innerHTML = element.description;
        ul.appendChild(liDesc);

        const liStart = document.createElement("li");
        liStart.innerHTML = element.startDate.toLocaleDateString();
        ul.appendChild(liStart);

        const liEnd = document.createElement("li");
        liEnd.innerHTML = element.endDate.toLocaleDateString();
        ul.appendChild(liEnd);
        });
    }

    renderEducations(){
        const ul = document.querySelector("#educations > ul")
        this.jobs.forEach(element => {
        const li = document.createElement("li");
        li.innerHTML = element.title;
        ul.appendChild(li);

        const liDesc = document.createElement("li");
        liDesc.innerHTML = element.description;
        ul.appendChild(liDesc);

        const liStart = document.createElement("li");
        liStart.innerHTML = element.startDate.toLocaleDateString();
        ul.appendChild(liStart);

        const liEnd = document.createElement("li");
        liEnd.innerHTML = element.endDate.toLocaleDateString();
        ul.appendChild(liEnd);
        });

    }
}

const myCV = new CV("varsha@gmail.com");

//add 2 job
const job1 = new Job(1,"trainee","learnig web developement", new Date('2015-2-1'), new Date(2015,5,30))
myCV.addJob(job1);
const job2 = new Job(2,"employee","teaching trainee", new Date(2016,0,1), new Date(2015,5,1))
myCV.addJob(job2);

//add 2 education
const education1 = new Education(1,"Graduate","HYF", "Askvænget 19 st.tv", new Date(2021,2,1), new Date(2015,11,30))
myCV.addEducation(education1);
const education2 = new Education(2,"short course","Redi", "hellerup 29", new Date(2021,8,1), new Date(2015,11,29))
myCV.addEducation(education2);

console.log(myCV);
 //remove en job
// myCV.removeJob(job1);

//remove en education
//myCV.removeEducation(education2);
console.log(myCV); 
myCV.renderJobs();
myCV.renderEducations();
 