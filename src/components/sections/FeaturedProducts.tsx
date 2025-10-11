import ProductCard from '../ui/ProductCard';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
}

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  categoryImage?: string;
}

export default function FeaturedProducts({
  title,
  products,
  categoryImage,
}: FeaturedProductsProps) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="flex items-center gap-4 mb-8">
          {categoryImage && (
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-lg flex-shrink-0">
              <img
                src={categoryImage}
                alt={title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}