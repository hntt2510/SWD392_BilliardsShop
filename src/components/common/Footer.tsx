import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-white mb-4">ABOUT US</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">News</a></li>
              <li><a href="#" className="hover:text-white transition">Blogs</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-white mb-4">INFORMATION</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Unsubscribe</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">CONTACT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">Email:</span>
                <a href="mailto:info@fivesix.com" className="hover:text-white transition block">
                  info@fivesix.com
                </a>
              </li>
              <li>
                <span className="text-gray-400">Phone:</span>
                <a href="tel:+841900686868" className="hover:text-white transition block">
                  +84 1900 68 68 68
                </a>
              </li>
              <li>
                <span className="text-gray-400">Address:</span>
                <p className="text-gray-400">123 Billiards St, District 1</p>
                <p className="text-gray-400">Ho Chi Minh City, VN</p>
              </li>
            </ul>
          </div>

          {/* Payment & Delivery */}
          <div>
            <h3 className="font-bold text-white mb-4">PAYMENT</h3>
            <div className="flex gap-2 flex-wrap">
              <div className="w-10 h-6 bg-blue-500 rounded"></div>
              <div className="w-10 h-6 bg-red-500 rounded"></div>
              <div className="w-10 h-6 bg-yellow-500 rounded"></div>
              <div className="w-10 h-6 bg-green-500 rounded"></div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              Copyright © 2024 Five Six Co., Ltd.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}