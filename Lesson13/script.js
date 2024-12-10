console.log("Hello, objects");

// objects
// hard DATA types
// синтаксис обьекта включает фигурные скобки

// Обьекты - это структура данных, состоящие из пар "ключ: значение"

// прмер обьекта

let user = {
name: "John",
age: 30,    
isAdmin: true,
}

// 1. точечная нотация
console.log(user.name);

// 2. квадратные скобки
console.log(user["name"]);

console.log(user.salary);

// + '5000' -> 5000
// 

user.salary = 5000;
console.log(user.salary);

user.age = 31;

delete user.isAdmin;
console.log(user);

for (const test in user) {
   console.log(`Ключ: ${test} значение равно: ${user[test]}`);
    }


    user.greet = function () {
        console.log(`Hello, my name is ${this.name} and iam ${user.age}`);
        
    }
    user.greet();

    // создать обьект bankAccount, который 
    /*
    1. accountNumber: "123456789"
    2. accountHolderName: "Alice"
    3. balance: 0

    4. deposit(sum){
    // TODO пополнение счета
    }

    5. withdraw (sum){
    //TODO списание счета
}
    6. checkBalance (){
 // TODO Просмотр баланса счета    
    }

    */