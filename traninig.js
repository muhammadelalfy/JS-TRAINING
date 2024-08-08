let total = 0;
let allElements = document.querySelectorAll('.list ul li');
let item = allElements.forEach(function(item){
    item.addEventListener('click',function(){
        let text = item.textContent + ' ';
        let content = document.querySelector('.content').innerHTML += text;
        calculatePrice(item)
    })
})

function calculatePrice(item){
    total += parseInt(item.getAttribute('price'))
    console.log(total)
}
