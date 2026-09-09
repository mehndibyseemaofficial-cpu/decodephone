'use client'

import { Search, Sparkles } from 'lucide-react'

type AISearchProps = {
  value: string
  onChange: (value: string) => void
  suggestions: string[]
}

export default function AISearch({ value, onChange, suggestions }: AISearchProps) {
  const showSuggestions = value.length > 0 && suggestions.length > 0

  return (
    <div className="relative">
      <Search className="absolute left-5 top-5 text-white/30" size={18} />
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Ask: best battery phone under 20k for BGMI?" className="w-full rounded-full border border-white/10 bg-[#141416] p-5 pl-12 pr-12 outline-none transition placeholder:text-white/30 focus:border-violet-500" />
      <Sparkles className="absolute right-5 top-5 text-violet-400" size={18} />
      {showSuggestions && (
        <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-20 overflow-hidden rounded-2xl border border-white/10 bg-[#1b1b20] p-2 text-left shadow-2xl">
          <p className="px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/35">AI suggestions</p>
          {suggestions.slice(0, 4).map((suggestion) => (
            <button key={suggestion} type="button" onClick={() => onChange(suggestion)} className="block w-full rounded-xl px-3 py-2 text-left text-sm text-white/75 hover:bg-white/5 hover:text-white">{suggestion}</button>
          ))}
        </div>
      )}
    </div>
  )
}
