//  Quantidade de produtos das 2 caixas acima  //

const INCREASE1 = document.getElementById("increase1")
const SUMEL1 = document.getElementById("sum-el1");
const DECREASE1 = document.getElementById("decrease1")
const totalEl = document.getElementById("total-el")

let count1 = 0;



totalEl.innerText += 19


const somarGeral = () => {
    let valor1 = 54.99 * count1

    let valor2 = 74.99 * count2

    let total = valor1 + valor2

    let totalGeral = total + 19

    totalEl.innerHTML = "$" + totalGeral.toFixed(2)
}


INCREASE1.addEventListener("click", () => {
    count1++;
    document.getElementById("increase1").disabled = false

    if (count1 === 10) {
        document.getElementById("increase1").disabled = true
    }

    SUMEL1.innerHTML = count1;

    somarGeral()

})

DECREASE1.addEventListener("click", () => {
    count1--;
    document.getElementById("decrease1").disabled = false

    if (count1 === -1) {
        document.getElementById("decrease1").disabled = true
    }

    SUMEL1.innerHTML = count1;

    somarGeral()

})



const INCREASE2 = document.getElementById("increase2")
const SUMEL2 = document.getElementById("sum-el2");
const DECREASE2 = document.getElementById("decrease2")

let count2 = 0;



INCREASE2.addEventListener("click", () => {
    count2++;
    document.getElementById("increase2").disabled = false

    if (count2 === 10) {
        document.getElementById("increase2").disabled = true
    }

    SUMEL2.innerHTML = count2;

    somarGeral()

})

DECREASE2.addEventListener("click", () => {
    count2--
    document.getElementById("decrease2").disabled = false

    if (count2 === 0) {
        document.getElementById("decrease2").disabled = true
    }

    SUMEL2.innerHTML = count2;

    somarGeral()

})



