export function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Il Tuo Store Online
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Scopri la nostra collezione di prodotti premium, 
            spedizione gratuita nelle Canarie
          </p>
          <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Scopri i Prodotti
          </button>
        </div>
      </div>
    </section>
  )
}