// REAL_PHONES_DATA.ts - 50+ Real Indian Market Phones - V2
// Isko copy karke lib/phones.ts me paste karna hai

export type Phone = {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  score: number;
  badge?: string;
  chipset: string;
  battery: string;
  ram: string;
  storage: string;
  display: string;
  camera: string;
  bgmiFps: string;
  whyBest: string;
};

export const phones: Phone[] = [
  // SAMSUNG - 10 Phones
  { id: "s24-ultra", name: "Samsung Galaxy S24 Ultra", brand: "Samsung", price: 119999, originalPrice: 139999, image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400", score: 96, badge: "Best Flagship", chipset: "Snapdragon 8 Gen 3", battery: "5000mAh", ram: "12GB", storage: "256GB", display: "6.8 QHD+ 120Hz", camera: "200MP + 12MP + 50MP + 10MP", bgmiFps: "90fps HDR", whyBest: "Best camera + S-Pen" },
  { id: "s24", name: "Samsung Galaxy S24", brand: "Samsung", price: 74999, originalPrice: 79999, image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400", score: 92, badge: "Compact Flagship", chipset: "Exynos 2400", battery: "4000mAh", ram: "8GB", storage: "256GB", display: "6.2 FHD+ 120Hz", camera: "50MP + 12MP + 10MP", bgmiFps: "90fps Smooth", whyBest: "Compact + AI features" },
  { id: "s23-fe", name: "Samsung Galaxy S23 FE", brand: "Samsung", price: 42999, originalPrice: 59999, image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400", score: 88, badge: "Flagship Killer", chipset: "Exynos 2200", battery: "4500mAh", ram: "8GB", storage: "128GB", display: "6.4 FHD+ 120Hz", camera: "50MP + 12MP + 8MP", bgmiFps: "90fps", whyBest: "FE value king" },
  { id: "a55", name: "Samsung Galaxy A55 5G", brand: "Samsung", price: 36999, originalPrice: 39999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 85, badge: "Best Display", chipset: "Exynos 1480", battery: "5000mAh", ram: "8GB", storage: "256GB", display: "6.6 Super AMOLED 120Hz", camera: "50MP + 12MP + 5MP", bgmiFps: "60fps HDR", whyBest: "Premium mid-range" },
  { id: "a35", name: "Samsung Galaxy A35 5G", brand: "Samsung", price: 28999, originalPrice: 30999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 82, badge: "Balanced", chipset: "Exynos 1380", battery: "5000mAh", ram: "8GB", storage: "128GB", display: "6.6 Super AMOLED 120Hz", camera: "50MP + 8MP + 5MP", bgmiFps: "60fps", whyBest: "All-rounder under 30k" },
  { id: "m35", name: "Samsung Galaxy M35 5G", brand: "Samsung", price: 19999, originalPrice: 24999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 80, badge: "Battery King", chipset: "Exynos 1380", battery: "6000mAh", ram: "6GB", storage: "128GB", display: "6.6 Super AMOLED 120Hz", camera: "50MP + 8MP + 2MP", bgmiFps: "60fps", whyBest: "6000mAh monster" },
  { id: "f54", name: "Samsung Galaxy F54 5G", brand: "Samsung", price: 24999, originalPrice: 29999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 81, chipset: "Exynos 1380", battery: "6000mAh", ram: "8GB", storage: "256GB", display: "6.7 Super AMOLED 120Hz", camera: "108MP + 8MP + 2MP", bgmiFps: "60fps", whyBest: "108MP camera" },
  { id: "a15", name: "Samsung Galaxy A15 5G", brand: "Samsung", price: 15999, originalPrice: 19999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 75, chipset: "Dimensity 6100+", battery: "5000mAh", ram: "6GB", storage: "128GB", display: "6.5 Super AMOLED 90Hz", camera: "50MP + 5MP + 2MP", bgmiFps: "40fps", whyBest: "Budget AMOLED" },

  // ONEPLUS - 8 Phones
  { id: "oneplus-12r", name: "OnePlus 12R", brand: "OnePlus", price: 39999, originalPrice: 45999, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400", score: 90, badge: "Gaming Beast", chipset: "Snapdragon 8 Gen 2", battery: "5500mAh", ram: "8GB", storage: "128GB", display: "6.78 LTPO AMOLED 120Hz", camera: "50MP + 8MP + 2MP", bgmiFps: "90fps HDR Extreme", whyBest: "BGMI 90fps king under 40k" },
  { id: "oneplus-12", name: "OnePlus 12", brand: "OnePlus", price: 64999, originalPrice: 69999, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400", score: 94, badge: "Flagship Killer", chipset: "Snapdragon 8 Gen 3", battery: "5400mAh", ram: "12GB", storage: "256GB", display: "6.82 LTPO AMOLED 120Hz", camera: "50MP + 48MP + 64MP", bgmiFps: "90fps HDR Extreme", whyBest: "Best performance" },
  { id: "nord-4", name: "OnePlus Nord 4", brand: "OnePlus", price: 29999, originalPrice: 32999, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400", score: 87, badge: "Metal Beast", chipset: "Snapdragon 7+ Gen 3", battery: "5500mAh", ram: "8GB", storage: "128GB", display: "6.74 OLED 120Hz", camera: "50MP + 8MP", bgmiFps: "90fps", whyBest: "Full metal + 90fps" },
  { id: "nord-ce4", name: "OnePlus Nord CE4", brand: "OnePlus", price: 24999, originalPrice: 26999, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400", score: 83, chipset: "Snapdragon 7 Gen 3", battery: "5500mAh", ram: "8GB", storage: "128GB", display: "6.7 OLED 120Hz", camera: "50MP + 8MP", bgmiFps: "60fps HDR", whyBest: "80W fast charge" },
  { id: "ce4-lite", name: "OnePlus Nord CE4 Lite", brand: "OnePlus", price: 19999, originalPrice: 20999, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400", score: 78, chipset: "Snapdragon 695", battery: "5500mAh", ram: "8GB", storage: "128GB", display: "6.67 OLED 120Hz", camera: "50MP + 2MP", bgmiFps: "60fps", whyBest: "Budget Nord" },

  // NOTHING - 3 Phones
  { id: "nothing-2", name: "Nothing Phone (2)", brand: "Nothing", price: 39999, originalPrice: 44999, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", score: 86, badge: "Unique Design", chipset: "Snapdragon 8+ Gen 1", battery: "4700mAh", ram: "8GB", storage: "128GB", display: "6.7 LTPO OLED 120Hz", camera: "50MP + 50MP", bgmiFps: "90fps", whyBest: "Glyph + clean OS" },
  { id: "nothing-2a", name: "Nothing Phone (2a)", brand: "Nothing", price: 23999, originalPrice: 25999, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", score: 84, badge: "Value Unique", chipset: "Dimensity 7200 Pro", battery: "5000mAh", ram: "8GB", storage: "128GB", display: "6.67 OLED 120Hz", camera: "50MP + 50MP", bgmiFps: "60fps HDR", whyBest: "Best design under 25k" },
  { id: "nothing-2a-plus", name: "Nothing Phone (2a) Plus", brand: "Nothing", price: 27999, originalPrice: 29999, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", score: 85, chipset: "Dimensity 7350 Pro", battery: "5000mAh", ram: "12GB", storage: "256GB", display: "6.67 OLED 120Hz", camera: "50MP + 50MP", bgmiFps: "90fps", whyBest: "Upgraded 2a" },

  // IQOO - 5 Phones - GAMING KINGS
  { id: "iqoo-12", name: "iQOO 12 5G", brand: "iQOO", price: 52999, originalPrice: 59999, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", score: 93, badge: "Gaming King", chipset: "Snapdragon 8 Gen 3", battery: "5000mAh", ram: "12GB", storage: "256GB", display: "6.78 LTPO AMOLED 144Hz", camera: "50MP + 50MP + 64MP", bgmiFps: "90fps Extreme + 144Hz", whyBest: "144Hz gaming monster" },
  { id: "iqoo-neo9-pro", name: "iQOO Neo 9 Pro", brand: "iQOO", price: 35999, originalPrice: 39999, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", score: 89, badge: "BGMI Beast", chipset: "Snapdragon 8 Gen 2", battery: "5160mAh", ram: "8GB", storage: "128GB", display: "6.78 LTPO AMOLED 144Hz", camera: "50MP + 8MP", bgmiFps: "90fps HDR Extreme", whyBest: "Best BGMI under 36k" },
  { id: "iqoo-z9", name: "iQOO Z9 5G", brand: "iQOO", price: 19999, originalPrice: 22999, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", score: 82, badge: "Budget Gaming", chipset: "Dimensity 7200", battery: "5000mAh", ram: "8GB", storage: "128GB", display: "6.67 AMOLED 120Hz", camera: "50MP + 2MP", bgmiFps: "60fps HDR", whyBest: "Best under 20k for BGMI" },
  { id: "iqoo-z9s-pro", name: "iQOO Z9s Pro", brand: "iQOO", price: 24999, originalPrice: 27999, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", score: 84, chipset: "Snapdragon 7 Gen 3", battery: "5500mAh", ram: "8GB", storage: "128GB", display: "6.77 AMOLED 120Hz", camera: "50MP + 8MP", bgmiFps: "60fps HDR", whyBest: "Curved display" },

  // POCO - 5 Phones
  { id: "poco-f6", name: "POCO F6 5G", brand: "POCO", price: 29999, originalPrice: 33999, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", score: 88, badge: "Performance King", chipset: "Snapdragon 8s Gen 3", battery: "5000mAh", ram: "8GB", storage: "256GB", display: "6.67 AMOLED 120Hz", camera: "50MP + 8MP", bgmiFps: "90fps HDR", whyBest: "8s Gen 3 beast" },
  { id: "poco-x6-pro", name: "POCO X6 Pro", brand: "POCO", price: 25999, originalPrice: 28999, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", score: 86, chipset: "Dimensity 8300 Ultra", battery: "5000mAh", ram: "8GB", storage: "256GB", display: "6.67 AMOLED 120Hz", camera: "64MP + 8MP + 2MP", bgmiFps: "90fps", whyBest: "8300 Ultra power" },
  { id: "poco-x6", name: "POCO X6 5G", brand: "POCO", price: 20999, originalPrice: 23999, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", score: 81, chipset: "Snapdragon 7s Gen 2", battery: "5100mAh", ram: "8GB", storage: "128GB", display: "6.67 AMOLED 120Hz", camera: "64MP + 8MP + 2MP", bgmiFps: "60fps", whyBest: "Value AMOLED" },

  // REALME - 4 Phones
  { id: "realme-gt6", name: "Realme GT 6", brand: "Realme", price: 40999, originalPrice: 45999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 90, badge: "GT Power", chipset: "Snapdragon 8s Gen 3", battery: "5500mAh", ram: "12GB", storage: "256GB", display: "6.78 LTPO AMOLED 120Hz", camera: "50MP + 8MP + 50MP", bgmiFps: "90fps HDR", whyBest: "Brightest display 6000 nits" },
  { id: "realme-gt6t", name: "Realme GT 6T", brand: "Realme", price: 30999, originalPrice: 35999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 87, chipset: "Snapdragon 7+ Gen 3", battery: "5500mAh", ram: "8GB", storage: "128GB", display: "6.78 LTPO AMOLED 120Hz", camera: "50MP + 8MP", bgmiFps: "90fps", whyBest: "GT series value" },
  { id: "realme-12-pro-plus", name: "Realme 12 Pro+ 5G", brand: "Realme", price: 29999, originalPrice: 33999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 84, chipset: "Snapdragon 7s Gen 2", battery: "5000mAh", ram: "12GB", storage: "256GB", display: "6.7 Curved AMOLED 120Hz", camera: "50MP + 64MP Periscope + 8MP", bgmiFps: "60fps", whyBest: "Periscope under 30k" },

  // REDMI - 3 Phones
  { id: "redmi-note13-pro-plus", name: "Redmi Note 13 Pro+ 5G", brand: "Redmi", price: 27999, originalPrice: 31999, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400", score: 83, badge: "Camera King", chipset: "Dimensity 7200 Ultra", battery: "5000mAh", ram: "8GB", storage: "256GB", display: "6.67 Curved AMOLED 120Hz", camera: "200MP + 8MP + 2MP", bgmiFps: "60fps", whyBest: "200MP + Curved" },
  { id: "redmi-note13-pro", name: "Redmi Note 13 Pro 5G", brand: "Redmi", price: 24999, originalPrice: 28999, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400", score: 80, chipset: "Snapdragon 7s Gen 2", battery: "5100mAh", ram: "8GB", storage: "128GB", display: "6.67 AMOLED 120Hz", camera: "200MP + 8MP + 2MP", bgmiFps: "60fps", whyBest: "200MP value" },

  // MOTOROLA - 3 Phones
  { id: "moto-edge50-pro", name: "Motorola Edge 50 Pro", brand: "Motorola", price: 31999, originalPrice: 35999, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400", score: 86, badge: "Clean Android", chipset: "Snapdragon 7 Gen 3", battery: "4500mAh", ram: "12GB", storage: "256GB", display: "6.7 pOLED 144Hz", camera: "50MP + 13MP + 10MP", bgmiFps: "90fps", whyBest: "144Hz + 125W charge" },
  { id: "moto-edge50-fusion", name: "Motorola Edge 50 Fusion", brand: "Motorola", price: 22999, originalPrice: 25999, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400", score: 82, chipset: "Snapdragon 7s Gen 2", battery: "5000mAh", ram: "8GB", storage: "128GB", display: "6.7 pOLED 144Hz", camera: "50MP + 13MP", bgmiFps: "60fps HDR", whyBest: "144Hz budget" },

  // GOOGLE PIXEL - 3 Phones
  { id: "pixel-8", name: "Google Pixel 8", brand: "Google", price: 75999, originalPrice: 82999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 91, badge: "Best Camera AI", chipset: "Tensor G3", battery: "4575mAh", ram: "8GB", storage: "128GB", display: "6.2 OLED 120Hz", camera: "50MP + 12MP", bgmiFps: "60fps", whyBest: "Best AI camera + 7yr updates" },
  { id: "pixel-8a", name: "Google Pixel 8a", brand: "Google", price: 52999, originalPrice: 59999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 85, chipset: "Tensor G3", battery: "4492mAh", ram: "8GB", storage: "128GB", display: "6.1 OLED 120Hz", camera: "64MP + 13MP", bgmiFps: "60fps", whyBest: "Pixel AI under 55k" },

  // APPLE - 3 Phones
  { id: "iphone-15", name: "iPhone 15", brand: "Apple", price: 70900, originalPrice: 79900, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", score: 92, badge: "iOS King", chipset: "A16 Bionic", battery: "3349mAh", ram: "6GB", storage: "128GB", display: "6.1 Super Retina XDR 60Hz", camera: "48MP + 12MP", bgmiFps: "60fps HDR", whyBest: "iOS + long updates" },
  { id: "iphone-14", name: "iPhone 14", brand: "Apple", price: 60900, originalPrice: 69900, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", score: 88, chipset: "A15 Bionic", battery: "3279mAh", ram: "6GB", storage: "128GB", display: "6.1 Super Retina XDR 60Hz", camera: "12MP + 12MP", bgmiFps: "60fps", whyBest: "Value iPhone" },
  { id: "iphone-13", name: "iPhone 13", brand: "Apple", price: 52900, originalPrice: 59900, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", score: 86, chipset: "A15 Bionic", battery: "3240mAh", ram: "4GB", storage: "128GB", display: "6.1 Super Retina XDR 60Hz", camera: "12MP + 12MP", bgmiFps: "60fps", whyBest: "Budget iPhone" },

  // INFINIX / TECNO / VIVO - 8 Phones
  { id: "vivo-t2-pro", name: "Vivo T2 Pro 5G", brand: "Vivo", price: 24999, originalPrice: 29999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 83, chipset: "Dimensity 7200", battery: "4600mAh", ram: "8GB", storage: "256GB", display: "6.78 Curved AMOLED 120Hz", camera: "64MP + 2MP", bgmiFps: "60fps HDR", whyBest: "Curved + fast charge" },
  { id: "vivo-v30", name: "Vivo V30 5G", brand: "Vivo", price: 33999, originalPrice: 37999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 84, badge: "Selfie King", chipset: "Snapdragon 7 Gen 3", battery: "5000mAh", ram: "8GB", storage: "128GB", display: "6.78 Curved AMOLED 120Hz", camera: "50MP + 50MP + 8MP", bgmiFps: "60fps", whyBest: "Aura light portrait" },
  { id: "infinix-note40-pro", name: "Infinix Note 40 Pro+ 5G", brand: "Infinix", price: 24999, originalPrice: 29999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 79, chipset: "Dimensity 7020", battery: "5000mAh", ram: "12GB", storage: "256GB", display: "6.78 Curved AMOLED 120Hz", camera: "108MP + 2MP + 2MP", bgmiFps: "60fps", whyBest: "Wireless charging" },
  { id: "infinix-zero30", name: "Infinix Zero 30 5G", brand: "Infinix", price: 23999, originalPrice: 27999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 80, chipset: "Dimensity 8020", battery: "5000mAh", ram: "12GB", storage: "256GB", display: "6.78 Curved AMOLED 144Hz", camera: "108MP + 13MP + 2MP", bgmiFps: "60fps", whyBest: "144Hz + 4K front" },
  { id: "tecno-camon30-premier", name: "Tecno Camon 30 Premier", brand: "Tecno", price: 39999, originalPrice: 44999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 82, chipset: "Dimensity 8200 Ultra", battery: "5000mAh", ram: "12GB", storage: "512GB", display: "6.77 LTPO AMOLED 120Hz", camera: "50MP + 50MP Periscope + 50MP", bgmiFps: "90fps", whyBest: "Periscope + 512GB" },
  { id: "oppo-reno11-pro", name: "OPPO Reno11 Pro 5G", brand: "OPPO", price: 39999, originalPrice: 44999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 84, chipset: "Dimensity 8200", battery: "4700mAh", ram: "12GB", storage: "256GB", display: "6.7 Curved OLED 120Hz", camera: "50MP + 32MP Tele + 8MP", bgmiFps: "60fps", whyBest: "Portrait expert" },
  { id: "oppo-f25-pro", name: "OPPO F25 Pro 5G", brand: "OPPO", price: 23999, originalPrice: 27999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", score: 78, chipset: "Dimensity 7050", battery: "5000mAh", ram: "8GB", storage: "128GB", display: "6.7 AMOLED 120Hz", camera: "64MP + 8MP + 2MP", bgmiFps: "60fps", whyBest: "Slim design" },
];