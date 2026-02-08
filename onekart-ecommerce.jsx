import React, { useState, useEffect, createContext, useContext, useReducer } from 'react';
import { ShoppingCart, User, Search, Menu, X, Star, Heart, ChevronRight, MessageCircle, Send, Filter, Minus, Plus, Trash2, Package, CreditCard, MapPin, ArrowLeft, Smartphone, Shirt, Tv, Home, Zap, Sparkles, ShoppingBag, TrendingUp } from 'lucide-react';

// ==================== CONTEXT & STATE MANAGEMENT ====================

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };
    
    case 'CLEAR_CART':
      return { ...state, items: [] };
    
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  
  const addToCart = (product) => dispatch({ type: 'ADD_TO_CART', payload: product });
  const removeFromCart = (productId) => dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  const updateQuantity = (productId, quantity) => 
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  
  const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  return (
    <CartContext.Provider value={{ 
      cart: state.items, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      cartCount,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

// ==================== MOCK DATA ====================

const CATEGORIES = [
  { id: 'mobiles', name: 'Mobiles', icon: Smartphone, color: '#FF6B6B' },
  { id: 'fashion', name: 'Fashion', icon: Shirt, color: '#4ECDC4' },
  { id: 'electronics', name: 'Electronics', icon: Tv, color: '#95E1D3' },
  { id: 'home', name: 'Home', icon: Home, color: '#F38181' },
  { id: 'appliances', name: 'Appliances', icon: Zap, color: '#AA96DA' },
  { id: 'beauty', name: 'Beauty & Toys', icon: Sparkles, color: '#FCBAD3' },
  { id: 'grocery', name: 'Grocery', icon: ShoppingBag, color: '#A8D8EA' },
  { id: 'trending', name: 'Trending', icon: TrendingUp, color: '#FFD93D' }
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
    name: 'Levi\'s Men\'s Jeans',
    brand: 'Levi\'s',
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
    brand: 'Nature\'s Best',
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
  },
  {
    id: 13,
    name: "Wireless Noise-Cancelling Headphones",
    brand: "SoundWave",
    category: "Electronics",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.5,
    reviews: 2847,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    inStock: true,
    discount: 33,
    features: ["Active Noise Cancellation", "30-hour battery", "Bluetooth 5.0", "Foldable design"]
  },
  {
    id: 14,
    name: "Organic Cotton T-Shirt",
    brand: "EcoWear",
    category: "Clothing",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.3,
    reviews: 1203,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    inStock: true,
    discount: 29,
    features: ["100% Organic Cotton", "Pre-shrunk", "Multiple colors", "Unisex fit"]
  },
  {
    id: 15,
    name: "Smart Fitness Watch",
    brand: "FitTech",
    category: "Electronics",
    price: 149.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 5632,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    inStock: true,
    discount: 40,
    features: ["Heart rate monitor", "GPS tracking", "Waterproof", "7-day battery"]
  },
  {
    id: 16,
    name: "Stainless Steel Water Bottle",
    brand: "HydroLife",
    category: "Home & Kitchen",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.7,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    inStock: true,
    discount: 25,
    features: ["24-hour cold retention", "Leak-proof", "BPA-free", "750ml capacity"]
  },
  {
    id: 17,
    name: "Yoga Mat Premium",
    brand: "ZenFit",
    category: "Sports",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.4,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f",
    inStock: true,
    discount: 33,
    features: ["Non-slip surface", "6mm thick", "Eco-friendly", "Includes carrying strap"]
  },
  {
    id: 18,
    name: "Leather Laptop Bag",
    brand: "UrbanCarry",
    category: "Accessories",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 1567,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    inStock: true,
    discount: 31,
    features: ["Genuine leather", "Fits 15-inch laptop", "Multiple compartments", "Adjustable strap"]
  },
  {
    id: 19,
    name: "Electric Coffee Grinder",
    brand: "BrewMaster",
    category: "Home & Kitchen",
    price: 44.99,
    originalPrice: 64.99,
    rating: 4.6,
    reviews: 2134,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
    inStock: true,
    discount: 31,
    features: ["18 grind settings", "Stainless steel blades", "Easy to clean", "Compact design"]
  },
  {
    id: 20,
    name: "Running Shoes Pro",
    brand: "SprintX",
    category: "Sports",
    price: 119.99,
    originalPrice: 159.99,
    rating: 4.7,
    reviews: 4289,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    inStock: true,
    discount: 25,
    features: ["Breathable mesh", "Cushioned sole", "Lightweight", "Arch support"]
  },
  {
    id: 21,
    name: "Wireless Gaming Mouse",
    brand: "GamePro",
    category: "Electronics",
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.5,
    reviews: 3567,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
    inStock: false,
    discount: 33,
    features: ["16000 DPI", "RGB lighting", "Programmable buttons", "Wireless charging"]
  },
  {
    id: 22,
    name: "Ceramic Non-Stick Pan Set",
    brand: "ChefEssentials",
    category: "Home & Kitchen",
    price: 79.99,
    originalPrice: 119.99,
    rating: 4.4,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
    inStock: true,
    discount: 33,
    features: ["3-piece set", "Ceramic coating", "Dishwasher safe", "Oven safe up to 450°F"]
  },
  {
    id: 23,
    name: "Portable Bluetooth Speaker",
    brand: "SoundWave",
    category: "Electronics",
    price: 69.99,
    originalPrice: 99.99,
    rating: 4.6,
    reviews: 5234,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    inStock: true,
    discount: 30,
    features: ["360° sound", "Waterproof IPX7", "12-hour battery", "Built-in microphone"]
  },
  {
    id: 24,
    name: "Memory Foam Pillow",
    brand: "SleepWell",
    category: "Home & Kitchen",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.5,
    reviews: 2901,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2",
    inStock: true,
    discount: 30,
    features: ["Ergonomic design", "Cooling gel", "Hypoallergenic", "Removable cover"]
  },
  {
    id: 25,
    name: "Denim Jacket Classic",
    brand: "UrbanStyle",
    category: "Clothing",
    price: 69.99,
    originalPrice: 99.99,
    rating: 4.3,
    reviews: 987,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9",
    inStock: true,
    discount: 30,
    features: ["100% cotton denim", "Classic fit", "Button closure", "Multiple pockets"]
  },
  {
    id: 26,
    name: "Resistance Bands Set",
    brand: "FitZone",
    category: "Sports",
    price: 24.99,
    originalPrice: 39.99,
    rating: 4.6,
    reviews: 3456,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc",
    inStock: true,
    discount: 38,
    features: ["5 resistance levels", "Latex-free", "Includes door anchor", "Portable bag included"]
  },
  {
    id: 27,
    name: "Smart LED Desk Lamp",
    brand: "BrightSpace",
    category: "Home & Kitchen",
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.4,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    inStock: true,
    discount: 38,
    features: ["Touch control", "USB charging port", "Adjustable brightness", "Eye-care technology"]
  },
  {
    id: 28,
    name: "Mechanical Keyboard RGB",
    brand: "TechKeys",
    category: "Electronics",
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.7,
    reviews: 4521,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    inStock: true,
    discount: 33,
    features: ["Cherry MX switches", "RGB backlighting", "Programmable keys", "Wrist rest included"]
  },
  {
    id: 29,
    name: "Backpack Travel",
    brand: "Wanderlust",
    category: "Accessories",
    price: 54.99,
    originalPrice: 84.99,
    rating: 4.5,
    reviews: 2345,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    inStock: true,
    discount: 35,
    features: ["40L capacity", "Water-resistant", "Laptop compartment", "Padded straps"]
  },
  {
    id: 30,
    name: "Air Purifier HEPA",
    brand: "PureAir",
    category: "Home & Kitchen",
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.6,
    reviews: 3890,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
    inStock: true,
    discount: 35,
    features: ["True HEPA filter", "Covers 500 sq ft", "Quiet operation", "Air quality sensor"]
  },
  {
    id: 31,
    name: "Sunglasses Polarized",
    brand: "SunShield",
    category: "Accessories",
    price: 39.99,
    originalPrice: 69.99,
    rating: 4.4,
    reviews: 1678,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    inStock: false,
    discount: 43,
    features: ["UV400 protection", "Polarized lenses", "Lightweight frame", "Includes case"]
  },
  {
    id: 32,
    name: "Instant Pot 6-Quart",
    brand: "QuickCook",
    category: "Home & Kitchen",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 8934,
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62",
    inStock: true,
    discount: 31,
    features: ["7-in-1 functionality", "Programmable", "Stainless steel", "Safety certified"]
  },
  {
    id: 33,
    name: "Wireless Earbuds Pro",
    brand: "AudioTech",
    category: "Electronics",
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 6234,
    image: "https://images.unsplash.com/photo-1590658165737-15a047b7a742",
    inStock: true,
    discount: 38,
    features: ["Active noise cancellation", "Wireless charging case", "8-hour battery", "IPX5 waterproof"]
  },
  {
    id: 34,
    name: "Hoodie Premium Cotton",
    brand: "ComfortWear",
    category: "Clothing",
    price: 44.99,
    originalPrice: 64.99,
    rating: 4.6,
    reviews: 2156,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    inStock: true,
    discount: 31,
    features: ["Soft fleece lining", "Kangaroo pocket", "Drawstring hood", "Pre-shrunk"]
  },
  {
    id: 35,
    name: "Blender High-Speed",
    brand: "BlendPro",
    category: "Home & Kitchen",
    price: 64.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b",
    inStock: true,
    discount: 35,
    features: ["1000W motor", "6 stainless steel blades", "BPA-free pitcher", "Pulse function"]
  },
  {
    id: 36,
    name: "Dumbbells Adjustable Set",
    brand: "IronFit",
    category: "Sports",
    price: 149.99,
    originalPrice: 219.99,
    rating: 4.7,
    reviews: 2789,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    inStock: true,
    discount: 32,
    features: ["5-52.5 lbs per dumbbell", "Quick adjustment", "Space-saving", "Durable coating"]
  },
  {
    id: 37,
    name: "Electric Toothbrush",
    brand: "SmileCare",
    category: "Health & Beauty",
    price: 59.99,
    originalPrice: 99.99,
    rating: 4.6,
    reviews: 4567,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04",
    inStock: true,
    discount: 40,
    features: ["Sonic technology", "5 cleaning modes", "2-week battery", "Pressure sensor"]
  },
  {
    id: 38,
    name: "Office Chair Ergonomic",
    brand: "ComfortSeating",
    category: "Furniture",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.5,
    reviews: 1890,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
    inStock: true,
    discount: 33,
    features: ["Lumbar support", "Adjustable armrests", "Breathable mesh", "360° swivel"]
  },
  {
    id: 39,
    name: "Smartwatch Fitness Tracker",
    brand: "TechTime",
    category: "Electronics",
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.4,
    reviews: 3234,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    inStock: false,
    discount: 33,
    features: ["Heart rate monitor", "Sleep tracking", "Notifications", "5-day battery"]
  },
  {
    id: 40,
    name: "Skincare Set Deluxe",
    brand: "GlowNaturals",
    category: "Health & Beauty",
    price: 74.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 5678,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571",
    inStock: true,
    discount: 38,
    features: ["4-step routine", "Natural ingredients", "All skin types", "Cruelty-free"]
  },
  {
    id: 41,
    name: "Tennis Racket Professional",
    brand: "AceSports",
    category: "Sports",
    price: 139.99,
    originalPrice: 199.99,
    rating: 4.6,
    reviews: 876,
    image: "https://images.unsplash.com/photo-1617083277226-c39a3b7f8c14",
    inStock: true,
    discount: 30,
    features: ["Graphite frame", "Pre-strung", "Balanced weight", "Includes cover"]
  },
  {
    id: 42,
    name: "Standing Desk Converter",
    brand: "RiseUp",
    category: "Furniture",
    price: 159.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviews: 2345,
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c",
    inStock: true,
    discount: 36,
    features: ["Height adjustable", "Dual monitor support", "Keyboard tray", "Easy assembly"]
  },
  {
    id: 43,
    name: "Camera Mirrorless 4K",
    brand: "PhotoPro",
    category: "Electronics",
    price: 799.99,
    originalPrice: 1199.99,
    rating: 4.8,
    reviews: 1567,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    inStock: true,
    discount: 33,
    features: ["24MP sensor", "4K video", "WiFi connectivity", "Includes 18-55mm lens"]
  },
  {
    id: 44,
    name: "Protein Powder Vanilla",
    brand: "MuscleFuel",
    category: "Health & Beauty",
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.5,
    reviews: 4321,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f",
    inStock: true,
    discount: 27,
    features: ["25g protein per serving", "Whey isolate", "Low sugar", "2 lbs container"]
  },
  {
    id: 45,
    name: "Sneakers Casual Canvas",
    brand: "StreetStyle",
    category: "Clothing",
    price: 49.99,
    originalPrice: 74.99,
    rating: 4.3,
    reviews: 2134,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    inStock: true,
    discount: 33,
    features: ["Canvas upper", "Rubber sole", "Cushioned insole", "Multiple colors"]
  },
  {
    id: 46,
    name: "Food Processor 12-Cup",
    brand: "KitchenMaster",
    category: "Home & Kitchen",
    price: 109.99,
    originalPrice: 169.99,
    rating: 4.6,
    reviews: 2876,
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d",
    inStock: true,
    discount: 35,
    features: ["Powerful motor", "Multiple blades", "Dishwasher safe", "Large capacity"]
  },
  {
    id: 47,
    name: "Tablet 10-Inch Android",
    brand: "TechPad",
    category: "Electronics",
    price: 179.99,
    originalPrice: 249.99,
    rating: 4.4,
    reviews: 3456,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764",
    inStock: true,
    discount: 28,
    features: ["HD display", "64GB storage", "8MP camera", "Long battery life"]
  },
  {
    id: 48,
    name: "Winter Coat Puffer",
    brand: "WarmGuard",
    category: "Clothing",
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 1543,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3",
    inStock: true,
    discount: 35,
    features: ["Water-resistant", "Down insulation", "Detachable hood", "Multiple pockets"]
  },
  {
    id: 49,
    name: "Essential Oil Diffuser",
    brand: "AromaLife",
    category: "Home & Kitchen",
    price: 34.99,
    originalPrice: 54.99,
    rating: 4.5,
    reviews: 4567,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108",
    inStock: true,
    discount: 36,
    features: ["Ultrasonic technology", "LED lights", "Auto shut-off", "300ml capacity"]
  },
  {
    id: 50,
    name: "Golf Club Set Complete",
    brand: "ProSwing",
    category: "Sports",
    price: 399.99,
    originalPrice: 599.99,
    rating: 4.6,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b",
    inStock: false,
    discount: 33,
    features: ["12-piece set", "Graphite shafts", "Includes bag", "For right-handed players"]
  },
  {
    id: 51,
    name: "Electric Grill Indoor",
    brand: "GrillMaster",
    category: "Home & Kitchen",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.4,
    reviews: 1987,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    inStock: true,
    discount: 31,
    features: ["Smokeless design", "Non-stick surface", "Temperature control", "Easy to clean"]
  },
  {
    id: 52,
    name: "Hair Dryer Professional",
    brand: "StylePro",
    category: "Health & Beauty",
    price: 69.99,
    originalPrice: 109.99,
    rating: 4.6,
    reviews: 3210,
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a",
    inStock: true,
    discount: 36,
    features: ["Ionic technology", "1875W power", "3 heat settings", "Cool shot button"]
  },
  {
    id: 53,
    name: "Wallet Leather Bifold",
    brand: "LeatherCraft",
    category: "Accessories",
    price: 34.99,
    originalPrice: 54.99,
    rating: 4.5,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
    inStock: true,
    discount: 36,
    features: ["Genuine leather", "RFID blocking", "Multiple card slots", "Slim design"]
  },
  {
    id: 54,
    name: "Monitor 27-Inch 4K",
    brand: "ViewPro",
    category: "Electronics",
    price: 349.99,
    originalPrice: 499.99,
    rating: 4.7,
    reviews: 2345,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    inStock: true,
    discount: 30,
    features: ["4K UHD resolution", "IPS panel", "HDR support", "Multiple ports"]
  },
  {
    id: 55,
    name: "Soccer Ball Official Size",
    brand: "GoalPro",
    category: "Sports",
    price: 29.99,
    originalPrice: 44.99,
    rating: 4.5,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd",
    inStock: true,
    discount: 33,
    features: ["Size 5", "Durable synthetic leather", "Hand-stitched", "FIFA quality"]
  },
  {
    id: 56,
    name: "Bedding Set Queen",
    brand: "DreamComfort",
    category: "Home & Kitchen",
    price: 69.99,
    originalPrice: 109.99,
    rating: 4.6,
    reviews: 3456,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
    inStock: true,
    discount: 36,
    features: ["6-piece set", "100% cotton", "Fade resistant", "Machine washable"]
  },
  {
    id: 57,
    name: "Power Bank 20000mAh",
    brand: "ChargeMax",
    category: "Electronics",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 5678,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5",
    inStock: true,
    discount: 33,
    features: ["Fast charging", "Dual USB ports", "LED display", "Portable design"]
  },
  {
    id: 58,
    name: "Dress Shirt Slim Fit",
    brand: "FormalStyle",
    category: "Clothing",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.4,
    reviews: 987,
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4",
    inStock: true,
    discount: 33,
    features: ["Cotton blend", "Wrinkle-free", "Modern fit", "Multiple colors"]
  },
  {
    id: 59,
    name: "Vacuum Cleaner Cordless",
    brand: "CleanPro",
    category: "Home & Kitchen",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.6,
    reviews: 2890,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001",
    inStock: true,
    discount: 33,
    features: ["Powerful suction", "HEPA filter", "40-minute runtime", "Lightweight"]
  },
  {
    id: 60,
    name: "Sunscreen SPF 50",
    brand: "SkinGuard",
    category: "Health & Beauty",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.7,
    reviews: 6543,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
    inStock: true,
    discount: 33,
    features: ["Broad spectrum", "Water-resistant", "Non-greasy", "Reef-safe formula"]
  },
  {
    id: 61,
    name: "Basketball Indoor/Outdoor",
    brand: "CourtKing",
    category: "Sports",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.5,
    reviews: 1567,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
    inStock: true,
    discount: 30,
    features: ["Official size 7", "Composite leather", "Deep channels", "Superior grip"]
  },
  {
    id: 62,
    name: "Smart Thermostat WiFi",
    brand: "HomeTemp",
    category: "Electronics",
    price: 149.99,
    originalPrice: 229.99,
    rating: 4.6,
    reviews: 2345,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    inStock: true,
    discount: 35,
    features: ["WiFi enabled", "Energy saving", "Voice control", "Touchscreen display"]
  }
];

const BRANDS = ['Apple', 'Samsung', 'OnePlus', 'Sony', 'Levi\'s', 'Nike', 'LG', 'Dyson', 'Urban Ladder', 'Lakme', 'Nature\'s Best'];

// ==================== COMPONENTS ====================

// Header Component
const Header = ({ onCartClick, onLoginClick, isLoggedIn }) => {
  const { cartCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const suggestions = searchQuery.length > 2 
    ? PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: '#1B315E',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      animation: 'slideDown 0.3s ease-out'
    }}>
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
      
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer'
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <ShoppingCart size={28} color="#4CB1C1" />
          <h1 style={{
            margin: 0,
            color: 'white',
            fontSize: '24px',
            fontWeight: '700',
            letterSpacing: '-0.5px'
          }}>
            One<span style={{ color: '#4CB1C1' }}>Kart</span>
          </h1>
        </div>

        {/* Search Bar */}
        <div style={{
          flex: 1,
          maxWidth: '600px',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              style={{
                flex: 1,
                padding: '12px 16px',
                border: 'none',
                outline: 'none',
                fontSize: '14px'
              }}
            />
            <button style={{
              padding: '12px 20px',
              backgroundColor: '#4CB1C1',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A9FAE'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4CB1C1'}
            >
              <Search size={20} color="white" />
            </button>
          </div>

          {/* Auto-suggest Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              borderRadius: '8px',
              marginTop: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              zIndex: 1000,
              animation: 'scaleIn 0.2s ease-out'
            }}>
              {suggestions.map(product => (
                <div
                  key={product.id}
                  style={{
                    padding: '12px 16px',
                    cursor: 'pointer',
                    borderBottom: '1px solid #f0f0f0',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                  onClick={() => {
                    setSearchQuery(product.name);
                    setShowSuggestions(false);
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Search size={16} color="#666" />
                    <div>
                      <div style={{ fontSize: '14px', color: '#333' }}>{product.name}</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>in {product.category}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Icons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px'
        }}>
          <button
            onClick={onLoginClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <User size={20} />
            <span className="hide-mobile">{isLoggedIn ? 'Account' : 'Login'}</span>
          </button>

          <button
            onClick={onCartClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              position: 'relative',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <ShoppingCart size={20} />
            <span className="hide-mobile">Cart</span>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#FF6B6B',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 'bold',
                animation: 'pulse 0.5s ease-in-out'
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

// Category Ribbon
const CategoryRibbon = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #e0e0e0',
      position: 'sticky',
      top: '60px',
      zIndex: 999,
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px',
        overflowX: 'auto',
        display: 'flex',
        gap: '8px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
      className="category-ribbon"
      >
        {CATEGORIES.map(category => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                padding: '16px 20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                minWidth: '100px',
                transition: 'all 0.3s',
                borderBottom: isSelected ? `3px solid ${category.color}` : '3px solid transparent',
                transform: isSelected ? 'translateY(-2px)' : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f5f5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Icon size={28} color={isSelected ? category.color : '#666'} />
              <span style={{
                fontSize: '13px',
                fontWeight: isSelected ? '600' : '400',
                color: isSelected ? category.color : '#333',
                whiteSpace: 'nowrap'
              }}>
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Product Card
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: isHovered ? '0 8px 16px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.3s',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        animation: 'fadeIn 0.5s ease-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div style={{
        position: 'relative',
        paddingTop: '100%',
        backgroundColor: '#f5f5f5',
        overflow: 'hidden'
      }}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s'
          }}
        />
        
        {/* Discount Badge */}
        {product.discount > 0 && (
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: '#FF6B6B',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: '600'
          }}>
            {product.discount}% OFF
          </div>
        )}

        {/* Wishlist Icon */}
        <button
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Heart size={18} color="#666" />
        </button>
      </div>

      {/* Product Info */}
      <div style={{ padding: '16px' }}>
        <div style={{
          fontSize: '12px',
          color: '#666',
          marginBottom: '4px',
          textTransform: 'uppercase'
        }}>
          {product.brand}
        </div>
        
        <h3 style={{
          margin: '0 0 8px 0',
          fontSize: '14px',
          fontWeight: '500',
          color: '#333',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          lineHeight: '1.4'
        }}>
          {product.name}
        </h3>

        {/* Rating */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '8px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: '#388E3C',
            color: 'white',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: '600'
          }}>
            {product.rating}
            <Star size={12} fill="white" />
          </div>
          <span style={{ fontSize: '12px', color: '#666' }}>
            ({product.reviews.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '12px'
        }}>
          <span style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#1B315E'
          }}>
            ₹{product.price.toLocaleString()}
          </span>
          <span style={{
            fontSize: '14px',
            color: '#666',
            textDecoration: 'line-through'
          }}>
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div>

        {/* Features */}
        <div style={{
          fontSize: '11px',
          color: '#666',
          marginBottom: '12px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4px'
        }}>
          {product.features.slice(0, 2).map((feature, idx) => (
            <span key={idx} style={{
              backgroundColor: '#f0f0f0',
              padding: '2px 6px',
              borderRadius: '3px'
            }}>
              {feature}
            </span>
          ))}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#4CB1C1',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3A9FAE';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4CB1C1';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <ShoppingCart size={16} />
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

