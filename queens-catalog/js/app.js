// QUEENS CATALOG - Main Application with Tailwind CSS
// Cyberpunk Luxury Theme - Black & Hot Pink

// Product Data
const categories = [
  { id: "all", name: "Semua Produk" },
  { id: "smartphones", name: "Smartphone" },
  { id: "laptops", name: "Laptop" },
  { id: "accessories", name: "Aksesori" },
  { id: "wearables", name: "Wearable" },
  { id: "olahragaOutdor", name: "olahraga & Outdor" },
];

const products = [
  {
    id: "1",
    name: "Sepeda Listrik GODA 118Y",
    category: "olahragaOutdor",
    price: 3999000,
    originalPrice: 4999000,
    image: "images/GODA-118Y-hitam.jpeg",
    images: ["images/GODA-118Y-hitam.jpeg", "images/GODA-118Y-putih.jpeg", "images/GODA-118Y-merah.jpeg"],
    description: "BARANG 100% ORIGINAL GARANSI RESMI HATI-HATI HARGA MURAH DI TOKO LAIN, SPAREPART OPLOSAN (TIDAK ORI), TIDAK BERGARANSI, TIDAK BISA CLAIM APAPUN! KELENGKAPAN : - SPION - SMARTCHARGER - PEDAL (BEBERAPA TIPE TANPA PEDAL)",
    rating: 4.8,
    reviews: 245,
    inStock: true,
    specs: {
      MotorPower: "800 Watt",
      Baterai: "Lithium 48V 24Ah",
      Carger: "Fast Charging Output 54,6 V - 6 Ampere",
      Penyimpanan: "256GB",
      Kamera: "48MP + 12MP + 12MP",
      Baterai: "4685 mAh",
    },
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    category: "smartphones",
    price: 13999000,
    originalPrice: 16999000,
    image: "images/GODA-118Y-hitam.jpeg",
    images: ["images/GODA-118Y-hitam.jpeg", "images/GODA-118Y-merah.jpeg", "images/GODA-118Y-putih.jpeg"],
    description: "Flagship Android dengan AI dan kamera revolusioner",
    rating: 4.7,
    reviews: 189,
    inStock: true,
    specs: {
      Layar: "6.8 inch Dynamic AMOLED 2X",
      Prosesor: "Snapdragon 8 Gen 3",
      RAM: "12GB",
      Penyimpanan: "512GB",
      Kamera: "200MP + 50MP + 10MP + 10MP",
      Baterai: "5000 mAh",
    },
  },
  {
    id: "3",
    name: "MacBook Pro 16 M3 Max",
    category: "laptops",
    price: 29999000,
    originalPrice: 35999000,
    image: "images/GODA-118Y-hitam.jpeg",
    images: ["images/GODA-118Y-hitam.jpeg", "images/GODA-118Y-merah.jpeg", "images/category-wearables.jpg"],
    description: "Laptop profesional dengan performa tinggi untuk creative professionals",
    rating: 4.9,
    reviews: 156,
    inStock: true,
    specs: {
      Layar: "16 inch Liquid Retina XDR",
      Prosesor: "Apple M3 Max",
      RAM: "36GB",
      Penyimpanan: "1TB SSD",
      GPU: "16-core GPU",
      Baterai: "hingga 18 jam",
    },
  },
  {
    id: "4",
    name: "Dell XPS 15",
    category: "laptops",
    price: 18999000,
    originalPrice: 22999000,
    image: "images/GODA-118Y-hitam.jpeg",
    images: ["images/GODA-118Y-hitam.jpeg", "images/GODA-118Y-putih.jpeg", "images/GODA-118Y-merah.jpeg"],
    description: "Laptop premium dengan desain elegan dan performa powerful",
    rating: 4.6,
    reviews: 134,
    inStock: true,
    specs: {
      Layar: "15.6 inch OLED",
      Prosesor: "Intel Core i7-13700H",
      RAM: "16GB",
      Penyimpanan: "512GB SSD",
      GPU: "NVIDIA RTX 4060",
      Baterai: "hingga 12 jam",
    },
  },
  {
    id: "5",
    name: "Sony WH-1000XM5",
    category: "accessories",
    price: 3999000,
    originalPrice: 4999000,
    image: "images/GODA-118Y-putih.jpeg",
    images: ["images/GODA-118Y-putih.jpeg", "images/GODA-118Y-hitam.jpeg", "images/GODA-118Y-merah.jpeg"],
    description: "Headphone wireless premium dengan noise cancellation terbaik",
    rating: 4.8,
    reviews: 512,
    inStock: true,
    specs: {
      Tipe: "Over-ear Wireless",
      "Noise Cancellation": "Industry-leading ANC",
      Baterai: "hingga 30 jam",
      Konektivitas: "Bluetooth 5.3",
      Driver: "30mm",
      Fitur: "Multipoint Connection",
    },
  },
  {
    id: "6",
    name: "Apple AirPods Pro 2",
    category: "accessories",
    price: 2999000,
    originalPrice: 3699000,
    image: "images/GODA-118Y-putih.jpeg",
    images: ["images/GODA-118Y-putih.jpeg", "images/category-wearables.jpg", "images/GODA-118Y-hitam.jpeg"],
    description: "Earbuds premium dengan ANC dan audio spatial yang memukau",
    rating: 4.7,
    reviews: 789,
    inStock: true,
    specs: {
      Tipe: "In-ear Wireless",
      "Noise Cancellation": "Adaptive Audio",
      Baterai: "6 jam (30 jam dengan case)",
      Konektivitas: "Bluetooth 5.3",
      Fitur: "Spatial Audio, Conversation Awareness",
      "Tahan Air": "IP54",
    },
  },
  {
    id: "7",
    name: "Apple Watch Series 9",
    category: "wearables",
    price: 4999000,
    originalPrice: 6299000,
    image: "images/category-wearables.jpg",
    images: ["images/category-wearables.jpg", "images/GODA-118Y-putih.jpeg", "images/GODA-118Y-merah.jpeg"],
    description: "Smartwatch terdepan dengan kesehatan dan fitness tracking",
    rating: 4.8,
    reviews: 423,
    inStock: true,
    specs: {
      Layar: "Retina LTPO OLED",
      Ukuran: "41mm / 45mm",
      Prosesor: "S9",
      Baterai: "hingga 18 jam",
      "Tahan Air": "50m",
      Sensor: "ECG, Temperature, Blood Oxygen",
    },
  },
  {
    id: "8",
    name: "Samsung Galaxy Watch 6 Classic",
    category: "wearables",
    price: 3499000,
    originalPrice: 4299000,
    image: "images/category-wearables.jpg",
    images: ["images/category-wearables.jpg", "images/GODA-118Y-merah.jpeg", "images/GODA-118Y-putih.jpeg"],
    description: "Smartwatch dengan rotating bezel dan Wear OS 3",
    rating: 4.6,
    reviews: 267,
    inStock: true,
    specs: {
      Layar: "AMOLED",
      Ukuran: "43mm / 47mm",
      Prosesor: "Exynos W920",
      Baterai: "hingga 5 hari",
      "Tahan Air": "5ATM",
      Sensor: "Heart Rate, SpO2, Temperature",
    },
  },
  {
    id: "9",
    name: "Google Pixel 8 Pro",
    category: "smartphones",
    price: 11999000,
    originalPrice: 14999000,
    image: "images/GODA-118Y-hitam.jpeg",
    images: ["images/GODA-118Y-hitam.jpeg", "images/GODA-118Y-putih.jpeg", "images/category-wearables.jpg"],
    description: "Flagship Google dengan AI dan fotografi terdepan",
    rating: 4.7,
    reviews: 198,
    inStock: true,
    specs: {
      Layar: "6.7 inch QHD+ OLED",
      Prosesor: "Google Tensor G3",
      RAM: "12GB",
      Penyimpanan: "512GB",
      Kamera: "50MP + 48MP + 48MP",
      Baterai: "5050 mAh",
    },
  },
  {
    id: "10",
    name: "ASUS ROG Zephyrus G16",
    category: "laptops",
    price: 24999000,
    originalPrice: 29999000,
    image: "images/GODA-118Y-hitam.jpeg",
    images: ["images/GODA-118Y-hitam.jpeg", "images/GODA-118Y-merah.jpeg", "images/GODA-118Y-putih.jpeg"],
    description: "Gaming laptop dengan performa ekstrem untuk gamers profesional",
    rating: 4.8,
    reviews: 145,
    inStock: true,
    specs: {
      Layar: "16 inch 2.5K 240Hz",
      Prosesor: "Intel Core i9-13980HX",
      RAM: "32GB",
      Penyimpanan: "2TB SSD",
      GPU: "NVIDIA RTX 4090",
      Baterai: "hingga 10 jam",
    },
  },
  {
    id: "11",
    name: "Anker PowerCore 26800",
    category: "accessories",
    price: 699000,
    originalPrice: 999000,
    image: "images/GODA-118Y-putih.jpeg",
    images: ["images/GODA-118Y-putih.jpeg", "images/GODA-118Y-hitam.jpeg", "images/GODA-118Y-merah.jpeg"],
    description: "Power bank kapasitas besar dengan charging cepat",
    rating: 4.5,
    reviews: 1203,
    inStock: true,
    specs: {
      Kapasitas: "26800mAh",
      Output: "2x USB-A + 1x USB-C",
      Charging: "Fast Charging 65W",
      Berat: "550g",
      Garansi: "2 tahun",
      Fitur: "LED Display",
    },
  },
  {
    id: "12",
    name: "Fitbit Sense 2",
    category: "wearables",
    price: 1999000,
    originalPrice: 2499000,
    image: "images/category-wearables.jpg",
    images: ["images/category-wearables.jpg", "images/GODA-118Y-putih.jpeg", "images/GODA-118Y-merah.jpeg"],
    description: "Smartwatch kesehatan dengan stress management dan EDA sensor",
    rating: 4.4,
    reviews: 156,
    inStock: true,
    specs: {
      Layar: "AMOLED",
      Ukuran: "40.5mm",
      Baterai: "hingga 6 hari",
      "Tahan Air": "50m",
      Sensor: "EDA, ECG, SpO2, Temperature",
      Fitur: "Stress Management, Sleep Tracking",
    },
  },
];

