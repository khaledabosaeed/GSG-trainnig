import { motion } from 'framer-motion';
import { TopBanner } from '../widgets/hreo/hero-banners/TopBanner';
import { Header } from '../shared/ui/Header';
import { Footer } from '../shared/ui/Footer';
import { PageTransition } from '../shared/ui/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <TopBanner
          message="Get in touch with us - We're here to help!"
          actionText="Contact Now"
        />
        <Header />

        <div className="max-w-7xl mx-auto px-8 py-16">
          <motion.h1
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Contact Us
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Call To Us</h3>
                  <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
                  <p className="text-gray-800">Phone: +8801611112222</p>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-2">Write To Us</h3>
                  <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
                  <p className="text-gray-800">Emails: customer@exclusive.com</p>
                  <p className="text-gray-800">Emails: support@exclusive.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-100 rounded border border-gray-200 focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-100 rounded border border-gray-200 focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 bg-gray-100 rounded border border-gray-200 focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-100 rounded border border-gray-200 focus:outline-none focus:border-red-500"
                />
              </div>
                <motion.button
                  type="submit"
                  className="bg-[#DB4444] text-white px-12 py-3 rounded hover:bg-[#c23939] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
