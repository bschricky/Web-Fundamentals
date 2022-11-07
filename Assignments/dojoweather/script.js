var cookiesDiv = document.querySelector(".cookies")

function loading() {
    alert("Loading weather report.");
}

function accept() {
    cookiesDiv.remove();
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempValue = parseInt(tempSpan.innerText);
        if(element.value == "℃") {
            tempSpan.innerText = f2c(tempValue);
        } else {
            tempSpan.innerText = c2f(tempValue);
        }
    }
}

//parseInt function converts a string into a number //