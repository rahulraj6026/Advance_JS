/*Code to find a random value for a dice roll */

let lower = 1
let upper = 6

//find a random number between 1 to 6 and then the number to be in the range of (1, 6) we find the difference
//of the ranges and the add it to lower bound to get an element 6
let dice_count = Math.random() * (upper - lower + 1) + lower
 console.log(Math.floor(dice_count));
 