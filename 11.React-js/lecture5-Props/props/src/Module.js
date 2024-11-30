/* 

Accesing a simple variable by using {} braces
Accesing an Object by using {} braces
Accesing an array by using {} braces
*/



const Module = () => {

    const name = "IT Institute for training is SkillQode";

    const obj = {
        name : "sita verma",
        age: 20,
        city: "surat"
    }

    const array = ['Meera shah', '22', 'Mumbai']

    return (
        <>
        <h1>{name}</h1>

        <ul>
            <li>{obj.name}</li>
            <li>{obj.age}</li>
            <li>{obj.city}</li>
        </ul>

        <ul>
            <li>{array[0]}</li>
            <li>{array[1]}</li>
            <li>{array[2]}</li>
        </ul>

        <ul>
            {
                array.map((data) => <li>{data}</li>)
            }
        </ul>
        </>
    )
}

export default Module