function generateId(){
    return Math.floor(Math.random() * 10000)
}
class Job {
    constructor(title, description, startDate, endDate) {
        this.id = generateId()
        this.title = title
        this.description = description
        this.startDate = new Date(startDate)
        this.endDate = new Date(endDate)
    }
    render(parentDomNode) {
        const jobContent = document.createElement('div')

        const jobTitle = document.createElement('h3')
        jobTitle.innerHTML = this.title
        jobContent.appendChild(jobTitle)

        const jobDescription = document.createElement('p')
        jobDescription.innerHTML = this.description
        jobContent.appendChild(jobDescription)

        const dates = document.createElement('p')
        dates.innerHTML = `${this.startDate.toDateString()} - ${this.endDate.toDateString()}`
        jobContent.appendChild(dates)

        parentDomNode.appendChild(jobContent)
    }
}

class Education {
        constructor(title, school, address, startDate, endDate) {
            this.id = generateId()
            this.title = title
            this.school = school
            this.address = address
            this.startDate = new Date(startDate)
            this.endDate = new Date(endDate)
        }
    }
    

const edu1 = new Education(
    "Graduate",
    "HYF", 
    "Askvænget 19 st.tv",
    '2013-02-03',
    '2018-01-01'
)
const edu2 = new Education(
    'short course',
    'Redi',
    'hellerup 29',
    '2018-02-03',
    '2020-01-01'
)
const edu3 = new Education(
    'Masters',
    'CBS',
    'Copenhagen',
    '2020-02-03',
    '2022-01-01'
)
const job1 = new Job(
    'trainee',
    'learnig web developement',
    '2016-03-14',
    '2017-03-14')

const job2 = new Job(
    'employee',
    'teaching trainee',
    '2017-03-14',
    '2018-03-14'
    )
const job3 = new Job(
    'Software developer',
    'Building very important web apps for the world.',
    '2018-03-14',
    'Present'
)
    
class CV {
    constructor(email) {
        this.jobs = [];
        this.educations = [];
        //this.email = ?
    }
    
    addJob(job) {
        // add functionality here
        this.jobs.push(job);

    }
    
    removeJob(job) {
        // add functionality here
        const updatedJobs = this.jobs.filter(element => job.id !== element.id)
        this.jobs = updatedJobs;
    }
    viewJobs(){
        console.log(cv.jobs);
        
    }
    
    addEducation(education) {
        // add functionality here
        this.educations.push(education);
    }

    removeEducation(education) {
        // add functionality here
        const updatedEducation = this.educations.filter(element=> education.id !== element.id)
        this.educations = updatedEducation;
    }
    viewEducations(){
        console.log(cv.educations);
    }

    #renderJobs(parentDomNode) {
        const jobsTitle = document.createElement('h2')
        jobsTitle.innerHTML = 'Jobs'
        parentDomNode.appendChild(jobsTitle)

        const jobsUl = document.createElement('ul')
        parentDomNode.appendChild(jobsUl)
        this.jobs.forEach((job) => {
            const jobLi = document.createElement('li')
            jobsUl.appendChild(jobLi)
            job.render(jobLi)
        })
    }

    renderCV() {
        const cvContent = document.createElement('div')
        document.body.appendChild(cvContent)

        const cvTitle = document.createElement('h1')
        cvTitle.innerHTML = `Email: ${this.email}`
        
        cvContent.appendChild(cvTitle)

        this.#renderJobs(cvContent)

        const educationsTitle = document.createElement('h2')
        educationsTitle.innerHTML = 'Education'
        cvContent.appendChild(educationsTitle)

        const educations = document.createElement('ul')
        cvContent.appendChild(educations)
    }
}

const cv = new CV('varsha.verma85@gmail.com');
cv.addEducation(edu1)
cv.addEducation(edu2)
cv.addEducation(edu3)

cv.addJob(job1);
cv.addJob(job2);
cv.addJob(job3);
console.log(cv);
cv.viewEducations();
cv.viewJobs();
// cv.viewJobs()

// cv.removeEducation(edu2)
// cv.viewEducations()
cv.renderCV()
cv.renderJobs()

