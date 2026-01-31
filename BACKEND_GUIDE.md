# OneKart Backend Integration Guide

This guide provides detailed instructions for implementing a production-ready backend for the OneKart e-commerce platform.

## 🏗️ Backend Architecture

### Technology Stack Recommendations

**Option 1: Node.js + Express**
```
- Express.js: API server
- MongoDB/PostgreSQL: Database
- Redis: Session & cache management
- JWT: Authentication
- Stripe/Razorpay: Payment processing
```

**Option 2: Python + Django/Flask**
```
- Django REST Framework / Flask: API server
- PostgreSQL: Database
- Redis: Caching
- Celery: Async task queue
- JWT: Authentication
```

**Option 3: Next.js Full-Stack**
```
- Next.js 14+: Full-stack framework
- Prisma: ORM
- NextAuth.js: Authentication
- Vercel Postgres: Database
- Stripe: Payments
```

## 📡 API Endpoints Design

### Authentication Endpoints

#### POST /api/auth/register
```javascript
// Request
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}

// Response (201)
{
  "success": true,
  "user": {
    "id": "user_123",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### POST /api/auth/login
```javascript
// Request
{
  "email": "john@example.com",
  "password": "SecurePass123!"
}

// Response (200)
{
  "success": true,
  "user": {
    "id": "user_123",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "refresh_token_here"
}
```

#### POST /api/auth/refresh
```javascript
// Request
{
  "refreshToken": "refresh_token_here"
}

// Response (200)
{
  "success": true,
  "token": "new_access_token",
  "refreshToken": "new_refresh_token"
}
```

### Product Endpoints

#### GET /api/products
```javascript
// Query Parameters:
// - category: string
// - minPrice: number
// - maxPrice: number
// - brands: string[] (comma-separated)
// - minRating: number
// - page: number (default: 1)
// - limit: number (default: 20)
// - sort: 'price_asc' | 'price_desc' | 'rating' | 'popularity'

// Response (200)
{
  "success": true,
  "data": {
    "products": [
      {
        "id": 1,
        "name": "iPhone 15 Pro Max",
        "brand": "Apple",
        "category": "mobiles",
        "price": 159900,
        "originalPrice": 179900,
        "rating": 4.6,
        "reviews": 12453,
        "image": "https://cdn.onekart.com/products/iphone-15-pro.jpg",
        "inStock": true,
        "discount": 11,
        "features": ["256GB Storage", "A17 Pro Chip", "Titanium Design"]
      }
      // ... more products
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalProducts": 96,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

#### GET /api/products/:id
```javascript
// Response (200)
{
  "success": true,
  "data": {
    "id": 1,
    "name": "iPhone 15 Pro Max",
    "brand": "Apple",
    "category": "mobiles",
    "price": 159900,
    "originalPrice": 179900,
    "rating": 4.6,
    "reviews": 12453,
    "images": [
      "https://cdn.onekart.com/products/iphone-15-pro-1.jpg",
      "https://cdn.onekart.com/products/iphone-15-pro-2.jpg"
    ],
    "inStock": true,
    "stock": 45,
    "discount": 11,
    "features": ["256GB Storage", "A17 Pro Chip", "Titanium Design"],
    "description": "Full product description...",
    "specifications": {
      "Display": "6.7-inch Super Retina XDR",
      "Processor": "A17 Pro chip",
      "Camera": "48MP Main Camera"
    }
  }
}
```

#### GET /api/products/search
```javascript
// Query Parameters:
// - q: string (search query)

// Response (200)
{
  "success": true,
  "data": {
    "suggestions": [
      {
        "id": 1,
        "name": "iPhone 15 Pro Max",
        "category": "mobiles",
        "image": "https://cdn.onekart.com/products/iphone-15-pro-thumb.jpg"
      }
      // ... more suggestions
    ]
  }
}
```

### Cart Endpoints

#### GET /api/cart
```javascript
// Headers: Authorization: Bearer <token>

// Response (200)
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "cart_item_1",
        "productId": 1,
        "product": {
          "id": 1,
          "name": "iPhone 15 Pro Max",
          "price": 159900,
          "image": "https://cdn.onekart.com/products/iphone-15-pro-thumb.jpg"
        },
        "quantity": 1
      }
    ],
    "summary": {
      "subtotal": 159900,
      "deliveryFee": 0,
      "total": 159900,
      "savings": 20000
    }
  }
}
```

#### POST /api/cart/items
```javascript
// Headers: Authorization: Bearer <token>

// Request
{
  "productId": 1,
  "quantity": 1
}

// Response (201)
{
  "success": true,
  "message": "Product added to cart",
  "data": {
    "cartItemId": "cart_item_1",
    "quantity": 1
  }
}
```

#### PATCH /api/cart/items/:itemId
```javascript
// Headers: Authorization: Bearer <token>

// Request
{
  "quantity": 2
}

// Response (200)
{
  "success": true,
  "message": "Cart updated",
  "data": {
    "quantity": 2
  }
}
```

#### DELETE /api/cart/items/:itemId
```javascript
// Headers: Authorization: Bearer <token>

// Response (200)
{
  "success": true,
  "message": "Item removed from cart"
}
```

### Order Endpoints

#### POST /api/orders
```javascript
// Headers: Authorization: Bearer <token>

// Request
{
  "items": [
    {
      "productId": 1,
      "quantity": 1,
      "price": 159900
    }
  ],
  "shippingAddress": {
    "name": "John Doe",
    "phone": "+91 9876543210",
    "addressLine1": "123 Main Street",
    "addressLine2": "Apartment 4B",
    "city": "Mumbai",
    "state": "Maharashtra",
    "pincode": "400001",
    "country": "India"
  },
  "paymentMethod": "card"
}

// Response (201)
{
  "success": true,
  "data": {
    "orderId": "order_123",
    "paymentIntentId": "pi_abc123",
    "clientSecret": "pi_abc123_secret_xyz",
    "amount": 159900,
    "status": "pending"
  }
}
```

#### GET /api/orders/:orderId
```javascript
// Headers: Authorization: Bearer <token>

// Response (200)
{
  "success": true,
  "data": {
    "id": "order_123",
    "orderNumber": "ONK-2024-001234",
    "status": "shipped",
    "items": [...],
    "shippingAddress": {...},
    "total": 159900,
    "createdAt": "2024-01-15T10:30:00Z",
    "estimatedDelivery": "2024-01-20T18:00:00Z",
    "tracking": {
      "courier": "BlueDart",
      "trackingNumber": "BD123456789",
      "currentStatus": "In Transit"
    }
  }
}
```

### AI Chat Endpoints

#### POST /api/chat/message
```javascript
// Headers: Authorization: Bearer <token> (optional for guest users)

// Request
{
  "message": "Where is my order?",
  "sessionId": "chat_session_123",
  "context": {
    "userId": "user_123",
    "lastOrderId": "order_123"
  }
}

// Response (200)
{
  "success": true,
  "data": {
    "response": "Your order ONK-2024-001234 is currently in transit and is expected to arrive by Jan 20, 2024.",
    "suggestions": [
      "Track my order",
      "Contact support"
    ]
  }
}
```

## 💻 Backend Implementation Examples

### Express.js Example (Node.js)

```javascript
// server.js
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

// Middleware: Authentication
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ success: false, message: 'Access token required' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Route: Get Products with Filters
app.get('/api/products', async (req, res) => {
  try {
    const {
      category,
      minPrice,
      maxPrice,
      brands,
      minRating,
      page = 1,
      limit = 20,
      sort = 'popularity'
    } = req.query;
    
    // Build query
    let query = {};
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseFloat(minPrice);
      if (maxPrice) query.price.$lte = parseFloat(maxPrice);
    }
    
    if (brands) {
      query.brand = { $in: brands.split(',') };
    }
    
    if (minRating) {
      query.rating = { $gte: parseFloat(minRating) };
    }
    
    // Sorting
    let sortOption = {};
    switch(sort) {
      case 'price_asc':
        sortOption = { price: 1 };
        break;
      case 'price_desc':
        sortOption = { price: -1 };
        break;
      case 'rating':
        sortOption = { rating: -1 };
        break;
      default:
        sortOption = { popularity: -1 };
    }
    
    // Pagination
    const skip = (page - 1) * limit;
    
    // Database query (MongoDB example)
    const products = await Product.find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(parseInt(limit));
    
    const totalProducts = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / limit);
    
    res.json({
      success: true,
      data: {
        products,
        pagination: {
          currentPage: parseInt(page),
          totalPages,
          totalProducts,
          hasNext: page < totalPages,
          hasPrev: page > 1
        }
      }
    });
    
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Route: Add to Cart
app.post('/api/cart/items', authenticateToken, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;
    
    // Validate product exists and is in stock
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }
    
    if (!product.inStock || product.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: 'Product out of stock'
      });
    }
    
    // Check if item already in cart
    let cartItem = await CartItem.findOne({
      userId,
      productId
    });
    
    if (cartItem) {
      // Update quantity
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      // Create new cart item
      cartItem = await CartItem.create({
        userId,
        productId,
        quantity
      });
    }
    
    res.status(201).json({
      success: true,
      message: 'Product added to cart',
      data: {
        cartItemId: cartItem._id,
        quantity: cartItem.quantity
      }
    });
    
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Route: Create Order
app.post('/api/orders', authenticateToken, async (req, res) => {
  try {
    const { items, shippingAddress, paymentMethod } = req.body;
    const userId = req.user.id;
    
    // Validate cart items and calculate total
    let total = 0;
    const validatedItems = [];
    
    for (const item of items) {
      const product = await Product.findById(item.productId);
      
      if (!product || !product.inStock) {
        return res.status(400).json({
          success: false,
          message: `Product ${item.productId} is not available`
        });
      }
      
      if (product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for ${product.name}`
        });
      }
      
      validatedItems.push({
        productId: product._id,
        name: product.name,
        quantity: item.quantity,
        price: product.price
      });
      
      total += product.price * item.quantity;
    }
    
    // Create order
    const order = await Order.create({
      userId,
      items: validatedItems,
      shippingAddress,
      total,
      status: 'pending',
      paymentMethod
    });
    
    // Create payment intent (Stripe example)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // Amount in paise
      currency: 'inr',
      metadata: {
        orderId: order._id.toString()
      }
    });
    
    // Update product stock
    for (const item of validatedItems) {
      await Product.findByIdAndUpdate(
        item.productId,
        { $inc: { stock: -item.quantity } }
      );
    }
    
    // Clear cart
    await CartItem.deleteMany({ userId });
    
    res.status(201).json({
      success: true,
      data: {
        orderId: order._id,
        paymentIntentId: paymentIntent.id,
        clientSecret: paymentIntent.client_secret,
        amount: total,
        status: 'pending'
      }
    });
    
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Frontend Integration

