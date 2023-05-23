const minusButtons = document.querySelectorAll('.js-minus');
const plusButtons = document.querySelectorAll('.js-plus');
const totals = document.querySelectorAll('.js-total');

const thisMoveMinus = document.querySelectorAll('.js-minus-this-move');
const thisMovePlus = document.querySelectorAll('.js-plus-this-move');
const thisMoveTotal = document.querySelectorAll('.js-total-this-move');

const refreshButton = document.querySelector('.js-refresh')
const resetButton = document.querySelector('.js-reset')

const refreshButton2 = document.querySelector('.js-refresh2')
const resetButton2 = document.querySelector('.js-reset2')

minusButtons.forEach((elements, index) => {
    elements.onclick = () => {
        totals[index].innerHTML = Number(totals[index].innerHTML) - 1
    }
})

plusButtons.forEach((elements, index) => {
    elements.onclick = () => {
        totals[index].innerHTML = Number(totals[index].innerHTML) + 1
    }
})

thisMoveMinus.forEach((elements, index) => {
    elements.onclick = () => {
        thisMoveTotal[index].innerHTML = Number(thisMoveTotal[index].innerHTML) -1
    }
})

thisMovePlus.forEach((elements, index) => {
    elements.onclick = () => {
        thisMoveTotal[index].innerHTML = Number
        (thisMoveTotal[index].innerHTML) +1
    }
})

refreshButton.addEventListener('click', () => {
    total.innerHTML = Number(total.innerHTML) + Number(thisMoveTotal.innerHTML)

    thisMoveTotal.innerHTML = "0"
})

resetButton.addEventListener('click', () => {
    total.innerHTML = "0"
    thisMoveTotal.innerHTML = "0"
})

refreshButton2.addEventListener('click', () => {
    total2.innerHTML = Number(total2.innerHTML) + Number(thisMoveTotal2.innerHTML)

    thisMoveTotal2.innerHTML = "0"
})

resetButton2.addEventListener('click', () => {
    total2.innerHTML = "0"
    thisMoveTotal2.innerHTML = "0"
})