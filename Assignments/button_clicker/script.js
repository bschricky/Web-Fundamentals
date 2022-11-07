console.log("page loaded...");

function message() {
    alert("Ninja was liked")
}

function login(element) {
    console.log(element);
    element.innerText = "Logout";
}

function hide(element) {
    element.remove();
}