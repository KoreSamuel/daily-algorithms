//describe: 输入一个整形数组，数组里有正数也有负数。数组中连续的一个或多个整数组成一个子数组，每个子数组都有一个和。 求所有子数组的和的最大值。
// 1.每轮相加后只保留最大的合，相加完一轮与保留的最大比取最大
let findMaxSubArrs = arr => {
    let len = arr.length;
    let curMax = 0;
    let max = arr[0];

    for (let i = 0; i < len; i++) {
        let sum = arr[i];
        for (let j = i + 1; j < len; j++) {
            sum = sum + arr[j];
            if (sum >= curMax) {
                curMax = sum;
            }
        }
        if (max < curMax) {
            max = curMax;
        }
    }

    return max;
}
// 2.
let findMaxSubArr = arr => {
    let sum = 0;
    let max = arr[0];

    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] > sum + arr[i]) {
            sum = arr[i];
        } else {
            sum = sum + arr[i];
        }

        if (max < sum) {
            max = sum;
        }
    }

    return max;
}
let test = [12, -12, 33, 10, -4, 7, -2, -5];
console.log(findMaxSubArr(test)); // 46
console.log(findMaxSubArrs(test)); // 46