//JavaScript file

//Collapsed Main Nav
function openNav() {
    document.getElementById("collapsedTopNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("collapsedTopNav").style.width = "0";
}

//Collapsed Store Filters
function openFilters() {
    document.getElementById("collapsedSideFilters").style.width = "250px";
}

function closeFilters() {
    document.getElementById("collapsedSideFilters").style.width = "0";
}

//Product Page Stuff Start
var itemCount = 1;


//Setting the current filter
function setFilter(newFilter) {
    console.log(newFilter);
    
    sessionStorage.setItem("currentFilter", newFilter);
}

function loadFilter(){
    if(sessionStorage.getItem("currentFilter") != null){
    showOnly(sessionStorage.getItem("currentFilter"));
    }else{
        showOnly('all-heat');
    }
    
    sessionStorage.setItem("currentFilter", "all-heat");
}

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
        var preCartNums = document.getElementsByClassName('cartNum');
        console.log(preCartNums);

        preCartNumParsed = parseInt(preCartNums[0].innerHTML);

        newNum = preCartNumParsed + itemCount;

        var cartNums = document.getElementsByClassName('cartNum').innerHTML;
        preCartNums[0].innerHTML = newNum;
        preCartNums[1].innerHTML = newNum;

        //    How to change src with JS https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag
        var cartImg = document.getElementsByClassName("cartIcon");
        cartImg[0].src = "images/shoppingCartIconRed.svg";
        cartImg[1].src = "images/shoppingCartIconRed.svg";

        showDiv();

    }

    //How to store values across pages
    //https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
    sessionStorage.setItem("cartNumItems", newNum);
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

