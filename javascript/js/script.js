
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

const arr2 = {
    key : 'value',
    key2 : 'value 2',
    key3 : {
        key : 'value 21',
        arr: [
            'value object 22', // 0
            'value 23'
        ]
    }
}

console.log(arr2.key2);
console.log(arr2.key3.key);
console.log(arr2.key3.arr[0]);
arr2.key3.arr.push('second', 'third')
console.log(arr2.key3.arr);
console.log(arr2.key3.arr[3]);

// console.log()

for (let keyIndex in arr2) {
    if (arr2.hasOwnProperty(keyIndex)) {
        console.log(keyIndex + ": " + arr2[keyIndex]);
    }

}


// option 2
console.log('--------variant 2---------');
console.log(Object.keys(arr2));
console.log(Object.values(arr2));
console.log(Object.entries(arr2));
console.log(Object.entries(arr2.key3));


function myfn(x, y) {
    return x + y
}

let result = myfn(2, 4)
console.log(myfn(2, 4) + 5);

function multiply(x, y) { // void
    x * y
}

let result2 = multiply(2, 5)
console.log(result2);

class MyClass {

    #result = 0
    result2 = 0

    constructor() {
        this.result2 = 500
    }

    multiply(x, y) {
        this.#result = x * y
    }

    getResult(){
        return this.#result
    }
}

let numbers = new MyClass() 
numbers.multiply(5, 5)

console.log(numbers.getResult());
//numbers.result2 = 210
console.log(numbers.result2);



