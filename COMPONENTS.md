# OneKart Component Documentation

This document provides detailed documentation for all components in the OneKart e-commerce platform.

## 📐 Architecture Overview

```
Application Structure:
├── State Management (React Context API)
│   └── CartContext
├── Main Components
│   ├── OneKartApp (Root)
│   ├── Header
│   ├── CategoryRibbon
│   ├── FiltersSidebar
│   ├── ProductCard
│   ├── CartPage
│   ├── LoginModal
│   └── AIChatWidget
└── Data Layer
    ├── CATEGORIES (static data)
    ├── PRODUCTS (static data)
    └── BRANDS (static data)
```

## 🔄 State Management

### CartContext

**Purpose**: Manages shopping cart state across the entire application using React Context API.

**Location**: Top of file, wraps entire app

**State Structure**:
```javascript
{
  items: [
    {
      id: number,
      name: string,
      brand: string,
      price: number,
      originalPrice: number,
      discount: number,
      quantity: number,
      image: string,
      // ... other product fields
    }
  ]
}
```

**Actions**:
```javascript
// Add product to cart (or increment quantity if exists)
addToCart(product)

// Remove product from cart completely
removeFromCart(productId)

// Update quantity of cart item
updateQuantity(productId, newQuantity)

// Clear all items from cart
clearCart()
```

**Derived State**:
```javascript
// Total number of items in cart
cartCount = items.reduce((sum, item) => sum + item.quantity, 0)

// Total price of all items
cartTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
```

**Usage Example**:
```javascript
const { cart, addToCart, cartCount } = useCart();

// Add to cart
<button onClick={() => addToCart(product)}>Add to Cart</button>

// Display cart count
<span>{cartCount}</span>
```

### Cart Reducer Logic

**ADD_TO_CART**:
```javascript
1. Check if item already exists in cart
2. If yes: Increment quantity
3. If no: Add new item with quantity = 1
4. Return updated cart state
```

**UPDATE_QUANTITY**:
```javascript
1. Find item by ID
2. Update quantity (minimum 1)
3. Return updated cart state
```

**REMOVE_FROM_CART**:
```javascript
1. Filter out item with matching ID
2. Return updated cart state
```

---

## 🧩 Component Details

### 1. OneKartApp (Main Container)

**Purpose**: Root component that orchestrates the entire application

**State**:
```javascript
selectedCategory: string      // Current category filter
showCart: boolean             // Cart modal visibility
showLogin: boolean            // Login modal visibility
isLoggedIn: boolean          // User authentication status
filters: {
  priceRange: [min, max],    // Price filter
  brands: string[],          // Selected brands
  minRating: number          // Minimum rating filter
}
```

**Key Functions**:

**handleFilterChange(key, value)**
- Updates filter state
- Triggers product re-filtering
```javascript
setFilters(prev => ({ ...prev, [key]: value }))
```

**handleProceedToBuy()**
- Checks login status
- Shows login modal if not logged in
- Proceeds to checkout if logged in
```javascript
if (!isLoggedIn) {
  setShowCart(false);
  setShowLogin(true);
} else {
  // Proceed to checkout
}
```

**Product Filtering Logic**:
```javascript
1. Start with all products
2. Filter by category (if not 'all')
3. Filter by price range
4. Filter by brands (if selected)
5. Filter by minimum rating
6. Return filtered array
```

**Rendering Structure**:
```
<CartProvider>
  <Header />
  <CategoryRibbon />
  <Main Content>
    <FiltersSidebar />
    <ProductGrid />
  </Main Content>
  {showCart && <CartPage />}
  {showLogin && <LoginModal />}
  <AIChatWidget />
</CartProvider>
```

---

### 2. Header

**Purpose**: Top navigation bar with logo, search, and user actions

**Props**:
- `onCartClick`: Function - Opens cart modal
- `onLoginClick`: Function - Opens login modal
- `isLoggedIn`: Boolean - User login status

**Local State**:
```javascript
searchQuery: string          // Search input value
showSuggestions: boolean     // Dropdown visibility
mobileMenuOpen: boolean      // Mobile menu state
```

**Features**:

**Logo Section**:
- OneKart branding
- Shopping cart icon
- Hover scale effect
- Click to home (future enhancement)

**Search Bar**:
- Auto-suggest on 3+ characters
- Real-time product/brand matching
- Dropdown with clickable suggestions
- Blur delay to allow clicks (200ms)

**Suggestions Logic**:
```javascript
1. Check if query length > 2
2. Filter products by name OR brand
3. Case-insensitive matching
4. Limit to 5 results
5. Show in dropdown
```

**Action Icons**:
- Login/Account button
- Cart button with badge
- Badge shows cart count
- Pulse animation when items added

