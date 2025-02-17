import HeroSection from "../modules/HeroSection";
import { Features } from "../modules/Features";
import { Header } from "../modules/Header";
import { Benefits } from "../modules/Benefits";
import { Steps } from "../modules/Steps";
import AdvancedFeatures from "../modules/AdvancedFeatures";
import { Components } from "../modules/Components";
export const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Components />
      <AdvancedFeatures />
      <Benefits />
      <Steps />
    </>
  );
};
