import React from 'react';
import { Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Subscribe Section */}
          <div className='w-full '>
            <h3 className="text-2xl font-bold mb-4">Exclusive</h3>
            <p className="mb-4">Subscribe</p>
            <p className="text-sm text-gray-400 mb-4">Get 10% off your first order</p>
            <div className=" flex mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border w-20 border-white px-1 py-2 rounded-l flex-1"
              />
              <button
                        title='c'

              className="bg-white text-black px-2 py-2  rounded-r">
                <Send size={20} />
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <p className="text-sm text-gray-400 mb-2">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-sm text-gray-400 mb-2">exclusive@gmail.com</p>
            <p className="text-sm text-gray-400">+88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div>
            <h4 className="font-semibold mb-4">Account</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-semibold mb-4">Quick Link</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h4 className="font-semibold mb-4">Download App</h4>
            <p className="text-xs text-gray-400 mb-4">Save $3 with App New User Only</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <img
                src="Qrcode.png"
                alt="QR Code"
                className="w-20 h-20"
              />
              <div className="space-y-2">
                <img
                  src="google-play.png"
                  alt="Google Play"
                  className="w-full"
                />
                <img
                  src="appstore.png"
                  alt="App Store"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};
