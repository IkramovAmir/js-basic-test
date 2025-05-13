// Notiondagi masalalar javobi shu yerda bo'ladi
// 1
function countBy(num1, num2) {
    let newArr = []
    for (let i = 1; i <= num2; i++) {
        newArr.push(i * num1);
    };
    return newArr;
};

// console.log(countBy(3, 5));

// ---------------------------------------------------------------

// 2
function evenNums(arr) {
    let evenArr = arr.filter(value => value % 2 == 0);
    return evenArr;
};
// console.log(evenNums([1, 2, 3, 4, 5, 6, 7, 8]));

// ---------------------------------------------------------------


// 3
function getSum(arr) {
    let newArr = arr.flat(Infinity);
    return newArr.reduce((acc, ele) => acc + ele);
}
// console.log(getSum(([
//     [1, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 1, 5],
// ])));

// ---------------------------------------------------------------

// 4
function maxNum(arr) {
    return Math.max(...arr)
};
// console.log(maxNum([1, 2, 4]))

// ---------------------------------------------------------------

// 5
function filterDivisible(arr) {
    let newArr = arr.filter(value => value % 5 == 0 || value % 3 == 0 );
    return newArr;
};
// console.log(filterDivisible([1, 3, 5 ,6 ,8, 23, 20]))

// ---------------------------------------------------------------

// 6
function toUpper(arr) {
    let newArr = arr.map(value => value.toUpperCase());
    return newArr;
};
// console.log(toUpper(["salom", "nima", "gap"]))

// ---------------------------------------------------------------

// 7
function overallLength(arr) {
    let lengthArr = 0;
    for (let value of arr) {
        lengthArr += value.length;
    };
    return lengthArr;
};
// console.log(overallLength(["nimdur" ,"gap"]))

// ---------------------------------------------------------------


// 8
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
// console.log(sortByLength(["cat", "apple", "banana", "car"]));

// ---------------------------------------------------------------

// 9
function higherLength(arr) {
    return arr.filter(value => value.length > 4);
};
// console.log(higherLength(["pear", "grape", "melon", "kiwi", "banana"]));

// ---------------------------------------------------------------

// 10
function firstLetter(arr) {
    return arr.map(arr => arr[0]).join("");
};
// console.log(firstLetter(["animal", "needle", "run", "swim"]));