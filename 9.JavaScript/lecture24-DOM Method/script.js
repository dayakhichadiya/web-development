// JavaScript DOM Method = Document Object Model

function addId(){
    let dom = document.getElementsByTagName('h1')[0]
    console.log(dom);
    dom.setAttribute('id', 'heading1')
}

function removeId(){
    let dom1 = document.getElementsByTagName('h1')[0]
    console.log(dom1);
    dom1.setAttribute('id', '')
}

// console.log(document.getElementById('heading'));
console.log(document.getElementById('heading').id);

let dom2 = document.getElementById('para1').className
console.log(dom2)

let dom3 = document.getElementById('para1').classList[0]
console.log(dom3)