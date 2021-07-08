//Getting into promises


function promiseToClassmates(userName){
    return new Promise((resolve, reject) => {
        fetch(`https://api.github.com/search/repositories?q=user:${userName}`)
        .then(res=>res.json()) 
        .then(data=>{
            console.log(data);
            renderGitRepoData(data, userName);
            console.log("all promised has resolved")
        resolve(data)})
        .catch((e)=> reject(e))
    })
}
function renderGitRepoData(data, userName){
    const ulName = document.querySelector("ul");
    const li = document.createElement("li")
    ulName.appendChild(li);
    li.innerHTML = `${userName} repositories`;
    const ulRepo = document.createElement("ul")
    li.appendChild(ulRepo);
    for(let i = 0; i < 3; i++){
        const li = document.createElement("li");
        li.setAttribute("class", "url");
        li.innerHTML = `${data.items[i].name}: <a href="#"> ${data.items[i].git_url} </a>`
        ulRepo.appendChild(li);
    }
}

function getGitRepoData() { 
    return Promise.all([promiseToClassmates("simonreddy2001"),
        promiseToClassmates("semih1239"),
        promiseToClassmates("Jul-S")
    ]);

}
getGitRepoData();

/* When you have the data for the different repositories,
render the fullname of the repo, url of the repo, and the owner of the repo.
See github-repos as an example of how the renderered repos should look.
You are more than welcome to style it a bit nicer!
git_url
full_name
owner
 */