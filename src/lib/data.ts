import { Product } from "./types";

export const products: Product[] = [
    {
        id: "raw-wildflower",
        name: "Raw Wildflower Honey",
        price: 18.99,
        weight: "500g",
        description: "Our signature blend, gathered from spring blossoms. A patient gift from the hive, preserving the unique floral profile and enzymes. Sweetness that is never forced, but a harmonious symphony of nature.",
        benefits: ["Rich in antioxidants", "Soothes sore throats", "100% Raw & Cold-Pressed", "Ethically sourced"],
        features: ["Floral Notes", "Unpasteurized", "No Additives"],
        imageUrl: "/raw wildflower honey.png"
    },
    {
        id: "organic-forest",
        name: "Organic Forest Honey",
        price: 32.50,
        weight: "1kg",
        description: "A dark, robust honey harvested deep within the forest. Packed with vital minerals and presenting a rich, woody flavor profile. Perfect for baking or stirring into a warm cup of herbal tea.",
        benefits: ["High trace minerals", "Supports immune system", "Bold, earthy flavor", "Zero refined sugar"],
        features: ["Deep Color", "Robust Taste", "Organic Certified"],
        imageUrl: "/organic forest honey.png"
    },
    {
        id: "pure-clover",
        name: "Pure Clover Honey",
        price: 12.00,
        weight: "250g",
        description: "Light, sweet, and incredibly versatile. Sourced from the finest clover fields, this bright and smooth honey is a household staple, ideal as an everyday drizzle over fresh fruit or greek yogurt.",
        benefits: ["Perfect sugar substitute", "Mild, pleasing taste", "Boosts daily vitality", "Great for children"],
        features: ["Light Hue", "Smooth Texture", "Kid-Friendly"],
        imageUrl: "/pure clover honey.png"
    }
];

export const getProduct = (id: string): Product | undefined => {
    return products.find(p => p.id === id);
};
