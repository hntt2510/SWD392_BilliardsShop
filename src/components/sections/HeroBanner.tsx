export default function HeroBanner() {
  return (
    <section className="relative w-full h-80 md:h-96 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=400&fit=crop"
        alt="Five Six Billiards Table"
        className="w-full h-full object-cover opacity-60"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          <span className="text-yellow-400">FIVE</span>
          <span className="mx-2">&</span>
          <span className="text-yellow-400">SIX</span>
        </h1>
        <p className="text-2xl md:text-3xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          BILLIARDS
        </p>
        <p className="text-lg md:text-xl mb-2" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
          MẶT ĐÁ HÀN QUỐC
        </p>
        <p className="text-lg md:text-xl" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
          CAO SU PREMIER BLACK ÊM
        </p>
        <p className="text-base md:text-lg mt-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
          GỖ CHẤT LƯỢNG | NỊ THI ĐẶU CPBA
        </p>
      </div>
    </section>
  );
}