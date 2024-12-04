export function Recipe({drinkers}){
    return(
        <ol>
            <li>Boil {drinkers} cups of water</li> 
            <li>Add {drinkers} spoons of tea and {1.5 * drinkers} spoon of sugar</li> 
            <li>Add {1.5 * drinkers} cups of Milk and {0.5 * drinkers} spoon of cardamom</li> 
        </ol>
    )
}