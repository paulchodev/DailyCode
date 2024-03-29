
// Write a program that outputs the top n elements from a list.

//given num and array of num, no lettes, special char, no funny biz
//return a new array with n number of the largest numbers in the array

// function largest(n,xs){
//     //sort the array in ascending order
//     //slice length - n to get array with n highest nums
//     return xs.sort((a,b)=>a-b).slice(xs.length-n)
// }

const largest = (n,xs) => xs.sort((a,b)=>a-b).slice(xs.length-n)

console.log(largest(2,[10,9,8,7,6,5,4,3,2,1]),[9,10])
console.log(largest(3,[5,1,5,2,3,1,2,3,5]),[5,5,5])
console.log(largest(7,[9,1,50,22,3,13,2,63,5]),[3, 5, 9, 13, 22, 50, 63])