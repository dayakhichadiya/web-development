function sessionaData(){
    let user = {
        username : 'daya',
        password : '123',
        age : 20
    }

sessionStorage.setItem("user", "daya");
sessionStorage.getItem("name");

let personName = sessionStorage.getItem("name")
document.getElementById("box").innerHTML = user
}

