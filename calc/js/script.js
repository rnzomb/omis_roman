class Calc {

    resultInput = document.getElementById('resultInput')

    buttons = document.getElementsByClassName('btn')

    constructor() {
        this.addEventListenerToButtons()
    }
    addEventListenerToButtons() {
        for (let index = 0; index < this.buttons.length; index++) {
            const button = this.buttons[index];
                                              // callback fn
            button.addEventListener('click', buttonEvent => {
               
                console.log(buttonEvent.target.innerText);
             
                let btnTitle = buttonEvent.target.innerText
             
                if (btnTitle == '=') {
                    this.calculateResult()
                } else {
                    this.resultInput.value += btnTitle
                }
            })
        }
    }

    calculateResult() {
        this.resultInput.value = eval(this.resultInput.value)
   }
   
}


let myCalc = new Calc()
//myCalc.addEventListenerToButtons()
console.log(myCalc.buttons);

/* // old fashion function 
// this is visble only in this function
function multiply(x, y) {
    return x * y
}

function multiply () {
    return 'Hello !'
}

// new fashion
             // return
let multiply = () => 'Hello!' */