// State
let state = {
  selectedCategory: "all",
  searchQuery: "",
  priceRange: [0, 40000000],
  sortBy: "newest",
  minRating: 0,
  filteredProducts: products,
};

// Utility Functions
function formatPrice(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

function calculateDiscount(original, current) {
  return Math.round(((original - current) / original) * 100);
}

function renderStars(rating) {
  let stars = "";
  for (let i = 0; i < Math.floor(rating); i++) {
    stars += "★";
  }
  return stars;
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeCategories();
  filterAndRenderProducts();
  setupEventListeners();
  setupRouting();
  setupAdminPanel();
});

// Initialize Categories
function initializeCategories() {
  const categoryContainer = document.getElementById("categoryFilters");
  const categoryContainerMobile = document.getElementById("categoryFiltersMobile");

  const categoryHTML = categories
    .map(
      (cat) => `
    <button class="category-btn w-full text-left px-4 py-2 rounded transition-all text-sm ${cat.id === "all" ? "bg-primary text-white font-semibold" : "text-text-secondary hover:text-text-primary hover:bg-dark-secondary"}" data-category="${cat.id}">
      ${cat.name}
    </button>
  `,
    )
    .join("");

  categoryContainer.innerHTML = categoryHTML;
  categoryContainerMobile.innerHTML = categoryHTML;
}

