const SHARED_PRODUCT_IMAGE =
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80";

const PRODUCTS = [
  {
    id: "resin-name-keychain",
    name: "Resin Name Keychain",
    category: "Resin Accessories",
    image: SHARED_PRODUCT_IMAGE,
    description: "Personalized resin keychain with your custom name and soft girly style.",
    options: { size: ["Mini", "Standard", "Large"], style: ["Floral", "Glitter", "Pastel"] }
  },
  {
    id: "alphabet-resin-keychain",
    name: "Alphabet Resin Keychain",
    category: "Resin Accessories",
    image: SHARED_PRODUCT_IMAGE,
    description: "Cute alphabet resin keychain made for gifting and daily use.",
    options: { size: ["Single Letter", "Double Letter"], style: ["Gold Flakes", "Transparent", "Pearl"] }
  },
  {
    id: "resin-bookmark-floral",
    name: "Resin Bookmark (Floral)",
    category: "Resin Accessories",
    image: SHARED_PRODUCT_IMAGE,
    description: "Aesthetic bookmark with floral resin finish and elegant detailing.",
    options: { size: ["5 inch", "6 inch", "7 inch"], style: ["Floral", "Floral + Glitter", "Minimal"] }
  },
  {
    id: "custom-resin-phone-grip",
    name: "Custom Resin Phone Grip / Pop Socket",
    category: "Resin Accessories",
    image: SHARED_PRODUCT_IMAGE,
    description: "Custom resin pop socket with initials, colors, and premium finish.",
    options: { size: ["Standard", "Wide"], style: ["Monogram", "Flower", "Abstract"] }
  },
  {
    id: "resin-earrings",
    name: "Resin Earrings (Floral/Glitter)",
    category: "Resin Jewelry",
    image: SHARED_PRODUCT_IMAGE,
    description: "Handmade resin earrings with floral and glitter looks.",
    options: { size: ["Small", "Medium", "Statement"], style: ["Floral", "Glitter", "Floral + Gold"] }
  },
  {
    id: "resin-bracelet",
    name: "Resin Bracelet",
    category: "Resin Jewelry",
    image: SHARED_PRODUCT_IMAGE,
    description: "Custom resin bracelet crafted as wearable memory art.",
    options: { size: ["Kids", "Women", "Custom"], style: ["Clear", "Pastel", "Glitter"] }
  },
  {
    id: "resin-rings",
    name: "Resin Rings",
    category: "Resin Jewelry",
    image: SHARED_PRODUCT_IMAGE,
    description: "Stylish resin rings with smooth finish and custom color options.",
    options: { size: ["US 5", "US 6", "US 7", "Custom"], style: ["Floral", "Transparent", "Pearl"] }
  },
  {
    id: "customized-name-necklace",
    name: "Customized Name Necklace (Resin)",
    category: "Resin Jewelry",
    image: SHARED_PRODUCT_IMAGE,
    description: "Personalized resin name necklace for birthdays and gifting.",
    options: { size: ["Short", "Medium", "Long"], style: ["Gold", "Rose Gold", "Silver"] }
  },
  {
    id: "resin-wall-hanging-art",
    name: "Resin Wall Hanging Art",
    category: "Resin Decor",
    image: SHARED_PRODUCT_IMAGE,
    description: "Elegant wall hanging made with resin layers and aesthetic details.",
    options: { size: ["12 inch", "16 inch", "20 inch"], style: ["Floral", "Ocean", "Geode"] }
  },
  {
    id: "resin-coasters-set",
    name: "Resin Coasters Set",
    category: "Resin Decor",
    image: SHARED_PRODUCT_IMAGE,
    description: "Premium resin coaster set for décor and gifting.",
    options: { size: ["Set of 2", "Set of 4", "Set of 6"], style: ["Marble", "Floral", "Gold Edge"] }
  },
  {
    id: "customized-resin-name-plate",
    name: "Customized Resin Name Plate",
    category: "Resin Decor",
    image: SHARED_PRODUCT_IMAGE,
    description: "Customized name plate for home entrance and desk décor.",
    options: { size: ["Small", "Medium", "Large"], style: ["Elegant", "Cute", "Luxury"] }
  },
  {
    id: "resin-serving-tray",
    name: "Resin Serving Tray",
    category: "Resin Decor",
    image: SHARED_PRODUCT_IMAGE,
    description: "Decorative serving tray with handcrafted resin art.",
    options: { size: ["Mini", "Standard", "Large"], style: ["Pearl", "Bloom", "Royal"] }
  },
  {
    id: "baby-memory-frame",
    name: "Customized Resin Baby Birth Frame / Keepsake Frame",
    category: "Memory Gifts",
    image: SHARED_PRODUCT_IMAGE,
    description: "Baby photo + birth details like weight, time, and date in an emotional keepsake frame.",
    options: { size: ["8x10", "10x12", "12x16"], style: ["Classic", "Pastel Floral", "Premium"] }
  },
  {
    id: "resin-dried-flower-keychain",
    name: "Resin Dried Flower Keychain",
    category: "Memory Gifts",
    image: SHARED_PRODUCT_IMAGE,
    description: "Transparent resin with real flowers and gold flakes. Cute, aesthetic bestseller.",
    options: { size: ["Mini", "Standard"], style: ["Heart", "Oval", "Round"] }
  },
  {
    id: "resin-photo-frame-heart",
    name: "Resin Photo Frame (Heart Shape)",
    category: "Memory Gifts",
    image: SHARED_PRODUCT_IMAGE,
    description: "Heart frame with photo embed and decorative dried flowers for couple memories.",
    options: { size: ["6x6", "8x8", "10x10"], style: ["Rose", "Daisy", "Gold"] }
  },
  {
    id: "customized-resin-photo-clock",
    name: "Customized Resin Photo Clock",
    category: "Memory Gifts",
    image: SHARED_PRODUCT_IMAGE,
    description: "Premium resin clock with multiple photos and custom memory layout.",
    options: { size: ["10 inch", "12 inch", "14 inch"], style: ["Modern", "Royal", "Minimal"] }
  },
  {
    id: "resin-gel-candle",
    name: "Resin Gel Candle / Decorative Candle",
    category: "Memory Gifts",
    image: SHARED_PRODUCT_IMAGE,
    description: "Layered decorative candle with aesthetic colors for gifting and room décor.",
    options: { size: ["Small", "Medium", "Large"], style: ["Sunset", "Rose", "Crystal"] }
  },
  {
    id: "resin-jewelry-pendant",
    name: "Resin Jewelry Pendant (Floral)",
    category: "Memory Gifts",
    image: SHARED_PRODUCT_IMAGE,
    description: "Small wearable floral resin art pendant, can be sold as necklace.",
    options: { size: ["Small", "Medium"], style: ["Vintage", "Soft Pink", "Clear Gold"] }
  }
];

const WHATSAPP_NUMBER = "919394683474";
const STARTING_PRICE_LABEL = "Starting from ₹499";
