const products = [
    {id:1, name:"Wireless Headphone", price:20000, image:"Images/headphn.jpg"},
    {id:2, name:" Lenovo IdeaPad", price:80000, image:"Images/laptop.jpg"},
    {id:3, name:"Iphone 16 Pro Max", price:200000, image:"Images/phone.jpg"},
    {id:4, name:"Bluetooth Speaker", price:10000, image:"Images/speaker.jpg"},
    {id:5, name:"AppleWatch", price:70000, image:"Images/watch.jpg"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  const list = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}"/>
      <h3>${product.name}</h3>
      <p>NRs.${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    list.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

renderProducts();
updateCartCount();
