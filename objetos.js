1//
let apartamento = {
    quarto: 2,
    tipo: 'Apartamento',
    endereco: 'Avanida Principal, 456 - Centro',
    andar: 7
}

console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, ${apartamento.andar} andar da ${apartamento.endereco}`);

2//
let produtoEmbalado = {
    nome: 'Laptop HP',
    categoria: 'eletronicos',
    peso: 1.5,
    preco: 3500

}
console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesa ${produtoEmbalado.peso} esta avenda por ${produtoEmbalado.preco}`);
3//
class Imovel {
    constructor(quartos, tipo, endereco){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereco = endereco
    }
    exibirInformacoes(){
        return `${this.tipo} com ${this.quartos} quartos, localizador(a) na ${this.endereco}.`;
    }
}

let casa = new Imovel(3, 'Sobrado', 'Rua das Dores', 'Bairro Programador', 'n 1010');
console.log(casa.exibirInformacoes());

let ap = new Imovel(2, 'Aparmento', 'Rua da depressão, bairro da solidão n 666');
console.log(ap.exibirInformacoes  ());                                                                                                                                                        
//casa.quarto = 2;
//casa.tipo = 'sobrado';
//casa.endereco = 'Centro';
//console.log(casa);
//console.log(`Quartos: ${casa.quartos} \nTipos: ${casa.tipo} \n'Endereço: ${casa.}`)

//4
import entradaDados from 'readline-sync';
let nome = entradaDados.question('informe seu nome: ')
console.log(`Olá, ${nome}!`);