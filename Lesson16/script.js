console.log("Start");


setTimeout(function(){
console.log(5);

}, 7000);

console.log("Finish");


function giveFiveAfterSevenSecond (params) {
    setTimeout(function(){
        return 5
    },7000)
}

let res = giveFiveAfterSevenSecond();
console.log(res);

const promise = new Promise(function (resolve, reject) {
    setTimeout(() =>reject('Mistake'), 7000)
        
})

promise
    .then((value) => console.log(value))
    .catch((err) => console.log(err))
    .finally(() => console.log('End'));