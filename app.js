// ==================== DATA ====================

const CATEGORIES = [
    { id: 'all', name: 'All', icon: '🛍️', color: '#4CB1C1' },
    { id: 'mobiles', name: 'Mobiles', icon: '📱', color: '#FF6B6B' },
    { id: 'fashion', name: 'Fashion', icon: '👕', color: '#4ECDC4' },
    { id: 'electronics', name: 'Electronics', icon: '📺', color: '#95E1D3' },
    { id: 'home', name: 'Home', icon: '🏠', color: '#F38181' },
    { id: 'appliances', name: 'Appliances', icon: '⚡', color: '#AA96DA' },
    { id: 'beauty', name: 'Beauty & Toys', icon: '✨', color: '#FCBAD3' },
    { id: 'grocery', name: 'Grocery', icon: '🛒', color: '#A8D8EA' },
    { id: 'trending', name: 'Trending', icon: '📈', color: '#FFD93D' }
];

const PRODUCTS = [
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        brand: 'Apple',
        category: 'mobiles',
        price: 159900,
        originalPrice: 179900,
        rating: 4.6,
        reviews: 12453,
        image: 'https://images.unsplash.com/photo-1696446702514-c8f8dd2ff527?w=400&h=400&fit=crop',
        inStock: true,
        discount: 11,
        features: ['256GB Storage', 'A17 Pro Chip', 'Titanium Design']
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        brand: 'Samsung',
        category: 'mobiles',
        price: 129999,
        originalPrice: 149999,
        rating: 4.5,
        reviews: 8932,
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
        inStock: true,
        discount: 13,
        features: ['512GB Storage', 'S Pen Included', 'AI Features']
    },
    {
        id: 3,
        name: 'OnePlus 12',
        brand: 'OnePlus',
        category: 'mobiles',
        price: 64999,
        originalPrice: 69999,
        rating: 4.4,
        reviews: 5621,
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        inStock: true,
        discount: 7,
        features: ['256GB Storage', 'Snapdragon 8 Gen 3', '100W Charging']
    },
    {
        id: 4,
        name: 'Sony WH-1000XM5',
        brand: 'Sony',
        category: 'electronics',
        price: 29990,
        originalPrice: 34990,
        rating: 4.7,
        reviews: 15234,
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop',
        inStock: true,
        discount: 14,
        features: ['Industry-leading ANC', '30hr Battery', 'Premium Sound']
    },
    {
        id: 5,
        name: "Levi's Men's Jeans",
        brand: "Levi's",
        category: 'fashion',
        price: 2499,
        originalPrice: 3999,
        rating: 4.3,
        reviews: 8745,
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
        inStock: true,
        discount: 38,
        features: ['Slim Fit', '100% Cotton', 'Classic Blue']
    },
    {
        id: 6,
        name: 'Nike Air Max 270',
        brand: 'Nike',
        category: 'fashion',
        price: 12995,
        originalPrice: 16995,
        rating: 4.5,
        reviews: 6234,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        inStock: true,
        discount: 24,
        features: ['Air Cushioning', 'Mesh Upper', 'Lightweight']
    },
    {
        id: 7,
        name: 'LG 55" 4K OLED TV',
        brand: 'LG',
        category: 'electronics',
        price: 89990,
        originalPrice: 119990,
        rating: 4.6,
        reviews: 3421,
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
        inStock: true,
        discount: 25,
        features: ['OLED Display', 'Dolby Vision', 'Smart TV']
    },
    {
        id: 8,
        name: 'Dyson V15 Vacuum',
        brand: 'Dyson',
        category: 'appliances',
        price: 52900,
        originalPrice: 64900,
        rating: 4.8,
        reviews: 2156,
        image: 'https://images.unsplash.com/photo-1558317374-067fb86dc52d?w=400&h=400&fit=crop',
        inStock: true,
        discount: 18,
        features: ['Laser Detection', 'HEPA Filter', '60min Runtime']
    },
    {
        id: 9,
        name: 'Wooden Coffee Table',
        brand: 'Urban Ladder',
        category: 'home',
        price: 8999,
        originalPrice: 14999,
        rating: 4.2,
        reviews: 1843,
        image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400&h=400&fit=crop',
        inStock: true,
        discount: 40,
        features: ['Solid Wood', 'Storage Shelf', 'Modern Design']
    },
    {
        id: 10,
        name: 'Lakme Makeup Kit',
        brand: 'Lakme',
        category: 'beauty',
        price: 1499,
        originalPrice: 2499,
        rating: 4.1,
        reviews: 9876,
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
        inStock: true,
        discount: 40,
        features: ['Complete Kit', 'Long Lasting', 'Dermatologist Tested']
    },
    {
        id: 11,
        name: 'Organic Grocery Combo',
        brand: "Nature's Best",
        category: 'grocery',
        price: 899,
        originalPrice: 1299,
        rating: 4.4,
        reviews: 5432,
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop',
        inStock: true,
        discount: 31,
        features: ['100% Organic', 'Chemical Free', 'Farm Fresh']
    },
    {
        id: 12,
        name: 'MacBook Pro M3',
        brand: 'Apple',
        category: 'electronics',
        price: 199900,
        originalPrice: 219900,
        rating: 4.9,
        reviews: 4521,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
        inStock: true,
        discount: 9,
        features: ['M3 Pro Chip', '16GB RAM', '512GB SSD']
    }
];

