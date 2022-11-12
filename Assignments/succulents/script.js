var aloeImg = document.querySelector("#changing-succulents")
var cookiesDiv = document.querySelector("#cookies")

function cartEmpty() {
    alert("Your cart is empty!");
}

function changeImage() {
    aloeImg.src = "images/assets/succulents-2.jpg";
}

function resetImage() {
    aloeImg.src = "images/assets/succulents-1.jpg";
}

function accept() {
    cookiesDiv.remove();
}