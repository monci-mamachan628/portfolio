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
          Hi, I’m <span className="text-purple-400 font-semibold">Monci Mamachan</span> — a data enthusiast with a keen interest in bridging technology, business, and analytics. I hold a <span className="text-purple-400 font-semibold">Master’s in Data Science for Management</span> and a <span className="text-purple-400 font-semibold">Bachelor’s in Computer Science Engineering</span>. I thrive on transforming complex data into actionable insights that drive real-world impact.
        </p>
        <p>
          My academic and professional path led me to <span className="text-purple-400 font-semibold">STMicroelectronics</span>, where I contributed to the Artificial Intelligence team. This experience gave me hands-on exposure to <span className="text-purple-400 font-semibold">machine learning</span>, <span className="text-purple-400 font-semibold">data preprocessing</span>, and deploying AI solutions in real business scenarios.
        </p>
        <p>
          I’m proficient in <span className="text-purple-400 font-semibold">Python</span>, <span className="text-purple-400 font-semibold">SQL</span>, <span className="text-purple-400 font-semibold">Power BI</span>, and <span className="text-purple-400 font-semibold">Excel</span>, with strong expertise in data analysis, visualization, and predictive modeling.
        </p>
        <p>
          Driven by curiosity, I’m always eager to learn and experiment with emerging technologies. This website is a reflection of that passion—designed and developed using <span className="text-purple-400 font-semibold">JavaScript</span>, <span className="text-purple-400 font-semibold">HTML</span>, and <span className="text-purple-400 font-semibold">Tailwind CSS</span>.
        </p>
        <p>
          I enjoy tackling challenges, extracting insights, and presenting results in a clear, impactful manner. Let’s connect and explore the world of data together!
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
