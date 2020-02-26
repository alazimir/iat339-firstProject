//JavaScript file

var itemQuant = 0;

function increaseQuantNum() {
    itemQuant++;
    document.getElementById('inc').innerHTML = itemQuant;
}

function decreaseQuantNum() {
    if (itemQuant > 0) {
        itemQuant--;
        document.getElementById('inc').innerHTML = itemQuant;
    }
}

function addToCart() {
    if(itemQuant > 0){
        document.getElementById('cart').innerHTML = "cart " + itemQuant;

        //    How to change src with JS https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag
        document.getElementById("cartIcon").src = "images/shoppingCartIconRed.svg";

        //    window.alert("Added to cart!");
        showImage();
    }
}

//Popup Added to cart message
function showImage() {
    document.getElementById("added-tocart-popup").style.display = "block";

    hideImage();
}

//How to set a timer to call a function https://www.w3schools.com/jsref/met_win_settimeout.asp
function hideImage() {
    //  5000 = 5 seconds
    setTimeout(doHide, 3000);
}

function doHide() {
    document.getElementById("added-tocart-popup").style.display = "none";
}