// Setup Event Listeners
function setupEventListeners() {
  // Category filters
  document.querySelectorAll("[data-category]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      state.selectedCategory = e.target.dataset.category;
      document.querySelectorAll("[data-category]").forEach((b) => {
        b.classList.remove("bg-primary", "text-white", "font-semibold");
        b.classList.add("text-text-secondary", "hover:text-text-primary", "hover:bg-dark-secondary");
      });
      e.target.classList.add("bg-primary", "text-white", "font-semibold");
      e.target.classList.remove("text-text-secondary", "hover:text-text-primary", "hover:bg-dark-secondary");
      filterAndRenderProducts();
      closeMobileSidebar();
    });
  });

  // Search
  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    filterAndRenderProducts();
  });

  // Price range
  document.getElementById("minPrice").addEventListener("input", (e) => {
    state.priceRange[0] = parseInt(e.target.value);
    document.getElementById("minPriceLabel").textContent = `Min: ${formatPrice(state.priceRange[0])}`;
    document.getElementById("minPriceMobile").value = e.target.value;
    document.getElementById("minPriceLabelMobile").textContent = `Min: ${formatPrice(state.priceRange[0])}`;
    filterAndRenderProducts();
  });

  document.getElementById("maxPrice").addEventListener("input", (e) => {
    state.priceRange[1] = parseInt(e.target.value);
    document.getElementById("maxPriceLabel").textContent = `Max: ${formatPrice(state.priceRange[1])}`;
    document.getElementById("maxPriceMobile").value = e.target.value;
    document.getElementById("maxPriceLabelMobile").textContent = `Max: ${formatPrice(state.priceRange[1])}`;
    filterAndRenderProducts();
  });

  document.getElementById("minPriceMobile").addEventListener("input", (e) => {
    state.priceRange[0] = parseInt(e.target.value);
    document.getElementById("minPrice").value = e.target.value;
    document.getElementById("minPriceLabel").textContent = `Min: ${formatPrice(state.priceRange[0])}`;
    document.getElementById("minPriceLabelMobile").textContent = `Min: ${formatPrice(state.priceRange[0])}`;
    filterAndRenderProducts();
  });

  document.getElementById("maxPriceMobile").addEventListener("input", (e) => {
    state.priceRange[1] = parseInt(e.target.value);
    document.getElementById("maxPrice").value = e.target.value;
    document.getElementById("maxPriceLabel").textContent = `Max: ${formatPrice(state.priceRange[1])}`;
    document.getElementById("maxPriceLabelMobile").textContent = `Max: ${formatPrice(state.priceRange[1])}`;
    filterAndRenderProducts();
  });

  // Rating filter
  document.querySelectorAll("[data-rating]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      state.minRating = parseInt(e.target.dataset.rating);
      document.querySelectorAll("[data-rating]").forEach((b) => {
        b.classList.remove("bg-primary", "text-white", "font-semibold");
        b.classList.add("text-text-secondary", "hover:text-text-primary", "hover:bg-dark-secondary");
      });
      e.target.classList.add("bg-primary", "text-white", "font-semibold");
      e.target.classList.remove("text-text-secondary", "hover:text-text-primary", "hover:bg-dark-secondary");
      filterAndRenderProducts();
    });
  });

  // Sort
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    filterAndRenderProducts();
  });

  // Reset filters
  document.getElementById("resetBtn").addEventListener("click", resetFilters);
  document.getElementById("resetBtnMobile").addEventListener("click", resetFilters);

  // Mobile menu
  document.getElementById("filterToggleBtn").addEventListener("click", openMobileSidebar);
  document.getElementById("mobileMenuBtn").addEventListener("click", openMobileSidebar);
  document.getElementById("sidebarClose").addEventListener("click", closeMobileSidebar);
  document.getElementById("sidebarOverlay").addEventListener("click", closeMobileSidebar);

  // Modal close
  document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") closeModal();
  });
}

