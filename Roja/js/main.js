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
    if (itemCount > 0) {
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

function showOnly(element, select) {
    //-----Get all side buttons
    var allFilterText = document.getElementById("sideMenu").querySelectorAll("h3");

    //-----Remove the selected class from all buttons
    for (var i = 0; i < allFilterText.length; i++) {
        allFilterText[i].classList.remove("selected-side-nav");
    }

    //-----Set the button that called the function to selected class
    element.classList.add("selected-side-nav");

    //-----Set arrays of all cards, and each heat level.
    //Selector info https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
    
    //All sauces
    var all = document.getElementsByClassName('product-listing');
    
    //By heat
    var mild = document.getElementsByClassName("mild-heat");
    var medium = document.getElementsByClassName("medium-heat");
    var hot = document.getElementsByClassName("hot-heat");
    var insane = document.getElementsByClassName("insane-heat");
    
    //By brand
    var melindas = document.getElementsByClassName("melindas-brand");
    var daves = document.getElementsByClassName("daves-brand");
    var currie = document.getElementsByClassName("currie-brand");
    var tessemaes = document.getElementsByClassName("tessemaes-brand");

    //-----First set all to be hidden
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }

    //-----Change all back to flex
    if (select == 'all-heat') {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = "flex";
        }
    }

    //-----Change mild classes back to flex
    if (select == 'mild-heat') {
        for (var i = 0; i < mild.length; i++) {
            mild[i].style.display = "flex";
        }
    }

    //-----Change medium classes back to flex
    if (select == 'medium-heat') {
        for (var i = 0; i < medium.length; i++) {
            medium[i].style.display = "flex";
        }
    }

    //-----Change hot classes back to flex
    if (select == 'hot-heat') {
        for (var i = 0; i < hot.length; i++) {
            hot[i].style.display = "flex";
        }
    }

    //-----Change insane classes back to flex
    if (select == 'insane-heat') {
        for (var i = 0; i < insane.length; i++) {
            insane[i].style.display = "flex";
        }
    }
    
    //-----Change melindas back to flex
    if (select == 'melindas-brand') {
        for (var i = 0; i < melindas.length; i++) {
            melindas[i].style.display = "flex";
        }
    }
    
    //-----Change daves back to flex
    if (select == 'daves-brand') {
        for (var i = 0; i < daves.length; i++) {
            daves[i].style.display = "flex";
        }
    }
    
    //-----Change currie back to flex
    if (select == 'currie-brand') {
        for (var i = 0; i < currie.length; i++) {
            currie[i].style.display = "flex";
        }
    }
    
    //-----Change tessemaes back to flex
    if (select == 'tessemaes-brand') {
        for (var i = 0; i < tessemaes.length; i++) {
            tessemaes[i].style.display = "flex";
        }
    }
}

//Old way to do it. New way is condenced into one function
//
//function showAll(element) {
//    var allFilterText = document.getElementById("sideMenu").querySelectorAll("h3");
//
//    for (var i = 0; i < allFilterText.length; i++) {
//        allFilterText[i].classList.remove("selected-side-nav");
//    }
//
//    element.classList.add("selected-side-nav");
//
//    var mild = document.getElementsByClassName("mild-heat");
//    var medium = document.getElementsByClassName("medium-heat");
//    var hot = document.getElementsByClassName("hot-heat");
//    var insane = document.getElementsByClassName("insane-heat");
//
//    for (var i = 0; i < mild.length; i++) {
//        mild[i].style.display = "flex";
//    }
//
//    for (var i = 0; i < medium.length; i++) {
//        medium[i].style.display = "flex";
//    }
//
//    for (var i = 0; i < hot.length; i++) {
//        hot[i].style.display = "flex";
//    }
//
//    for (var i = 0; i < insane.length; i++) {
//        insane[i].style.display = "flex";
//    }
//}
//function showOnlyMedium(element) {
//    var allFilterText = document.getElementById("sideMenu").querySelectorAll("h3");
//
//    for (var i = 0; i < allFilterText.length; i++) {
//        allFilterText[i].classList.remove("selected-side-nav");
//    }
//
//    element.classList.add("selected-side-nav");
//
//    var mild = document.getElementsByClassName("mild-heat");
//    var medium = document.getElementsByClassName("medium-heat");
//    var hot = document.getElementsByClassName("hot-heat");
//    var insane = document.getElementsByClassName("insane-heat");
//
//    for (var i = 0; i < mild.length; i++) {
//        mild[i].style.display = "none";
//    }
//
//    for (var i = 0; i < medium.length; i++) {
//        medium[i].style.display = "flex";
//    }
//
//    for (var i = 0; i < hot.length; i++) {
//        hot[i].style.display = "none";
//    }
//
//    for (var i = 0; i < insane.length; i++) {
//        insane[i].style.display = "none";
//    }
//}
//
//function showOnlyHot(element) {
//    var allFilterText = document.getElementById("sideMenu").querySelectorAll("h3");
//
//    for (var i = 0; i < allFilterText.length; i++) {
//        allFilterText[i].classList.remove("selected-side-nav");
//    }
//
//    element.classList.add("selected-side-nav");
//
//    var mild = document.getElementsByClassName("mild-heat");
//    var medium = document.getElementsByClassName("medium-heat");
//    var hot = document.getElementsByClassName("hot-heat");
//    var insane = document.getElementsByClassName("insane-heat");
//
//    for (var i = 0; i < mild.length; i++) {
//        mild[i].style.display = "none";
//    }
//
//    for (var i = 0; i < medium.length; i++) {
//        medium[i].style.display = "none";
//    }
//
//    for (var i = 0; i < hot.length; i++) {
//        hot[i].style.display = "flex";
//    }
//
//    for (var i = 0; i < insane.length; i++) {
//        insane[i].style.display = "none";
//    }
//}
//
//function showOnlyInsane(element) {
//    var allFilterText = document.getElementById("sideMenu").querySelectorAll("h3");
//
//    for (var i = 0; i < allFilterText.length; i++) {
//        allFilterText[i].classList.remove("selected-side-nav");
//    }
//
//    element.classList.add("selected-side-nav");
//
//    var mild = document.getElementsByClassName("mild-heat");
//    var medium = document.getElementsByClassName("medium-heat");
//    var hot = document.getElementsByClassName("hot-heat");
//    var insane = document.getElementsByClassName("insane-heat");
//
//    for (var i = 0; i < mild.length; i++) {
//        mild[i].style.display = "none";
//    }
//
//    for (var i = 0; i < medium.length; i++) {
//        medium[i].style.display = "none";
//    }
//
//    for (var i = 0; i < hot.length; i++) {
//        hot[i].style.display = "none";
//    }
//
//    for (var i = 0; i < insane.length; i++) {
//        insane[i].style.display = "flex";
//    }
//}
//Store filtering
