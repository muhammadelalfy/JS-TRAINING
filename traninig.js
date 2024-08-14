// let total = 0;
// let allElements = document.querySelectorAll('.list ul li');
// let item = allElements.forEach(function(item){
//     item.addEventListener('click',function(){
//         let text = item.textContent + ' ';
//         let content = document.querySelector('.content').innerHTML += text;
//         calculatePrice(item)
//     })
// })
//
// function calculatePrice(item){
//     total += parseInt(item.getAttribute('price'))
//     console.log(total)
// }
// let obj = {name : 12}
// let obj2 = [{"name" : 12}]
//
// console.log(obj2[0])
// console.log(obj.name)
// console.log(obj2[0].name)
//


//dom document object model
// console.log(document.body)
// let tag = document.getElementById("tag")
// console.log(tag.innerText)
// console.log(tag.textContent)
// tag.innerText = "hello"
// console.log(tag.innerText)

var btn = document.getElementById('btn')
var container = document.getElementById('container')
var input = document.querySelector('.input')
btn.addEventListener('click',addToCart)

let data = [
    {
    id:1,
    name:'ali',

},{  
    id:2,
    name:'samy',
}
]

var arrLength = data.length
data.forEach(element => {
container.innerHTML += `<div onclick='delet(${element.id})'>${element.name}</div>`
});

function drawUi(){
    container.innerHTML = ""
    data.forEach(element => {
        container.innerHTML += `<div onclick='delet(${element.id})'>${element.name}</div>`
        });
}
drawUi()

function addToCart(){
drawUi()
var val = input.value;
data.push({id: ++arrLength , name:val})
container.innerHTML += `<div onclick='delet(${arrLength})'>${val}</div>`
}

function delet(index){
    let the_index = data.map(function(element){
    return element.id
}).indexOf(index)
console.log(the_index)
if(the_index !== -1)
    data.splice(the_index,1)
drawUi()
}

