import HeroSection from "../modules/HeroSection";
import { Features } from "../modules/Features";
import { Header } from "../modules/Navbar";
import { Benefits } from "../modules/Benefits";
import { Steps } from "../modules/Steps";
import AdvancedFeatures from "../modules/AdvancedFeatures";
import { Components } from "../modules/Components";
import { Who } from "../modules/Who";
export const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Components />
      <AdvancedFeatures />
      <Benefits />
      <Who />
      <Steps />
    </>
  );
};
