class Calc {

    resultInput = document.getElementById('resultInput')

    buttons = document.getElementsByClassName('btn')

    #singleAllowedKeys = [
        'NumpadDivide',
        'NumpadMultiply',
        'NumpadSubtract',
        'NumpadAdd', 
        'NumpadDecimal',
        'Period',
        'Backspace', 
        'Enter',
        'NumpadEnter'
    ]

    constructor() {
        this.addEventListenerToButtons()
        this.addEventListenerToInput()
    }

    addNewAllowedKeys(...newKey) {
        newKey.forEach(key => {
            this.#singleAllowedKeys.push(key)
        })
        

    }

    getSingleAllowedKeys() {
        this.#singleAllowedKeys.forEach(allowedKey => {
            console.log(allowedKey);
        })
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

   addEventListenerToInput() {
    this.resultInput.addEventListener('keydown', event => {

        //event.preventDefault()

        console.log(event.key + ' - '+ event.keyCode + ' - '+ event.code);
        if ((event.keyCode <47 || (event.keyCode >57 && event.keyCode < 96) || 
        event.keyCode > 105) && !(this.#singleAllowedKeys.includes(event.code) && event.shiftKey == false))
        {
            event.preventDefault()
        } else if (event.code == 'Enter' || event.code == 'NumpadEnter') {
            this.calculateResult()
            event.preventDefault()
        }
    })

    this.resultInput.addEventListener('keyup', event => {
        console.log('keyup')
    })

    this.resultInput.addEventListener('keydown', event => {
        console.log('keypress')
    })
   }
   
}


let myCalc = new Calc()
myCalc.addNewAllowedKeys('Equal','Minus')

myCalc.getSingleAllowedKeys()

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


