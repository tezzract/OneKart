# OneKart - Quick Start Guide

Get OneKart running in under 5 minutes!

## 🚀 Quick Setup

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Modern web browser

### Installation Steps

**1. Create React App**
```bash
npx create-react-app onekart
cd onekart
```

**2. Install Dependencies**
```bash
npm install lucide-react
```

**3. Add the OneKart Component**

Copy the content from `onekart-ecommerce.jsx` and create a new file:
```bash
# Create the file
touch src/OneKartApp.jsx
```

Paste the entire content from `onekart-ecommerce.jsx` into `src/OneKartApp.jsx`

**4. Update App.js**

Replace the content of `src/App.js` with:
```javascript
import OneKartApp from './OneKartApp';

function App() {
  return <OneKartApp />;
}

export default App;
```

**5. (Optional) Clean up unused files**
```bash
rm src/App.css src/App.test.js src/logo.svg
```

**6. Start the Development Server**
```bash
npm start
```

Your browser should automatically open to `http://localhost:3000` and display the OneKart application!

## 🎯 What You'll See

### Homepage
- **Header**: OneKart logo, search bar, login button, cart icon
- **Category Ribbon**: 8 scrollable categories (Mobiles, Fashion, Electronics, etc.)
- **Product Grid**: 12 sample products with images, prices, ratings
- **AI Chat Widget**: Floating chat button in bottom-right corner

### Features to Try

**1. Browse Products**
- Click on different categories to filter products
- Use the sidebar filters (price range, brands, ratings)
- Hover over product cards to see interactive effects

**2. Shopping Cart**
- Click "ADD TO CART" on any product
- Watch the cart badge update in real-time
- Click the cart icon to view your cart
- Adjust quantities with +/- buttons
- Remove items with the trash icon

**3. Contextual Login**
- Add items to cart (no login required)
- Click "PROCEED TO BUY" in cart
- Login modal appears (enter any email/password for demo)
- After login, you can proceed to checkout

**4. AI Chat Assistant**
- Click the floating chat bubble (bottom-right)
- Try the quick query buttons:
  - "Where is my order?"
  - "How do I return an item?"
  - "Check current bank offers"
  - "Talk to a human agent"
- Type custom messages and press Enter

**5. Search**
- Type in the search bar (3+ characters)
- See auto-suggestions appear
- Click a suggestion to fill the search

## 📱 Mobile Testing

**1. Chrome DevTools**
```
1. Open Chrome DevTools (F12)
2. Click the device toggle icon (Ctrl+Shift+M)
3. Select a mobile device (e.g., iPhone 12 Pro)
4. Refresh the page
```

**2. On Your Phone**
```
1. Find your computer's local IP address
   - Windows: ipconfig
   - Mac/Linux: ifconfig

2. On your phone, visit:
   http://YOUR_IP_ADDRESS:3000
   (e.g., http://192.168.1.100:3000)
```

## 🎨 Customization Ideas

### Change Brand Colors

Find and replace in `onekart-ecommerce.jsx`:
- `#1B315E` (Navy Blue) → Your primary color
- `#4CB1C1` (Teal) → Your secondary color
- `#F0F2F5` (Light Grey) → Your background color

### Add Your Logo

Replace the ShoppingCart icon in the Header component:
```javascript
// Find this line in Header component:
<ShoppingCart size={28} color="#4CB1C1" />

// Replace with an image:
<img src="/your-logo.png" alt="OneKart" style={{ height: '28px' }} />
```

### Modify Product Categories

Edit the `CATEGORIES` array:
```javascript
const CATEGORIES = [
  { id: 'books', name: 'Books', icon: BookOpen, color: '#FF6B6B' },
  { id: 'sports', name: 'Sports', icon: Trophy, color: '#4ECDC4' },
  // ... add your categories
];
```

### Add More Products

Edit the `PRODUCTS` array with your own products:
```javascript
{
  id: 13,
  name: 'Your Product Name',
  brand: 'Your Brand',
  category: 'category_id', // Must match a category id
  price: 999,
  originalPrice: 1299,
  rating: 4.5,
  reviews: 100,
  image: 'https://your-image-url.com/image.jpg',
  inStock: true,
  discount: 23,
  features: ['Feature 1', 'Feature 2', 'Feature 3']
}
```

## 🔧 Troubleshooting

### "Module not found: lucide-react"
```bash
npm install lucide-react
```

### Port 3000 is already in use
```bash
# Use a different port
PORT=3001 npm start
```

### Blank page / No errors in console
```
1. Check if you copied the entire file content
2. Verify OneKartApp is properly exported
3. Clear browser cache and hard reload (Ctrl+Shift+R)
```

### Images not loading
```
- Check your internet connection
- Unsplash URLs require internet access
- Try using local images instead
```

### Cart not updating
```
- Check browser console for errors
- Make sure CartProvider wraps the entire app
- Try clearing browser cache
```

## 📦 Production Build

When ready to deploy:

**1. Create Production Build**
```bash
npm run build
```

**2. Test Production Build Locally**
```bash
npx serve -s build
```

**3. Deploy to Vercel (Free)**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

**4. Deploy to Netlify (Free)**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

## 🎓 Next Steps

Once you're comfortable with the basics:

1. **Read the Full Documentation** → `README.md`
2. **Learn Backend Integration** → `BACKEND_GUIDE.md`
3. **Customize the Design** → Edit colors, fonts, layouts
4. **Add Real Data** → Connect to a backend API
5. **Implement Authentication** → Use Firebase or your own backend
6. **Add Payment Gateway** → Integrate Stripe or Razorpay

## 💡 Pro Tips

**For Development:**
- Use React DevTools browser extension to inspect component state
- Keep the console open to catch errors early
- Test on multiple screen sizes

**For Learning:**
- Start by modifying small things (colors, text)
- Experiment with adding new features
- Read through the code comments
- Try breaking things to understand how they work!

**For Production:**
- Optimize images (compress, use WebP)
- Implement real authentication
- Add analytics (Google Analytics)
- Set up error monitoring (Sentry)
- Use environment variables for API keys

## 🆘 Getting Help

If you run into issues:

1. **Check the console** for error messages
2. **Read the error message** carefully
3. **Google the error** - Stack Overflow is your friend
4. **Check package versions** match the documentation
5. **Try clearing node_modules** and reinstalling:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## 🎉 You're All Set!

You now have a fully functional e-commerce application running locally. 

**Enjoy building with OneKart!** 🛒

---

**Quick Reference Commands:**
```bash
# Start development server
npm start

# Create production build
npm run build

# Run tests
npm test

# Install new package
npm install package-name

# Update all packages
npm update
```