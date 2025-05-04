import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Desk Lamp",
    description: "A sleek, adjustable desk lamp with touch controls and multiple lighting modes. Perfect for your home office or reading nook.",
    price: 4499,
    images: ["https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"],
    category: "Home",
    rating: 4.5,
    inStock: true,
    featured: true
  },
  {
    id: "2",
    name: "Premium Leather Weekender Bag",
    description: "Handcrafted from full-grain leather, this spacious weekender bag features multiple compartments and a detachable shoulder strap.",
    price: 14249,
    images: ["https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3"],
    category: "Travel",
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: "3",
    name: "Wireless Noise-Cancelling Headphones",
    description: "Experience immersive sound with these premium headphones featuring active noise cancellation and 30-hour battery life.",
    price: 18749,
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"],
    category: "Electronics",
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: "4",
    name: "Organic Cotton T-shirt",
    description: "Ultra-soft, sustainably made t-shirt in a relaxed fit. Comes in multiple colors.",
    price: 2249,
    images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"],
    category: "Clothing",
    rating: 4.3,
    inStock: true
  },
  {
    id: "5",
    name: "Ceramic Pour-Over Coffee Set",
    description: "Elevate your morning routine with this elegant ceramic coffee set, including a pour-over dripper and matching mug.",
    price: 3224,
    images: ["https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"],
    category: "Home",
    rating: 4.6,
    inStock: true
  },
  {
    id: "6",
    name: "Smart Fitness Tracker",
    description: "Track your activity, sleep, and wellness metrics with this sleek, water-resistant fitness tracker.",
    price: 5999,
    images: ["https://images.unsplash.com/photo-1532435109783-fdb8a2be0baa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3MlMjB0cmFja2VyfGVufDB8fDB8fHww"],
    category: "Electronics",
    rating: 4.4,
    inStock: false
  },
  {
    id: "7",
    name: "Handcrafted Wooden Cutting Board",
    description: "Beautiful end-grain cutting board made from sustainable hardwoods. Each piece is unique.",
    price: 4875,
    images: ["https://images.unsplash.com/photo-1666013942797-9daa4b8b3b4f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0dGluZyUyMGJvYXJkfGVufDB8fDB8fHww"],
    category: "Kitchen",
    rating: 4.9,
    inStock: true
  },
  {
    id: "8",
    name: "Merino Wool Beanie",
    description: "Naturally insulating merino wool beanie that's soft, breathable, and perfect for cold weather.",
    price: 2588,
    images: ["https://plus.unsplash.com/premium_photo-1670512206220-1d9b433d812e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29vbCUyMGNsb3RofGVufDB8fDB8fHww"],
    category: "Accessories",
    rating: 4.7,
    inStock: true
  },
  {
    id: "9",
    name: "Stainless Steel Water Bottle",
    description: "Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 2099,
    images: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3"],
    category: "Outdoor",
    rating: 4.5,
    inStock: true
  },
  {
    id: "10",
    name: "Minimalist Leather Wallet",
    description: "Slim profile wallet with RFID protection, made from full-grain leather that develops a beautiful patina over time.",
    price: 3749,
    images: ["https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3"],
    category: "Accessories",
    rating: 4.8,
    inStock: true
  },
  {
    id: "11",
    name: "Organic Lavender Essential Oil",
    description: "100% pure, therapeutic-grade lavender essential oil, perfect for relaxation and aromatherapy.",
    price: 1424,
    images: ["https://images.unsplash.com/photo-1547793548-7a0e7dfdb24f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"],
    category: "Wellness",
    rating: 4.6,
    inStock: true
  },
  {
    id: "12",
    name: "Bluetooth Portable Speaker",
    description: "Compact yet powerful speaker with rich sound, 15-hour battery life, and waterproof design.",
    price: 6749,
    images: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3"],
    category: "Electronics",
    rating: 4.4,
    inStock: true
  }
];

export const getProducts = () => products;

export const getProduct = (id: string) => {
  return products.find((product) => product.id === id);
};

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured);
};

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};

export const getCategories = () => {
  const categories = new Set(products.map((product) => product.category));
  return Array.from(categories);
};
