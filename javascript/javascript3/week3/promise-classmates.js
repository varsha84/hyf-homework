//Getting into promises

function fetchClassmates(userName){
    return fetch(`https://api.github.com/search/repositories?q=user:${userName}`);
} 
function getGitRepoData(){
    return Promise.all([fetchClassmates("simonreddy2001"),
     fetchClassmates("semih1239"),
        fetchClassmates("Jul-S")
    ])
        .then(responseArray => {
            Promise.all(responseArray.map(res => res.json()))
            .then(dataArray => {dataArray.forEach(data => renderGitRepoData(data))})
            .catch((e)=>console.log(e))
        })
        .catch((e) => console.log(e))
}
getGitRepoData()  

function renderGitRepoData(data){
    console.log(data)
    const ul = document.querySelector("ul");
    //const full_name = data.items[0].full_name;
    const owner_login = data.items[0].owner.login;
    const loginLi = document.createElement("li")
    const h3 = document.createElement("h3");
    loginLi.appendChild(h3);
    h3.innerHTML = `${owner_login}'s  repositories`;
    loginLi.appendChild(h3);
    ul.appendChild(loginLi);
    const repoUl = document.createElement("ul");
    loginLi.appendChild(repoUl)
    for(i=0; i< 3; i++){  
        
        const li = document.createElement("li");
        li.innerHTML = `${data.items[i].full_name} : ${data.items[i].git_url}`;
        repoUl.appendChild(li);
    
    }
}


/* When you have the data for the different repositories,
render the fullname of the repo, url of the repo, and the owner of the repo.
See github-repos as an example of how the renderered repos should look.
You are more than welcome to style it a bit nicer!
git_url
full_name
owner
 */