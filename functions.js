// - створити функцію яка виводить масив
function showArr(arr) {
    console.log(arr)

}

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

function randomNumbersInArr(n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        let rundomNum = Math.random()
        newArr.push(rundomNum)
    }
    showArr(newArr)
}
randomNumbersInArr(5)

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
function findMin(a, b, c) {
    let min = Math.min(a, b,c);
    console.log(min);
    return min;
}
findMin(12,2,6);
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function findMax(a, b, c) {
    let max = Math.max(a, b,c);
    console.log(max);
    return max;
}

findMax(12,544,5)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function strannaFunctin() {
  let newArr = [];
    for (let i = 0; i <arguments.length ; i++) {
        newArr.push(arguments[i])

    }
    let max = Math.max(...newArr);
    console.log(max);
    let min = Math.min(...newArr);
    return min
}


let minimum  = strannaFunctin(2,32,3,4,54,456,46);
console.log(minimum);

// - створити функцію яка виводить масив

function showArr1(arr) {
console.log(arr)
}

// - створити функцію яка повертає найбільше число з масиву

function returningMaxFomArr(arr) {
    let max = Math.max(...arr);
    return max
}
console.log(returningMaxFomArr([1,2,5,3,4,23,55,565,67]))

// - створити функцію яка повертає найменьше число з масиву

function returningMinFomArr(arr) {
    let min = Math.min(...arr);
    return min
}
console.log(returningMinFomArr([1,2,5,3,4,23,55,565,67]))


// Дан массив arr. Найдите среднее арифметическое его элементов.;

function arrSum(arr) {
   let sum = 0;
    for (let i = 0; i < arr.length ; i++) {
        sum+=arr[i];

    }
    return sum;

}

console.log(arrSum([2, 3, 4, 5, 6]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.;
