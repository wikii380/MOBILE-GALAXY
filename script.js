// Mobile products data
const products = [
    {
        name: "Redmi Note 14",
        price: "PKR 52,500",
        category: "New Mobile",
        img: "redmi note14.jpg",
        brand: "other"
    },
    {
        name: "Vivo Y200",
        price: "PKR 57,500",
        category: "New Mobile",
        img: "y200.jpg",
        brand: "vivo"
    },
    {
        name: "Oppo A5 Pro",
        price: "PKR 55,000",
        category: "New Mobile",
        img: "a5pro.jpg",
        brand: "oppo"
    },
    {
        name: "Tecno Spark Go 2",
        price: "PKR 22,999",
        category: "New Mobile",
        img: "sparkgo2.jpg",
        brand: "tecno"
    },
    {
        name: "Itel s 25",
        price: "PKR 29,999",
        category: "New Mobile",
        img: "s25.jpg",
        brand: "other"
    },
    {
        name: "Infinix Smart 10 Plus",
        price: "PKR 28,999",
        category: "New Mobile",
        img: "smart 10 plus.jpg",
        brand: "infinix"
    },
    {
        name: "Realme 12 4G",
        price: "PKR 47,999",
        category: "New Mobile",
        img: "realme124g.jpg",
        brand: "realme"
    },
    {
        name: "Mobile Covers",
        price: "PKR 250 - 1,500",
        category: "Accessories",
        img: "cover.jpg",
        brand: "other"
    },
    {
        name: "Handfree",
        price: "PKR 350 - 2,500",
        category: "Accessories",
        img: "handfree.jpg",
        brand: "other"
    },
    {
        name: "Charger",
        price: "PKR 500 - 2,000",
        category: "Accessories",
        img: "charger.jpg",
        brand: "other"
    },
    {
        name: "Mobile Protector",
        price: "PKR 200 - 800",
        category: "Accessories",
        img: "glass.jpg",
        brand: "other"
    },
];

// Function to render products
function renderProducts(filterBrand = null) {
    const container = document.querySelector('.products');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filteredProducts = filterBrand 
        ? products.filter(product => product.brand === filterBrand)
        : products;

    filteredProducts.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}" class="product-img">
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">${product.price}</div>
                    <a href="https://wa.me/923251790127?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}" class="btn btn-whatsapp">
                        <i class="fab fa-whatsapp"></i> Enquire Now
                    </a>
                </div>
            </div>
        `;
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on a brand page
    const path = window.location.pathname;
    const brand = path.split('/').pop().replace('.html', '');
    
    if (brand && brand !== 'index' && brand !== 'index.html') {
        renderProducts(brand);
    } else {
        renderProducts();
    }
});