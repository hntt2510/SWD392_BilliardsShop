import { Search, ShoppingCart, User, Heart } from 'lucide-react';

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-xs py-2 px-4 flex justify-between items-center">
        <div className="flex gap-4">
          <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
          <span>Hotline: 1900 6868</span>
        </div>
        <div className="flex gap-4">
          <span>Order your electronics by 2:00 to see it delivered. Free Shipping Over $50</span>
          <a href="#" className="text-blue-400">Download Catalogue →</a>
        </div>
        <div className="flex gap-2">
          <span>Follow us:</span>
          <a href="#" className="text-blue-400">f</a>
          <a href="#" className="text-blue-400">in</a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-lg text-gray-900 hidden sm:block">FIVE&SIX</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex gap-8 flex-1 ml-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Branches</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Checking Price</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Subscription Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Promotions & Equipment</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">My Points</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">All Other Products</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Registers</a>
          </nav>

          {/* Search & Icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm flex-1"
              />
              <Search size={18} className="text-gray-400" />
            </div>

            {/* Icons */}
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Heart size={20} className="text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart size={20} className="text-gray-700" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">0</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User size={20} className="text-gray-700" />
            </button>

            {/* Mobile Menu */}
            <button className="lg:hidden p-2">
              <Search size={20} className="text-gray-700" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}