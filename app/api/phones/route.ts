import { NextResponse } from 'next/server'
import { phones as fallbackPhones, type Phone } from '@/lib/phones'
import { supabase } from '@/lib/supabase'

type SupabasePhone = {
  id: number
  name: string
  brand: string
  price: number
  score: number
  tag: string
  image_url: string
  ram: string
  storage: string
  processor: string
  battery: string
  camera: string
  antutu: number
}

function mapSupabasePhone(phone: SupabasePhone): Phone {
  return {
    id: phone.id,
    name: phone.name,
    brand: phone.brand,
    price: phone.price,
    score: phone.score,
    tag: phone.tag,
    image: phone.image_url,
    antutu: phone.antutu,
    specs: {
      ram: phone.ram,
      storage: phone.storage,
      processor: phone.processor,
      battery: phone.battery,
      camera: phone.camera,
    },
  }
}

export async function GET() {
  if (!supabase) {
    return NextResponse.json(fallbackPhones)
  }

  try {
    const { data, error } = await supabase.from('phones').select('*').order('id')

    if (error) {
      throw error
    }

    return NextResponse.json((data as SupabasePhone[]).map(mapSupabasePhone))
  } catch (error) {
    console.error('Supabase phones query failed; using local fallback.', error)
    return NextResponse.json(fallbackPhones)
  }
}