function resetFilters() {
  state.selectedCategory = "all";
  state.searchQuery = "";
  state.priceRange = [0, 40000000];
  state.sortBy = "newest";
  state.minRating = 0;

  document.getElementById("searchInput").value = "";
  document.getElementById("minPrice").value = 0;
  document.getElementById("maxPrice").value = 40000000;
  document.getElementById("minPriceMobile").value = 0;
  document.getElementById("maxPriceMobile").value = 40000000;
  document.getElementById("minPriceLabel").textContent = "Min: Rp 0";
  document.getElementById("maxPriceLabel").textContent = "Max: Rp 40.000.000";
  document.getElementById("minPriceLabelMobile").textContent = "Min: Rp 0";
  document.getElementById("maxPriceLabelMobile").textContent = "Max: Rp 40.000.000";
  document.getElementById("sortSelect").value = "newest";

  document.querySelectorAll("[data-category]").forEach((b) => {
    b.classList.remove("bg-primary", "text-white", "font-semibold");
    b.classList.add("text-text-secondary", "hover:text-text-primary", "hover:bg-dark-secondary");
  });
  document.querySelectorAll('[data-category="all"]').forEach((b) => {
    b.classList.add("bg-primary", "text-white", "font-semibold");
    b.classList.remove("text-text-secondary", "hover:text-text-primary", "hover:bg-dark-secondary");
  });

  document.querySelectorAll("[data-rating]").forEach((b) => {
    b.classList.remove("bg-primary", "text-white", "font-semibold");
    b.classList.add("text-text-secondary", "hover:text-text-primary", "hover:bg-dark-secondary");
  });
  document.querySelectorAll('[data-rating="0"]').forEach((b) => {
    b.classList.add("bg-primary", "text-white", "font-semibold");
    b.classList.remove("text-text-secondary", "hover:text-text-primary", "hover:bg-dark-secondary");
  });

  filterAndRenderProducts();
}

