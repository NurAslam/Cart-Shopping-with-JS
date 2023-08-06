const cartContainer = document.querySelector('.cart__container'),
    openCart = document.querySelector('#open-cart'),
    closeCart = document.querySelector('#close-cart');


openCart.addEventListener('click', () => {
    cartContainer.classList.add('openCart');
});

closeCart.addEventListener('click', () => {
    cartContainer.classList.remove('openCart');
});