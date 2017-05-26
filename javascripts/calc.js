var leftHand = '';
var operator = '';
var rightHand = '';
var result = '';
var clearButton = document.getElementById('clear_button');
var equalButton = document.getElementById('equal_button');
var numberButtons = document.getElementsByClassName('number_button');
var operatorButtons = document.getElementsByClassName('op_button');
var screen = document.getElementById('screen');

// TODO: wire up clear button event listener

// TODO: set screen should probably know how to set the screen to the result
// HINT: pass an argument to this function!
function setScreen() {
  screen.innerText = leftHand + operator + rightHand;
}

for(var i = 0; i < operatorButtons.length; i++) {
  var button = operatorButtons[i];
  button.addEventListener('click', function() {
    // TODO: probably check for a left hand before we set an operator
    operator = this.innerText;
    setScreen();
  });
}

for(var i = 0; i < numberButtons.length; i++) {
  var button = numberButtons[i];
  button.addEventListener('click', function() {
    if(operator.length)
      // TODO: do not allow divide by 0 here!
      rightHand += this.innerText;
    else
      leftHand += this.innerText;
    setScreen();
  });
}



equalButton.addEventListener('click', function() {
  console.log(leftHand);
  console.log(operator);
  console.log(rightHand);
  var lH = parseInt(leftHand);
  var rH = parseInt(rightHand);

  if(leftHand && operator && rightHand) {
    switch(operator) {
      case '+':
        result = lH + rH;
        console.log(result)
        break;
      case '-':
        result = lH - rH;
        console.log(result);
        break;
      case 'X':
        result = lH * rH;
        console.log(result);
        break;
      case '/':
        result = lH / rH;
        console.log(result);
        break;
        case 'C':
        console.log();
        break;
      default:
       alert('Invalid Operator!');
    }
  } else {
    // TODO: make it more user friendly by telling them what they are missingi
    alert('Invalid Equation!');
  }
});
