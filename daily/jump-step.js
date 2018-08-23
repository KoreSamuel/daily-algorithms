// describe: 一个台阶总共有 n 级，如果一次可以跳 1 级，也可以跳 2 级。求总共有多少总跳法
// 推导可以发现是我们熟悉的斐波拉契数列 f(n) = f(n-2) + f(n-1)
let fibonacci = n => {
    let rst = [0, 1, 2];
    return n <= 2 ? rst[n] : fibonacci(n - 1) + fibonacci(n - 2);
}

let Fibonacci = n => {
    let a = 1, b = 1;
    let c = 0;
    if (n < 2) {
        return 1;
    }
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}
console.log(fibonacci(6));
console.log(Fibonacci(6));