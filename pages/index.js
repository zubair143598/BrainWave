
import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
      </div>
      <ButtonGradient />
    </main>
  );
}
