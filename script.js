//  Quantidade de produtos das 2 caixas acima  //

const INCREASE1 = document.getElementById("increase1")
const SUMEL1 = document.getElementById("sum-el1");
const DECREASE1 = document.getElementById("decrease1")

let totalEl = document.getElementById("total-el")

let count1 = 0;

let valor1 = 54.99 * count1

totalEl.innerText += 19


INCREASE1.addEventListener("click", function increase1(){

    count1 += 1;
    SUMEL1.innerHTML = count1;

    let valor1 = 54.99 * count1

    let valor2 = 74.99 * count2

    let total = valor1 + valor2

    let totalGeral = total + 19
    
    totalEl.innerHTML ="$" + totalGeral.toFixed(2)

})

DECREASE1.addEventListener("click",function decrease1(){

    count1 -= 1;
    SUMEL1.innerHTML = count1;

    let valor1 = 54.99 * count1

    let valor2 = 74.99 * count2

    let total = valor1 + valor2

    let totalGeral = total + 19
    
    totalEl.innerHTML ="$" + totalGeral.toFixed(2)

})




const INCREASE2 = document.getElementById("increase2")
const SUMEL2 = document.getElementById("sum-el2");
const DECREASE2 = document.getElementById("decrease2")

let count2 = 0;

let valor2 = 74.99 * count2



INCREASE2.addEventListener("click",function increase2(){

    count2 += 1;
    SUMEL2.innerHTML = count2;

    let valor1 = 54.99 * count1

    let valor2 = 74.99 * count2

    let total = valor1 + valor2

    let totalGeral = total + 19
    
    totalEl.innerHTML ="$" + totalGeral.toFixed(2)

    document.getElementById("increase").disabled = false

})

DECREASE2.addEventListener("click",function decrease2(){

    
    count2 -= 1;
    SUMEL2.innerHTML = count2;
    
    let valor1 = 54.99 * count1
    
    let valor2 = 74.99 * count2
    
    let total = valor1 + valor2
    
    let totalGeral = total + 19
    
    totalEl.innerHTML ="$" + totalGeral.toFixed(2)
    
})


//  Quantidade de produtos das 2 caixas acima  //
//                  FIM                       //


// Valor total dos produto


    
