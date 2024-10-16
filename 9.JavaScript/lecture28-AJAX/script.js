// AJAX

function loadData(){
    let xhttps = new XMLHttpRequest();

    xhttps.onreadystatechange = () => {
        xhttps.onload = function(){
            document.getElementById('demo').innerHTML = this.status;
            if(this.readyState === 4 & this.status == 200){
                document.getElementById(demo1).innerHTML = this.responseText;
            }
            if(this.status === 404){
                document.getElementById('demo1').innerHTML = 'Page Not Found'
            }
        };
    };
    xhttps.open("GET", "./data/demo.txt", true);
    xhttps.send();
}

function loadData(){
    let response = fetch(' https://fakestoreapi.com/products')
    .then(
      responseData => responseData.json()
    )
    .then((value) =>
      console.log(value)
    )
  
  }