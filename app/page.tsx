 'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Battery, Camera, Cpu, HardDrive, MemoryStick, SlidersHorizontal, X } from 'lucide-react'
import AISearch from '@/components/AISearch'
import PhoneCard from '@/components/PhoneCard'
import PriceChart from '@/components/PriceChart'
import { phones as fallbackPhones, type Phone } from '@/lib/phones'

const suggestions = ['Best battery phone under 20k', 'Best camera phone for travel', 'Fastest phone for BGMI', 'Best premium phone']
const tabs = ['Overview', 'Specs', 'Price History'] as const
type Tab = (typeof tabs)[number]

function PhoneSkeleton() {
  return <div className="animate-pulse overflow-hidden rounded-[20px] border border-white/10 bg-[#141416] p-4"><div className="flex justify-between"><div className="h-10 w-10 rounded-full bg-white/10" /><div className="h-6 w-24 rounded-full bg-white/10" /></div><div className="mt-5 h-44 rounded-xl bg-white/[0.06]" /><div className="mt-4 h-4 w-3/4 rounded bg-white/10" /><div className="mt-2 h-3 w-1/4 rounded bg-white/10" /><div className="mt-4 h-6 w-1/3 rounded bg-white/10" /><div className="mt-4 h-9 rounded-full bg-white/10" /></div>
}

