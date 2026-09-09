export type PhoneSpecs = {
  ram: string
  storage: string
  processor: string
  battery: string
  camera: string
}

export type Phone = {
  id: number
  name: string
  price: number
  score: number
  brand: string
  tag: string
  image: string
  antutu?: number
  specs: PhoneSpecs
}

const phoneImages = [
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&q=80&auto=format',
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&q=80&auto=format',
  'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=300&fit=crop&q=80&auto=format',
  'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=300&fit=crop&q=80&auto=format',
  'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=300&fit=crop&q=80&auto=format',
  'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&q=80&auto=format',
]

export const phones: Phone[] = [
  { id: 1, name: 'Samsung Galaxy A37 5G', price: 38999, score: 84, brand: 'Samsung', tag: 'Best Display', image: phoneImages[0], specs: { ram: '8 GB', storage: '128 GB', processor: 'Exynos 1580', battery: '5,000 mAh', camera: '50 MP + 12 MP' } },
  { id: 2, name: 'Samsung Galaxy A57 5G', price: 49999, score: 90, brand: 'Samsung', tag: 'Flagship Killer', image: phoneImages[1], specs: { ram: '12 GB', storage: '256 GB', processor: 'Snapdragon 8s Gen 3', battery: '5,000 mAh', camera: '50 MP + 12 MP + 8 MP' } },
  { id: 3, name: 'Vivo S2 5G', price: 39999, score: 82, brand: 'Vivo', tag: 'Best Camera', image: phoneImages[2], specs: { ram: '8 GB', storage: '256 GB', processor: 'Dimensity 8300', battery: '4,800 mAh', camera: '50 MP + 8 MP' } },
  { id: 4, name: 'Redmi Note 17 5G', price: 21999, score: 85, brand: 'Xiaomi', tag: 'Value King', image: phoneImages[3], specs: { ram: '8 GB', storage: '128 GB', processor: 'Snapdragon 7s Gen 3', battery: '5,110 mAh', camera: '108 MP + 8 MP' } },
  { id: 5, name: 'iPhone 16 Pro', price: 119999, score: 95, brand: 'Apple', tag: 'Best Premium', image: phoneImages[4], specs: { ram: '8 GB', storage: '256 GB', processor: 'Apple A18 Pro', battery: '3,582 mAh', camera: '48 MP + 48 MP + 12 MP' } },
  { id: 6, name: 'OPPO K13 Pro', price: 27999, score: 83, brand: 'OPPO', tag: 'Best Battery', image: phoneImages[5], specs: { ram: '8 GB', storage: '256 GB', processor: 'Snapdragon 7 Gen 3', battery: '7,000 mAh', camera: '50 MP + 2 MP' } },
  { id: 7, name: 'OnePlus Nord 5', price: 33999, score: 88, brand: 'OnePlus', tag: 'Fastest Performance', image: phoneImages[0], specs: { ram: '12 GB', storage: '256 GB', processor: 'Snapdragon 8s Gen 3', battery: '6,800 mAh', camera: '50 MP + 8 MP' } },
  { id: 8, name: 'Google Pixel 9a', price: 49999, score: 91, brand: 'Google', tag: 'Smartest Camera', image: phoneImages[1], specs: { ram: '8 GB', storage: '128 GB', processor: 'Google Tensor G4', battery: '5,100 mAh', camera: '48 MP + 13 MP' } },
  { id: 9, name: 'Nothing Phone (3a)', price: 24999, score: 86, brand: 'Nothing', tag: 'Most Unique', image: phoneImages[2], specs: { ram: '8 GB', storage: '128 GB', processor: 'Snapdragon 7s Gen 3', battery: '5,000 mAh', camera: '50 MP + 50 MP + 8 MP' } },
  { id: 10, name: 'Realme GT 7', price: 42999, score: 89, brand: 'Realme', tag: 'Gaming Pick', image: phoneImages[3], specs: { ram: '12 GB', storage: '256 GB', processor: 'Dimensity 9400e', battery: '7,000 mAh', camera: '50 MP + 8 MP' } },
]