```javascript
// api/client.js
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class APIClient {
  constructor() {
    this.token = localStorage.getItem('authToken');
  }
  
  setToken(token) {
    this.token = token;
    localStorage.setItem('authToken', token);
  }
  
  clearToken() {
    this.token = null;
    localStorage.removeItem('authToken');
  }
  
  async request(endpoint, options = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers
    };
    
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data;
  }
  
  // Auth methods
  async register(name, email, password) {
    const data = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password })
    });
    
    this.setToken(data.token);
    return data;
  }
  
  async login(email, password) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    
    this.setToken(data.token);
    return data;
  }
  
  // Product methods
  async getProducts(filters = {}) {
    const queryParams = new URLSearchParams(filters).toString();
    return this.request(`/products?${queryParams}`);
  }
  
  async getProduct(productId) {
    return this.request(`/products/${productId}`);
  }
  
  async searchProducts(query) {
    return this.request(`/products/search?q=${encodeURIComponent(query)}`);
  }
  
  // Cart methods
  async getCart() {
    return this.request('/cart');
  }
  
  async addToCart(productId, quantity = 1) {
    return this.request('/cart/items', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity })
    });
  }
  
  async updateCartItem(itemId, quantity) {
    return this.request(`/cart/items/${itemId}`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity })
    });
  }
  
  async removeCartItem(itemId) {
    return this.request(`/cart/items/${itemId}`, {
      method: 'DELETE'
    });
  }
  
  // Order methods
  async createOrder(orderData) {
    return this.request('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData)
    });
  }
  
  async getOrder(orderId) {
    return this.request(`/orders/${orderId}`);
  }
  
  async getOrders() {
    return this.request('/orders');
  }
}

export const apiClient = new APIClient();
```

