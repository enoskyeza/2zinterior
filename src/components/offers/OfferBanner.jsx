import { ArrowRight, Tag } from 'lucide-react'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OfferBanner({
  product,
  salePrice,
  discountPercent,
  badgeText = 'Discount',
}) {
  const navigate = useNavigate()

  const computed = useMemo(() => {
    if (!product) return null
    const original = product.price || 0
    let sale = salePrice
    if (sale == null && discountPercent != null) {
      sale = Math.max(0, Math.round(original * (1 - discountPercent / 100)))
    }
    const percent = sale != null && original > 0 ? Math.round(((original - sale) / original) * 100) : null
    return { original, sale, percent }
  }, [product, salePrice, discountPercent])

  if (!product || !computed?.sale) return null

  const image = product.image_url || product.images?.[0]

  return (
    <div className="relative overflow-hidden border border-black/10">
      {/* Background image */}
      {image && (
        <img src={image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
      )}
      {/* Gradient overlay from left to transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content overlay */}
      <div className="relative p-6 sm:p-8 min-h-[220px] sm:min-h-[260px] flex items-center">
        <div className="text-white max-w-xl">
          <div className="flex items-center justify-between mb-3">
            {computed.percent != null && (
              <div className="inline-flex items-center bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                <Tag className="h-4 w-4 mr-1" />
                {computed.percent}% OFF
              </div>
            )}
            {badgeText && (
              <div className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {badgeText}
              </div>
            )}
          </div>

          <h4 className="font-display text-2xl font-bold leading-tight">{product.name}</h4>

          <div className="mt-3 flex items-end gap-3">
            <div className="text-3xl font-extrabold">UGX {computed.sale.toLocaleString()}</div>
            <div className="text-white/80 line-through">UGX {computed.original.toLocaleString()}</div>
          </div>

          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="mt-6 inline-flex items-center bg-white text-brand-dark font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Order Now
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}