**Responsive Behavior**:
- Mobile: Hide text labels
- Show hamburger menu icon
- Full-width on small screens

---

### 3. CategoryRibbon

**Purpose**: Horizontal scrollable category navigation

**Props**:
- `selectedCategory`: String - Currently active category
- `onSelectCategory`: Function - Category change handler

**Features**:

**Category Data**:
```javascript
{
  id: 'mobiles',           // Unique identifier
  name: 'Mobiles',         // Display name
  icon: Smartphone,        // Lucide icon component
  color: '#FF6B6B'        // Theme color
}
```

**Visual States**:
- **Default**: Grey icon and text
- **Selected**: Colored icon, text, and bottom border
- **Hover**: Light grey background

**Scrolling**:
- Horizontal overflow with scroll
- Hide scrollbar (CSS)
- Smooth scroll behavior
- Touch-friendly on mobile

**Sticky Positioning**:
- Sticks below header (top: 60px)
- Z-index: 999
- Always visible during scroll

---

### 4. ProductCard

**Purpose**: Individual product display card

**Props**:
- `product`: Object - Product data

**Local State**:
```javascript
isHovered: boolean       // Hover state for effects
imageLoaded: boolean     // Image load state
```

**Layout Structure**:

**1. Image Section**:
```
┌─────────────────┐
│  [Discount %]   │  ← Top-left badge
│      IMAGE      │
│  [Wishlist ♥]  │  ← Top-right button
└─────────────────┘
```

**2. Info Section**:
```
Brand Name (small, uppercase)
Product Name (2 lines max)
★ 4.5 (12,453 reviews)
₹159,900  ₹179,900
[Feature] [Feature]
[ADD TO CART Button]
```

**Interactions**:

**Hover Effects**:
- Elevation increase (translateY: -4px)
- Shadow intensifies
- Scale on button hover

**Image Loading**:
- Lazy loading attribute
- Opacity transition on load
- Grey placeholder background

**Add to Cart**:
```javascript
onClick={(e) => {
  e.stopPropagation();  // Prevent card click
  addToCart(product);
}}
```

**Price Display**:
- Current price: Large, bold, navy
- Original price: Strikethrough, grey
- INR symbol (₹)
- Thousand separators

---

### 5. FiltersSidebar

**Purpose**: Product filtering controls

**Props**:
- `filters`: Object - Current filter state
- `onFilterChange`: Function - Update handler

**Local State**:
```javascript
priceRange: [min, max]   // Price inputs
```

**Filter Sections**:

**1. Price Range**:
```javascript
- Two number inputs (min/max)
- Real-time filtering on change
- Default: [0, 200000]
```

**2. Brand Filter**:
```javascript
- Checkbox for each brand
- Multi-select capability
- Scrollable if many brands
- Max height: 200px
```

**3. Rating Filter**:
```javascript
- Radio-style checkboxes
- Options: 4.5★, 4.0★, 3.5★, 3.0★
- Shows "& above" text
- Single selection
```

**Sticky Positioning**:
- Sticks below ribbon (top: 140px)
- Scrolls with content
- Hidden on mobile/tablet

**Update Flow**:
```
User changes filter
  → Update local state
  → Call onFilterChange(key, value)
    → Update parent filters state
      → Re-filter products
        → Re-render product grid
```

---

### 6. CartPage

**Purpose**: Full-page cart view with checkout

**Props**:
- `onClose`: Function - Close cart modal
- `onProceedToBuy`: Function - Checkout handler

**Derived State**:
```javascript
deliveryFee = cartTotal > 5000 ? 0 : 50
total = cartTotal + deliveryFee
```

**Layout**:

**Desktop** (2-column):
```
┌──────────────┬─────────────┐
│  Cart Items  │   Summary   │
│              │             │
│   [Item 1]   │   Price:    │
│   [Item 2]   │   ₹10,000   │
│   [Item 3]   │             │
│              │   Delivery: │
│              │   FREE      │
│              │             │
│              │   Total:    │
│              │   ₹10,000   │
│              │             │
│              │  [PROCEED]  │
└──────────────┴─────────────┘
```

**Mobile** (1-column):
```
┌──────────────┐
│  Cart Items  │
│   [Item 1]   │
│   [Item 2]   │
└──────────────┘
┌──────────────┐
│   Summary    │
│  [PROCEED]   │
└──────────────┘
```

**Cart Item Structure**:
```javascript
┌──────┬────────────────────────┐
│      │ Product Name           │
│ IMG  │ Brand                  │
│      │ ₹159,900  ₹179,900    │
│      │ [- 1 +]  [Remove]     │
└──────┴────────────────────────┘
```

