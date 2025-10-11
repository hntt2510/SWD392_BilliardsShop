export default function PlayerSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=400&fit=crop"
            alt="Player playing billiards"
            className="w-full h-80 md:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}