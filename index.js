/*
let meuArray = ['Vanessa', 'Gabriel'];
let meuArray2 = new Array();
let meuArray3 = new Array('Gabriel');

console.table(meuArray);
console.table(meuArray2);
console.table(meuArray3);
*/

// Adicionando elemento usando o push (* Com push sempre adiciona no final da array) e vizualizando com o uso do console.table. 
// Usando unshift para adicionar elementos (* Com unshift adiciona no inicio da array)
let frutas = new Array ('Abacaxi');

frutas.push('Banana');
frutas.push('Maçã');
frutas.push('Morango');
frutas.unshift('Tangerina');
//console.table(frutas);
//Até o código acima não foi dimensionado os elementos dentro do array.
//Utilizando o length, alem da frutas vai mostrar o tamanho total do array "5", podemos notar que ele não bate com a quantidade de indices, porque os indices iniciam no "0" na programação.
//console.log(frutas.length);
//Vamos aprender agora a remover os indices iniciando com o pop e ele remove o ultimo indice, foi comentado a linha 19 e 22, para que possamos identicar o indice que vai sumir, no caso o morango que é o ultimo indice.
frutas.pop();
frutas.shift();
const frutaRemovida = frutas.splice(2, 1, 'Fruta do Conde');
console.table(frutas);
//Vamos utilizar o shift para remover para remover o primeiro indice no caso a tangerina.
//Vamo excluir agora a maçã que está no meio com splice, e adicionar os parametros no caso numero do indice como parametro inicial "frutas.splice(2, 1);". * depois foi mostrado como vizualizar a fruta removida, criando uma variavel com o nome frutaRemovida e utilizando o console.log(frutaRemovida); para vizualizar. 
//O splice também serve para substituir o indice acresentado um 3 valor nos parametros ex: const frutaRemovida = frutas.splice(2, 1, 'Fruta do Conde'); substituindo então a maçã pela fruta do Conde e vizualiar com o console.table(frutas);