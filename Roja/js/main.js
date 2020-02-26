//JavaScript file

var i = 0;
    function increaseQuantNum() {
        i++;
        document.getElementById('inc').innerHTML = i;
    }

    function decreaseQuantNum() {
        if(i > 0){
            i--;
            document.getElementById('inc').innerHTML = i;
        }
    }

function addToCart() {
//    var cartVal = document.getElementById('cart').innerHTML;
//    console.log(cartVal);
    
    document.getElementById('cart').innerHTML = "cart " + i;
    
    document.getElementById("cartIcon").src = "images/shoppingCartIconRed.svg";
    
    window.alert("Added to cart!");
}
