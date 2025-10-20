import { TopBanner } from '../components/layout/TopBanner';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner
        message="Welcome to our store - Your one-stop shop for everything!"
        actionText="Shop Now"
      />
      <Header />

      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className="prose max-w-none">
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