// Filters Sidebar
const FiltersSidebar = ({ filters, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 200000]);

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: '140px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '20px'
      }}>
        <Filter size={20} color="#1B315E" />
        <h3 style={{ margin: 0, fontSize: '18px', color: '#1B315E' }}>Filters</h3>
      </div>

      {/* Price Range */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>
          PRICE RANGE
        </h4>
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '12px'
        }}>
          <input
            type="number"
            placeholder="Min"
            value={priceRange[0]}
            onChange={(e) => {
              const newRange = [parseInt(e.target.value) || 0, priceRange[1]];
              setPriceRange(newRange);
              onFilterChange('priceRange', newRange);
            }}
            style={{
              flex: 1,
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '13px'
            }}
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange[1]}
            onChange={(e) => {
              const newRange = [priceRange[0], parseInt(e.target.value) || 200000];
              setPriceRange(newRange);
              onFilterChange('priceRange', newRange);
            }}
            style={{
              flex: 1,
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '13px'
            }}
          />
        </div>
      </div>

      {/* Brand Filter */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>
          BRAND
        </h4>
        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {BRANDS.map(brand => (
            <label
              key={brand}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 0',
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              <input
                type="checkbox"
                checked={filters.brands?.includes(brand) || false}
                onChange={(e) => {
                  const newBrands = e.target.checked
                    ? [...(filters.brands || []), brand]
                    : (filters.brands || []).filter(b => b !== brand);
                  onFilterChange('brands', newBrands);
                }}
                style={{ cursor: 'pointer' }}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>
          CUSTOMER RATINGS
        </h4>
        {[4.5, 4.0, 3.5, 3.0].map(rating => (
          <label
            key={rating}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 0',
              cursor: 'pointer',
              fontSize: '13px'
            }}
          >
            <input
              type="checkbox"
              checked={filters.minRating === rating}
              onChange={(e) => {
                onFilterChange('minRating', e.target.checked ? rating : 0);
              }}
              style={{ cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>{rating}</span>
              <Star size={14} fill="#FFB800" color="#FFB800" />
              <span style={{ color: '#666' }}>& above</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

// Cart Page
const CartPage = ({ onClose, onProceedToBuy }) => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const deliveryFee = cartTotal > 5000 ? 0 : 50;
  const total = cartTotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeIn 0.3s ease-out'
      }}
      onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '60px',
            textAlign: 'center',
            maxWidth: '400px',
            animation: 'scaleIn 0.3s ease-out'
          }}
        >
          <ShoppingCart size={64} color="#ddd" style={{ marginBottom: '20px' }} />
          <h2 style={{ marginBottom: '12px', color: '#333' }}>Your Cart is Empty</h2>
          <p style={{ color: '#666', marginBottom: '24px' }}>
            Add items to get started
          </p>
          <button
            onClick={onClose}
            style={{
              padding: '12px 32px',
              backgroundColor: '#4CB1C1',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#F0F2F5',
      zIndex: 2000,
      overflowY: 'auto',
      animation: 'fadeIn 0.3s ease-out'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
      }}>
        {/* Header */}
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px'
              }}
            >
              <ArrowLeft size={24} color="#1B315E" />
            </button>
            <h2 style={{ margin: 0, color: '#1B315E' }}>Shopping Cart</h2>
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>
            {cart.length} {cart.length === 1 ? 'item' : 'items'}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '20px'
        }}
        className="cart-layout"
        >
          {/* Cart Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {cart.map(item => (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  padding: '20px',
                  display: 'flex',
                  gap: '20px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    margin: '0 0 8px 0',
                    fontSize: '16px',
                    color: '#333'
                  }}>
                    {item.name}
                  </h3>
                  <div style={{
                    fontSize: '12px',
                    color: '#666',
                    marginBottom: '12px'
                  }}>
                    {item.brand}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px'
                  }}>
                    <span style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#1B315E'
                    }}>
                      ₹{item.price.toLocaleString()}
                    </span>
                    <span style={{
                      fontSize: '14px',
                      color: '#666',
                      textDecoration: 'line-through'
                    }}>
                      ₹{item.originalPrice.toLocaleString()}
                    </span>
                    <span style={{
                      fontSize: '12px',
                      color: '#388E3C',
                      fontWeight: '600'
                    }}>
                      {item.discount}% off
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    {/* Quantity Controls */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      padding: '4px'
                    }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: item.quantity > 1 ? 'pointer' : 'not-allowed',
                          padding: '4px 8px',
                          opacity: item.quantity > 1 ? 1 : 0.5
                        }}
                      >
                        <Minus size={16} />
                      </button>
                      <span style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        minWidth: '30px',
                        textAlign: 'center'
                      }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '4px 8px'
                        }}
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#666',
                        fontSize: '14px',
                        padding: '8px 12px',
                        transition: 'color 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#FF6B6B'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div style={{ position: 'sticky', top: '20px' }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                margin: '0 0 20px 0',
                fontSize: '18px',
                color: '#1B315E',
                paddingBottom: '16px',
                borderBottom: '1px solid #e0e0e0'
              }}>
                PRICE DETAILS
              </h3>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '14px'
                }}>
                  <span>Price ({cart.length} items)</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '14px'
                }}>
                  <span>Delivery Charges</span>
                  <span style={{ color: deliveryFee === 0 ? '#388E3C' : '#333' }}>
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
              </div>

              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid #e0e0e0',
                marginBottom: '20px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#1B315E'
                }}>
                  <span>Total Amount</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              {deliveryFee === 0 && (
                <div style={{
                  backgroundColor: '#E8F5E9',
                  padding: '12px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: '#388E3C',
                  marginBottom: '20px'
                }}>
                  Yay! You saved ₹50 on delivery charges
                </div>
              )}

              <button
                onClick={onProceedToBuy}
                style={{
                  width: '100%',
                  padding: '16px',
                  backgroundColor: '#FF6B6B',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 4px 12px rgba(255, 107, 107, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF5252';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF6B6B';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                PROCEED TO BUY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Login Modal
const LoginModal = ({ onClose, onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 3000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeIn 0.3s ease-out',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '40px',
          maxWidth: '450px',
          width: '100%',
          animation: 'scaleIn 0.3s ease-out',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <h2 style={{ margin: 0, color: '#1B315E' }}>
            {isSignup ? 'Create Account' : 'Login'}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <X size={24} color="#666" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#333'
              }}>
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required={isSignup}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#4CB1C1'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </div>
          )}

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#333'
            }}>
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#4CB1C1'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#333'
            }}>
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#4CB1C1'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#4CB1C1',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '16px',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A9FAE'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4CB1C1'}
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </button>

          <div style={{
            textAlign: 'center',
            fontSize: '14px',
            color: '#666'
          }}>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}
            {' '}
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              style={{
                background: 'none',
                border: 'none',
                color: '#4CB1C1',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px'
              }}
            >
              {isSignup ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </form>

        <div style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#FFF3E0',
          borderRadius: '6px',
          fontSize: '12px',
          color: '#E65100'
        }}>
          <strong>Note:</strong> This is a demo. Use any email/password to login.
        </div>
      </div>
    </div>
  );
};