export default function Home() {
  const [search, setSearch] = useState('')
  const [phones, setPhones] = useState<Phone[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null)
  const [activeTab, setActiveTab] = useState<Tab>('Overview')
  const [comparedIds, setComparedIds] = useState<number[]>([])
  const [brandFilter, setBrandFilter] = useState('All brands')
  const [maxPrice, setMaxPrice] = useState(150000)

  useEffect(() => {
    let isActive = true

    const loadPhones = async () => {
      try {
        const response = await fetch('/api/phones')
        if (!response.ok) throw new Error(`Phone API returned ${response.status}`)
        const data = (await response.json()) as Phone[]
        if (isActive) setPhones(data)
      } catch (error) {
        console.error('Phone API request failed; using local fallback.', error)
        if (isActive) setPhones(fallbackPhones)
      } finally {
        if (isActive) setIsLoading(false)
      }
    }

    void loadPhones()
    return () => { isActive = false }
  }, [])

  const filtered = phones.filter((phone) => {
    const query = search.toLowerCase()
    const matchesSearch = !query || `${phone.name} ${phone.brand} ${phone.tag} ${phone.specs.processor}`.toLowerCase().includes(query)
    return matchesSearch && (brandFilter === 'All brands' || phone.brand === brandFilter) && phone.price <= maxPrice
  })

  const brands = ['All brands', ...new Set(phones.map((phone) => phone.brand))]

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setSelectedPhone(null)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const openPhone = (phone: Phone) => {
    setSelectedPhone(phone)
    setActiveTab('Overview')
  }

  const toggleCompare = (id: number) => {
    setComparedIds((current) => current.includes(id) ? current.filter((phoneId) => phoneId !== id) : current.length < 2 ? [...current, id] : current)
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08080A] text-white">
      <header className="flex items-center justify-between border-b border-white/10 p-5 md:p-6">
        <h1 className="text-xl font-bold tracking-tight md:text-2xl">Decodephone<span className="text-violet-500">.</span></h1>
        <div className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-1 text-[10px] font-semibold text-white">AI POWERED <span className="text-white/70">• TRIAL V1</span></div>
      </header>

      <div className="mx-auto mt-14 max-w-2xl px-6 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">India&apos;s AI phone finder</p>
        <h2 className="text-4xl font-bold leading-tight md:text-5xl">Find Your<br />Perfect Mobile</h2>
        <p className="mt-4 text-white/50">Chat with AI, not filters. Decode your perfect phone.</p>

        <div className="mt-8 relative">
          <AISearch value={search} onChange={setSearch} suggestions={suggestions.filter((suggestion) => suggestion.toLowerCase().includes(search.toLowerCase()))} />
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-6 pb-32 lg:grid-cols-[220px_1fr]">
        <aside className="h-fit rounded-[20px] border border-white/10 bg-[#141416] p-5 lg:sticky lg:top-5">
          <div className="flex items-center justify-between"><h2 className="flex items-center gap-2 text-sm font-semibold"><SlidersHorizontal size={16} className="text-cyan-400" /> Filters</h2><button type="button" onClick={() => { setBrandFilter('All brands'); setMaxPrice(150000) }} className="text-[10px] text-white/40 hover:text-white">Reset</button></div>
          <label className="mt-6 block text-xs font-semibold text-white/60" htmlFor="brand-filter">Brand</label>
          <select id="brand-filter" value={brandFilter} onChange={(event) => setBrandFilter(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#1b1b20] px-3 py-2 text-xs text-white outline-none focus:border-violet-400">{brands.map((brand) => <option key={brand}>{brand}</option>)}</select>
          <div className="mt-6 flex items-center justify-between"><label className="text-xs font-semibold text-white/60" htmlFor="price-filter">Max price</label><span className="text-xs text-cyan-300">₹{maxPrice.toLocaleString('en-IN')}</span></div>
          <input id="price-filter" type="range" min="20000" max="150000" step="5000" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} className="mt-3 w-full accent-violet-500" />
        </aside>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {isLoading && [1, 2, 3].map((id) => <PhoneSkeleton key={id} />)}
          {!isLoading && filtered.map(phone => (
            <PhoneCard key={phone.id} {...phone} selected={comparedIds.includes(phone.id)} onClick={() => openPhone(phone)} onCompare={() => toggleCompare(phone.id)} />
          ))}
        </div>
      </div>

      {filtered.length === 0 && <p className="pb-32 text-center text-sm text-white/40">No phones match that search yet.</p>}
      <p className="pb-10 text-center text-[10px] text-white/20">Decodephone • Trial Version 1.0 • Built with care in Bhavnagar</p>

      {comparedIds.length > 0 && <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-violet-400/20 bg-[#111116]/95 px-6 py-4 backdrop-blur-xl"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4"><p className="text-sm font-semibold">Compare {comparedIds.length} phone{comparedIds.length > 1 ? 's' : ''}<span className="ml-2 hidden text-xs font-normal text-white/45 sm:inline">Select one more to see them side by side</span></p><button type="button" disabled={comparedIds.length < 2} className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-40">Compare 2 phones</button></div></div>}

      {selectedPhone && <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-6" onMouseDown={(event) => event.target === event.currentTarget && setSelectedPhone(null)}>
        <section role="dialog" aria-modal="true" aria-label={`${selectedPhone.name} details`} className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-[28px] border border-white/10 bg-[#141416] p-5 shadow-2xl sm:rounded-[28px] sm:p-7">
          <div className="flex items-start justify-between"><div><p className="text-xs text-violet-300">{selectedPhone.brand} · {selectedPhone.tag}</p><h2 className="mt-1 text-2xl font-bold">{selectedPhone.name}</h2></div><button type="button" onClick={() => setSelectedPhone(null)} className="rounded-full p-2 text-white/50 hover:bg-white/10 hover:text-white" aria-label="Close details"><X size={20} /></button></div>
          <div className="mt-6 flex gap-1 border-b border-white/10">{tabs.map((tab) => <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`border-b-2 px-3 pb-3 text-xs font-semibold transition ${activeTab === tab ? 'border-violet-400 text-white' : 'border-transparent text-white/40 hover:text-white/70'}`}>{tab}</button>)}</div>
          {activeTab === 'Overview' && <div className="mt-6"><div className="flex items-center justify-between"><div><p className="text-sm text-white/45">Current price</p><p className="mt-1 text-3xl font-bold">₹{selectedPhone.price.toLocaleString('en-IN')}</p></div><div className="rounded-2xl bg-green-500/10 px-4 py-3 text-right"><p className="flex items-center gap-1 text-sm font-bold text-green-400"><ArrowDown size={15} /> 7.1%</p><p className="text-[10px] text-white/40">since last month</p></div></div><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">{[[Cpu, 'Processor', selectedPhone.specs.processor], [MemoryStick, 'RAM', selectedPhone.specs.ram], [HardDrive, 'Storage', selectedPhone.specs.storage], [Battery, 'Battery', selectedPhone.specs.battery], [Camera, 'Camera', selectedPhone.specs.camera]].map(([Icon, label, value]) => <div key={label as string} className="rounded-2xl bg-white/[0.04] p-3"><Icon size={16} className="text-violet-400" /><p className="mt-3 text-[10px] text-white/35">{label as string}</p><p className="mt-1 text-xs font-semibold">{value as string}</p></div>)}</div></div>}
          {activeTab === 'Specs' && <div className="mt-6 divide-y divide-white/10">{Object.entries(selectedPhone.specs).map(([key, value]) => <div key={key} className="flex justify-between py-4 text-sm"><span className="capitalize text-white/45">{key}</span><span className="font-semibold">{value}</span></div>)}</div>}
          {activeTab === 'Price History' && <div className="mt-6"><div className="mb-4"><p className="text-sm text-white/45">30-day price trend</p><p className="mt-1 text-2xl font-bold">₹42,000 <span className="text-sm font-normal text-white/35">to ₹38,999</span></p></div><PriceChart /></div>}
        </section>
      </div>}
    </main>
  )
}