// javascript DOM innerHTML , innerText , textContent */

// New content / Element through javascript

// {
//     let newElement = document.createElement('h1');
//     newElement.innerHTML = 'this is h1 tag in html';
//     newElement.setAttribute('id', 'heading');
//     newElement.setAttribute('class', 'headingclass')

//     document.body.appendChild(newElement)
//     console.log(newElement)
// }

// {
// let dom1 = document.getElementById('headingId').innerHTML;

// let dom2 = document.getElementById('headingId').innerText;

// let dom3 = document.getElementById('headingId').textContent

// console.log(dom1)
// console.log(dom2)
// console.log(dom3)
//}

// {
    // function elementStyle1() {
    //     let dom1 = document.getElementById('heading1')
    //     dom1.classList.add('head')
    // }

//     function elementStyle2() {
//         let dom2 = document.getElementById('heading1')
//         dom2.classList.remove('head')
//     }

//     function elementStyle3() {
//         let dom3 = document.getElementById('heading1')
//         dom3.classList.toggle('head')
//     }
// }

{
    let dom = document.getElementById('heading1').addEventListener('dblclick',  () => {
        let dom = document.getElementById('heading1')
        dom.classList.add('head')   
    })
}
