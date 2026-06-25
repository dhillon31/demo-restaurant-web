const foods = [
  {
    name: "Pizza",
    price: 299,
    image: "images/pizza.jpg"
  },
  {
    name: "Burger",
    price: 149,
    image: "images/burger.jpg"
  },
  {
    name: "Pasta",
    price: 199,
    image: "images/pasta.jpg"
  },
  {
    name: "Biryani",
    price: 249,
    image: "images/biryani.jpg"
  },
  {
    name: "Coffee",
    price: 99,
    image: "images/coffee.jpg"
  }
];

const menu = document.getElementById("menuContainer");

foods.forEach(food => {
  menu.innerHTML += `
    <div class="card">
      <img src="${food.image}" alt="${food.name}">
      
      <div class="card-content">
        <h3>${food.name}</h3>
        <div class="price">Rs.${food.price}</div>

        <a href="tel:+919876543210" class="order-btn">
          Order Now
        </a>
      </div>
    </div>
  `;
});