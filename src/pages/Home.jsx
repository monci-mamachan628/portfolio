import { ThemeToggle } from '../components/ThemeToggle.jsx';
import { StarBackground } from '../components/StarBackground.jsx';   
import { Navbar } from '../components/Navbar.jsx';
import { HeroSection } from '../components/HeroSection.jsx';
import { SocialSidebar } from '../components/SocialSidebar.jsx';
import { AboutMe } from '../components/AboutMe.jsx';
import { Timeline } from '../components/Timeline.jsx';
import { ContactForm } from '../components/ContactForm.jsx';
import { Tech } from '../components/Tech.jsx';
import { Certifications } from '../components/Certifications.jsx';
import  DataProjects  from '../components/DataProjects.jsx';

export const Home = () => { 
          return (
             <div className="min-h-screen bg-background text-foreground overflow-x-hidden" >
      { /* Theme Toggle Button */ }
            <ThemeToggle />
      { /* Background Effect */ }
       <StarBackground />

      { /* Navbar */ }
      <Navbar />
      { /* Social Sidebar */ }
      <SocialSidebar />
      { /* Main Content */ }
      <main>
            <HeroSection/>
            <AboutMe />
            <Timeline />
            <Tech />
            <Certifications />
            <DataProjects />
            <ContactForm />
      </main>

      { /* Footer */ }
      </div>
          );
    };
