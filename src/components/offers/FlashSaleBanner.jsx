import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Clock, Tag } from 'lucide-react'

export default function FlashSaleBanner({
  title = 'Flash Sale',
  subtitle = 'Limited-time deals on selected items',
  endsAt, // ISO string or Date
  items = [], // [{ product, salePrice?, discountPercent? }]
  rotateMs = 4000,
}) {
  const endTime = useMemo(() => (endsAt ? new Date(endsAt).getTime() : null), [endsAt])
  const [remaining, setRemaining] = useState(() => (endTime ? Math.max(0, endTime - Date.now()) : 0))
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!endTime) return
    const id = setInterval(() => {
      setRemaining(Math.max(0, endTime - Date.now()))
    }, 1000)
    return () => clearInterval(id)
  }, [endTime])

  useEffect(() => {
    if (!items.length) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, rotateMs)
    return () => clearInterval(id)
  }, [items.length, rotateMs])

  const format = (ms) => {
    const totalSeconds = Math.floor(ms / 1000)
    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor((totalSeconds % 86400) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return { days, hours, minutes, seconds }
  }

  const time = format(remaining)
  const expired = endTime && remaining <= 0

  const active = items[index]
  const product = active?.product
  let original = product?.price || 0
  let sale = active?.salePrice
  if (sale == null && active?.discountPercent != null) {
    sale = Math.max(0, Math.round(original * (1 - active.discountPercent / 100)))
  }
  const percent = sale != null && original > 0 ? Math.round(((original - sale) / original) * 100) : null
  const image = product?.image_url || product?.images?.[0]

  return (
    <div className="relative overflow-hidden border border-brand-primary/20 bg-gradient-to-r from-brand-primary to-brand-accent text-white">
      <div className="relative px-6 sm:px-10 py-10 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-sm font-semibold mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Limited Time Offer
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">{title}</h3>
            <p className="text-white/90 mt-2 max-w-2xl">{subtitle}</p>

            {endTime && (
              <div className="mt-6 grid grid-flow-col auto-cols-max gap-3 text-center">
                {['days', 'hours', 'minutes', 'seconds'].map((key) => (
                  <div key={key} className="bg-white/15 rounded-lg px-3 py-2">
                    <div className="text-2xl md:text-3xl font-bold tabular-nums">
                      {String(time[key]).padStart(2, '0')}
                    </div>
                    <div className="text-xs uppercase tracking-wide text-white/80">{key}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6">
              <button
                disabled={!product || expired}
                // onClick={() => product && navigate(`/product/${product.id}`)}
                className={`inline-flex items-center bg-white text-brand-dark font-semibold px-4 md:px-5 py-2.5 rounded-lg transition ${expired ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
              >
                {expired ? 'Sale Ended' : 'Order Now'}
                {!expired && <ArrowRight className="h-5 w-5 ml-2" />}
              </button>
            </div>
          </div>

          <div className="bg-white/10 overflow-hidden">
            <div className="relative">
              <div className="aspect-[16/10] bg-black/10">
                {image && <img src={image} alt={product?.name || 'Flash sale'} className="w-full h-full object-cover" />}
              </div>

              {percent != null && (
                <div className="absolute top-3 left-3 inline-flex items-center bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  <Tag className="h-4 w-4 mr-1" />
                  {percent}% OFF
                </div>
              )}
            </div>

            <div className="p-4 md:p-5 flex items-center justify-between">
              <div>
                <div className="font-semibold md:text-lg line-clamp-1">{product?.name || '—'}</div>
                <div className="mt-1 flex items-end gap-2">
                  {sale != null && (
                    <span className="text-2xl md:text-3xl font-extrabold text-white">UGX {sale.toLocaleString()}</span>
                  )}
                  <span className="text-white/80 line-through">UGX {original.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* {items.length > 1 && (
              <div className="px-4 pb-4 flex items-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70'} transition`}
                  />
                ))}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  )
}
