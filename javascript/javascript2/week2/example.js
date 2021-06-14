const mentors = [
    { "name": "Abed Sujan", "subjects": ['JS', 'HTML', 'CSS', 'NODEJS'], yearOfExperience: 4},
    { "name": "Ahmed Magdy", "subjects": ['JS', 'Database', 'CSS'], yearOfExperience: 1},
    { "name": "Alicia Gonzales", "subjects": ['DB', 'HTML', 'NODEJS'], yearOfExperience: 8},
    { "name": "allan Thraen", "subjects": ['REACT', 'HTML', 'CSS'], yearOfExperience: 3},
    { "name": "Anders Ravn", "subjects": ['JS', 'HTML', 'NODEJS'], yearOfExperience: 2},
    { "name": "Daniel Fernandes", "subjects": ['Database', 'HTML', 'CSS'], yearOfExperience: 9}
];

function filterMentorList(courseID) {
    const resultHtml = document.getElementById('result');

    let listHtml = '';
    listHtml = listHtml + '<div> Fowad</div>';
    listHtml = listHtml + '<div> Susane</div>';
    listHtml = listHtml + '<div> Sara</div>';
    resultHtml.innerHTML = listHtml;
    
    console.log('courseID', courseID);
}

let modifiedMentors = mentors.map(function(mentor) {

    mentor.name = (mentor["name"].length >10)? "Mr "+ mentor.name: "Ms " + mentor.name;

    mentor.age = mentor["name"].length;
    // if(mentor["name"].length >10)
    // mentor.name = "Mr " + mentor.name;
    // else 
    // mentor.name = "Ms " + mentor.name;
    
    return mentor;

});

function filterMentorList(courseID) {
    const resultHtml = document.getElementById('result');
    let listHtml = '';

    let filteresListByCourseId = mentors.filter(function (mentor) {
        const sub = mentor.subject;
        return sub.indexOf(courseID) >= 0;
    });

    filteresListByCourseId.forEach(function (mentor) {
        listHtml += `<div>  ${mentor.name}  - ${mentor.age}  </div>`;
    });

    resultHtml.innerHTML = listHtml;
}



 function filterMentorListUsingFor(courseID){
    const resultHtml = document.getElementById('result');
    let listHtml = '';
    for(let i=0; i<mentors.length; i++){
    
        listHtml += `<div> ${mentors[i].name}</div>`;
    } 
    resultHtml.innerHTML = listHtml;
    console.log('courseID', courseID);
}

filterMentorList(1);