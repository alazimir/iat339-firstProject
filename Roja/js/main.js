//JavaScript file

//Product Page Stuff Start
var itemCount = 1;

function increaseQuantNum() {
    itemCount++;
    document.getElementById('numItems').innerHTML = itemCount;
}

function decreaseQuantNum() {
    if (itemCount > 1) {
        itemCount--;
        document.getElementById('numItems').innerHTML = itemCount;
    }
}

function addToCart() {
    if (itemCount > 0) {
        var preCartNum = document.getElementById("cartNum").innerHTML;

        preCartNumParsed = parseInt(preCartNum);

        newNum = preCartNumParsed + itemCount;

        document.getElementById('cartNum').innerHTML = newNum;

        //    How to change src with JS https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag
        document.getElementById("cartIcon").src = "images/shoppingCartIconRed.svg";

        showDiv();

    }

    //How to store values across pages
    //https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
    console.log(newNum);
    sessionStorage.setItem("cartNumItems", newNum);
    console.log(sessionStorage.getItem("cartNumItems"));
}

//Popup Added to cart message
function showDiv() {
    document.getElementById("added-tocart-popup").style.opacity = 1;

    hideDiv();
}

//How to set a timer to call a function https://www.w3schools.com/jsref/met_win_settimeout.asp
function hideDiv() {
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

//On page load to set the number of items in cart

function setCartNumItems() {
    //Setting the cart number to be 0 if nothing has been loaded into sessionstore yet.
    if(sessionStorage.getItem('cartNumItems') == null){
        sessionStorage.setItem('cartNumItems', 0);
    }
    document.getElementById("cartNum").innerHTML = sessionStorage.getItem('cartNumItems');
    
    if(parseInt(sessionStorage.getItem('cartNumItems')) > 0){
        document.getElementById("cartIcon").src = "images/shoppingCartIconRed.svg";
    }
}
