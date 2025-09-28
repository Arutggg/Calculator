const resultElement = document.getElementById('result')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const submitBtn = document.getElementById('submit')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
let action = "+"

// Показываем текущее действие
updateActionDisplay()

function printResult(result) {
    if (result >= 0) {
        resultElement.style.color = "green"
    } else {
        resultElement.style.color = "red"
    } 
    resultElement.textContent = result  
}

plusBtn.onclick = function() {
    action = "+"
    updateActionDisplay()
}

minusBtn.onclick = function() {
    action = "-"
    updateActionDisplay()
}

submitBtn.onclick = function() {
    if (input1.value === '' || input2.value === '') {
        resultElement.textContent = 'Введите числа!'
        resultElement.style.color = 'orange'
        return
    }
    
    const result = computeWithAction(input1.value, input2.value, action)
    printResult(result)
}

function computeWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1)
    const num2 = Number(inp2)
    
    // Проверка на NaN
    if (isNaN(num1) || isNaN(num2)) {
        return 'Ошибка: введите числа'
    }
    
    if (actionSymbol === "+") {
        return num1 + num2
    } else {
        return num1 - num2
    }
}

function updateActionDisplay() {
    console.log(`Текущее действие: ${action}`)
}