**Quantity Controls**:
- Minus button (disabled at qty=1)
- Current quantity display
- Plus button (no limit)
- Updates cart via context

**Empty Cart State**:
```
┌─────────────────┐
│   🛒 (icon)     │
│                 │
│ Your Cart is    │
│     Empty       │
│                 │
│ [Continue Shop] │
└─────────────────┘
```

**Price Breakdown**:
```
Price (2 items)         ₹10,000
Delivery Charges           FREE
─────────────────────────────
Total Amount            ₹10,000

[FREE delivery message if > ₹5,000]
```

---

### 7. LoginModal

**Purpose**: Authentication modal (login/signup)

**Props**:
- `onClose`: Function - Close modal
- `onLogin`: Function - Submit handler

**Local State**:
```javascript
isSignup: boolean        // Toggle between modes
formData: {
  email: string,
  password: string,
  name: string          // Only for signup
}
```

**Layout**:
```
┌─────────────────────────┐
│  Login/Signup      [X]  │
│                         │
│  [Name] (if signup)     │
│  [Email]                │
│  [Password]             │
│                         │
│  [LOGIN / SIGN UP]      │
│                         │
│  Don't have account?    │
│  [Sign Up / Login]      │
│                         │
│  ⚠️ Demo Mode Note      │
└─────────────────────────┘
```

**Form Handling**:
```javascript
handleSubmit(e):
  1. Prevent default
  2. Validate fields (HTML5)
  3. Call onLogin(formData)
  4. Parent handles auth logic
```

**Toggle Logic**:
```javascript
setIsSignup(!isSignup)
// Clears form? No, preserves email/password
// Name field shown/hidden conditionally
```

**Input Focus Effects**:
- Border color changes to teal
- Smooth transition (0.2s)

**Demo Note**:
- Orange background
- Explains any credentials work
- Sets user expectations

**Click Outside to Close**:
```javascript
// Outer div onClick={onClose}
// Inner div onClick={(e) => e.stopPropagation()}
```

---

### 8. AIChatWidget

**Purpose**: Floating AI assistant chat interface

**Local State**:
```javascript
isOpen: boolean          // Widget expanded state
messages: Array<{        // Chat history
  text: string,
  sender: 'user' | 'bot',
  timestamp: Date
}>
inputMessage: string     // Current input
```

**Quick Queries**:
```javascript
[
  { text: "Where is my order?", icon: Package },
  { text: "How do I return an item?", icon: Package },
  { text: "Check current bank offers", icon: CreditCard },
  { text: "Talk to a human agent", icon: User }
]
```

**Layout States**:

**Closed**:
```
                        [💬]  ← Floating button
```

**Open**:
```
                ┌──────────────┐
                │  OneKart     │
                │  Assistant   │
                ├──────────────┤
                │ [Query 1]    │
                │ [Query 2]    │
                │ [Query 3]    │
                │ [Query 4]    │
                ├──────────────┤
                │ [Input] [>]  │
                └──────────────┘
                        [X]
```

**With Messages**:
```
┌──────────────────────┐
│  OneKart Assistant   │
├──────────────────────┤
│  User: Where is...   │
│  10:30 AM            │
│                      │
│  Bot: Your order...  │
│  10:30 AM            │
├──────────────────────┤
│ [Input] [Send]       │
└──────────────────────┘
```

**Message Flow**:
```javascript
1. User clicks quick query OR types message
2. Add user message to array
3. Generate bot response (demo)
4. Add bot response to array
5. Scroll to bottom
6. Clear input
```

**Quick Query Handler**:
```javascript
handleQuickQuery(query):
  1. Create user message object
  2. Create bot response object
  3. Append both to messages array
  4. UI updates automatically
```

**Custom Message Handler**:
```javascript
handleSendMessage():
  1. Check if input not empty
  2. Create user message
  3. Generate demo bot response
  4. Update messages array
  5. Clear input field
```

**Positioning**:
- Fixed position (bottom-right)
- Button: 24px from bottom/right
- Window: Above button
- Z-index: 1000

**Animations**:
- Button pulse (infinite, 2s)
- Window scale-in (0.3s)
- Hover scale (1.1x)

---

## 🎨 Styling Patterns

### Color Usage