// Filter and Render Products
function filterAndRenderProducts() {
  let filtered = products.filter((product) => {
    const matchCategory = state.selectedCategory === "all" || product.category === state.selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || product.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    const matchPrice = product.price >= state.priceRange[0] && product.price <= state.priceRange[1];
    const matchRating = product.rating >= state.minRating;

    return matchCategory && matchSearch && matchPrice && matchRating;
  });

  // Sort
  if (state.sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (state.sortBy === "newest") {
    filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
  }

  state.filteredProducts = filtered;
  renderProducts();
  updateContentHeader();
}

// Render Products
function renderProducts() {
  const grid = document.getElementById("productsGrid");

  if (state.filteredProducts.length === 0) {
    grid.innerHTML = '<div class="col-span-full text-center py-16"><p class="text-text-secondary text-base sm:text-lg">Tidak ada produk yang sesuai dengan filter Anda</p></div>';
    return;
  }

  grid.innerHTML = state.filteredProducts
    .map((product) => {
      const discount = calculateDiscount(product.originalPrice, product.price);
      return `
      <div class="product-card bg-dark-card rounded-lg overflow-hidden border border-dark-secondary hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer flex flex-col" onclick="openProductDetail('${product.id}')">
        <div class="relative h-40 sm:h-48 overflow-hidden bg-dark-bg group">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" onerror="this.src='images/GODA-118Y-hitam.jpeg'">
          ${discount > 0 ? `<div class="absolute top-2 sm:top-3 right-2 sm:right-3 bg-primary text-white px-2 sm:px-3 py-1 rounded font-bold text-xs sm:text-sm transform -rotate-12 shadow-lg">-${discount}%</div>` : ""}
          ${!product.inStock ? '<div class="absolute inset-0 bg-black/60 flex items-center justify-center"><span class="text-white font-bold text-sm">Stok Habis</span></div>' : ""}
          <div class="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center pb-3 gap-2 transition-opacity duration-300">
            <button class="flex items-center gap-1 bg-primary hover:bg-primary-dark text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded font-semibold transition-all text-xs sm:text-sm">
              👁️ Lihat Detail
            </button>
            <button class="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded font-semibold transition-all text-xs sm:text-sm" onclick="askStockViaWhatsApp('${product.id}', event)">
              💬 Tanya
            </button>
          </div>
        </div>
        <div class="p-3 sm:p-4 flex-1 flex flex-col">
          <h3 class="font-poppins font-bold text-sm sm:text-base text-text-primary mb-1 sm:mb-2 line-clamp-2 group-hover:text-primary transition-colors">${product.name}</h3>
          <p class="text-xs sm:text-sm text-text-secondary mb-2 line-clamp-2">${product.description}</p>
          <div class="flex items-center gap-1 mb-2 text-xs sm:text-sm">
            <div class="flex">${renderStars(product.rating)}</div>
            <span class="text-text-secondary">${product.rating} (${product.reviews})</span>
          </div>
          <div class="mt-auto pt-2 sm:pt-3 border-t border-dark-secondary">
            ${discount > 0 ? `<p class="text-xs text-text-secondary line-through">${formatPrice(product.originalPrice)}</p>` : ""}
            <p class="text-base sm:text-lg font-bold font-poppins text-primary">${formatPrice(product.price)}</p>
            <p class="text-xs font-semibold mt-1 ${product.inStock ? "text-green-400" : "text-red-400"}">
              ${product.inStock ? "✓ Stok Tersedia" : "✗ Stok Habis"}
            </p>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

// Update Content Header
function updateContentHeader() {
  const categoryName = state.selectedCategory === "all" ? "Semua Produk" : categories.find((c) => c.id === state.selectedCategory)?.name;
  document.getElementById("contentTitle").textContent = categoryName;
  document.getElementById("productCount").textContent = `${state.filteredProducts.length} produk ditemukan`;
}

// Open Product Detail
function openProductDetail(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const discount = calculateDiscount(product.originalPrice, product.price);

  const specsHtml = Object.entries(product.specs)
    .map(
      ([key, value]) => `
    <div class="bg-dark-bg p-3 sm:p-4 rounded border border-dark-secondary hover:border-primary transition-colors">
      <p class="text-xs text-text-secondary mb-1">${key}</p>
      <p class="font-semibold text-text-primary text-sm">${value}</p>
    </div>
  `,
    )
    .join("");

  const modalContent = `
    <div class="sticky top-0 bg-dark-bg border-b border-dark-secondary p-4 sm:p-6 flex items-center justify-between">
      <h2 class="text-xl sm:text-2xl font-bold font-poppins text-text-primary">${product.name}</h2>
      <button class="text-text-secondary hover:text-primary text-2xl transition-colors" onclick="closeModal()">✕</button>
    </div>
    <div class="p-4 sm:p-6 space-y-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div class="relative">
          <div class="relative bg-dark-bg rounded-lg border border-dark-secondary overflow-hidden group">
            <img id="mainImage-${product.id}" src="${product.images ? product.images[0] : product.image}" alt="${product.name}" class="w-full h-96 object-cover cursor-zoom-in hover:scale-110 transition-transform duration-300" onclick="zoomImage(this)" onerror="this.src='images/GODA-118Y-hitam.jpeg'">
            ${discount > 0 ? `<div class="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded font-bold text-sm">-${discount}%</div>` : ""}
            ${product.images && product.images.length > 1 ? `<button class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-2 rounded-full transition-colors" onclick="changeImage('${product.id}', -1)">❮</button><button class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-2 rounded-full transition-colors" onclick="changeImage('${product.id}', 1)">❯</button>` : ""}
          </div>
          ${product.images && product.images.length > 1 ? `<div class="flex gap-2 mt-3 overflow-x-auto pb-2">` + product.images.map((img, idx) => `<img src="${img}" alt="Gambar ${idx + 1}" class="w-16 h-16 object-cover rounded border-2 border-dark-secondary hover:border-primary cursor-pointer transition-all" onclick="setImage('${product.id}', ${idx})" onerror="this.src='images/GODA-118Y-hitam.jpeg'">`).join("") + `</div>` : ""}
        </div>
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <div class="flex text-primary">${renderStars(product.rating)}</div>
            <span class="text-text-secondary text-sm">${product.rating} (${product.reviews} ulasan)</span>
          </div>
          <p class="text-text-secondary text-sm">${product.description}</p>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full ${product.inStock ? "bg-green-400" : "bg-red-400"}"></div>
            <span class="font-semibold text-sm ${product.inStock ? "text-green-400" : "text-red-400"}">
              ${product.inStock ? "Stok Tersedia" : "Stok Habis"}
            </span>
          </div>
          <div class="bg-dark-bg p-4 rounded-lg border border-dark-secondary">
            ${discount > 0 ? `<p class="text-text-secondary text-xs mb-2">Harga Asli: ${formatPrice(product.originalPrice)}</p>` : ""}
            <p class="text-2xl sm:text-3xl font-bold font-poppins text-primary mb-4">${formatPrice(product.price)}</p>
            <div class="flex gap-2">
              <button class="flex-1 px-4 py-2 sm:py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors text-sm sm:text-base ${!product.inStock ? "opacity-50 cursor-not-allowed" : ""}" ${!product.inStock ? "disabled" : ""}>
                🛒 Keranjang
              </button>
              <button class="flex-1 px-4 py-2 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors text-sm sm:text-base" onclick="askStockViaWhatsApp('${product.id}', event)">
                💬 WhatsApp
              </button>
            </div>
            ${discount > 0 ? `<div class="mt-3 bg-dark-secondary p-3 rounded flex items-center gap-2 text-text-primary text-sm"><span class="text-green-400">✓</span> Hemat ${formatPrice(product.originalPrice - product.price)}</div>` : ""}
          </div>
        </div>
      </div>

      <div class="border-t border-dark-secondary pt-6">
        <h3 class="text-lg sm:text-xl font-bold font-poppins text-text-primary mb-4">Spesifikasi</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          ${specsHtml}
        </div>
      </div>

      <div class="border-t border-dark-secondary pt-6">
        <h3 class="text-lg sm:text-xl font-bold font-poppins text-text-primary mb-4">Keunggulan Produk</h3>
        <div class="space-y-3">
          <div class="flex items-start gap-3 text-text-secondary text-sm">
            <span class="text-primary mt-0.5">✓</span>
            <span>Kualitas terjamin dari brand terpercaya</span>
          </div>
          <div class="flex items-start gap-3 text-text-secondary text-sm">
            <span class="text-primary mt-0.5">✓</span>
            <span>Garansi resmi dan layanan purna jual terbaik</span>
          </div>
          <div class="flex items-start gap-3 text-text-secondary text-sm">
            <span class="text-primary mt-0.5">✓</span>
            <span>Pengiriman cepat dan aman ke seluruh Indonesia</span>
          </div>
          <div class="flex items-start gap-3 text-text-secondary text-sm">
            <span class="text-primary mt-0.5">✓</span>
            <span>Harga kompetitif dengan diskon menarik</span>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("modalContent").innerHTML = modalContent;
  document.getElementById("modal").classList.remove("hidden");
}

// Close Modal
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// Open Mobile Sidebar
function openMobileSidebar() {
  document.getElementById("mobileSidebar").classList.remove("-translate-x-full");
  document.getElementById("sidebarOverlay").classList.remove("hidden");
}

// Close Mobile Sidebar
function closeMobileSidebar() {
  document.getElementById("mobileSidebar").classList.add("-translate-x-full");
  document.getElementById("sidebarOverlay").classList.add("hidden");
}

// WhatsApp Configuration
const WHATSAPP_NUMBER = "6285283818584"; // Nomor WhatsApp format internasional (62 + nomor tanpa 0)
const WHATSAPP_MESSAGE_PREFIX = "Halo, saya ingin bertanya tentang produk ini. Apakah masih ada stok?";

// Ask Stock via WhatsApp
function askStockViaWhatsApp(productId, event) {
  event.stopPropagation();

  const product = products.find((p) => p.id === productId);
  if (!product) return;

  // Get current page URL
  const pageUrl = window.location.href;

  // Create message with product info
  const message = `${WHATSAPP_MESSAGE_PREFIX}\n\n📦 Produk: ${product.name}\n💰 Harga: ${formatPrice(product.price)}\n🔗 Link: ${pageUrl}`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  // Open WhatsApp - direct navigation
  window.location.href = whatsappUrl;
}

// Setup WhatsApp Button
document.addEventListener("DOMContentLoaded", () => {
  const whatsappBtn = document.getElementById("whatsappBtn");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const message = `Halo, saya ingin bertanya tentang produk-produk di katalog Anda. Apakah ada yang bisa saya bantu?`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      window.location.href = whatsappUrl;
    });
  }
});

