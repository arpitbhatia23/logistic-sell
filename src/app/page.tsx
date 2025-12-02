import Home from "../components/Home";
import ServicesSection from "../components/Services";
import IntroductionSection from "../components/Introsection";

export default function page() {
  return (
    <div>
      <Home />
      <IntroductionSection />
      <ServicesSection />
    </div>
  );
}
