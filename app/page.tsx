"use client";
import { useState, useMemo } from "react";

type Phone = {
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
  bgmi: string;
  reason: string;
};

const PHONES: Phone[] = [
  { id: "1", name: "Galaxy S24 Ultra", brand: "Samsung", price: 119999, originalPrice: 139999, image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=500", score: 96, badge: "Best Flagship", chipset: "Snapdragon 8 Gen 3", battery: "5000mAh", ram: "12GB", storage: "256GB", display: "6.8 QHD+ 120Hz", bgmi: "90fps HDR", reason: "200MP + S-Pen" },
  { id: "2", name: "OnePlus 12R", brand: "OnePlus", price: 39999, originalPrice: 45999, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500", score: 90, badge: "BGMI King", chipset: "Snapdragon 8 Gen 2", battery: "5500mAh", ram: "8GB", storage: "128GB", display: "6.78 LTPO 120Hz", bgmi: "90fps Extreme", reason: "Best BGMI under 40k" },
  { id: "3", name: "iQOO 12 5G", brand: "iQOO", price: 52999, originalPrice: 59999, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500", score: 93, badge: "144Hz Beast", chipset: "Snapdragon 8 Gen 3", battery: "5000mAh", ram: "12GB", storage: "256GB", display: "6.78 144Hz", bgmi: "90fps + 144Hz", reason: "Gaming monster" },
  { id: "4", name: "POCO F6 5G", brand: "POCO", price: 29999, originalPrice: 33999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=500", score: 88, badge: "Performance", chipset: "Snapdragon 8s Gen 3", battery: "5000mAh", ram: "8GB", storage: "256GB", display: "6.67 AMOLED 120Hz", bgmi: "90fps HDR", reason: "8s Gen 3 beast" },
  { id: "5", name: "Nothing Phone (2a)", brand: "Nothing", price: 23999, originalPrice: 25999, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500", score: 84, badge: "Unique", chipset: "Dimensity 7200 Pro", battery: "5000mAh", ram: "8GB", storage: "128GB", display: "6.67 OLED 120Hz", bgmi: "60fps HDR", reason: "Best design" },
  { id: "6", name: "iQOO Neo 9 Pro", brand: "iQOO", price: 35999, originalPrice: 39999, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500", score: 89, badge: "BGMI Beast", chipset: "Snapdragon 8 Gen 2", battery: "5160mAh", ram: "8GB", storage: "128GB", display: "6.78 144Hz", bgmi: "90fps Extreme", reason: "Best under 36k" },
  { id: "7", name: "Samsung A55 5G", brand: "Samsung", price: 36999, originalPrice: 39999, image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=500", score: 85, badge: "Best Display", chipset: "Exynos 1480", battery: "5000mAh", ram: "8GB", storage: "256GB", display: "6.6 Super AMOLED", bgmi: "60fps HDR", reason: "Premium mid" },
  { id: "8", name: "OnePlus Nord 4", brand: "OnePlus", price: 29999, originalPrice: 32999, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500", score: 87, badge: "Metal Body", chipset: "Snapdragon 7+ Gen 3", battery: "5500mAh", ram: "8GB", storage: "128GB", display: "6.74 OLED 120Hz", bgmi: "90fps", reason: "Full metal" },
  { id: "9", name: "Realme GT 6", brand: "Realme", price: 40999, originalPrice: 45999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=500", score: 90, badge: "GT Power", chipset: "Snapdragon 8s Gen 3", battery: "5500mAh", ram: "12GB", storage: "256GB", display: "6.78 LTPO 6000 nits", bgmi: "90fps HDR", reason: "Brightest display" },
  { id: "10", name: "POCO X6 Pro", brand: "POCO", price: 25999, originalPrice: 28999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=500", score: 86, badge: "8300 Ultra", chipset: "Dimensity 8300 Ultra", battery: "5000mAh", ram: "8GB", storage: "256GB", display: "6.67 AMOLED", bgmi: "90fps", reason: "Power value" },
  { id: "11", name: "iQOO Z9 5G", brand: "iQOO", price: 19999, originalPrice: 22999, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500", score: 82, badge: "Budget Gaming", chipset: "Dimensity 7200", battery: "5000mAh", ram: "8GB", storage: "128GB", display: "6.67 AMOLED 120Hz", bgmi: "60fps HDR", reason: "Best under 20k" },
  { id: "12", name: "Pixel 8", brand: "Google", price: 75999, originalPrice: 82999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=500", score: 91, badge: "Best Camera AI", chipset: "Tensor G3", battery: "4575mAh", ram: "8GB", storage: "128GB", display: "6.2 OLED 120Hz", bgmi: "60fps", reason: "7yr updates" },
  { id: "13", name: "iPhone 15", brand: "Apple", price: 70900, originalPrice: 79900, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500", score: 92, badge: "iOS King", chipset: "A16 Bionic", battery: "3349mAh", ram: "6GB", storage: "128GB", display: "6.1 Super Retina", bgmi: "60fps HDR", reason: "Long updates" },
  { id: "14", name: "Vivo T2 Pro 5G", brand: "Vivo", price: 24999, originalPrice: 29999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=500", score: 83, chipset: "Dimensity 7200", battery: "4600mAh", ram: "8GB", storage: "256GB", display: "6.78 Curved 120Hz", bgmi: "60fps HDR", reason: "Curved + fast" },
  { id: "15", name: "Redmi Note 13 Pro+", brand: "Redmi", price: 27999, originalPrice: 31999, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500", score: 83, badge: "200MP", chipset: "Dimensity 7200 Ultra", battery: "5000mAh", ram: "8GB", storage: "256GB", display: "6.67 Curved 120Hz", bgmi: "60fps", reason: "200MP camera" },
  { id: "16", name: "Moto Edge 50 Pro", brand: "Motorola", price: 31999, originalPrice: 35999, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500", score: 86, badge: "144Hz", chipset: "Snapdragon 7 Gen 3", battery: "4500mAh", ram: "12GB", storage: "256GB", display: "6.7 pOLED 144Hz", bgmi: "90fps", reason: "125W charging" },
  { id: "17", name: "Infinix Note 40 Pro+", brand: "Infinix", price: 24999, originalPrice: 29999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=500", score: 79, chipset: "Dimensity 7020", battery: "5000mAh", ram: "12GB", storage: "256GB", display: "6.78 Curved 120Hz", bgmi: "60fps", reason: "Wireless charge" },
  { id: "18", name: "OPPO Reno11 Pro", brand: "OPPO", price: 39999, originalPrice: 44999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=500", score: 84, chipset: "Dimensity 8200", battery: "4700mAh", ram: "12GB", storage: "256GB", display: "6.7 Curved OLED", bgmi: "60fps", reason: "Portrait expert" },
  { id: "19", name: "Samsung M35 5G", brand: "Samsung", price: 19999, originalPrice: 24999, image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=500", score: 80, badge: "6000mAh", chipset: "Exynos 1380", battery: "6000mAh", ram: "6GB", storage: "128GB", display: "6.6 Super AMOLED", bgmi: "60fps", reason: "Battery king" },
  { id: "20", name: "Pixel 8a", brand: "Google", price: 52999, originalPrice: 59999, image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=500", score: 85, chipset: "Tensor G3", battery: "4492mAh", ram: "8GB", storage: "128GB", display: "6.1 OLED 120Hz", bgmi: "60fps", reason: "Pixel AI" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");

  const brands = ["All", "Samsung", "OnePlus", "iQOO", "POCO", "Nothing", "Realme", "Google", "Apple", "Redmi", "Motorola", "Vivo", "Infinix", "OPPO"];

  const filtered = useMemo(() => {
    return PHONES.filter(p => {
      const matchesBrand = brand === "All" || p.brand === brand;
      const q = search.toLowerCase();
      const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.chipset.toLowerCase().includes(q) || p.bgmi.toLowerCase().includes(q) || p.reason.toLowerCase().includes(q) || q.includes("bgmi") || q.includes("gaming");
      if (q.includes("bgmi") || q.includes("game")) {
        return matchesBrand && (p.bgmi.includes("90") || p.score >= 88);
      }
      if (q.includes("under 20") || q.includes("20000")) {
        return matchesBrand && p.price < 20000 && matchesSearch;
      }
      if (q.includes("under 25") || q.includes("25000")) {
        return matchesBrand && p.price < 25000 && matchesSearch;
      }
      if (q.includes("under 30") || q.includes("30000")) {
        return matchesBrand && p.price < 30000 && matchesSearch;
      }
      if (q.includes("under 40") || q.includes("40000")) {
        return matchesBrand && p.price < 40000 && matchesSearch;
      }
      return matchesBrand && matchesSearch;
    });
  }, [search, brand]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center font-black text-xl">D</div>
            <div>
              <h1 className="font-bold text-lg leading-none">DecodePhone.</h1>
              <p className="text-[10px] text-white/50 tracking-widest">INDIA'S AI PHONE FINDER</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-white/40">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> {PHONES.length} REAL PHONES LIVE
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        <h2 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tight">
          Find your next <br />
          <span className="text-white/40">phone with AI.</span>
        </h2>

        <div className="mt-8 relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Try: best BGMI phone under 25k for gaming?"
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5 pr-32 text-lg outline-none focus:border-white/20 placeholder:text-white/30"
          />
          <button className="absolute right-2 top-2 bottom-2 bg-white text-black px-8 rounded-xl font-bold hover:bg-white/90 transition">AI Search</button>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {brands.map(b => (
            <button
              key={b}
              onClick={() => setBrand(b)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border whitespace-nowrap transition ${brand === b ? "bg-white text-black border-white" : "bg-[#111] border-white/10 text-white/60 hover:text-white hover:border-white/20"}`}
            >
              {b}
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3 text-sm">
          <span className="text-white/40">{filtered.length} phones found</span>
          {search && <span className="px-3 py-1 rounded-full bg-white/10 text-white/60">"{search}"</span>}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(phone => (
          <div key={phone.id} className="group relative bg-[#0E0E0E] border border-white/[0.07] rounded-[24px] p-5 hover:border-white/15 transition-all hover:bg-[#111]">
            <div className="flex justify-between items-start">
              <div className="flex gap-2">
                {phone.badge && <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full bg-white text-black">{phone.badge}</span>}
                <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#1A1A1A] border border-white/10">{phone.bgmi}</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex flex-col items-center justify-center">
                <span className="text-sm font-black leading-none">{phone.score}%</span>
                <span className="text-[8px] text-white/40">SCORE</span>
              </div>
            </div>

            <div className="mt-5 flex gap-5">
              <img src={phone.image} alt={phone.name} className="w-[110px] h-[130px] object-cover rounded-2xl bg-[#111]" />
              <div className="flex-1">
                <h3 className="font-bold text-[16px] leading-tight">{phone.name}</h3>
                <p className="text-xs text-white/40 mt-1">{phone.chipset} • {phone.ram}</p>
                <div className="mt-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black">₹{phone.price.toLocaleString("en-IN")}</span>
                    {phone.originalPrice && <span className="text-xs text-white/30 line-through">₹{phone.originalPrice.toLocaleString("en-IN")}</span>}
                  </div>
                  <p className="text-[11px] text-white/30 mt-1">{phone.display}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
              <div className="bg-[#111] border border-white/5 rounded-xl px-3 py-2">
                <p className="text-white/30 text-[9px] tracking-widest">BATTERY</p>
                <p className="font-bold mt-0.5">{phone.battery}</p>
              </div>
              <div className="bg-[#111] border border-white/5 rounded-xl px-3 py-2">
                <p className="text-white/30 text-[9px] tracking-widest">RAM</p>
                <p className="font-bold mt-0.5">{phone.ram} / {phone.storage}</p>
              </div>
              <div className="bg-[#111] border border-white/5 rounded-xl px-3 py-2">
                <p className="text-white/30 text-[9px] tracking-widest">WHY BEST</p>
                <p className="font-bold mt-0.5 truncate">{phone.reason}</p>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 bg-white text-black rounded-xl py-3 text-sm font-bold hover:bg-white/90 transition">View Best Price</button>
              <button className="px-4 bg-[#1A1A1A] border border-white/10 rounded-xl text-sm">Compare</button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 py-8 text-center text-xs text-white/20">
        DecodePhone V2 • 50 Real Phones • Built with AI • © 2025
      </div>
    </div>
  );
}