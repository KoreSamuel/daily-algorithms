/**
 * Your code needs to be as short as possible, in fact not longer than 28 characters
 * Because you are scared and stressed you have forgotten how to use the standard reverse() method
 *
 * #Input: an array containing data of any types. Ex: [1,2,3,'a','b','c',[]]
 * #Output: [[],'c','b','a',3,2,1]
 *
 */

// my solution
// compare function 返回值大于0时，第二个参数会放到第一个参数前面，可以用这种方式来翻转
weirdReverse=a=>a.sort(b=>1)

// best practice
// 好像就这个解法不超过28个字符