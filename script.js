//carrito

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//abrircarrito
cartIcon.onclick = () => {
    cart.classList.add("active");
};

//cerrarcarrito
closeCart.onclick = () => {
    cart.classList.remove("active");
};

//carritotrabajando

if (document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}


//agregar al carrito
function addcartClicked(event) {
    let button = event.target 
    
}




