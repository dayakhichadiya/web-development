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
console.log(document.getElementById('heading'))
console.log(document.getElementById('heading').id);

let dom2 = document.getElementById('heading').className
console.log(dom2) 

let dom3 = document.getElementById('heading').classList
console.log(dom3)

console.log(document.getElementsByClassName('para1'))
function add(){
    let dom = document.getElementsByTagName('h1')
    console.log(dom);
    dom.setAttribute('id', 'heading')
}