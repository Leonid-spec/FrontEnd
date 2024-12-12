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
  balance: 0,
};

bankAccount.deposit = function (sum) {
  sum >= 5 && sum <= 5000 ? (this.balance += sum) : alert("Uncorrect sum");
};

bankAccount.withdraw = function (sum) {
  sum <= this.balance && sum > 0
    ? (this.balance -= sum)
    : alert("Uncorrect sum");
};

bankAccount.checkbalance = function () {
  console.log(`Your balance is not so bed: ${this.balance}`);
};

const bank = [];

function createAccount() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  // falsy null, '', 0, undefined, NaN
  if (name) {
    bank.push({
      ...bankAccount,
      accountNumber: bank.length + 1,
      accountHolderName: name,
    });
    alert("Account created successfully");
  } else {
    alert("Please, enter a valid name");
  }
  nameInput.value = "";
  console.log(bank);
}

// function showAccounts() {
//   if (bank.length === 0) {
//     alert("Accounts list is empty");
//   } else {
//     let accountsList = "Accounts:\n";
//     for (let account of bank) {
//       accountsList += `Account Number: ${account.accountNumber}, Account Holder: ${account.accountHolderName}, Balance: ${account.balance}\n`;
//     }
//     alert(accountsList);
//   }
// }



function showAccounts(){
const accountList = document.getElementById('accountList');

 accountList.innerHTML = '';

  for (const account of bank) {

accountList.innerHTML += `
<li>ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}</li>`
  } 
}

const withdraw = document.getElementById('withdraw');
const deposit = document.getElementById('deposit');


deposit.onclick = function(){
  operation('deposit');
//   const accountIdInput = document.getElementById("accountId"); //поолучили ссылки на элементы
//   const amountInput = document.getElementById("amount");

//   const accountId = accountIdInput.value.trim(); //считывание  значение написанное в инпутах, число либо НАН
//   const amount = +amountInput.value.trim(); //получить значение 



// // Искомый элемент или undefined
//  const accountFind = bank.find(e => e.accountNumber.toString() === accountId);

// if (accountFind){
//   accountFind.deposit(amount);
// }else{
//   alert('Account not found');
// }

// accountIdInput.value = '';
// amountInput.value = '';

};

withdraw.onclick = function(){
operation('withdraw');

};


// DRY (Don`t repeat yourself)

function operation(operator){
  const accountIdInput = document.getElementById("accountId");  
  const amountInput = document.getElementById("amount");

  const accountId = accountIdInput.value.trim(); 
  const amount = +amountInput.value.trim();  

 const accountFind = bank.find(e => e.accountNumber.toString() === accountId);

if (accountFind){
  if (operator === 'deposit'){
    accountFind.deposit(amount);
  } else {
    accountFind.withdraw(amount);
  } }else {
  alert('Account not found');
}
  

accountIdInput.value = '';
amountInput.value = "";

};
