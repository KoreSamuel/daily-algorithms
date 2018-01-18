// describe: 给定一个有序的数组，查找某个数是否在数组中，请编程实现。

const binarySearch = (arr, value) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.ceil((left + right) / 2);

        if (arr[mid] > value) {
            right = mid - 1;
        } else if (arr[mid] < value) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
};

let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let k = 5;
console.log(binarySearch(test, k));
// 4
let b = 22;
console.log(binarySearch(test, b));
// -1 
