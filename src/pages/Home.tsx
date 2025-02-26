import { useEffect } from "react";
import HeroSection from "../modules/HeroSection";
import { Features } from "../modules/Features";
import { Header } from "../modules/Header";
import { Benefits } from "../modules/Benefits";
import { Steps } from "../modules/Steps";
import AdvancedFeatures from "../modules/AdvancedFeatures";
import { Components } from "../modules/Components";
import { Who } from "../modules/Who";
import { Footer } from "../modules/Footer";
import { FAQ } from "../modules/FAQ";
import Subscribe from "../modules/Subscribe";
import ContactForm from "../modules/Contact";
import AboutSection from "../modules/About";

const CookiebotIntegration = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "Cookiebot";
    script.src = "https://consent.cookiebot.com/uc.js";
    script.dataset.cbid = "d2d578f4-5959-4eff-bae6-adef05409421";
    script.dataset.blockingmode = "auto";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    const cookieDeclaration = document.createElement("script");
    cookieDeclaration.id = "CookieDeclaration";
    cookieDeclaration.src =
      "https://consent.cookiebot.com/d2d578f4-5959-4eff-bae6-adef05409421/cd.js";
    cookieDeclaration.type = "text/javascript";
    cookieDeclaration.async = true;
    document.body.appendChild(cookieDeclaration);
  }, []);

  return null;
};

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
      <FAQ />
      <AboutSection />
      <ContactForm />
      <Subscribe />
      <CookiebotIntegration />
      <Footer />
    </>
  );
};
