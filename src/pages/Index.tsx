import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoAreWe from "@/components/WhoAreWe";
import Services from "@/components/Services";
import Results from "@/components/Results";
import WhyKoun from "@/components/WhyKoun";
import Clients from "@/components/Clients";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhoAreWe />
      <Services />
      <Results />
      <WhyKoun />
      <Clients />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