// AI Chat Widget
const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const quickQueries = [
    { id: 1, text: "Where is my order?", icon: Package },
    { id: 2, text: "How do I return an item?", icon: Package },
    { id: 3, text: "Check current bank offers", icon: CreditCard },
    { id: 4, text: "Talk to a human agent", icon: User }
  ];

  const handleQuickQuery = (query) => {
    const userMessage = { text: query, sender: 'user', timestamp: new Date() };
    const botResponse = {
      text: `Thank you for your query about "${query}". Our support team will assist you shortly. This is a demo response.`,
      sender: 'bot',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage, botResponse]);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const userMessage = { text: inputMessage, sender: 'user', timestamp: new Date() };
    const botResponse = {
      text: "Thank you for your message. Our AI assistant is processing your request. This is a demo response.",
      sender: 'bot',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage, botResponse]);
    setInputMessage('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#4CB1C1',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(76, 177, 193, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s',
          zIndex: 1000,
          animation: 'pulse 2s infinite'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(76, 177, 193, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(76, 177, 193, 0.4)';
        }}
      >
        {isOpen ? <X size={28} color="white" /> : <MessageCircle size={28} color="white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          right: '24px',
          width: '380px',
          maxHeight: '600px',
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000,
          animation: 'scaleIn 0.3s ease-out',
          overflow: 'hidden'
        }}
        className="chat-window"
        >
          {/* Chat Header */}
          <div style={{
            padding: '20px',
            backgroundColor: '#1B315E',
            color: 'white',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px'
          }}>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '18px' }}>OneKart Assistant</h3>
            <p style={{ margin: 0, fontSize: '13px', opacity: 0.9 }}>
              How can we help you today?
            </p>
          </div>

          {/* Quick Queries */}
          {messages.length === 0 && (
            <div style={{
              padding: '20px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px'
            }}>
              {quickQueries.map(query => {
                const Icon = query.icon;
                return (
                  <button
                    key={query.id}
                    onClick={() => handleQuickQuery(query.text)}
                    style={{
                      padding: '16px',
                      backgroundColor: '#F0F2F5',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      textAlign: 'left',
                      transition: 'all 0.2s',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#E3F2FD';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F0F2F5';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Icon size={20} color="#4CB1C1" />
                    {query.text}
                  </button>
                );
              })}
            </div>
          )}

          {/* Messages */}
          {messages.length > 0 && (
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '80%'
                  }}
                >
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    backgroundColor: msg.sender === 'user' ? '#4CB1C1' : '#F0F2F5',
                    color: msg.sender === 'user' ? 'white' : '#333',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    {msg.text}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: '#999',
                    marginTop: '4px',
                    textAlign: msg.sender === 'user' ? 'right' : 'left'
                  }}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: '16px',
            borderTop: '1px solid #e0e0e0',
            display: 'flex',
            gap: '8px'
          }}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                padding: '12px 16px',
                backgroundColor: '#4CB1C1',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Send size={20} color="white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Main App Component
const OneKartApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 200000],
    brands: [],
    minRating: 0
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleProceedToBuy = () => {
    if (!isLoggedIn) {
      setShowCart(false);
      setShowLogin(true);
    } else {
      alert('Proceeding to checkout... (Demo)');
    }
  };

  const handleLogin = (formData) => {
    console.log('Login with:', formData);
    setIsLoggedIn(true);
    setShowLogin(false);
    alert('Login successful! (Demo)');
  };

  // Filter products
  const filteredProducts = PRODUCTS.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) return false;
    if (product.rating < filters.minRating) return false;
    return true;
  });

  return (
    <CartProvider>
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#F0F2F5',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}>
        <style>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          body {
            overflow-x: hidden;
          }
          
          .category-ribbon::-webkit-scrollbar {
            display: none;
          }
          
          .hide-mobile {
            display: inline;
          }
          
          @media (max-width: 768px) {
            .hide-mobile {
              display: none;
            }
            
            .mobile-menu-btn {
              display: block !important;
            }
            
            .cart-layout {
              grid-template-columns: 1fr !important;
            }
            
            .chat-window {
              width: calc(100vw - 40px) !important;
              max-width: 380px !important;
            }
          }
          
          @media (max-width: 1024px) {
            .filters-sidebar {
              display: none;
            }
            
            .main-layout {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

        <Header
          onCartClick={() => setShowCart(true)}
          onLoginClick={() => setShowLogin(true)}
          isLoggedIn={isLoggedIn}
        />

        <CategoryRibbon
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '24px 20px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: '24px'
          }}
          className="main-layout"
          >
            {/* Filters */}
            <div className="filters-sidebar">
              <FiltersSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* Products Grid */}
            <div>
              <div style={{
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h2 style={{ color: '#1B315E', fontSize: '20px' }}>
                  {selectedCategory === 'all' ? 'All Products' : 
                    CATEGORIES.find(c => c.id === selectedCategory)?.name}
                </h2>
                <div style={{ fontSize: '14px', color: '#666' }}>
                  Showing {filteredProducts.length} products
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px'
              }}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  backgroundColor: 'white',
                  borderRadius: '8px'
                }}>
                  <Package size={64} color="#ddd" style={{ marginBottom: '16px' }} />
                  <h3 style={{ marginBottom: '8px', color: '#333' }}>No products found</h3>
                  <p style={{ color: '#666' }}>Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Cart Modal */}
        {showCart && (
          <CartPage
            onClose={() => setShowCart(false)}
            onProceedToBuy={handleProceedToBuy}
          />
        )}

        {/* Login Modal */}
        {showLogin && (
          <LoginModal
            onClose={() => setShowLogin(false)}
            onLogin={handleLogin}
          />
        )}

        {/* AI Chat Widget */}
        <AIChatWidget />
      </div>
    </CartProvider>
  );
};

export default OneKartApp;