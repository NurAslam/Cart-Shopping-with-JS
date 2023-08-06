const cartContainer = document.querySelector(".cart__container"),
  openCart = document.querySelector("#open-cart"),
  closeCart = document.querySelector("#close-cart");

openCart.addEventListener("click", () => {
  cartContainer.classList.add("openCart");
});

closeCart.addEventListener("click", () => {
  cartContainer.classList.remove("openCart");
});

// dataList
let merchandiseList = [
  {
    id: 1,
    product_name: "T-Shirt",
    product_price: 100,
    product_image: "image-1.jpg",
    product_category: "Clothing",
  },
  {
    id: 2,
    product_name: "T-Shirt",
    product_price: 100,
    product_image: "image-2.jpg",
    product_category: "Clothing",
  },
  {
    id: 3,
    product_name: "Radience Booster",
    product_price: 89,
    product_image: "image-3.jpg",
    product_category: "Cosmetics",
  },
  {
    id: 4,
    product_name: "Foundation",
    product_price: 300,
    product_image: "image-4.jpg",
    product_category: "Cosmetics",
  },
  {
    id: 5,
    product_name: "Serum",
    product_price: 200,
    product_image: "image-5.jpg",
    product_category: "Cosmetics",
  },
];

// menampilkan semua data
const merchandiseContainer = document.querySelector(".merchandise__container");
function pushProductList() {
  merchandiseList.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("product-box");
    newDiv.innerHTML = `
        <div class="product-image">
        <img src="img/${value.product_image}" alt="">
    </div>
    <div class="product-desc">
        <span class="product-category">${value.product_category}</span>
        <span class="product-title">${value.product_name}</span>
        <span class="product-price">${value.product_price}</span>
    </div>
    <button class="add-cart" onclick="addToCart(${key})">add to Cart</button>`;
    merchandiseContainer.appendChild(newDiv);
  });
}

pushProductList();
