'use client'

import { useProducts } from 'medusa-react'
import Image from 'next/image'

export function ProductGrid() {
  const { products, isLoading } = useProducts()

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 aspect-square rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products?.map((product) => (
        <div key={product.id} className="group cursor-pointer">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
            {product.thumbnail && (
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            )}
          </div>
          <h3 className="font-medium text-gray-900 mb-1">{product.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          <p className="font-semibold text-primary-600">
            €{(product.variants?.[0]?.prices?.[0]?.amount || 0) / 100}
          </p>
        </div>
      ))}
    </div>
  )
}