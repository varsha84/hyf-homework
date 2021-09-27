
function SearchResult(props){

    return(
        <div>
            <ul>
                {props.gitUsers.map((item) => (
                    <li key={item.id}>
                     {item.login}
                    </li>

                ))}
            </ul>
            
        </div>
    )
}
export default SearchResult