// function List ({category}) {
//     return(
//         <div>
//             <ul>
//                 <li>{category}</li>
//             </ul>
//         </div>
//     )
// }
function List ({category}) {
    return(
        <div>
            
                {category.map((element) => (
                    <ul>
                        <li>{element}</li>
                    </ul>
                ))}
                
            
        </div>
    );
}


export default List