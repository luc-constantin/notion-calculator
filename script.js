// dark mode set
const htmlEl = document.getElementsByTagName('html')[0];

const toggleTheme = (theme) => {
    htmlEl.dataset.theme = theme;
}

let temporal = 0;
let operation = '';
var input = document.getElementById('input');

function add(num) {
  if (num == 0) {
    if (input.value[input.value.length - 1] != '0' || input.value.length > 1) {
      input.value = input.value + num;
    }
  } else if (num == '.') {
    if (input.value[input.value.length - 1] != '.' && input.value != '') {
      input.value = input.value + num;
    }
  } else {
    input.value = input.value + num;
  }
}

function operationFunction(operator) {
  operation = operator;
  temporal = input.value;
  input.value = '';
}

function equal() {
  if (operation != '') {
    input.value = eval(temporal + operation + input.value);
  }
}

function reverse() {
  input.value = input.value * -1;
}

function percent() {
  input.value = input.value / 100;
}

function cleanInput() {
  if (input.value != '') {
    input.value = '';
  } else {
    temporal = 0;
    operation = '';
  }
}
