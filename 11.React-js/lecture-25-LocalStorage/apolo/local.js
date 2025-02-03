
function setData(){
    let Name = {
        username : 'daya',
        password : '123',
        age : 20
    }

    let string = JSON.stringify(Name);
    localStorage.setItem("username", string);
    localStorage.setItem("Password", "123");
}

function getData(){
    let data = localStorage.getItem("username")
    document.getElementById("box").innerHTML = data
}

function removeData(){
localStorage.removeItem("username");
}


