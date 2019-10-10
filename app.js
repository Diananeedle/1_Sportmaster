console.log('worked');

//за каждый полную 1000 - 100 бонус

const purchase = 10000;
let bonus;

if (purchase < 1000){
    bonus = 'Purchase less than 1000rub - no bonuses';
    console.log(bonus);
} else if (purchase < 10000) {
    bonus = Math.floor(purchase/1000);
    console.log('Sum of your bonuses: ', bonus*100);
} else if (purchase < 100000) {
    bonus = Math.floor(purchase/1000);
    console.log('Sum of your bonuses: ', bonus*100);
} else {
    bonus = 'Please, buy our company';
    console.log(bonus);
}

