import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ValueProp from '../components/ValueProp';
import ProofSection from '../components/ProofSection';
import RevenueModels from '../components/RevenueModels';
import PricingTiers from '../components/PricingTiers';
import Footer from '../components/Footer';
import BackgroundEffect from '../components/BackgroundEffect';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-scale-dark text-gray-900 dark:text-white font-sans selection:bg-scale-red/30 relative transition-colors duration-500">
      <BackgroundEffect />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ValueProp />
        <ProofSection />
        <RevenueModels />
        <PricingTiers />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
