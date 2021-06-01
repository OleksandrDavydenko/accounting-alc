const totalAmount = document.querySelector('.oklad_input')
const partialAmount = document.querySelector('.pertial_amount')
const descriptionOklad = document.querySelector('.discription-oklad')
const descriptionNaruki = document.querySelector('.discription-naruki')
const pdfo = document.querySelector('.pdfo')
const militaryTax = document.querySelector('.vz')

const vsPercent = 0.015
const ndflPercent = 0.18


function addClass () {

    if (totalAmount.value.length > 0) {
        pdfo.classList.add('visible')
        militaryTax.classList.add('visible')
        descriptionOklad.classList.add('visible')
        descriptionNaruki.classList.add('visible')
    }
    if (totalAmount.value <= 0) {
        pdfo.classList.remove('visible')
        militaryTax.classList.remove('visible')
        descriptionOklad.classList.remove('visible')
        descriptionNaruki.classList.remove('visible')
    }
}

function pdfoCount () {
    pdfo.textContent = "ПДФО 18%:" + (totalAmount.value * ndflPercent).toFixed(2) + ' грн.'
}
function militaryTaxCount () {
    militaryTax.textContent = "Військовий збір 1,5%: " + (totalAmount.value * vsPercent).toFixed(2) + ' грн.'
}

function totalAmountHeandler () {
    partialAmount.value = (totalAmount.value - totalAmount.value * vsPercent - totalAmount.value * ndflPercent).toFixed(2)
}

function partialAmountHeandler () {
    totalAmount.value = (partialAmount.value / 0.805).toFixed(2)
}

totalAmount.addEventListener("keyup", () => {
    totalAmountHeandler()
    addClass()
    pdfoCount()
    militaryTaxCount()
})
partialAmount.addEventListener("keyup", () => {
    partialAmountHeandler()
    addClass()
    pdfoCount()
    militaryTaxCount()
})


