
// Type conversion  from string to a number, or to a boolean

const inputYear = '1991';
console.log (Number (inputYear)+18);
 
// Type coercion
console.log ("I'm" + 23 + 'years old');
console.log ("I'm" + '23' + 'years old');

// especial distinction
console.log ('23' - '10' - 3);
// other distinction
console.log ('23' / '2');

let n = '1' + 1 ;
n = n - 1;
console.log (n);*/


//truly and falsy values
/* The 5 falsy values are 0 , '' ( also read empty string ), undefine, null, NaN (also read Not a Number identified); */

console.log (Boolean (0));
console.log (Boolean (undefined));
console.log (Boolean ('Jonas'));
console.log (Boolean ({}));
console.log (Boolean (''));

const money = 10;
if (money){
    console.log ('Dont spent ii all');
}
else [
    console.log (' You should get a job')
]

let height=0;
height= height + 1 ;
if (height) {
    console.log (' YAY, Height is defined');
} else {
    console.log ('Height is UNDEFINED');

}

