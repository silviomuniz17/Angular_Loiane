//para compilar tyspescript é (tsc main.ts) tsc nome_do_arquivo *Javascript puro
//Forma que vai ficar apos converter abrir arquivo apor compilado main.js (para compilar usar cod á cima
var minhaVar = 'minha variavel'; //criando uma variavel
function minhaFunc(x, y) {
    //criando uma função que recebe x e y e retorna a soma
    return x + y;
}
var num = 2; //criando variavel numero que recebe 2 (mesma coisa que em cima)
var PI = 3.14; //criando contante que recebe o valor de PI
var numero = [1, 2, 3];
numero.map(function (valor) {
    return valor * 2;
});
numero.map(function (valor) { return valor * 2; }); //é a mesma coisa que em cima
//criando classe
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'dsadasdas'; //tipando variavel para o tipo string
var n2 = 4; //tipando a variavel para qualquer tipo (colocar any ou nada)
n2 = 'sdadasdsa';