const BRANDS = ['Apple', 'Samsung', 'OnePlus', 'Sony', "Levi's", 'Nike', 'LG', 'Dyson', 'Urban Ladder', 'Lakme', "Nature's Best"];

// ==================== STATE MANAGEMENT ====================

class AppState {
    constructor() {
        this.cart = [];
        this.selectedCategory = 'all';
        this.filters = {
            priceRange: [0, 200000],
            brands: [],
            minRating: 0
        };
        this.isLoggedIn = false;
        this.listeners = [];
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    notify() {
        this.listeners.forEach(listener => listener());
    }

    addToCart(product) {
        const existingItem = this.cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }
        this.notify();
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.notify();
    }

    updateQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.notify();
        }
    }

    clearCart() {
        this.cart = [];
        this.notify();
    }

    getCartCount() {
        return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    getCartTotal() {
        return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    setCategory(category) {
        this.selectedCategory = category;
        this.notify();
    }

    setFilters(filters) {
        this.filters = { ...this.filters, ...filters };
        this.notify();
    }

    getFilteredProducts() {
        return PRODUCTS.filter(product => {
            if (this.selectedCategory !== 'all' && product.category !== this.selectedCategory) return false;
            if (product.price < this.filters.priceRange[0] || product.price > this.filters.priceRange[1]) return false;
            if (this.filters.brands.length > 0 && !this.filters.brands.includes(product.brand)) return false;
            if (product.rating < this.filters.minRating) return false;
            return true;
        });
    }

    login() {
        this.isLoggedIn = true;
        this.notify();
    }
}

const appState = new AppState();

// ==================== UI RENDERING ====================

function renderCategoryRibbon() {
    const ribbonContainer = document.getElementById('categoryRibbon');
    ribbonContainer.innerHTML = '';

    CATEGORIES.forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-item';
        if (appState.selectedCategory === category.id) {
            button.classList.add('active');
        }

        const icon = document.createElement('div');
        icon.className = 'category-icon';
        icon.style.backgroundColor = category.color + '20';
        icon.innerHTML = `<span style="font-size: 24px;">${category.icon}</span>`;

        const name = document.createElement('div');
        name.className = 'category-name';
        name.textContent = category.name;

        button.appendChild(icon);
        button.appendChild(name);
        button.addEventListener('click', () => {
            appState.setCategory(category.id);
        });

        ribbonContainer.appendChild(button);
    });
}

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProducts');
    const productCount = document.getElementById('productCount');
    const categoryTitle = document.getElementById('categoryTitle');

    const filteredProducts = appState.getFilteredProducts();

    // Update title
    const category = CATEGORIES.find(c => c.id === appState.selectedCategory);
    categoryTitle.textContent = category ? category.name : 'All Products';

    // Update count
    productCount.textContent = `Showing ${filteredProducts.length} products`;

    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        noProducts.style.display = 'flex';
        return;
    }

    productsGrid.style.display = 'grid';
    noProducts.style.display = 'none';
    productsGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            ${product.discount > 0 ? `<div class="discount-badge">${product.discount}% OFF</div>` : ''}
            <button class="wishlist-btn">
                <svg class="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
        </div>
        <div class="product-info">
            <div class="product-brand">${product.brand}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-rating">
                <div class="rating-badge">
                    ${product.rating}
                    <svg class="rating-star" viewBox="0 0 24 24" fill="white" stroke="white">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                </div>
                <span class="review-count">(${product.reviews.toLocaleString()})</span>
            </div>
            <div class="product-price">
                <span class="current-price">₹${product.price.toLocaleString()}</span>
                <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
            </div>
            <div class="product-features">
                ${product.features.slice(0, 3).map(feature => `
                    <div class="feature-item">
                        <div class="feature-bullet"></div>
                        ${feature}
                    </div>
                `).join('')}
            </div>
            <button class="add-to-cart-btn ${!product.inStock ? 'out-of-stock-btn' : ''}" 
                    ${!product.inStock ? 'disabled' : ''}>
                ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
        </div>
    `;

    const addButton = card.querySelector('.add-to-cart-btn');
    if (product.inStock) {
        addButton.addEventListener('click', (e) => {
            e.stopPropagation();
            appState.addToCart(product);
        });
    }

    return card;
}

function renderBrandFilters() {
    const brandFilters = document.getElementById('brandFilters');
    brandFilters.innerHTML = '';

    BRANDS.forEach(brand => {
        const option = document.createElement('div');
        option.className = 'filter-option';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `brand-${brand}`;
        checkbox.checked = appState.filters.brands.includes(brand);
        checkbox.addEventListener('change', (e) => {
            const brands = appState.filters.brands;
            if (e.target.checked) {
                brands.push(brand);
            } else {
                const index = brands.indexOf(brand);
                if (index > -1) brands.splice(index, 1);
            }
            appState.setFilters({ brands });
        });

        const label = document.createElement('label');
        label.htmlFor = `brand-${brand}`;
        label.textContent = brand;

        option.appendChild(checkbox);
        option.appendChild(label);
        brandFilters.appendChild(option);
    });
}

function renderRatingFilters() {
    const ratingFilters = document.getElementById('ratingFilters');
    ratingFilters.innerHTML = '';

    const ratings = [4, 3, 2, 1];

    ratings.forEach(rating => {
        const button = document.createElement('button');
        button.className = 'rating-filter';
        if (appState.filters.minRating === rating) {
            button.classList.add('active');
        }

        const stars = document.createElement('div');
        stars.className = 'rating-stars';
        for (let i = 0; i < rating; i++) {
            const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            star.setAttribute('class', 'star');
            star.setAttribute('viewBox', '0 0 24 24');
            star.innerHTML = '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>';
            stars.appendChild(star);
        }

        const text = document.createElement('span');
        text.textContent = `${rating}★ & above`;

        button.appendChild(stars);
        button.appendChild(text);
        button.addEventListener('click', () => {
            appState.setFilters({ minRating: rating === appState.filters.minRating ? 0 : rating });
        });

        ratingFilters.appendChild(button);
    });
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartSummary = document.getElementById('cartSummary');
    const subtotalAmount = document.getElementById('subtotalAmount');
    const totalAmount = document.getElementById('totalAmount');
    const cartBadge = document.getElementById('cartBadge');

    const cartCount = appState.getCartCount();
    const cartTotal = appState.getCartTotal();

    // Update badge
    cartBadge.textContent = cartCount;
    cartBadge.style.display = cartCount > 0 ? 'flex' : 'none';

    if (appState.cart.length === 0) {
        cartItems.style.display = 'none';
        cartEmpty.style.display = 'flex';
        cartSummary.style.display = 'none';
        return;
    }

    cartItems.style.display = 'block';
    cartEmpty.style.display = 'none';
    cartSummary.style.display = 'block';
    cartItems.innerHTML = '';

    appState.cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-brand">${item.brand}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn" data-action="decrease" data-id="${item.id}">−</button>
                        <div class="quantity-value">${item.quantity}</div>
                        <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-btn" data-id="${item.id}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        cartItems.appendChild(cartItem);
    });

    // Add event listeners for quantity controls
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.currentTarget.dataset.action;
            const id = parseInt(e.currentTarget.dataset.id);
            const item = appState.cart.find(i => i.id === id);
            if (item) {
                const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
                appState.updateQuantity(id, newQuantity);
            }
        });
    });

    // Add event listeners for remove buttons
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            appState.removeFromCart(id);
        });
    });

    // Update totals
    subtotalAmount.textContent = `₹${cartTotal.toLocaleString()}`;
    totalAmount.textContent = `₹${cartTotal.toLocaleString()}`;
}

function updateUI() {
    renderCategoryRibbon();
    renderProducts();
    renderCart();
}

// ==================== MODAL CONTROLS ====================

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
}

// ==================== CHAT WIDGET ====================

const chatMessages = [];

function renderChatMessages() {
    const chatContainer = document.getElementById('chatMessages');
    chatContainer.innerHTML = '';

    chatMessages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`;

        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.textContent = msg.text;

        const time = document.createElement('div');
        time.className = 'message-time';
        time.textContent = msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        messageDiv.appendChild(bubble);
        messageDiv.appendChild(time);
        chatContainer.appendChild(messageDiv);
    });

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendChatMessage(text) {
    if (!text.trim()) return;

    chatMessages.push({
        sender: 'user',
        text: text,
        timestamp: new Date()
    });

    renderChatMessages();

    // Simulate bot response
    setTimeout(() => {
        const responses = [
            "I'm here to help! What products are you looking for?",
            "I can help you find the best deals. What's your budget?",
            "Looking for something specific? Let me know!",
            "I'd be happy to assist you with your purchase!",
            "Great choice! Would you like to see similar products?"
        ];

        chatMessages.push({
            sender: 'bot',
            text: responses[Math.floor(Math.random() * responses.length)],
            timestamp: new Date()
        });

        renderChatMessages();
    }, 1000);
}