**Primary Actions** (#4CB1C1 - Teal):
- "Add to Cart" buttons
- Secondary buttons
- Links and highlights
- Active states

**Secondary Actions** (#1B315E - Navy):
- Primary buttons in modals
- Header background
- Important text
- Section headers

**Destructive Actions** (#FF6B6B - Red):
- "Proceed to Buy" (high importance)
- Remove/delete buttons
- Error states

**Success States** (#388E3C - Green):
- Rating badges
- "Free delivery" messages
- Success notifications

### Spacing System

**Padding Scale**:
- Extra small: 4px
- Small: 8px
- Medium: 12px
- Large: 16px
- Extra large: 20px
- XXL: 24px

**Gap System** (Flexbox/Grid):
- Tight: 8px
- Normal: 12px
- Loose: 20px
- Wide: 24px

### Typography Scale

**Font Sizes**:
- XS: 11px (badges, captions)
- S: 12px (meta info)
- M: 13px (labels, filters)
- Regular: 14px (body, buttons)
- L: 16px (subtitles)
- XL: 18px (section headers)
- XXL: 20px (prices)
- Heading: 24px (page titles)

**Font Weights**:
- Regular: 400
- Medium: 500
- Semi-bold: 600
- Bold: 700

### Border Radius

**Small**: 4px - Badges, small buttons
**Medium**: 6px - Buttons, inputs
**Large**: 8px - Cards, containers
**XL**: 12px - Modals
**XXL**: 16px - Chat widget
**Circle**: 50% - Avatar, icon buttons

### Shadows

**Light**: `0 2px 4px rgba(0,0,0,0.05)`
**Default**: `0 2px 8px rgba(0,0,0,0.1)`
**Medium**: `0 4px 12px rgba(0,0,0,0.15)`
**Heavy**: `0 8px 16px rgba(0,0,0,0.15)`
**Lifted**: `0 8px 32px rgba(0,0,0,0.2)`

---

## 🔧 Utility Functions

### Price Formatting

```javascript
// Built-in JavaScript
price.toLocaleString()
// 159900 → "159,900"
// 2499 → "2,499"
```

### Discount Calculation

```javascript
discount = Math.round((1 - price/originalPrice) * 100)
// price: 159900, original: 179900
// discount: 11%
```

### Image Loading Pattern

```javascript
const [imageLoaded, setImageLoaded] = useState(false);

<img
  loading="lazy"
  onLoad={() => setImageLoaded(true)}
  style={{ opacity: imageLoaded ? 1 : 0 }}
/>
```

---

## 📱 Responsive Breakpoints

```javascript
// Mobile
@media (max-width: 768px) {
  - Single column layouts
  - Hide sidebar filters
  - Stack cart items
  - Show mobile menu
}

// Tablet
@media (min-width: 769px) and (max-width: 1024px) {
  - 2-column product grid
  - Compressed filters
}

// Desktop
@media (min-width: 1025px) {
  - Full sidebar
  - 3-4 column grid
  - All features visible
}
```

---

## 🚀 Performance Optimizations

### Image Lazy Loading
```javascript
<img loading="lazy" ... />
// Defers loading until near viewport
```

### Component Memoization (Future)
```javascript
const ProductCard = React.memo(({ product }) => {
  // Only re-renders if product changes
});
```

### useCallback for Handlers (Future)
```javascript
const handleAddToCart = useCallback((product) => {
  addToCart(product);
}, [addToCart]);
```

---

## 🧪 Testing Recommendations

### Unit Tests (Jest + RTL)
```javascript
describe('CartContext', () => {
  it('should add product to cart')
  it('should increment quantity if product exists')
  it('should remove product from cart')
  it('should calculate cart total correctly')
});
```

### Component Tests
```javascript
describe('ProductCard', () => {
  it('should display product information')
  it('should call addToCart on button click')
  it('should show discount badge if discount > 0')
});
```

### Integration Tests
```javascript
describe('Shopping Flow', () => {
  it('should allow adding product and viewing cart')
  it('should prompt login on checkout')
  it('should update cart count badge')
});
```

---

## 📚 Component Props Reference

### Header
```typescript
interface HeaderProps {
  onCartClick: () => void;
  onLoginClick: () => void;
  isLoggedIn: boolean;
}
```

### CategoryRibbon
```typescript
interface CategoryRibbonProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}
```

### ProductCard
```typescript
interface ProductCardProps {
  product: Product;
}
```

### FiltersSidebar
```typescript
interface FiltersSidebarProps {
  filters: {
    priceRange: [number, number];
    brands: string[];
    minRating: number;
  };
  onFilterChange: (key: string, value: any) => void;
}
```

### CartPage
```typescript
interface CartPageProps {
  onClose: () => void;
  onProceedToBuy: () => void;
}
```

### LoginModal
```typescript
interface LoginModalProps {
  onClose: () => void;
  onLogin: (formData: {
    email: string;
    password: string;
    name?: string;
  }) => void;
}
```

---

**End of Component Documentation**

For implementation details, see the source code in `onekart-ecommerce.jsx`
For setup instructions, see `QUICKSTART.md`
For backend integration, see `BACKEND_GUIDE.md`