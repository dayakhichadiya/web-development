// let count = res.length;

// for(count = 0; count < res.length; count++){
//     <div></div>
// }
const Profile1 = {
    Name: 'juhi',
    City: 'surat',
    Age: '24'
}

// converting data into JSON stringify format
let data = JSON.stringify(Profile1)
console.log(data);

// Converting data into object format
let object = JSON.parse(data)
console.log(object)


const Product1 = async () => {
    let response = await fetch('http://localhost:3000/product')
    let result = await response.json()
    console.log(result);

    result.map((item) => {
        let count = "";

        result.forEach((item) => {
            count += `
            <div> ${item.id} </div>
            <div> ${item.productName} </div>
            <div> ${item.productColor} </div>`   
        })
        return document.getElementById('demo').innerHTML = count;
    }
    )}
Product1();

{
    const Profile = async () => {
        let response = await fetch('http://localhost:3000/profile')
        let result = await response.json()
        console.log(result);

        // result.map((data) => {
            let content ="";

            result.forEach((data) => {
                content += `
                <div> ${data.id} </div>
                <div> ${data.Name} </div>
                <div> ${data.Age} </div>
                `
            })

            return document.getElementById('demo1').innerHTML = content;
        // })
    }
    Profile();
}

{
    const fav = async () =>{
        let response = await fetch('http://localhost:3000/profile')
        let result = await response.json()
        console.log(result)

        let subject = "";

        result.forEach((item) => {
            subject += `
            <div> ${item.id} </div>
            <div> ${item.id} </div>
            <div> ${item.id} </div>`

        })

        return document.getElementById('demo1').innerHTML = subject;
    }

    fav()
}