// Impure function to create a component

// let guest = 0;

// export function Tea(){
//     guest = guest + 1;
//     return <h2>Tea cup for guest -{guest}</h2>
// }


// fix the component by passing guest as a prop.

export function Tea({guest}){
    return (
        <li>Tea cup for guest -{guest} </li>
    )
}