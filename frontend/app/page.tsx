import { ProductGrid } from './components/ProductGrid'
import { Hero } from './components/Hero'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Prodotti in Evidenza
        </h2>
        <ProductGrid />
      </section>
    </main>
  )
}