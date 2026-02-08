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