### Using API Client in React Components

```javascript
// Update the OneKartApp to use real API
import { apiClient } from './api/client';

const OneKartApp = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    loadProducts();
  }, [selectedCategory, filters]);
  
  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await apiClient.getProducts({
        category: selectedCategory,
        minPrice: filters.priceRange[0],
        maxPrice: filters.priceRange[1],
        brands: filters.brands.join(','),
        minRating: filters.minRating
      });
      
      setProducts(data.data.products);
    } catch (error) {
      console.error('Error loading products:', error);
      // Show error notification
    } finally {
      setLoading(false);
    }
  };
  
  const handleLogin = async (formData) => {
    try {
      const data = await apiClient.login(formData.email, formData.password);
      setIsLoggedIn(true);
      setShowLogin(false);
      // Show success notification
    } catch (error) {
      console.error('Login failed:', error);
      // Show error notification
    }
  };
  
  // ... rest of the component
};
```

## 🔒 Security Best Practices

### 1. Password Hashing
```javascript
const bcrypt = require('bcrypt');

// Hash password before saving
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(password, saltRounds);

// Verify password during login
const isValid = await bcrypt.compare(password, user.password);
```

### 2. JWT Token Management
```javascript
const jwt = require('jsonwebtoken');

// Generate access token (15 minutes)
const accessToken = jwt.sign(
  { id: user._id, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: '15m' }
);

// Generate refresh token (7 days)
const refreshToken = jwt.sign(
  { id: user._id },
  process.env.REFRESH_TOKEN_SECRET,
  { expiresIn: '7d' }
);
```

