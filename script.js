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

if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

// funcion
function ready() {
    //quitar items del carrito
    let removeCartButtons = document.getElementsByClassName("cart-remove")
    console.log(removeCartButtons)
    for (let i = 0; i < removeCartButtons.length; i++){
        let button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    //cambios en cantidades
    let quantityInputs = document.getElementsByClassName('cart-quantity')
    for (let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i]
        input.addEventListener("change", quantityChanged);
    }
    // agregar al carrito 
    let addCart = document.getElementsByClassName('add-cart')
    for (let i = 0; i < addCart.length; i++){
        let button = addCart[i]
        button.addEventListener('click', addcartClicked);
    }
    // boton de compra
    document
      .getElementsByClassName('btn-buy')[0]
      .addEventListener('click', buyButtonClicked);
}
// funcion boton de compra
function buyButtonClicked(){
    Swal.fire('Tu orden ha sido tomada')

}

// cantidades cambios
  function quantityChanged(event){
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1; 
    }
    updatetotal();
  }

//removiendo items del carro

function removeCartItem(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//agregando items al carro

function addcartClicked(event){
    let button = event.target;
    let shopProducts = button.parentElement;
    let title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    let price = shopProducts.getElementsByClassName('price')[0].innerText;
    let productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}


function updatetotal(){
    let cartContent = document.getElementsByClassName('cart-content')[0];
    let cartBoxes = cartContent.getElementsByClassName('cart-box');
    let total = 0;
    for (let i = 0; i < cartBoxes.length; i++){
        let cartBox = cartBoxes[i]
        let priceElement = cartBox.getElementsByClassName('cart-price')[0]
        let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        let price = parseFloat(priceElement.innerText.replace("$", ""));
        let quantity = quantityElement.value;
        total = total + (price * quantity);

        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    }
}



function addProductToCart(title, price, productImg) {
    let cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    let cartItems = document.getElementsByClassName('cart-content')[0];
    let cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for (let i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            Swal.fire('Este producto ya ha sido agregado a su carrito');
            return;
        } 
    }

    let cartBoxContent = `
                            <img src="${productImg}" alt="" class="cart-img">
                            <div class="detail-box">
                               <div class="cart-product-title">${title}</div>
                               <div class="cart-price">${price}</div>
                               <input type="number" value="1" class="cart-quantity">
                            </div>

                            <i class="bx bxs-trash-alt cart-remove"></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
      .getElementsByClassName('cart-remove')[0]
      .addEventListener('click', removeCartItem);
    cartShopBox
      .getElementsByClassName('cart-quantity')[0]
      .addEventListener('change', quantityChanged);

    
    //registro de usuario en el local storage

    class Registros {
        constructor(nombre, email) {
            this.nombre = nombre;
            this.email = email;
        }
    }

    let registros = []

    localStorage.setItem('Registros', JSON.stringify(registros))

    let nombre = []
    let email = []



    let formularioId = document.querySelector('#formulario')
    let divRegistros = document.querySelector('#divRegistros')

    formularioId.addEventListener('submit', (e) => {
        e.preventDefault()
        let datForm = new FormData(e.target)
        const registro = new Registros(datForm.get('nombre'), datForm.get('email'))
        registros.push(registro)
        console.log(registros)
        localStorage.setItem('Registros', JSON.stringify(registros))
        formularioId.reset()

    formularioId.addEventListener('submit' (e)) 
    {
        e.Swal.fire('Any fool can use a computer')

    }
        

    }) }