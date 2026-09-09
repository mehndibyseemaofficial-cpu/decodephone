'use client'

import { Check, Plus } from 'lucide-react'
import Image from 'next/image'

type PhoneCardProps = {
  name: string
  price: number
  score: number
  brand: string
  tag: string
  image: string
  selected?: boolean
  onClick?: () => void
  onCompare?: () => void
}

export default function PhoneCard({ name, price, score, brand, tag, image, selected = false, onClick, onCompare }: PhoneCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#141416] transition duration-300 hover:-translate-y-1 hover:border-violet-500/40">
      <button type="button" onClick={onClick} className="block w-full text-left" aria-label={`View details for ${name}`}>
        <div className="absolute left-4 right-4 top-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400" />
        <div className="flex items-start justify-between p-4 pb-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-bold">{score}%</div>
          <span className="rounded-full bg-green-500/15 px-2 py-1 text-[10px] text-green-400">{tag}</span>
        </div>
        <div className="relative mx-4 mt-5 h-44 w-full overflow-hidden rounded-xl bg-white/[0.04]">
          <Image src={image} alt="" fill sizes="400px" className="object-cover opacity-90 transition duration-500 group-hover:scale-105" />
        </div>
        <div className="p-4 pb-2">
          <h3 className="font-semibold leading-tight">{name}</h3>
          <p className="mt-1 text-xs text-white/45">{brand}</p>
          <p className="mt-3 text-lg font-bold">₹{price.toLocaleString('en-IN')}</p>
        </div>
      </button>
      <div className="px-4 pb-4">
        <button type="button" onClick={onCompare} className={`flex w-full items-center justify-center gap-2 rounded-full border py-2 text-xs font-semibold transition ${selected ? 'border-violet-400 bg-violet-500/15 text-violet-200' : 'border-white/10 text-white/60 hover:border-violet-400/50 hover:text-white'}`}>
          {selected ? <Check size={14} /> : <Plus size={14} />}
          {selected ? 'Added to compare' : 'Add to compare'}
        </button>
      </div>
    </article>
  )
}
