// Создать объект bankAccount, который:
//     1. accountNumber: "123456789"
//     2. accountHolderName: "Alice"
//     3. balance: 0
//     4. deposit(sum) {
//             // TODO Пополнение счёта
//        }
//     5. withdraw(sum) {
//             // TODO Списание счёта
//        }
//     6. checkBalance() {
//             // TODO Просмотр баланса счёта
//        }

let bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0
}


bankAccount.deposit = function(sum) {
    sum >= 5 && sum <= 5000 ? this.balance +=sum : alert("Uncorrect sum")
}

bankAccount.withdraw = function(sum){
    sum <= this.balance && sum > 0 ? this.balance -=sum : alert("Uncorrect sum")
}

bankAccount.checkbalance = function(){
    console.log(`Your balance is not so bed: ${this.balance}`);
    
}

const bank = [];


function createAccount() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();

    // falsy null, '', 0, undefined, NaN
    if (name){
bank.push({
    ...bankAccount,
    accountNumber: bank.length + 1,
    accountHolderName: name
})
alert('Account created successfully')
    } else {
        alert('Please, enter a valid name')
    }
    nameInput.value = '';
    console.log(bank);
    

}

function showAccounts() {
   if (bank.length === 0){
    alert('Accounts list is empty')
   }else { let accountsList = 'Accounts:\n'; 
   for (let account of bank)
     { accountsList += `Account Number: ${account.accountNumber}, Account Holder: ${account.accountHolderName}, Balance: ${account.balance}\n`; }
    alert(accountsList);
}
}

