// 1) SELECIONANDO TODO DOCUMENTO HTML COMO UM OBJETO

console.log(document); // Exibirá na aba de console do dev tools todo arquivo - árvore de elementos HTML

// 2) USANDO MÉTODOS DO DOM

// 2.1) // Buscando pelo ID - (APENAS UM ID POR ELEMENTO HTML)

let p = document.getElementById("paragrafo1"); 

console.log(p);

// 2.2) // Buscando pelas classes - Permite selecionar mais de um elemento com a mesma classe (ARRAYS)!

let inputsPorClasse = document.getElementsByClassName("tag-de-input");

console.log(inputsPorClasse);

console.log(inputsPorClasse[0]); // Seleciona apenas o primeiro elemento com esta classe
console.log(inputsPorClasse[1]); // Seleciona apenas o segundo elemento com esta classe

// 2.3) Buscando pelo nome das tags 

let inputsPorTag = document.getElementsByTagName("p");

console.log(inputsPorTag);

console.log(inputsPorTag[0]); // Seleciona apenas o primeiro elemento desta tag
console.log(inputsPorTag[1]); // Seleciona apenas o segundo elemento desta tag

// 2.4) Selecionando elementos pelos atributos - querySelector & querySelectorAll

let inputPorName = document.querySelectorAll("input[name='email']"); // Busca mais específica - todos inputs com atributo name = email

console.log(inputPorName);

console.log(inputPorName[0]);
console.log(inputPorName[1]);

let inputPorNameOne = document.querySelector("input[name='email']"); // Retorna apenas o primeiro elemento

console.log(inputPorNameOne);