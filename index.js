const thisTime = document.getElementById('this-time')
const result = document.getElementById('result')
const number = document.getElementsByClassName('number')
const operator = document.getElementsByClassName('operator')

const equality = document.getElementById('equality')
const clear = document.getElementById('clear')

let num = ''
let sum = 0


for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        num += number[i].innerHTML
        thisTime.innerHTML = num
    })
}

equality.addEventListener('click', function () {
    try {
        sum = eval(num)  
        result.innerHTML = sum
        console.log(sum)
        num = sum.toString() 
    } catch (e) {
        result.innerHTML = "Error"
        console.log(e)
    }
})

clear.addEventListener('click', function () {
    num = ''
    sum = 0
    thisTime.innerHTML = ''
    result.innerHTML = ''
})