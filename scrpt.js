
    const display = document.querySelector('.display input[name="display"]');
    const DeleteAll = document.querySelector('.DeleteAll');
    const equal = document.querySelector('.equal');
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
   const delet1=document.querySelector('.delete1')

    DeleteAll.addEventListener('click', function() {
        display.value = "";
    });

    equal.addEventListener('click', function() {
        display.value = eval(display.value);
    });
    numbers.forEach(function(number) {
        number.addEventListener('click', function() {
            display.value += this.value;
        });
    });

    operators.forEach(function(operator) {
        operator.addEventListener('click', function() {
            display.value += this.value;
        });
    });

    delet1.addEventListener('click', function() {

    // we are using only this part for accesisng the current value before modifying 
        let currentValue = display.value;
        
        if (currentValue.length > 0) {
            // this is for deleteting the last index and restoring other element to new array 
            display.value = currentValue.slice(0, -1)
        }})

        document.addEventListener('keydown', function(v) {
            if (v.key === 'Escape') {
                let currentValue = display.value;
                if (currentValue.length > 0) {
                    display.value = currentValue.slice(0, -1);
                }
            }
        });


        numbers.forEach(function(input){
            input.addEventListener('click',function(){
                display.value+=this.value
            })
        })
        