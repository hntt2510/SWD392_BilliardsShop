import { useState } from 'react';
import { ShoppingCart, Search, Heart, Star } from 'lucide-react';

export default function Home() {
  const [products] = useState([
    {
      id: 1,
      name: 'Professional Pool Cue',
      price: '$89.99',
      image: 'https://images.unsplash.com/photo-1609710228159-0da9b120b04b?w=300&h=300&fit=crop',
      rating: 4.5,
      reviews: 128,
      discount: 20
    },
    {
      id: 2,
      name: 'Billiard Balls Set',
      price: '$45.99',
      image: 'https://images.unsplash.com/photo-1593862493395-fa1f27b79b4d?w=300&h=300&fit=crop',
      rating: 4.8,
      reviews: 256,
      discount: 0
    },
    {
      id: 3,
      name: 'Chalk Holder',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8e7dd3e7?w=300&h=300&fit=crop',
      rating: 4.3,
      reviews: 64,
      discount: 15
    },
    {
      id: 4,
      name: 'Pool Table Brush',
      price: '$24.99',
      image: 'https://bcp.cdnchinhphu.vn/334894974524682240/2024/5/6/co-thu-duong-quoc-hoang-652024-1714984283849-1714984285015953382734.jpg',
      rating: 4.6,
      reviews: 89,
      discount: 0
    },
    {
      id: 5,
      name: 'Cue Tip Replacement',
      price: '$8.99',
      image: 'https://images.unsplash.com/photo-1617526104551-6c1073f0b77e?w=300&h=300&fit=crop',
      rating: 4.4,
      reviews: 142,
      discount: 10
    },
    {
      id: 6,
      name: 'Break Cue',
      price: '$120.99',
      image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=300&h=300&fit=crop',
      rating: 4.9,
      reviews: 324,
      discount: 25
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">BS</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Billiards Shop</h1>
          </div>

          <div className="hidden md:flex flex-1 mx-8">
            <div className="flex-1 flex items-center bg-gray-100 rounded-lg px-4">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 bg-transparent outline-none ml-2 py-2"
              />
            </div>
          </div>

          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Shop</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Heart size={24} className="text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <ShoppingCart size={24} className="text-gray-700" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Billiards Shop</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">Discover premium billiards equipment for professionals and enthusiasts</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Cues', 'Balls', 'Accessories', 'Tables'].map((cat) => (
            <div key={cat} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto mb-3"></div>
              <h4 className="font-bold text-gray-800">{cat}</h4>
              <p className="text-sm text-gray-500 mt-1">View all</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-800">Featured Products</h3>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">View All →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative overflow-hidden bg-gray-200 h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
                {product.discount > 0 && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                    -{product.discount}%
                  </div>
                )}
                <button className="absolute top-3 left-3 p-2 bg-white rounded-lg hover:bg-gray-100">
                  <Heart size={20} className="text-gray-700" />
                </button>
              </div>

              <div className="p-4">
                <h4 className="font-bold text-gray-800 mb-2 truncate">{product.name}</h4>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Section */}
      <section className="bg-blue-600 text-white py-12 my-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Special Offer</h3>
          <p className="text-lg mb-6">Get 30% off on your first order with code BILLIARDS30</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Claim Offer
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">About Us</h4>
              <p className="text-gray-400 text-sm">Premium billiards equipment for everyone.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Shop</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Shipping</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">Email: info@billiards.com</p>
              <p className="text-gray-400 text-sm">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Billiards Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}