// Image Carousel State
let imageCarouselState = {};

// Change Image in Carousel
function changeImage(productId, direction) {
  const product = products.find((p) => p.id === productId);
  if (!product || !product.images) return;

  if (!imageCarouselState[productId]) {
    imageCarouselState[productId] = 0;
  }

  let currentIndex = imageCarouselState[productId];
  currentIndex += direction;

  // Loop around
  if (currentIndex < 0) {
    currentIndex = product.images.length - 1;
  } else if (currentIndex >= product.images.length) {
    currentIndex = 0;
  }

  imageCarouselState[productId] = currentIndex;
  const mainImage = document.getElementById(`mainImage-${productId}`);
  if (mainImage) {
    mainImage.src = product.images[currentIndex];
  }
}

// Set Image from Thumbnail
function setImage(productId, index) {
  const product = products.find((p) => p.id === productId);
  if (!product || !product.images) return;

  imageCarouselState[productId] = index;
  const mainImage = document.getElementById(`mainImage-${productId}`);
  if (mainImage) {
    mainImage.src = product.images[index];
  }
}

// Zoom Image
function zoomImage(imgElement) {
  // Create zoom modal
  const zoomModal = document.createElement("div");
  zoomModal.className = "fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out";
  zoomModal.onclick = () => zoomModal.remove();

  const zoomedImg = document.createElement("img");
  zoomedImg.src = imgElement.src;
  zoomedImg.className = "max-w-full max-h-full object-contain";
  zoomedImg.onerror = () => (zoomedImg.src = "images/GODA-118Y-hitam.jpeg");

  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "✕";
  closeBtn.className = "absolute top-4 right-4 text-white text-3xl hover:text-primary transition-colors";
  closeBtn.onclick = (e) => {
    e.stopPropagation();
    zoomModal.remove();
  };

  zoomModal.appendChild(zoomedImg);
  zoomModal.appendChild(closeBtn);
  document.body.appendChild(zoomModal);
}

