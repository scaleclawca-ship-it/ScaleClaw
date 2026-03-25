import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ValueProp from '../components/ValueProp';
import ProofSection from '../components/ProofSection';
import RevenueModels from '../components/RevenueModels';
import PricingTiers from '../components/PricingTiers';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-scale-dark text-white font-sans selection:bg-scale-red/30">
      <Navbar />
      <main>
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
