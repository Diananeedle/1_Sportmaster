console.log('worked');

const purchase = 1000;

const red = 1000;
const silver = 10000;
const gold = 100000;

let bonus;

if (purchase < red){
    bonus = 0;
    console.log('Sum of your bonuses: ', bonus);
} else if (purchase < silver) {
    bonus = Math.floor(purchase/1000)*100;
    console.log('Sum of your bonuses: ', bonus);
} else {
    bonus = Math.floor(purchase/1000)*100;
    console.log('Sum of your bonuses: ', bonus);
}