async function fetchData(props){
    console.log(props);
    const response = await fetch(`https://api.github.com/search/users?q=${props}`);
    return response;
}

export {fetchData}