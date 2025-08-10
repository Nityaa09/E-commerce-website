// Generate 10 items per category
const products = [
  // 👖 Jeans
  {
    id: "jeans1",
    name: "Light Blue Ripped Jeans",
    price: 1199,
    image: "jeans1.jpg",
    category: "Jeans"
  },
  {
    id: "jeans2",
    name: "High Waist Distressed Jeans",
    price: 1399,
    image: "jeans2.jpg",
    category: "Jeans"
  },
  {
    id: "jeans3",
    name: "Ripped Blue Jeans",
    price: 1249,
    image: "jeans3.jpg",
    category: "Jeans"
  },
  {
    id: "jeans4",
    name: "Casual Distressed Jeans",
    price: 1299,
    image: "jeans4.jpg",
    category: "Jeans"
  },
  {
    id: "jeans5",
    name: "Regular Fit Jeans",
    price: 1199,
    image: "jeans5.jpg",
    category: "Jeans"
  },
  {
    id: "jeans6",
    name: "Denim Classic Jeans",
    price: 1399,
    image: "jeans6.jpg",
    category: "Jeans"
  },
  {
    id: "jeans7",
    name: "Black Fit Cargo Jeans",
    price: 1449,
    image: "jeans7.jpg",
    category: "Jeans"
  },
  {
    id: "jeans8",
    name: "Modern Flare Jeans",
    price: 1549,
    image: "jeans8.jpg",
    category: "Jeans"
  },
  {
    id: "jeans9",
    name: "Basic Blue Jeans",
    price: 999,
    image: "jeans9.jpg",
    category: "Jeans"
  },
  {
    id: "jeans10",
    name: "Dark Washed Jeans",
    price: 1499,
    image: "jeans10.jpg",
    category: "Jeans"
  },

  // 👕 T-Shirts
  {
    id: "tshirt1",
    name: "Classic White T-Shirt",
    price: 699,
    image: "tshirt1.jpg",
    category: "T-Shirt"
  },
  {
    id: "tshirt2",
    name: "Black Graphic T-Shirt",
    price: 799,
    image: "tshirt8.jpg",
    category: "T-Shirt"
  },
  {
    id: "tshirt3",
    name: "Cool Print Tee",
    price: 849,
    image: "tshirt3.jpg",
    category: "T-Shirt"
  },
  {
    id: "tshirt4",
    name: "Oversized T-Shirt",
    price: 899,
    image: "tshirt5.jpg",
    category: "T-Shirt"
  },
  {
    id: "tshirt5",
    name: "Round Neck T-Shirt",
    price: 699,
    image: "tshirt4.jpg",
    category: "T-Shirt"
  },
  {
    id: "tshirt6",
    name: "V-Neck T-Shirt",
    price: 749,
    image: "tshirt6.jpg",
    category: "T-Shirt"
  },
  {
    id: "tshirt7",
    name: "Printed Red Tee",
    price: 799,
    image: "tshirt7.jpg",
    category: "T-Shirt"
  },
  {
    id: "tshirt8",
    name: "Blue Sporty Tee",
    price: 749,
    image: "tshirt2.jpg",
    category: "T-Shirt"
  },
  {
    id: "tshirt9",
    name: "Street Style T-Shirt",
    price: 899,
    image: "tshirt9.jpg",
    category: "T-Shirt"
  },
  {
    id: "tshirt10",
    name: "Minimal Black Tee",
    price: 849,
    image: "tshirt10.jpg",
    category: "T-Shirt"
  },
  {
    id:"shirt",
    name:"shirt",
    price:1340,
    image:"shirt1.jpg",
    category:"Shirt"
  },
  {
    id:"shirt",
    name:"shirt",
    price:1140,
    image:"shirt6.jpg",
    category:"Shirt"
  },
  {
    id:"shirt",
    name:"shirt",
    price:1240,
    image:"shirt8.jpg",
    category:"Shirt"
  },
  {
    id:"shirt",
    name:"shirt",
    price:1440,
    image:"shirt4.jpg",
    category:"Shirt"
  },
  {
    id:"shirt",
    name:"shirt",
    price:1040,
    image:"shirt5.jpg",
    category:"Shirt"
  },
  {
    id:"shirt",
    name:"shirt",
    price:1640,
    image:"shirt2.jpg",
    category:"Shirt"
  },
  {
    id:"shirt",
    name:"shirt",
    price:1240,
    image:"shirt7.jpg",
    category:"Shirt"
  },
  {
    id:"shirt",
    name:"shirt",
    price:1140,
    image:"shirt3.jpg",
    category:"Shirt"
  },
  {
    id:"shirt",
    name:"shirt",
    price:1540,
    image:"shirt9.jpg",
    category:"Shirt"
  },
  {
    id:"shirt",
    name:"shirt",
    price:1340,
    image:"shirt10.jpg",
    category:"Shirt"
  },
  {
    id:"trouser",
    name:"Trouser",
    price:2100,
    image:"trouser1.jpg",
    category:"Trouser"
},
 {
    id:"trouser",
    name:"Trouser",
    price:2600,
    image:"trouser2.jpg",
    category:"Trouser"
},
 {
    id:"trouser",
    name:"Trouser",
    price:2800,
    image:"trouser10.jpg",
    category:"Trouser"
},
 {
    id:"trouser",
    name:"Trouser",
    price:2300,
    image:"trouser4.jpg",
    category:"Trouser"
},
 {
    id:"trouser",
    name:"Trouser",
    price:2100,
    image:"trouser6.jpg",
    category:"Trouser"
},
 {
    id:"trouser",
    name:"Trouser",
    price:2250,
    image:"trouser7.jpg",
    category:"Trouser"
},
 {
    id:"trouser",
    name:"Trouser",
    price:2369,
    image:"trouser8.jpg",
    category:"Trouser"
},
 {
    id:"trouser",
    name:"Trouser",
    price:2442,
    image:"trouser5.jpg",
    category:"Trouser"
},
 {
    id:"trouser",
    name:"Trouser",
    price:2354,
    image:"trouser9.jpg",
    category:"Trouser"
},
 {
    id:"trouser",
    name:"Trouser",
    price:2654,
    image:"trouser3.jpg",
    category:"Trouser"
},
];

let cartCount = 0;
let cartTotal = 0;

const productList = document.getElementById("product-list");
const cartCountEl = document.getElementById("cart-count");
const cartTotalEl = document.getElementById("cart-total");

function displayProducts(productArray) {
  productList.innerHTML = "";
  productArray.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button class="add-btn" onclick="addToCart('${product.id}')">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  cartCount++;
  cartTotal += product.price;
  cartCountEl.textContent = cartCount;
  cartTotalEl.textContent = `₹${cartTotal}`;
}

function filterCategory(category) {
  const filtered = products.filter(p => p.category === category);
  displayProducts(filtered);
}

// Initial Load
displayProducts(products);