// ==================== EVENT LISTENERS ====================

document.addEventListener('DOMContentLoaded', () => {
    // Subscribe to state changes
    appState.subscribe(updateUI);

    // Initial render
    renderCategoryRibbon();
    renderProducts();
    renderBrandFilters();
    renderRatingFilters();
    renderCart();

    // Header buttons
    document.getElementById('loginBtn').addEventListener('click', () => {
        showModal('loginModal');
    });

    document.getElementById('cartBtn').addEventListener('click', () => {
        showModal('cartModal');
    });

    // Cart modal
    document.getElementById('closeCartBtn').addEventListener('click', () => {
        hideModal('cartModal');
    });

    document.getElementById('cartOverlay').addEventListener('click', () => {
        hideModal('cartModal');
    });

    document.getElementById('proceedBtn').addEventListener('click', () => {
        if (!appState.isLoggedIn) {
            hideModal('cartModal');
            showModal('loginModal');
        } else {
            alert('Proceeding to checkout... (Demo)');
        }
    });

    // Login modal
    document.getElementById('closeLoginBtn').addEventListener('click', () => {
        hideModal('loginModal');
    });

    document.getElementById('loginOverlay').addEventListener('click', () => {
        hideModal('loginModal');
    });

    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        appState.login();
        hideModal('loginModal');
        alert('Login successful! (Demo)');
    });

    // Price filters
    document.getElementById('minPrice').addEventListener('change', (e) => {
        const min = parseInt(e.target.value) || 0;
        appState.setFilters({ priceRange: [min, appState.filters.priceRange[1]] });
    });

    document.getElementById('maxPrice').addEventListener('change', (e) => {
        const max = parseInt(e.target.value) || 200000;
        appState.setFilters({ priceRange: [appState.filters.priceRange[0], max] });
    });

    // Clear filters
    document.getElementById('clearFiltersBtn').addEventListener('click', () => {
        appState.setFilters({
            priceRange: [0, 200000],
            brands: [],
            minRating: 0
        });
        document.getElementById('minPrice').value = 0;
        document.getElementById('maxPrice').value = 200000;
        renderBrandFilters();
        renderRatingFilters();
    });

    // Chat widget
    const chatToggleBtn = document.getElementById('chatToggleBtn');
    const chatWindow = document.getElementById('chatWindow');
    const chatCloseBtn = document.getElementById('chatCloseBtn');
    const chatInput = document.getElementById('chatInput');
    const chatSendBtn = document.getElementById('chatSendBtn');

    chatToggleBtn.addEventListener('click', () => {
        chatWindow.classList.add('active');
    });

    chatCloseBtn.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });

    chatSendBtn.addEventListener('click', () => {
        sendChatMessage(chatInput.value);
        chatInput.value = '';
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage(chatInput.value);
            chatInput.value = '';
        }
    });

    // Initialize chat with welcome message
    chatMessages.push({
        sender: 'bot',
        text: "Hi! I'm your OneKart shopping assistant. How can I help you today?",
        timestamp: new Date()
    });
    renderChatMessages();
});
