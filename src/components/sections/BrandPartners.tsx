export default function BrandPartners() {
  const brands = [
    { name: 'ASUS', logo: 'https://via.placeholder.com/150x80?text=ASUS' },
    { name: 'MSI', logo: 'https://via.placeholder.com/150x80?text=MSI' },
    { name: 'RYZEN', logo: 'https://via.placeholder.com/150x80?text=RYZEN' },
    { name: 'Thermaltake', logo: 'https://via.placeholder.com/150x80?text=TT' },
    { name: 'ADATA', logo: 'https://via.placeholder.com/150x80?text=ADATA' },
    { name: 'GIGABYTE', logo: 'https://via.placeholder.com/150x80?text=GIGABYTE' },
  ];

  return (
    <section className="py-12 bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Partners</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}