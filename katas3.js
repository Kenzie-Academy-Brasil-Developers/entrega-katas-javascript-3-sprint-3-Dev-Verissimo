const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(ElementoNaTela) {
    let elemento = document.getElementById("principal")
    elemento.appendChild(ElementoNaTela)
}


function kata1() {
    let div1 = document.createElement('div')
    showResults(div1)
    let concatena = document.createElement('span')
    // implemente o código do kata 1 aqui
    for (let i = 1; i <= 25; i++) {
        concatena.innerHTML += i + " "
        console.log(i)
    }
    div1.appendChild(concatena)
}kata1()

function kata2() {
    let div1 = document.createElement('div')
    showResults(div1)
    let concatena = document.createElement('span')
    
    for (let i = 25; i >= 1; i--) {
        concatena.innerHTML += i + " "
        console.log(i)
    }
    div1.appendChild(concatena)
    // implemente o código do kata 2 aqui
}kata2()

function kata3() {
    let div3 = document.createElement('div')
    showResults(div3)
    // implemente o código do kata 3 aqui
    let concatena = document.createElement('span')

    for (let i = -1; i >= -25 ; i--) {
        concatena.innerHTML += i + " "
    }
    div3.appendChild(concatena)
}kata3()

function kata4() {
    let div3 = document.createElement('div')
    showResults(div3)
    let concatena = document.createElement('span')

    for (let i = -25; i <= -1 ; i++) {
        concatena.innerHTML += i + " "
    }
    div3.appendChild(concatena)
    // implemente o código do kata 4 aqui
}kata4()

function kata5() {
    let div3 = document.createElement('div')
    showResults(div3)
    let concatena = document.createElement('span')

    for (let i = 25; i >= -25; i--) {
        if (i%2 !== 0) {
            concatena.innerHTML += i + " "
        } 
    }
    div3.appendChild(concatena)
    // implemente o código do kata 5 aqui
}kata5()

function kata6() {
    let div3 = document.createElement('div')
    showResults(div3)
    let concatena = document.createElement('span')

    for (let i = 3; i <= 100; i++) {
        if (i%3 === 0) {
            concatena.innerHTML += i + " "
        } 
    }
    div3.appendChild(concatena)
    // implemente o código do kata 6 aqui
}kata6()

function kata7() {
    let div3 = document.createElement('div')
    showResults(div3)
    let concatena = document.createElement('span')

    for (let i = 1; i <= 100; i++) {
        if (i%7 === 0) {
            concatena.innerHTML += i + " "
        } 
    }
    div3.appendChild(concatena)
    // implemente o código do kata 7 aqui
}kata7()

function kata8() {
    let div3 = document.createElement('div')
    showResults(div3)
    let concatena = document.createElement('span')

    for (let i = 100; i >= 1; i--) {
        if ((i%7 === 0) || (i%3 === 0)) {
            concatena.innerHTML += i + " "
        } 
    }
    div3.appendChild(concatena)
    // implemente o código do kata 8 aqui
}kata8()

function kata9() {
    let div3 = document.createElement('div')
    showResults(div3)
    let concatena = document.createElement('span')

    for (let i = 1; i <= 100; i++) {
        if ((i%2 !== 0) && (i%5 === 0)) {
            concatena.innerHTML += i + " "
        } 
    }
    div3.appendChild(concatena)
    // implemente o código do kata 9 aqui
}kata9()

function kata10() {
    let div3 = document.createElement('div')
    showResults(div3)
    let concatena = document.createElement('span')

    for (let i = 0; i < sampleArray.length; i++) {
        sampleArray [i]
            concatena.innerHTML += sampleArray[i] + " "
    }
    div3.appendChild(concatena)
    // implemente o código do kata 10 aqui
}kata10()

function kata11() {
    let div3 = document.createElement('div')
    showResults(div3)
    let concatena = document.createElement('span')

    for (let i = 0; i < sampleArray.length; i++) {
        sampleArray [i]
        if (sampleArray[i] % 2 === 0) {
            concatena.innerHTML += sampleArray[i] + " "
        }
    }
    div3.appendChild(concatena)
    // implemente o código do kata 11 aqui
}kata11()

function kata12() {
    let div3 = document.createElement('div')
    showResults(div3)
    let concatena = document.createElement('span')

    for (let i = 0; i < sampleArray.length; i++) {
        sampleArray [i]
        if (sampleArray[i] % 2 !== 0) {
            concatena.innerHTML += sampleArray[i] + " "
        }
    }
    div3.appendChild(concatena)
    // implemente o código do kata 12 aqui
}kata12()

function kata13() {
    let div3 = document.createElement('div')
    showResults(div3)
    let concatena = document.createElement('span')

    for (let i = 0; i < sampleArray.length; i++) {
        sampleArray [i]
        if (sampleArray[i] % 8 === 0) {
            concatena.innerHTML += sampleArray[i] + " "
        }
    }
    div3.appendChild(concatena)
    // implemente o código do kata 13 aqui
}kata13()

function kata14() {
    let div3 = document.createElement('div')
    showResults(div3)
    let concatena = document.createElement('span')

    for (let i = 0; i < sampleArray.length; i++) {
        sampleArray [i]
            concatena.innerHTML += sampleArray[i]*sampleArray[i] + " "
    }
    div3.appendChild(concatena)
    // implemente o código do kata 14 aqui
}kata14()

function kata15() {
    let div15 = document.createElement('div')
    showResults(div15)
    let soma = 0
    let filha = document.createElement('span')
    for (let i = 1; i <= 20; i++) {
        soma += i
    }
    filha.innerHTML = soma
    div15.appendChild(filha)
    // implemente o código do kata 15 aqui
}kata15()

function kata16() {
    let div15 = document.createElement('div')
    showResults(div15)
    let soma = 0
    let filha = document.createElement('span')
    for (let i = 0; i < sampleArray.length; i++) {
        soma += sampleArray[i]
    }
    filha.innerHTML = soma
    div15.appendChild(filha)
    // implemente o código do kata 16 aqui
}kata16()

function kata17() {
    let div15 = document.createElement('div')
    showResults(div15)
    let menor = sampleArray[0] 
    let filha = document.createElement('span')
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] < menor) {
            menor = sampleArray[i] 
        }
    }
    filha.innerHTML = menor
    div15.appendChild(filha)
    // implemente o código do kata 17 aqui
}kata17()

function kata18() {
    let div15 = document.createElement('div')
    showResults(div15)
    let maior = sampleArray[0] 
    let filha = document.createElement('span')
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] > maior) {
            maior = sampleArray[i] 
        }
    }
    filha.innerHTML = maior
    div15.appendChild(filha)
    // implemente o código do kata 18 aqui
}kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
