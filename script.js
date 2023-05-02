const input1 = document.querySelector('.js-teksts1');
const input2 = document.querySelector('.js-teksts2');
const plusButton = document.querySelector('.js-plus');
const minusButton = document.querySelector('.js-minus');
const multiplyButton = document.querySelector('.js-multiply');
const divideButton = document.querySelector('.js-divide');
const result = document.querySelector('.js-result');

const Add = (skaitlis1, skaitlis2) => {
    return Number(skaitlis1) + Number(skaitlis2)
}

const Subtract = (skaitlis1, skaitlis2) => {
    return Number(skaitlis1) - Number(skaitlis2)
}

const Multiply = (skaitlis1, skaitlis2) => {
    return Number(skaitlis1) * Number(skaitlis2)
}

const Divide = (skaitlis1, skaitlis2) => {
    if(Number(skaitlis2) === 0){
        alert('Nevar dalīt ar 0')
        return 'Nav atbildes'
    }

    return Number(skaitlis1) / Number(skaitlis2)
}

const resetValues = () => {
    input1.value = ""
    input2.value = ""
}

plusButton.addEventListener('click', () => {
    result.innerHTML = Add(input1.value, input2.value)

    resetValues();
})

minusButton.addEventListener('click', () => {
    result.innerHTML = Subtract(input1.value, input2.value)

    resetValues();
})

multiplyButton.addEventListener('click', () => {
    result.innerHTML = Multiply(input1.value, input2.value)

    resetValues();
})

divideButton.addEventListener('click', () => {
    result.innerHTML = Divide(input1.value, input2.value)

    resetValues();
})