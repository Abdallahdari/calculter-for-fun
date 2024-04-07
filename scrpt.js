
    const display = document.querySelector('.display input[name="display"]');
    const DeleteAll = document.querySelector('.DeleteAll');
    const equal = document.querySelector('.equal');
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');

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

