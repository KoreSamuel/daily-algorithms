// describe: 输入n个整数，输出其中最小的k个。
let findkth = (arr, k) => {
    let tmp = arr.slice(0, k);
    tmp.sort();
    for (let i = k, len = arr.length; i < len; i++) {
        if (arr[i] < tmp[k - 1]) {
            tmp[k - 1] = arr[i];
            tmp.sort((a, b) => a - b);
        }
    }
    return tmp;
};
let testData = [1, 5, 3, -5, 32, 6, 7, 23, -3, 2, 6, 11];
let k = 5;
console.log(findkth(testData, k));
// [-5, -3, 1, 2, 3]