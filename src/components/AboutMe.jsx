export const AboutMe = () => (
  <section id="about" className="py-16 px-4 sm:px-6 md:px-8 lg:px-32 bg-background text-foreground">
    <div className="mx-auto max-w-4xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          About <span className="text-purple-500">Me</span>
        </h2>
      </div>

      <div className="space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground text-justify leading-relaxed">
        <p>
          Hi, I’m <span className="text-purple-400 font-semibold">Monci Mamachan</span> — a data enthusiast bridging technology, business, and analytics. I hold a <span className="text-purple-400 font-semibold">Master’s in Data Science for Management</span> and a <span className="text-purple-400 font-semibold">Bachelor’s in Computer Science Engineering</span>.
        </p>
        <p>
          I gained hands-on <span className="text-purple-400 font-semibold">AI/ML</span> experience at <span className="text-purple-400 font-semibold">STMicroelectronics</span>, working with data preprocessing and deploying AI solutions. I have also worked as a <span className="text-purple-400 font-semibold">Reservation System Analyst</span>. I’m proficient in <span className="text-purple-400 font-semibold">Python</span>, <span className="text-purple-400 font-semibold">SQL</span>, <span className="text-purple-400 font-semibold">Power BI</span>, and <span className="text-purple-400 font-semibold">Excel</span>, with a focus on data analysis, visualization, and predictive modeling.
        </p>
        <p>
          This website reflects that passion, built with <span className="text-purple-400 font-semibold">JavaScript</span>, <span className="text-purple-400 font-semibold">HTML</span>, and <span className="text-purple-400 font-semibold">Tailwind CSS</span>. Let’s connect and explore the world of data together!
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <a
          href={`${import.meta.env.BASE_URL}Monci-Mamachan-cv.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-sm sm:text-base bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white rounded-lg transition-colors duration-300"
        >
          Check out my Resume
        </a>
      </div>
    </div>
  </section>
);
