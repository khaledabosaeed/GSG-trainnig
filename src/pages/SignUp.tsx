import { motion } from 'framer-motion';
import { TopBanner } from '../widgets/hreo/hero-banners/TopBanner';
import { Header } from '../shared/ui/Header';
import { Footer } from '../shared/ui/Footer';
import { PageTransition } from '../shared/ui/PageTransition';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <TopBanner
          message="Create an account and get exclusive offers!"
          actionText="Sign Up"
        />
        <Header />

        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <motion.img
              src="/login/login.jpg"
              alt="Shopping Cart"
              className="w-full h-auto max-w-md"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            />

            {/* Right Side - Sign Up Form */}
            <motion.div
              className="max-w-md"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
            <h1 className="text-4xl font-medium mb-3">Create an account</h1>
            <p className="text-gray-600 mb-8">Enter your details below</p>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-0 py-3 border-b border-gray-300 focus:outline-none focus:border-[#DB4444] transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email or Phone Number"
                  className="w-full px-0 py-3 border-b border-gray-300 focus:outline-none focus:border-[#DB4444] transition-colors"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-0 py-3 border-b border-gray-300 focus:outline-none focus:border-[#DB4444] transition-colors"
                />
              </div>

                <motion.button
                  type="submit"
                  className="w-full bg-[#DB4444] text-white py-3 rounded hover:bg-[#c23939] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Create Account
                </motion.button>

                <motion.button
                  type="button"
                  className="w-full py-3 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                  Sign up with Google
                </motion.button>

                <p className="text-center text-gray-600">
                  Already have account?{' '}
                  <Link to="/login" className="ml-2 hover:underline">
                    Log in
                  </Link>
                </p>
              </form>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default SignUp;
