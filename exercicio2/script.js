// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// **Utilize o for...in para resolver**

// Exemplo com entrada **`7`**:
// ```jsx
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
// ```

let tabuada= Number(prompt("digite um número de 1 a 10 para saber sua tabuada"))
let mult= [1,2,3,4,5,6,7,8,9,10]
if(tabuada <=10 && tabuada > 0){
    for(let i in mult){
        let resp = (Number(i)+1) * tabuada
        console.log(`${Number(i)+1} x ${tabuada} = ${resp}`)
}
}else{
    console.log("Esse número não está entre 1 e 10");
}