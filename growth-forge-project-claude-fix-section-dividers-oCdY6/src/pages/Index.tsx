import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founders from "@/components/Founders";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import BotFramework from "@/components/BotFramework";
import Methodology from "@/components/Methodology";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const SectionDivider = () => <div className="section-divider" />;

const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <ScrollProgress />
    <Navbar />
    <Hero />
    <SectionDivider />
    <Services />
    {/* <SectionDivider />
    <About />
    <SectionDivider /> */}
    <Founders />
    <SectionDivider />
    <Partners />
    <SectionDivider />
    <BotFramework />
    {/* <SectionDivider />
    <Methodology /> */}
    {/* <Timeline /> */}
    <SectionDivider />
    <Contact />
    <Footer />
  </div>
);

export default Index;
