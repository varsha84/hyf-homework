import React from 'react'
import { context } from './themeContext'
function SearchResult(){

    const contextValue = React.useContext(context);
    return(
        <div>
            {contextValue.isLoading ? <h3> Loding....</h3> : 
            <ul>
                {contextValue.gitUsers.map((item) => (
                    <li key={item.id}>
                     {item.login}
                    </li>

                ))}
            </ul>}
            
        </div>
    )
}
export default SearchResult