### 3. Rate Limiting
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later'
});

app.use('/api/', limiter);
```

### 4. Input Validation
```javascript
const { body, validationResult } = require('express-validator');

app.post('/api/auth/register',
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  body('name').trim().isLength({ min: 2 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    // Process registration
  }
);
```

## 📦 Environment Variables

Create a `.env` file:

```env
# Server
NODE_ENV=production
PORT=5000

# Database
MONGODB_URI=mongodb://localhost:27017/onekart
# or
DATABASE_URL=postgresql://user:password@localhost:5432/onekart

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this
REFRESH_TOKEN_SECRET=your-refresh-token-secret-change-this

# Payment Gateway
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
# or
RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Email Service (SendGrid/Mailgun)
SENDGRID_API_KEY=SG.xxx
FROM_EMAIL=noreply@onekart.com

# Cloud Storage (AWS S3)
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
S3_BUCKET_NAME=onekart-products

# Redis (for sessions/caching)
REDIS_URL=redis://localhost:6379

# API Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 🚀 Deployment Checklist

- [ ] Set up production database
- [ ] Configure environment variables
- [ ] Implement SSL/TLS (HTTPS)
- [ ] Set up CDN for static assets
- [ ] Configure CORS properly
- [ ] Enable logging and monitoring
- [ ] Set up automated backups
- [ ] Implement error tracking (Sentry)
- [ ] Configure rate limiting
- [ ] Set up CI/CD pipeline
- [ ] Load testing and optimization
- [ ] Security audit

---

**Ready to build your backend? Start with the Express.js example and expand from there!**