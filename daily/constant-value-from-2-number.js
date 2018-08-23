// describe: 寻找和为定值的两个数

let findSumTwo = (arr, n) => {
    arr.sort();

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum === n) {
            return [arr[start], arr[end]];
        } else {
            sum > n ? end-- : start++;
        }
    }
    return [];
};
let test = [1, 2, 4, 5, 11, 15, 3, 6, 9];
let sum = 20;
console.log(findSumTwo(test, sum));
// [11, 9]

let findSumTwo_2 = (arr, n) => {
    let temp = arr.filter((v, k) => {
        return arr.indexOf(n - v) !== -1;
    });
    return temp.length ? [temp[0], n - temp[0]] : [];
}
console.log(findSumTwo_2(test, sum))