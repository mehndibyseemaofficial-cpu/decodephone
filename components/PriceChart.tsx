'use client'

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const priceData = [
  { day: '30d ago', price: 42000 },
  { day: '25d', price: 41900 },
  { day: '20d', price: 41400 },
  { day: '15d', price: 40800 },
  { day: '10d', price: 40400 },
  { day: '5d', price: 39500 },
  { day: 'Today', price: 38999 },
]

export default function PriceChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={priceData} margin={{ top: 12, right: 8, left: -18, bottom: 0 }}>
          <defs>
            <linearGradient id="priceFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" tick={{ fill: '#71717a', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#71717a', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(value) => `₹${value / 1000}k`} domain={['dataMin - 1000', 'dataMax + 1000']} />
          <Tooltip contentStyle={{ background: '#18181b', border: '1px solid #3f3f46', borderRadius: 10, color: '#fff' }} formatter={(value) => [`₹${Number(value).toLocaleString('en-IN')}`, 'Price']} />
          <Area type="monotone" dataKey="price" stroke="#8B5CF6" strokeWidth={3} fill="url(#priceFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
