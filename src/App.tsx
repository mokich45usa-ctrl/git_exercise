import { BrutalistHero } from './components/BrutalistHero';
import { PortfolioSection } from './components/PortfolioSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { LitePackageSection } from './components/LitePackageSection';
import { PricingSection } from './components/PricingSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCTASection } from './components/FinalCTASection';

export default function App() {
  return (
    <div className="size-full">
      <BrutalistHero />
      <PortfolioSection />
      <AdvantagesSection />
      <LitePackageSection />
      <PricingSection />
      <ProcessSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
}