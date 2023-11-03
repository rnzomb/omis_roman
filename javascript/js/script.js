
let x = 10 // new syntax
x = "text"

var x1 = 100 // old syntax

var x1 = "string"

//let x =11

let s = "string"
let n = 10
let b = true
let u = undefined
let nl = null
let a1 = []
let a2 = {}

// true

// == equal
// != not equal
// >=, <=, > <
// === +type i tip i znachenie
// !== +type odno iz dvuh

// && -> and
// true = true && true && true
// false = true && false && true


// || -> or
// true = false || false || true
// false = false || false || false




// if (n == 10  && s == "string" && b == false) {
if (n == 11 || s == "string2" || b == false) {
    console.log("yes, n =10", "This is new text", "this is another text")
} else if (u == undefined) {
    console.log("yes u = undefined")
}
else {
    console.log("This is else")
}

// ARRAY
//            0      2      3  
const arr1 =[100, "string", true]

console.log(arr1[1])

arr1[2] = false

console.log(arr1[2]);

/* loops */


// index++ increment ++index
// index-- decrement --index
for (let index = 0; index < arr1.length; index += 2) {
    console.log("element", arr1[index]);
    
}