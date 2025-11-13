import FlashSaleBanner from './FlashSaleBanner'
import OfferBanner from './OfferBanner'
import { useMemo, useEffect, useState } from 'react'
import { useProducts } from '../../hooks/useProducts'
import { offersConfig } from '../../data/offersConfig'
import axiosClient from '../../lib/axios'

export default function OffersSection() {
  // Default 48-hour flash sale window from render
  const defaultEndsAt = useMemo(() => new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(), [])
  const { products } = useProducts({ featured: true, per_page: 6 })
  const [configuredFlashItems, setConfiguredFlashItems] = useState([])
  const [configuredBanners, setConfiguredBanners] = useState([])

  useEffect(() => {
    let mounted = true

    const loadConfigured = async () => {
      try {
        if (offersConfig.flashSaleItems?.length) {
          const results = await Promise.all(
            offersConfig.flashSaleItems.map(async (item) => {
              try {
                const res = await axiosClient.get(`/products/${item.id}`)
                return { product: res.data.data, salePrice: item.salePrice, discountPercent: item.discountPercent }
              } catch {
                return null
              }
            })
          )
          const items = results.filter(Boolean)
          if (mounted) setConfiguredFlashItems(items)
        } else {
          if (mounted) setConfiguredFlashItems([])
        }

        if (offersConfig.bannerOffers?.length) {
          const results = await Promise.all(
            offersConfig.bannerOffers.map(async (item) => {
              try {
                const res = await axiosClient.get(`/products/${item.id}`)
                return { product: res.data.data, salePrice: item.salePrice, discountPercent: item.discountPercent }
              } catch {
                return null
              }
            })
          )
          const items = results.filter(Boolean)
          if (mounted) setConfiguredBanners(items)
        } else {
          if (mounted) setConfiguredBanners([])
        }
      } catch (e) { void e }
    }

    loadConfigured()
    return () => {
      mounted = false
    }
  }, [])

  const fallbackFlashItems = useMemo(() => {
    if (!products?.length) return []
    const picks = products.slice(0, 3)
    const percents = [30, 25, 20]
    return picks.map((p, i) => ({ product: p, discountPercent: percents[i % percents.length] }))
  }, [products])

  const flashItems = configuredFlashItems.length ? configuredFlashItems : fallbackFlashItems

  const bannerAConfig = configuredBanners[0]
  const bannerBConfig = configuredBanners[1]
  const fallbackA = products?.[3] || products?.[0]
  const fallbackB = products?.[4] || products?.[1]
  const offerA = bannerAConfig?.product || fallbackA
  const offerB = bannerBConfig?.product || fallbackB

  return (
    <section className="py-16" id="offers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {flashItems.length > 0 && (
          <div className="mb-8">
            <FlashSaleBanner
              title="Flash Sale"
              subtitle="Unbeatable prices on selected items. Hurry before the timer runs out!"
              endsAt={offersConfig.flashSaleEndsAt || defaultEndsAt}
              items={flashItems}
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerA && (
            <OfferBanner
              product={offerA}
              salePrice={bannerAConfig?.salePrice}
              discountPercent={bannerAConfig?.discountPercent ?? 15}
              badgeText="Discount"
            />
          )}

          {offerB && (
            <OfferBanner
              product={offerB}
              salePrice={bannerBConfig?.salePrice}
              discountPercent={bannerBConfig?.discountPercent ?? 10}
              badgeText="Special"
            />
          )}
        </div>
      </div>
    </section>
  )
}

