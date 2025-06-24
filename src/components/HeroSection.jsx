import { useState } from "react";
import { ArrowDown } from "lucide-react";


export const HeroSection = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1"> Monci </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Mamachan
              </span>
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              I’m a Data Analyst who loves digging into data and finding stories
              in the numbers.
              <br />
              I work with SQL, Python, and PowerBI to bring insights to life.
            </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <button
                onClick={handleScrollToContact}
                className="cosmic-button bg-primary text-white hover:bg-primary/80 transition-colors px-6 py-3 rounded-full shadow-lg"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </section>
    </>
  );
};
