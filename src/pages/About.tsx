import { motion } from 'framer-motion';
import { TopBanner } from '../widgets/hreo/hero-banners/TopBanner';
import { Header } from '../shared/ui/Header';
import { Footer } from '../shared/ui/Footer';
import { PageTransition } from '../shared/ui/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <TopBanner
          message="Welcome to our store - Your one-stop shop for everything!"
          actionText="Shop Now"
        />
        <Header />

        <div className="max-w-7xl mx-auto px-8 py-16">
          <motion.h1
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Us
          </motion.h1>
          <motion.div
            className="prose max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg mb-4">
              Welcome to Exclusive, your number one source for all things electronics, fashion, and lifestyle products.
              We're dedicated to providing you the very best products, with an emphasis on quality, customer service, and uniqueness.
            </p>
            <p className="text-lg mb-4">
              Founded in 2024, Exclusive has come a long way from its beginnings. When we first started out,
              our passion for providing the best shopping experience drove us to start our own business.
            </p>
            <p className="text-lg">
              We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions
              or comments, please don't hesitate to contact us.
            </p>
          </motion.div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
