// clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

//displays the values
function display(val) {
    document.getElementById("result").value += val;
}

function Result() {
    const x = document.getElementById("result").value;
    const  y= eval(x);
    document.getElementById("result").value = y;
    
}

