import React from 'react';
import Hero from '../Section/Hero';
import About from '../Section/About';
import Experience from '../Section/Experience';
import Education from '../Section/Educational';
import Projects from '../Section/Projects';
import Skills from '../Section/Skills';
import ContactUs from '../Section/Contact'
const Home = () => {
  return (
    <div>
     <Hero/>

      {/* About Section */}
      <About />
      <Projects />
<Experience/>
<Education />

<Skills/>
<section id="contact">
  <ContactUs />
</section>
    
    </div>
  );
};

export default Home;
