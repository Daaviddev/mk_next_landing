import About from '@/app/components/About';
import Contact from '@/app/components/Contact';
import Featured from '@/app/components/Featured';
import Hero from '@/app/components/Hero';
import LogoScroll from '@/app/components/LogoScroll';
import Testemonial from '@/app/components/Testemonial';

export default function Home() {
  return (
    <main>
      <Hero />
      <Contact />
      <About />
      <Featured />
      <Testemonial />
    </main>
  );
}
