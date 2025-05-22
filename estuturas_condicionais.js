
import readline from 'readline-sync';

//1
let dia = Number(readline.question('Informe o dia da semana: '));
switch(dia)
{
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    
    default:
        console.log('Valor invalido! \nInforme o valor no intervalo de 1 a 7.');
        break;
    
}
//2
let mes = Number(readline.question('Informe o dia do seu mes: '));
switch(dia)
{
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Maio');
        break;
    case 6:
        console.log('Junho');
        break;
    case 7:
        console.log('Julho');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Setembro');
        break;
    case 10:
        console.log('Outubro');
        break;
    case 11:
        console.log('Novembro');
            break;
    case 11:
        console.log('Dezembro');
            break;
    default:
        console.log('Valor invalido! \nInforme o valor no intervalo de 1 a 7.');
        break;
    
}
//3
let x = readLine.questionFloat(`Informe o primeiro valor: `);
let y = readLine.questionFloat(`Informe o segundo valor: `);
let op = readLine.questionFloat(`Escolha a opção: \n[1] Adição, \n[2] Subtração, \n[3] Multiplicação /n[4] Divisão`)

switch (op){
    case 1:
        console.log(`${x} + s{y} = ${x + y}`);
    case 2:
        console.log(`${x} - s{y} = ${x + y}`);
    case 3:
        console.log(`${x} / s{y} = ${x + y}`);
    case 4:
        console.log(`${x} * s{y} = ${x + y}`);

    }

//4
let salario = readLine.question('Informe seu salario: ')
let cat = entradaDados.question('Informe a categoria de bonificação: ').ToUpperCase;
let bonus = 0

switch(cat) {
    case 'A':
        bonus = salario * 0.05;
        console.log(`${(salario + bonus).toLocaleString('pt-BR',{ styles: 'currency', currency })}`)
    case 'B':
        bonus = salario * 0.10;
        console.log(`${(salario + bonus).toLocaleString('pt-BR',{ styles: 'currency', currency })}`)
    case 'C':
        bonus = salario * 0.15;
        console.log(`${(salario + bonus).toLocaleString('pt-BR',{ styles: 'currency', currency })}`)
    case 'D':
        bonus = salario * 0.15;

}