function showOnly(select) {
    //-----Get all side buttons
    var allFilterText = document.getElementById("sideMenu").querySelectorAll("h3");

    //-----Remove the selected class from all buttons
    for (var i = 0; i < allFilterText.length; i++) {
        allFilterText[i].classList.remove("selected-side-nav");
    }

    //-----Set the button that called the function to selected class
//    element.classList.add("selected-side-nav");
   

    //-----Set arrays of all cards, and each heat level.
    //Selector info https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

    //All sauces
    var all = document.getElementsByClassName('product-listing');
    
    //On Sale Sauces
    var onSale = document.getElementsByClassName('on-sale');
    
    //New Items
    var newItems = document.getElementsByClassName('new-item');
    
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
        document.getElementById("allSauces").classList.add("selected-side-nav");
        
        document.getElementById("storeCurrentHeader").innerHTML = "All Sauces";
        document.getElementById("storeCurrentPara").innerHTML = "Every single sauce we carry. We are confident you can find something you like. If you can't, <a class=\"red-bold-text\" href=\"contact.html\">send us a message</a> with any suggestions!";

            
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = "flex";
        }
    }
    
    //Change sale back to flex
    if (select == 'sale') {
        document.getElementById("onSale").classList.add("selected-side-nav");
        
        document.getElementById("storeCurrentHeader").innerHTML = "On Sale Now";
        document.getElementById("storeCurrentPara").innerHTML = "These sales won't last long! Grab yourself a discounted bottle today.";

            
        for (var i = 0; i < onSale.length; i++) {
            onSale[i].style.display = "flex";
        }
    }
    
    //Change sale back to flex
    if (select == 'new') {
        document.getElementById("newItems").classList.add("selected-side-nav");
        
        document.getElementById("storeCurrentHeader").innerHTML = "Brand New Additions";
        document.getElementById("storeCurrentPara").innerHTML = "These are are most recently added sauces. Try them out and leave a review telling us what you think!";

            
        for (var i = 0; i < newItems.length; i++) {
            newItems[i].style.display = "flex";
        }
    }

    //-----Change mild classes back to flex
    if (select == 'mild-heat') {
        document.getElementById("mildHeat").classList.add("selected-side-nav");
        
        document.getElementById("storeCurrentHeader").innerHTML = "Mild Sauces";
        document.getElementById("storeCurrentPara").innerHTML = "For those who like a lot of flavor without the heat. Try a new mild sauce like a tangy green chile sauce from Inthisorn Food's, or mild buffalo.";
        
        for (var i = 0; i < mild.length; i++) {
            mild[i].style.display = "flex";
        }
    }

      //-----Change medium classes back to flex
    if (select == 'medium-heat') {
        document.getElementById("mediumHeat").classList.add("selected-side-nav");
        
        document.getElementById("storeCurrentHeader").innerHTML = "Medium Sauces";
        document.getElementById("storeCurrentPara").innerHTML = "While these sauces aren't going to burn your tounge off their flavour is nothing to scoff at. If you're craving a little kick with your food this is the place for you.";
        
        for (var i = 0; i < medium.length; i++) {
            medium[i].style.display = "flex";
        }
    }

    //-----Change hot classes back to flex
    if (select == 'hot-heat') {
        document.getElementById("hotHeat").classList.add("selected-side-nav");
        
        document.getElementById("storeCurrentHeader").innerHTML = "Hot Sauces";
        document.getElementById("storeCurrentPara").innerHTML = "Now were bringing the heat. If you're here for the name of the game, jump into the hot sauces. Theres nothing quite like the burn of a habanero sauce.";
        
        for (var i = 0; i < hot.length; i++) {
            hot[i].style.display = "flex";
        }
    }

    //-----Change insane classes back to flex
    if (select == 'insane-heat') {
        document.getElementById("insaneHeat").classList.add("selected-side-nav");
        
        document.getElementById("storeCurrentHeader").innerHTML = "Insane Sauces";
        document.getElementById("storeCurrentPara").innerHTML = "Only for the most extreme hot sauce fanatics. Caution required when testing a new ultra spicy ghost pepper sauce. It won't be an experience you soon forget.";
        
        for (var i = 0; i < insane.length; i++) {
            insane[i].style.display = "flex";
        }
    }

    //-----Change melindas back to flex
    if (select == 'melindas-brand') {
        document.getElementById("melindas").classList.add("selected-side-nav");
        
        document.getElementById("storeCurrentHeader").innerHTML = "Melinda's Sauces"
        document.getElementById("storeCurrentPara").innerHTML = "";
            
        for (var i = 0; i < melindas.length; i++) {
            melindas[i].style.display = "flex";
        }
    }

    //-----Change daves back to flex
    if (select == 'daves-brand') {
        document.getElementById("daves").classList.add("selected-side-nav");
        
        document.getElementById("storeCurrentHeader").innerHTML = "Dave's Sauces"
        document.getElementById("storeCurrentPara").innerHTML = "";
    
        for (var i = 0; i < daves.length; i++) {
            daves[i].style.display = "flex";
        }
    }

    //-----Change currie back to flex
    if (select == 'currie-brand') {
        document.getElementById("currie").classList.add("selected-side-nav");
        
        document.getElementById("storeCurrentHeader").innerHTML = "Currie Sauces"
        document.getElementById("storeCurrentPara").innerHTML = "";
            
        for (var i = 0; i < currie.length; i++) {
            currie[i].style.display = "flex";
        }
    }

    //-----Change tessemaes back to flex
    if (select == 'tessemaes-brand') {
        document.getElementById("tessemaes").classList.add("selected-side-nav");
        
        document.getElementById("storeCurrentHeader").innerHTML = "Tessemae's Sauces"
        document.getElementById("storeCurrentPara").innerHTML = "";
            
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
    var cartNumsSet = document.getElementsByClassName("cartNum");
    cartNumsSet[0].innerHTML = sessionStorage.getItem('cartNumItems');
    cartNumsSet[1].innerHTML = sessionStorage.getItem('cartNumItems');
    
    if(parseInt(sessionStorage.getItem('cartNumItems')) > 0){
        var cartImg = document.getElementsByClassName("cartIcon");
        cartImg[0].src = "images/shoppingCartIconRed.svg";
        cartImg[1].src = "images/shoppingCartIconRed.svg";
    }
}
