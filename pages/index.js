
import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import RoadMap from "@/components/RoadMap";
import Services from "@/components/Services";
import ButtonGradient from "@/public/assets/svg/ButtonGradient";

export default function Home() {
  return (
    <main>
     
      <div className=" pt-[4.75rem] lg:pt-[5.2rem] overflow-hidden">
       <Header/>
       <Hero/>
       <Benefits/>
       <Collaboration/>
       <Services/>
       <Pricing/>
       <RoadMap/>
       <Footer/>
      </div>
      <ButtonGradient />
    </main>
  );
}
