// // array
// let userNamesArr = ['Mike', 'Tom', 'Mary'];

// let userNamesArrLength = userNamesArr.length;
// console.log(userNamesArrLength);

// // call an element
// console.log(userNamesArr[0]);

// // change a seckond element of array

// userNamesArr[1] = 'Bob';
// console.log(userNamesArr);


// // arrays with differents type of data

// let userData = ['Tom', 42, true, null];
// console.log(userData);

// userData[2] = 1;
// console.log(userData);


// userData[4] = [10, 20, 30]
// console.log(userData);

// console.log(userData[4][2]);

// let colors = ['red', 'blue'];

// // add elements at the end of array

// colors.push('pink');
// console.log(colors);

// colors.push('black', 'green');
// console.log(colors);

// // delete elements at the ends of array

// colors.pop();
// console.log(colors);

// let lastColor = colors.pop();
// console.log(lastColor);
// console.log(colors);


// // add elements at the front of the array

// colors.unshift('pig');
// console.log(colors);

// colors.unshift('you', 'are');
// console.log(colors);

// // delete first elements from the array
// colors.shift();
// console.log(colors);

// let firstColors = colors.shift();
// console.log(firstColors);
// console.log(colors);


// // add elements with index with a few times bigger then last  element

// let numberArray = [2, 45, 67];
// numberArray[10] = 90;
// console.log(numberArray[9]);
// console.log(numberArray[3]);


let fruits = ['apple', 'cherry', 'kiwi', 'mango'];
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i].toUpperCase());
}
console.log(fruits);

