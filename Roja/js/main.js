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
    document.getElementById('cart').innerHTML = "cart " + i;
    
    window.alert("Added to cart!");
}
