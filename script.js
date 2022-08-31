//  Quantidade de produtos das 2 caixas acima  //

var sumEl1 = document.getElementById("sum-el1");

var count1 = 0;



var totalEl = document.getElementById("total-el")

var valor1 = 73.99 * count1

var valor2 = 93.99 * count2





function increase1(){

    count1 += 1;
    sumEl1.innerHTML = count1;

    var valor1 = 73.99 * count1

    var valor2 = 93.99 * count2

    let total = valor1 + valor2
    
    totalEl.innerHTML ="$" + total

}

function decrease1(){

    count1 -= 1;
    sumEl1.innerHTML = count1;

    var valor1 = 73.99 * count1

    var valor2 = 93.99 * count2

    let total = valor1 + valor2
    
    totalEl.innerHTML ="$" + total

}




var sumEl2 = document.getElementById("sum-el2");

var count2 = 0;

function increase2(){

    count2 += 1;
    sumEl2.innerHTML = count2;

    var valor1 = 73.99 * count1

    var valor2 = 93.99 * count2

    let total = valor1 + valor2
    
    totalEl.innerHTML ="$" + total

}

function decrease2(){

    count2 -= 1;
    sumEl2.innerHTML = count2;

    var valor1 = 73.99 * count1

    var valor2 = 93.99 * count2

    let total = valor1 + valor2
    
    totalEl.innerHTML ="$" + total
    
}



//  Quantidade de produtos das 2 caixas acima  //
//                  FIM                       //


// Valor total dos produto


    totalEl.innerText += 0
