
const result =  document.getElementById('input')
//1. display number in textbox 
function displayNum(num) {
    console.log(num);
    result.value += num;
}

//2. clear text box
function clearBox() {
    result.value = '';    
}

//3. evaluate expression
function evaluateExp() {

    //method-1
    exp=result.value //6*6
    output=eval(exp);
    result.value=output;

    //method-2 
    result.value = eval(result.value);
}

//4. remove last item from text box

function removeLastItem() {

    //method-1
    //value = result.value;
    //newVal = value.split('');
    //newVal.pop();
    //result.value=newVal.join('');

    //method-2
    result.value = result.value.slice(0,-1);
}