import React from "react";
import { FaGraduationCap, FaLightbulb } from "react-icons/fa";
import { useInView } from "react-intersection-observer"; // Import useInView
import { motion } from "framer-motion"; // Import motion from framer-motion

// A reusable component for timeline items with scroll animation
const TimelineItem = ({ children, direction }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers every time it enters the viewport
    threshold: 0.3, // Percentage of the item visible to trigger the animation
  });

  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full flex items-center mb-16 relative z-10 ${
        direction === "left" ? "justify-end" : "justify-start"
      }`}
    >
      {children}
    </motion.div>
  );
};

export const Timeline = () => (
  <section id="Timeline" className="py-24 px-4 md:px-8 lg:px-32">
    <div className="mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 text-center">
        My Journey to <span className="text-foreground">Data</span>
      </h2>
      <div className="w-32 h-1 bg-purple-400 mx-auto mb-12 rounded"></div>
      <div className="relative flex flex-col items-center">
        {/* Vertical line */}
        <div
          className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-purple-400/80 to-transparent z-0"
          style={{ transform: "translateX(-50%)" }}
        ></div>

        {/* Timeline Item 1 */}
        <TimelineItem direction="left">
          {/* Left content */}
          <div className="w-5/12 pr-8 flex justify-end">
            <div className="bg-transparent border-2 border-purple-400 rounded-xl p-6 text-foreground max-w-md text-center shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                Bachelors in Computer Science Engineering
              </h3>
              <p className="text-sm text-muted-foreground text-justify">
                Developed a strong foundation in programming, algorithms and
                laying the groundwork for my journey into data science and
                technology.
              </p>
            </div>
          </div>

          {/* Vertical line and icon */}
          <div className="w-2/12 flex flex-col items-center">
            {/* Icon centered on vertical line */}
            <span className="bg-muted border-4 border-purple-400 rounded-full p-4 mb-2 text-purple-400 text-2xl shadow-lg z-10">
              <FaGraduationCap />
            </span>
          </div>

          {/* University info to the right of the icon */}
          <div className="w-5/12 pl-4">
            <div className="text-sm text-purple-300 italic leading-snug">
              APJ Abdul Kalam Technological University
              <br />
              <span className="not-italic text-purple-400 font-bold text-center">
                Kerala, India
              </span>
              <br />
              <span className="text-purple-400 font-semibold">
                Aug 2015 – Feb 2019
              </span>
            </div>
          </div>
        </TimelineItem>

        {/* Timeline Item 2 */}
        <TimelineItem direction="right">
          {/* Left: University details */}
          <div className="w-1/2 pr-8 flex justify-end">
            <div className="text-sm text-purple-300 italic text-right leading-snug">
              University of Catania
              <br />
              <span className="not-italic text-purple-400 font-bold">
                Catania, Italy
              </span>
              <br />
              <span className="text-purple-400 font-semibold">
                Oct 2020 – Dec 2023
              </span>
            </div>
          </div>

          {/* Center: Graduation cap icon (on vertical line) */}
          <div className="flex flex-col items-center">
            <span className="bg-muted border-4 border-purple-400 rounded-full p-4 mb-2 text-purple-400 text-2xl shadow-lg">
              <FaGraduationCap />
            </span>
          </div>

          {/* Right: Degree box */}
          <div className="w-1/2 pl-8 flex justify-start">
            <div className="bg-transparent border-2 border-purple-400 rounded-xl p-6 text-foreground max-w-md text-center shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                Masters in Data Science for Management
              </h3>
              <p className="text-sm text-muted-foreground text-justify">
                A multidisciplinary program combining data science, business
                analytics, and management. Gained hands-on experience in data
                analysis, machine learning, and real-world business
                decision-making through projects and industry collaboration.
              </p>
            </div>
          </div>
        </TimelineItem>

        {/* Timeline Item - Internship at STMicroelectronics */}
        <TimelineItem direction="left">
          {/* Left: Internship Summary */}
          <div className="w-1/2 pr-8 flex justify-end">
            <div className="bg-transparent border-2 border-purple-400 rounded-xl p-6 text-foreground max-w-md text-center shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                Data Analytics Internship – STMicroelectronics
              </h3>
              <p className="text-sm text-muted-foreground text-justify">
                Developed a MATLAB-based video magnification tool to enhance
                subtle motion. Explored motion magnification for predictive AI
                use in lab settings. Collaborated on technical challenges and
                shared project updates.
              </p>
            </div>
          </div>

          {/* Center: Icon */}
          <div className="flex flex-col items-center">
            <span className="bg-muted border-4 border-purple-400 rounded-full p-4 mb-2 text-purple-400 text-2xl shadow-lg">
              <FaLightbulb />
            </span>
          </div>

          {/* Right: Location and Duration */}
          <div className="w-1/2 pl-8 flex justify-start">
            <div className="text-sm text-purple-300 italic leading-snug">
              STMicroelectronics
              <br />
              <span className="not-italic text-purple-400 font-bold">
                Catania, Italy
              </span>
              <br />
              <span className="text-purple-400 font-semibold">
                Dec 2022 – Jun 2023
              </span>
            </div>
          </div>
        </TimelineItem>

        {/* Timeline Item - MDB Financial Consultancy */}
        <TimelineItem direction="right">
          {/* Left: Location and Duration */}
          <div className="w-1/2 pr-8 flex justify-end">
            <div className="text-sm text-purple-300 italic text-right leading-snug">
              MDB Financial Consultancy
              <br />
              <span className="not-italic text-purple-400 font-bold">
                Catania, Italy
              </span>
              <br />
              <span className="text-purple-400 font-semibold">
                Nov 2024 – Dec 2024
              </span>
            </div>
          </div>

          {/* Center: Icon */}
          <div className="flex flex-col items-center">
            <span className="bg-muted border-4 border-purple-400 rounded-full p-4 mb-2 text-purple-400 text-2xl shadow-lg">
              <FaLightbulb />
            </span>
          </div>

          {/* Right: Internship Summary */}
          <div className="w-1/2 pl-8 flex justify-start">
            <div className="bg-transparent border-2 border-purple-400 rounded-xl p-6 text-foreground max-w-md text-center shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                DevOps Internship – MDB Financial Consultancy
              </h3>
              <p className="text-sm text-muted-foreground text-justify">
                Migrated projects to GitHub and implemented CI/CD pipelines.
                Automated Firebase & Google Cloud deployments. Secured apps
                using Firebase Security Rules.
              </p>
            </div>
          </div>
        </TimelineItem>
      </div>
    </div>
  </section>
);