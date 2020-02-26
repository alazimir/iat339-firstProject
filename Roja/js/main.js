//JavaScript file

//Product Page Stuff Start
var itemCount = 0;

function increaseQuantNum() {
    itemCount++;
    document.getElementById('inc').innerHTML = itemCount;
}

function decreaseQuantNum() {
    if (itemCount > 0) {
        itemCount--;
        document.getElementById('inc').innerHTML = itemCount;
    }
}

function addToCart() {
    if(itemCount > 0){
        document.getElementById('cart').innerHTML = "cart " + itemCount;

        //    How to change src with JS https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag
        document.getElementById("cartIcon").src = "images/shoppingCartIconRed.svg";

        //    window.alert("Added to cart!");
        showImage();
    }
}

//Popup Added to cart message
function showImage() {
    document.getElementById("added-tocart-popup").style.opacity = 1;

    hideImage();
}

//How to set a timer to call a function https://www.w3schools.com/jsref/met_win_settimeout.asp
function hideImage() {
    //  5000 = 5 seconds
    setTimeout(doHide, 3000);
}

function doHide() {
    document.getElementById("added-tocart-popup").style.opacity = 0;
}

//Product page stuff end

//Store stuff start

function showAll(){
    var mild = document.getElementsByClassName("mild-heat");
    var medium = document.getElementsByClassName("medium-heat");
    var hot = document.getElementsByClassName("hot-heat");
    var insane = document.getElementsByClassName("insane-heat");

    for (var i = 0; i < mild.length; i++){
        mild[i].style.display = "flex";
    }
    
    for (var i = 0; i < medium.length; i++){
        medium[i].style.display = "flex";
    }
    
    for (var i = 0; i < hot.length; i++){
        hot[i].style.display = "flex";
    }
    
    for (var i = 0; i < insane.length; i++){
        insane[i].style.display = "flex";
    }
}

function showOnlyMild(element){
    element.style.color = "#FF220D";
    
    var mild = document.getElementsByClassName("mild-heat");
    var medium = document.getElementsByClassName("medium-heat");
    var hot = document.getElementsByClassName("hot-heat");
    var insane = document.getElementsByClassName("insane-heat");
    

    for (var i = 0; i < mild.length; i++){
        mild[i].style.display = "flex";
    }
    
    for (var i = 0; i < medium.length; i++){
        medium[i].style.display = "none";
    }
    
    for (var i = 0; i < hot.length; i++){
        hot[i].style.display = "none";
    }
    
    for (var i = 0; i < insane.length; i++){
        insane[i].style.display = "none";
    }
}

function showOnlyMedium(){
    var mild = document.getElementsByClassName("mild-heat");
    var medium = document.getElementsByClassName("medium-heat");
    var hot = document.getElementsByClassName("hot-heat");
    var insane = document.getElementsByClassName("insane-heat");

    for (var i = 0; i < mild.length; i++){
        mild[i].style.display = "none";
    }
    
    for (var i = 0; i < medium.length; i++){
        medium[i].style.display = "flex";
    }
    
    for (var i = 0; i < hot.length; i++){
        hot[i].style.display = "none";
    }
    
    for (var i = 0; i < insane.length; i++){
        insane[i].style.display = "none";
    }
}

function showOnlyHot(){
    var mild = document.getElementsByClassName("mild-heat");
    var medium = document.getElementsByClassName("medium-heat");
    var hot = document.getElementsByClassName("hot-heat");
    var insane = document.getElementsByClassName("insane-heat");

    for (var i = 0; i < mild.length; i++){
        mild[i].style.display = "none";
    }
    
    for (var i = 0; i < medium.length; i++){
        medium[i].style.display = "none";
    }
    
    for (var i = 0; i < hot.length; i++){
        hot[i].style.display = "flex";
    }
    
    for (var i = 0; i < insane.length; i++){
        insane[i].style.display = "none";
    }
}

function showOnlyInsane(){
    var mild = document.getElementsByClassName("mild-heat");
    var medium = document.getElementsByClassName("medium-heat");
    var hot = document.getElementsByClassName("hot-heat");
    var insane = document.getElementsByClassName("insane-heat");

    for (var i = 0; i < mild.length; i++){
        mild[i].style.display = "none";
    }
    
    for (var i = 0; i < medium.length; i++){
        medium[i].style.display = "none";
    }
    
    for (var i = 0; i < hot.length; i++){
        hot[i].style.display = "none";
    }
    
    for (var i = 0; i < insane.length; i++){
        insane[i].style.display = "flex";
    }
}
//Store filtering

