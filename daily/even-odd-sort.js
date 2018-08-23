// describe: 输入一个整数数组，调整数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。要求时间复杂度为O(n)。

const evenOddSort = arr => {
    let start = 0;
    let end = arr.length - 1;
    let tmp = 0;

    const isOdd = n => n % 2 === 1;

    while (start < end) {
        if (isOdd([arr[start]])) {
            start++;
        } else if (!isOdd(arr[end])) {
            end--;
        } else {
            tmp = arr[start];
            arr[start] = arr[end];
            arr[end] = tmp;
            start++;
            end--;
        }
    }

    return arr;
}; // O(n)
let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(evenOddSort(test));
// [1, 9, 3, 7, 5, 6, 4, 8, 10]