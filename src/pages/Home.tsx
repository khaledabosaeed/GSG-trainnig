import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
} from "lucide-react";

// Layout Components
import { TopBanner } from "../widgets/hreo/hero-banners/TopBanner";
import { Header } from "../shared/ui/Header";
import { Footer } from "../shared/ui/Footer";
import { Sidebar } from "../widgets/hreo/hero-sidbar/Sidebar";
import { PageTransition } from "../shared/ui/PageTransition";

// UI Components
import { Button } from "../shared/ui/Button";
import { SectionHeader } from "../shared/ui/SectionHeader";
import { NavigationButtons } from "../shared/ui/NavigationButtons";
import { CountdownTimer } from "../shared/ui/CountdownTimer";
import { ScrollToTopButton } from "../shared/ui/ScrollToTopButton";

// Product Components
import { CategoryCard } from "../entities/proudects";
import type { Product } from "../entities/proudects";
import { fetchProducts } from "../entities/proudects";

// Widget Components
import { HeroBanner } from "../widgets/hreo/hero-banners/HeroBanner";
import { PromoBanner } from "../widgets/promo-banner";
import { ProductGrid } from "../widgets/product-list";
import { ServiceFeatures } from "../widgets/service-features";

const EcommercePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from API on component mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load products");
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Split products into different sections (you can customize this logic)
  const flashSalesProducts = products.slice(0, 4);
  const bestSellingProducts = products.slice(4, 8);
  const exploreProducts = products.slice(8, 16);

  const categories = [
    { name: "Phones", icon: Phone },
    { name: "Computers", icon: Monitor },
    { name: "SmartWatch", icon: Watch },
    { name: "Camera", icon: Camera },
    { name: "HeadPhones", icon: Headphones },
    { name: "Gaming", icon: Gamepad2 },
  ];

  return (
    <PageTransition>
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Top Banner */}
        <TopBanner
          message="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
          actionText="ShopNow"
        />

        {/* Header */}
        <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Hero Section with Sidebar */}
        <motion.div
          className="flex gap-8 px-10 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Sidebar />
          <div className="flex-1">
            <HeroBanner
              subtitle="iPhone 14 Series"
              title="Up to 10% off Voucher"
              imageSrc="hero.jpg"
            />
          </div>
        </motion.div>

        {/* Flash Sales */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center space-x-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
            <h3 className="text-[#DB4444] font-semibold">Today's</h3>
          </motion.div>

          <motion.div
            className="flex items-end justify-between mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center space-x-16">
              <h2 className="text-4xl font-semibold">Flash Sales</h2>
              <CountdownTimer />
            </div>
            <NavigationButtons />
          </motion.div>

          {loading ? (  
            <div className="text-center py-12">Loading products...</div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">Error: {error}</div>
          ) : (
            <ProductGrid products={flashSalesProducts} />
          )}

          <div className="text-center mt-8">
            <a href="products" className="bg-[#DB4444] text-white hover:bg-red-600 p-3 rounded-2xl">View All Products</a>
          </div>
        </motion.section>

        {/* Browse By Category */}
        <motion.section
          className="mb-16 border-t pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="Categories"
            title="Browse By Category"
            rightContent={<NavigationButtons />}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                name={category.name}
                icon={category.icon}
                isActive={index === 3}
              />
            ))}
          </div>
        </motion.section>

        {/* Best Selling Products */}
        <motion.section
          className="mb-16 border-t pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="This Month"
            title="Best Selling Products"
            rightContent={<Button>View All</Button>}
          />

          {loading ? (
            <div className="text-center py-12">Loading products...</div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">Error: {error}</div>
          ) : (
            <ProductGrid products={bestSellingProducts} />
          )}
        </motion.section>

        {/* Music Experience Banner */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <PromoBanner
            category="Categories"
            title="Enhance Your Music Experience"
            imageSrc="/second-pannar.png"
            countdown={{ hours: 23, days: 5, minutes: 59, seconds: 35 }}
          />
        </motion.section>

        {/* Explore Our Products */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="Our Products"
            title="Explore Our Products"
            rightContent={<NavigationButtons />}
          />

          {loading ? (
            <div className="text-center py-12">Loading products...</div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">Error: {error}</div>
          ) : (
            <ProductGrid products={exploreProducts} />
          )}

          <div className="text-center mt-8">
            <Button>View All Products</Button>
          </div>
        </motion.section>

        {/* New Arrival */}
        <motion.section
          className="mb-16 border-t pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
            <h3 className="text-[#DB4444] font-semibold">Featured</h3>
          </div>

          <h2 className="text-4xl font-semibold mb-8">New Arrival</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black text-white rounded-lg p-8 relative h-96 flex items-end">
              <img
                src="advantage-1.png"
                alt="PlayStation 5"
                className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-70"
              />
              <div className="relative z-10">
                <h3 className="text-2xl text-white  font-semibold mb-2">
                  PlayStation 5
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="text-white border-b-2 border-white pb-1 hover:opacity-80">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-6">
              <div className="bg-black text-white rounded-lg p-8 relative flex items-end">
                <img
                  src="advantage-panner.png"
                  alt="Women's Collections"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-70"
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white  mb-2">
                    Women's Collections
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Featured woman collections that give you another vibe.
                  </p>
                  <button className="text-white border-b-2 border-white pb-1 hover:opacity-80">
                    Shop Now
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black text-white rounded-lg p-6 relative flex items-end">
                  <img
                    src="/advantage-2.png"
                    alt="Speakers"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-70"
                  />
                  <div className="relative z-10">
                    <h3 className="text-xl text-white  font-semibold mb-2">
                      Speakers
                    </h3>
                    <p className="text-white  text-xs mb-3">
                      Amazon wireless speakers
                    </p>
                    <button className="text-white text-sm border-b border-white pb-1 hover:opacity-80">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="bg-black text-white rounded-lg p-6 relative flex items-end">
                  <img
                    src="/advantage-3.png"
                    alt="Perfume"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-70"
                  />
                  <div className="relative z-10">
                    <h3 className="text-xl text-white  font-semibold mb-2">
                      Perfume
                    </h3>
                    <p className="text-gray-300 text-xs mb-3">
                      GUCCI INTENSE OUD EDP
                    </p>
                    <button className="text-white text-sm border-b border-white pb-1 hover:opacity-80">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <ServiceFeatures />
        </motion.section>
      </div>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTopButton />
      </motion.div>
    </PageTransition>
  );
};

export default EcommercePage;
