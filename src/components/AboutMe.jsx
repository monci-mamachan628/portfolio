export const AboutMe = () => (
  <section id="about" className="py-24 px-4 md:px-8 lg:px-32 relative">
    <div className="mx-auto max-w-3xl">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8 text-foreground">
          About <span className="text-purple-500">Me</span>
        </h2>
      
      </div>
      <div className="space-y-6 text-base md:text-lg text-muted-foreground text-justify">
        <p>
          Hi, I’m <span className="text-purple-400 font-bold">Monci Mamachan</span> — a data enthusiast with a keen interest in bridging technology, business, and analytics. I hold a <span className="text-purple-400 font-bold">Master’s in Data Science for Management</span> and a <span className="text-purple-400 font-bold">Bachelor’s in Computer Science Engineering</span>. I thrive on transforming complex data into actionable insights that drive real-world impact.
        </p>
        <p>
          My academic and professional path led me to <span className="text-purple-400 font-bold">STMicroelectronics</span>, where I contributed to the Artificial Intelligence team. This experience gave me hands-on exposure to <span className="text-purple-400 font-bold">machine learning</span>, <span className="text-purple-400 font-bold">data preprocessing</span>, and deploying AI solutions in practical business scenarios.
        </p>
        <p>
          I’m proficient in <span className="text-purple-400 font-bold">Python</span>, <span className="text-purple-400 font-bold">SQL</span>, <span className="text-purple-400 font-bold">Power BI</span> and <span className="text-purple-400 font-bold">Excel</span>, with strong expertise in data analysis, visualization, and predictive modeling.
        </p>
        <p>
          Driven by curiosity, I’m always eager to learn and experiment with emerging technologies. This website is a reflection of that passion—designed and developed from the ground up using <span className="text-purple-400 font-bold">JavaScript, Html</span> and <span className="text-purple-400 font-bold">Tailwind CSS</span>.
        </p>
        <p>
          I enjoy tackling challenges, extracting valuable insights, and presenting results in a clear, impactful manner. Let’s connect and explore the world of data together!
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <a
          href={`${import.meta.env.BASE_URL}Monci_Mamachan_cv.pdf`}
           target="_blank"
           rel="noopener noreferrer"
           className="inline-block px-6 py-3 bg-bg-transparent border-2 border-purple-500 rounded-lg p-g-purple-600 transition-colors duration-300"
>
  Check out my Resume
</a>
          </div>
    </div>
  </section>
);