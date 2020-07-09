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






// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function average(arr) {
     let sum = arr.reduce((a, b) => (a + b))
    let averegeOfSum = sum/arr.length;
    return averegeOfSum;
}

console.log(average([23,23,12,43]));


//або

function average2(arr) {
    return arrSum(arr)/arr.length

}
console.log(average2([1,2,3,4,5]));



// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві;

function objectsLength(arr) {
let newArr = []
    for (let elem of arr) {
        if(typeof elem === 'object'){
            newArr.push(elem)
        }
    }
    return newArr.length
}
console.log(objectsLength([{name:'sergop',age:25},{name:'Anna',age: 45},54,'srrg',{name:'anna',age:23}]));




// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них;

function sumOfKeys(arr) {
let sum = 0;

    for (let obj of arr) {
      let keys = Object.keys(obj)
        sum+=keys.length
    }
    return sum
}


// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.


function sumOfArrays(arr1,arr2) {
    let sumArr = []
    if(arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
        sumArr[i] = arr1[i] +arr2[i];
        }
        return sumArr
    }else {
        return 'arrays have different length'
    }


}

console.log(sumOfArrays([1, 2, 3, 4], [2, 3, 4, 5]));




// *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

function neponyatkaYakas(arr,i) {
    let elem = arr[i+1];
    let elem2 = arr[i];
    arr[i] = elem;
    arr[i+1] = elem2;
    return arr

}

console.log(neponyatkaYakas([1,2,3,4,5,6,7,8],3));


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.;



function zachemNamToVobshe(arr) {
let newArr = []
    for (let i = 0; i <arr.length ; i++) {
        if(arr[i] === 0){
         newArr.push(arr.splice(i,1)[0])

        }

    }
   return arr.concat(newArr)
}

console.log(zachemNamToVobshe([1,0,6,0,3]));



// Створити функцію яка :
    // - Додає в боді блок з текстом "Hello owu";

function addDivf() {
    let div = document.createElement('div');
    div.innerHTML = "Hello owu";
    document.body.appendChild(div)

}
addDivf();


// Створити функцію яка :
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи;


function func(elem,text) {
    let element = document.createElement(elem);
    element.innerHTML = text;
    document.body.appendChild(element)

}
func('h1','Hellow World');




let  arrOfCars  =[
    {model:'Mercedes', year:2007, horsePower: 200, color: 'red'},
    {model:'Audi', year:2010, horsePower: 300, color: 'white'},
    {model:'Ford', year:2016, horsePower: 255, color: 'silver'},
    {model:'BMW', year:2010, horsePower: 280, color: 'black'},
    {model:'Volkswagen', year:2007, horsePower: 210, color: 'blue'},
    {model:'Reno', year:2008, horsePower: 180, color: 'white'},
    {model:'Ferrari', year:2011, horsePower: 550, color: 'red'},
    {model:'Chevrolet', year:2009, horsePower: 205, color: 'yellow'},
    {model:'Sckoda', year:2007, horsePower: 150, color: 'silver'},
    {model:'Jeep', year:2014, horsePower: 290, color: 'red'},
];


// Створити функцію яка :
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.;
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
function pushInElem(arr,id) {
    let elem = document.getElementById(id);
    for (let i = 0; i < arr.length; i++) {
        let divElement = document.createElement('div');
        divElement.innerHTML = `Car:${arr[i].model}, year:${arr[i].year}, Horse Power:${arr[i].horsePower},color:${arr[i].color}`;
        elem.appendChild(divElement)
    }
document.body.appendChild(elem)
}

pushInElem(arrOfCars,'car1')


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок

function pushInElem2(arr,id) {
    let elem = document.getElementById(id);
    for (let i = 0; i < arr.length; i++) {
        let divElement = document.createElement('div');

        let model = document.createElement('div')
        model.innerHTML = `Car:${arr[i].model}`
        let year = document.createElement('div')
        year.innerHTML = `year:${arr[i].year}`
        let power = document.createElement('div')
        power.innerHTML = `Horse Power:${arr[i].horsePower}`
        let color = document.createElement('div')
        color.innerHTML = `color:${arr[i].color}`
        divElement.appendChild(model)
        divElement.appendChild(year)
        divElement.appendChild(power)
        divElement.appendChild(color)

        elem.appendChild(divElement)
    }
    document.body.appendChild(elem)
}

pushInElem2(arrOfCars,'cars2')






// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
//     Приклад масивів:




    let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];



function golovaVjeBolut(arr1,arr2) {

    for (let user of arr1){
        for(let city of arr2){

            if ( user.id === city.user_id){
                user.address = city

            }

        }


    }


   return arr1

}
console.log(golovaVjeBolut(usersWithId, citiesWithId));




let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];


//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html


function nuCeVjeZanadto(arr ,id) {

    let elem = document.getElementById(id);
    for (let i = 0; i < arr.length ; i++) {
        let divka = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        h2.innerText = arr[i].title;
        p.innerText = arr[i].body;
        divka.appendChild(h2)
        divka.appendChild(p)
        elem.appendChild(divka)


    }
}
nuCeVjeZanadto(rules, 'cars');




// 1) Точная степень двойки.
//     Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки,
//     или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!

function checkN(n) {
    let flag = false;
   let  i = 1;
    while (i < n){
        i = i * 2;
        if (i === n){
            flag = true
        }else {
            flag = false
        }

    }
    if (flag){
        return 'Yes'
    }else {
        return 'No'
    }
}

console.log(checkN(14));




// 3) Flat
// Вирівняти багаторівневий масив в однорівневий;

let arr = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];







function newArrr(arr) {
    return(
        arr.reduce((result , elem) => {

            if(Array.isArray(elem)){
               return  result.concat(newArrr(elem))
            }else {
               return  result.concat(elem)
            }

        },[])
    )


}

// function newArrr(arr1) {
//     return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(newArrr(val)) : acc.concat(val), []);
// }
//


console.log(newArrr(arr));



// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

const Z = {
    a: 5,
    b: { g: 8, y: 9, t: { q: 48 } },
    x: 47,
    l: { f: 85, p: { u: 89, m: 7 }, s: 71 },
    r: { h: 9, a: 'test', s: 'test2' }
};

function cloneObj(obj){

    let newObj = {}
    for(let key in obj){
        if( typeof obj[key] === 'object' ){
            newObj[key] = cloneObj(obj[key]);
            continue
        }
        newObj[key] = obj[key]
    }
    return newObj
}


let newObjct = cloneObj(Z)
console.log(newObjct);