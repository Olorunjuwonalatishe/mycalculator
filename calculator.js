const buttons = document.querySelectorAll('.button')
const clear = document.querySelector('.clear')
const delet = document.querySelector('.delete')
const perc = document.querySelector('.perc')
const equal = document.querySelector('.equal')
const result = document.querySelector('#input')

console.log(result);
buttons.forEach((button) =>{
button.addEventListener('click',() =>{
result.textContent += button.textContent
})
})

clear.addEventListener('click',() =>{
    result.textContent = '';
})

equal.addEventListener('click', () =>{
    result.textContent =parseFloat(eval(result.textContent).toFixed(6)) 
})

delet.addEventListener('click', () =>{
    result.textContent = result.textContent.slice(0, -1)
})

perc.addEventListener('click', () =>{
    result.textContent = result.textContent / 100
})