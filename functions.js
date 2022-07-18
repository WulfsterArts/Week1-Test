const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}

pressGrindBeans();


let accnumb = 50449921;
let Eve = 500;

const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);

};

cashWithdrawal(300, accnumb);
cashWithdrawal(Eve, 50449921);
cashWithdrawal(800, 50449921);

const addUp = (num1, num2) => {
    return num1 + num2;
}

addUp(7,3);
console.log(addUp(2,5));

function square(number) {
    return number * number;
};

square(5);

const square2 = function(num){
    return num * num
};

square2(5);