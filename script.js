//  Quantidade de produtos das 2 caixas acima  //

var sumEl1 = document.getElementById("sum-el1");

var count1 = 0;



var totalEl = document.getElementById("total-el")

var valor1 = 54.99 * count1

var valor2 = 74.99 * count2





function increase1(){

    count1 += 1;
    sumEl1.innerHTML = count1;


    let valor1 = 54.99 * count1
    
    totalEl.innerHTML ="$" + valor1

}

function decrease1(){

    count1 -= 1;
    sumEl1.innerHTML = count1;

    let valor1 = 54.99 * count1
    
    totalEl.innerHTML ="$" + valor1

}




var sumEl2 = document.getElementById("sum-el2");

var count2 = 0;

function increase2(){

    count2 += 1;
    sumEl2.innerHTML = count2;

    let valor2 = 74.99 * count2;
    
    totalEl.innerHTML ="$" + valor2

}

function decrease2(){

    count2 -= 1;
    sumEl2.innerHTML = count2;

    let valor2 = 74.99 * count2

    totalEl.innerHTML ="$" + valor2
    
}



//  Quantidade de produtos das 2 caixas acima  //
//                  FIM                       //


// Valor total dos produto

var totalEl = document.getElementById("total-el")


    totalEl.innerText += valor1
