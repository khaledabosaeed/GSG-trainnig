import { TopBanner } from '../components/layout/TopBanner';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner
        message="Welcome to our store - Your one-stop shop for everything!"
        actionText="Shop Now"
      />
      <Header />

       <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
            <img
              src="/login/login.jpg"
              alt="Shopping Cart"
              className="w-full h-auto max-w-md"
            />

          {/* Right Side - Sign Up Form */}
          <div className="max-w-md">
            <h1 className="text-4xl font-medium mb-3">Log in to Exclusive</h1>
            <p className="text-gray-600 mb-8">Enter your details below</p>

            <form className="space-y-6">
              <div>
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

              <button
                type="submit"
                className="w-full bg-[#DB4444] text-white py-3 rounded hover:bg-[#c23939] transition-colors"
              >
                Create Account
              </button>

              <button
                type="button"
                className="w-full py-3 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                Sign up with Google
              </button>

              <p className="text-center text-gray-600">
                Already have account?{' '}
                <Link to="/login" className="ml-2 hover:underline">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
