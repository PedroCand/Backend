import rl from 'readline-sync';

let num = 0//rl.questionInt('Informe um numero: ');

while(num <= 10){
    num ++;
    if (num == 10) {
        console.log(num);
        break;
    }
   num ++;
}