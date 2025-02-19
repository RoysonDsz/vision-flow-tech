import { Element } from 'react-scroll';
import Herosec from '../components/Herosec.tsx';
import Services from '../components/Services.tsx';
import FlipCard from '../components/FlipCard.tsx';
import ImageTextTransition from '../components/ImageTextTransition.tsx';
import TeamSection from '../components/TeamSection.tsx';
import Partners from '../components/Partners.tsx';
import ContactForm from '../components/ContactForm.tsx';
import Navbar from '../components/Navbar.tsx';
import Navsm from "../components/Navsm";

const Home = () => {
  return (
    <div  >
      <Navbar/>
      <Navsm />
      <Element name="home">
        <Herosec />
      </Element>

      <Element name="services">
        <Services />
      </Element>

      <Element name="about">
        <FlipCard />
        <ImageTextTransition />
        <TeamSection />
      </Element>

      <Partners />


      <Element name="contact">
        <ContactForm />
      </Element>
      
    </div>
  );
};

export default Home;
