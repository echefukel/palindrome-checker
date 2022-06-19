// const palindrome = (str)=>{
//    const reverse =  str.toUpperCase();
//    const answer =  reverse.split('').reverse().join();
//    const check = str.toUpperCase().split('').join();
// return answer === check;
    
// }
// console.log(palindrome('uche'));

// let answer = 'uche'.toLowerCase().match('uc')

// let drop = [1,2,3,4,5].join('');
// console.log(typeof(drop));







const notice = (str) =>{
let result = str.toString().toUpperCase().match(/[0-9A-z]/gi);
console.log(result);
}


notice(100000001)