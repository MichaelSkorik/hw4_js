//Задача 1

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} – это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} – четное число`);
    } else {
        console.log(`${i} – нечетное число`);
    }
}

//Задача 2

let array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);

//Задача 3

let randomArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * 10));
}

console.log("Сгенерированный массив:", randomArray);

let sum = randomArray.reduce((acc, curr) => acc + curr, 0);
console.log("Сумма элементов массива:", sum);

let min = Math.min(...randomArray);
console.log("Минимальное число в массиве:", min);

let containsThree = randomArray.includes(3);
console.log("Есть ли в массиве число 3:", containsThree);