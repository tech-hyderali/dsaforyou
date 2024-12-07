import { Hero } from '../components/home/Hero';
import { AboutSection } from '../components/home/AboutSection';
import { InstructorSection } from '../components/home/InstructorSection';
import { ContactSection } from '../components/home/ContactSection';

export function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <InstructorSection />
      <ContactSection />
    </main>
  );
}