import { Phone, Monitor, Watch, Camera, Headphones, Gamepad2 } from 'lucide-react';

// Layout Components
import { TopBanner } from './layout/TopBanner';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Sidebar } from './layout/Sidebar';

// UI Components
import { Button } from './ui/Button';
import { SectionHeader } from './ui/SectionHeader';
import { NavigationButtons } from './ui/NavigationButtons';
import { CountdownTimer } from './ui/CountdownTimer';
import { ScrollToTopButton } from './ui/ScrollToTopButton';

// Product Components
import { CategoryCard } from './product/CategoryCard';

// Section Components
import { HeroBanner } from './sections/HeroBanner';
import { PromoBanner } from './sections/PromoBanner';
import { ProductGrid } from './sections/ProductGrid';
import { ServiceFeatures } from './sections/ServiceFeatures';
import type { Product } from './product/ProductCard';

const EcommercePage = () => {
  // Product Data
  const flashSalesProducts: Product[] = [
    { id: 1, name: 'HAVIT HV-G92 Gamepad', price: 120, originalPrice: 160, discount: 40, rating: 5, reviews: 88, image: '/slider-2.png' },
    { id: 2, name: 'AK-900 Wired Keyboard', price: 960, originalPrice: 1160, discount: 35, rating: 4, reviews: 75, image: '/slider-3.png' },
    { id: 3, name: 'IPS LCD Gaming Monitor', price: 370, originalPrice: 400, discount: 30, rating: 5, reviews: 99, image: '/slider-4.png' },
    { id: 4, name: 'S-Series Comfort Chair', price: 375, originalPrice: 400, discount: 25, rating: 4.5, reviews: 99, image: '/slider-5.png' },
  ];

  const bestSellingProducts: Product[] = [
    { id: 1, name: 'The north coat', price: 260, originalPrice: 360, rating: 5, reviews: 65, image: '/slider-6.png' },
    { id: 2, name: 'Gucci duffle bag', price: 960, originalPrice: 1160, rating: 4.5, reviews: 65, image: '/slider-7.png' },
    { id: 3, name: 'RGB liquid CPU Cooler', price: 160, originalPrice: 170, rating: 4.5, reviews: 65, image: '/slider-8.png' },
    { id: 4, name: 'Small BookSelf', price: 360, rating: 5, reviews: 65, image: '/slider-9.png' },
  ];

  const exploreProducts: Product[] = [
    { id: 1, name: 'Breed Dry Dog Food', price: 100, rating: 3, reviews: 35, image: '/slider-10.png', isNew: false },
    { id: 2, name: 'CANON EOS DSLR Camera', price: 360, rating: 4, reviews: 95, image: '/slider-11.png', isNew: false },
    { id: 3, name: 'ASUS FHD Gaming Laptop', price: 700, rating: 5, reviews: 325, image: '/slider-12.png', isNew: false },
    { id: 4, name: 'Curology Product Set', price: 500, rating: 4, reviews: 145, image: '/slider-13.png', isNew: false },
    { id: 5, name: 'Kids Electric Car', price: 960, rating: 5, reviews: 65, image: '/slider-14.png', isNew: true, color: ['red', 'blue'] },
    { id: 6, name: 'Jr. Zoom Soccer Cleats', price: 1160, rating: 5, reviews: 35, image: '/slider-15.png', isNew: false, color: ['yellow', 'red'] },
    { id: 7, name: 'GP11 Shooter USB Gamepad', price: 660, rating: 4.5, reviews: 55, image: '/slider-16.png', isNew: true, color: ['black', 'red'] },
    { id: 8, name: 'Quilted Satin Jacket', price: 660, rating: 4.5, reviews: 55, image: '/slider-5.png', isNew: false, color: ['green', 'red'] },
  ];

  const categories = [
    { name: 'Phones', icon: Phone },
    { name: 'Computers', icon: Monitor },
    { name: 'SmartWatch', icon: Watch },
    { name: 'Camera', icon: Camera },
    { name: 'HeadPhones', icon: Headphones },
    { name: 'Gaming', icon: Gamepad2 },
  ];

  return (
    <div className="min-h-screen bg-white">
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
        <div className="flex gap-8 px-10 mb-16">
          <Sidebar />
          <div className="flex-1">
            <HeroBanner
              subtitle="iPhone 14 Series"
              title="Up to 10% off Voucher"
              imageSrc="hero.jpg"
            />
          </div>
        </div>

        {/* Flash Sales */}
        <section className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
            <h3 className="text-[#DB4444] font-semibold">Today's</h3>
          </div>

          <div className="flex items-end justify-between mb-8">
            <div className="flex items-center space-x-16">
              <h2 className="text-4xl font-semibold">Flash Sales</h2>
              <CountdownTimer />
            </div>
            <NavigationButtons />
          </div>

          <ProductGrid products={flashSalesProducts} />

          <div className="text-center mt-8">
            <Button>View All Products</Button>
          </div>
        </section>

        {/* Browse By Category */}
        <section className="mb-16 border-t pt-16">
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
        </section>

        {/* Best Selling Products */}
        <section className="mb-16 border-t pt-16">
          <SectionHeader
            label="This Month"
            title="Best Selling Products"
            rightContent={<Button>View All</Button>}
          />

          <ProductGrid products={bestSellingProducts} />
        </section>

        {/* Music Experience Banner */}
        <section className="mb-16">
          <PromoBanner
            category="Categories"
            title="Enhance Your Music Experience"
            imageSrc="/second-pannar.png"
            countdown={{ hours: 23, days: 5, minutes: 59, seconds: 35 }}
          />
        </section>

        {/* Explore Our Products */}
        <section className="mb-16">
          <SectionHeader
            label="Our Products"
            title="Explore Our Products"
            rightContent={<NavigationButtons />}
          />

          <ProductGrid products={exploreProducts} />

          <div className="text-center mt-8">
            <Button>View All Products</Button>
          </div>
        </section>

        {/* New Arrival */}
        <section className="mb-16 border-t pt-16">
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
                <h3 className="text-2xl text-white  font-semibold mb-2">PlayStation 5</h3>
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
                  <h3 className="text-2xl font-semibold text-white  mb-2">Women's Collections</h3>
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
                    <h3 className="text-xl text-white  font-semibold mb-2">Speakers</h3>
                    <p className="text-white  text-xs mb-3">Amazon wireless speakers</p>
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
                    <h3 className="text-xl text-white  font-semibold mb-2">Perfume</h3>
                    <p className="text-gray-300 text-xs mb-3">GUCCI INTENSE OUD EDP</p>
                    <button className="text-white text-sm border-b border-white pb-1 hover:opacity-80">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <ServiceFeatures />
        </section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default EcommercePage;