// ============ ROUTING SYSTEM ============
function setupRouting() {
  // Handle hash routing
  window.addEventListener("hashchange", handleRoute);
  handleRoute();

  // Setup admin button
  document.getElementById("adminBtn").addEventListener("click", openAdminModal);
}

function handleRoute() {
  const hash = window.location.hash.slice(1);

  if (hash.startsWith("product/")) {
    const productId = hash.split("/")[1];
    const product = products.find((p) => p.id === productId);
    if (product) {
      openProductDetail(productId);
    }
  }
}

function getProductLink(productId) {
  return `${window.location.origin}${window.location.pathname}#product/${productId}`;
}

// ============ LOCALSTORAGE FUNCTIONS ============
function loadProductsFromStorage() {
  const stored = localStorage.getItem("queens_catalog_products");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Error loading products from storage:", e);
      return [];
    }
  }
  return [];
}

function saveProductsToStorage(productsData) {
  localStorage.setItem("queens_catalog_products", JSON.stringify(productsData));
}

function initializeProductsFromStorage() {
  const stored = loadProductsFromStorage();
  if (stored.length > 0) {
    products.length = 0;
    products.push(...stored);
  } else {
    saveProductsToStorage(products);
  }
}

// ============ ADMIN PANEL ============
function setupAdminPanel() {
  const form = document.getElementById("addProductForm");
  if (form) {
    form.addEventListener("submit", handleAddProduct);
  }

  document.getElementById("adminModal").addEventListener("click", (e) => {
    if (e.target.id === "adminModal") closeAdminModal();
  });

  renderAdminProductsList();
}

function openAdminModal() {
  document.getElementById("adminModal").classList.remove("hidden");
  renderAdminProductsList();
}

function closeAdminModal() {
  document.getElementById("adminModal").classList.add("hidden");
}

function handleAddProduct(e) {
  e.preventDefault();

  const name = document.getElementById("productName").value;
  const category = document.getElementById("productCategory").value;
  const price = parseInt(document.getElementById("productPrice").value);
  const originalPrice = parseInt(document.getElementById("productOriginalPrice").value) || price;
  const rating = parseFloat(document.getElementById("productRating").value);
  const reviews = parseInt(document.getElementById("productReviews").value);
  const description = document.getElementById("productDescription").value;
  const inStock = document.getElementById("productInStock").checked;

  if (!name || !category || !price || !description) {
    alert("Mohon isi semua field yang diperlukan");
    return;
  }

  const newProduct = {
    id: String(Math.max(...products.map((p) => parseInt(p.id)), 0) + 1),
    name,
    category,
    price,
    originalPrice,
    image: "images/GODA-118Y-hitam.jpeg",
    images: ["images/GODA-118Y-hitam.jpeg", "images/GODA-118Y-putih.jpeg", "images/category-wearables.jpg"],
    description,
    rating,
    reviews,
    inStock,
    specs: {
      Kategori: category,
      Harga: formatPrice(price),
      Status: inStock ? "Tersedia" : "Habis",
    },
  };

  products.push(newProduct);
  saveProductsToStorage(products);

  // Reset form
  document.getElementById("addProductForm").reset();
  document.getElementById("productRating").value = "4.5";
  document.getElementById("productReviews").value = "0";

  // Refresh displays
  filterAndRenderProducts();
  renderAdminProductsList();

  alert("Produk berhasil ditambahkan!");
}

function renderAdminProductsList() {
  const container = document.getElementById("adminProductsList");

  if (products.length === 0) {
    container.innerHTML = '<p class="text-text-secondary text-sm">Tidak ada produk</p>';
    return;
  }

  container.innerHTML = products
    .map(
      (product) => `
    <div class="bg-dark-bg p-3 rounded border border-dark-secondary flex items-center justify-between gap-3">
      <div class="flex-1 min-w-0">
        <p class="font-semibold text-text-primary text-sm truncate">${product.name}</p>
        <p class="text-xs text-text-secondary">${formatPrice(product.price)} | ${product.category}</p>
      </div>
      <div class="flex gap-2">
        <button class="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition-colors" onclick="copyProductLink('${product.id}')" title="Copy Link">🔗</button>
        <button class="px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs transition-colors" onclick="deleteProduct('${product.id}')" title="Hapus">🗑️</button>
      </div>
    </div>
  `,
    )
    .join("");
}

function copyProductLink(productId) {
  const link = getProductLink(productId);
  navigator.clipboard
    .writeText(link)
    .then(() => {
      alert("Link produk berhasil disalin!");
    })
    .catch(() => {
      alert("Gagal menyalin link");
    });
}

function deleteProduct(productId) {
  if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
    const index = products.findIndex((p) => p.id === productId);
    if (index > -1) {
      products.splice(index, 1);
      saveProductsToStorage(products);
      filterAndRenderProducts();
      renderAdminProductsList();
      alert("Produk berhasil dihapus!");
    }
  }
}

// Update WhatsApp message to include product link
const originalAskStockViaWhatsApp = askStockViaWhatsApp;
function askStockViaWhatsApp(productId, event) {
  if (event) event.stopPropagation();

  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const productLink = getProductLink(productId);
  const message = `${WHATSAPP_MESSAGE_PREFIX}\n\n📦 Produk: ${product.name}\n💰 Harga: ${formatPrice(product.price)}\n🔗 Link: ${productLink}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.location.href = whatsappUrl;
}

// Initialize products from storage on page load
document.addEventListener("DOMContentLoaded", () => {
  initializeProductsFromStorage();
});

// ============ THEME TOGGLE ============
function setupThemeToggle() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("queens_catalog_theme") || "dark";

  // Apply saved theme on load
  applyTheme(savedTheme);

  // Setup toggle button
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }
}

function toggleTheme() {
  const currentTheme = localStorage.getItem("queens_catalog_theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("queens_catalog_theme", newTheme);
}

function applyTheme(theme) {
  const body = document.body;
  const themeToggleBtn = document.getElementById("themeToggleBtn");

  if (theme === "light") {
    body.classList.add("light-mode");
    if (themeToggleBtn) {
      themeToggleBtn.textContent = "☀️";
      themeToggleBtn.title = "Switch to Dark Mode";
    }
  } else {
    body.classList.remove("light-mode");
    if (themeToggleBtn) {
      themeToggleBtn.textContent = "🌙";
      themeToggleBtn.title = "Switch to Light Mode";
    }
  }
}

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
});
