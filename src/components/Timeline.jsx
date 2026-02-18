import React from "react";
import { FaGraduationCap, FaLightbulb } from "react-icons/fa";

// Timeline item without framer-motion for now (simpler)
const TimelineItem = ({ children, direction }) => (
  <div
    className={`w-full flex items-center mb-16 relative z-10 ${
      direction === "left" ? "justify-end" : "justify-start"
    }`}
  >
    {children}
  </div>
);

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
          <div className="w-2/12 flex flex-col items-center">
            <span className="bg-muted border-4 border-purple-400 rounded-full p-4 mb-2 text-purple-400 text-2xl shadow-lg z-10">
              <FaGraduationCap />
            </span>
          </div>
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
          <div className="flex flex-col items-center">
            <span className="bg-muted border-4 border-purple-400 rounded-full p-4 mb-2 text-purple-400 text-2xl shadow-lg">
              <FaGraduationCap />
            </span>
          </div>
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

        {/* Internship STMicroelectronics */}
        <TimelineItem direction="left">
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
          <div className="flex flex-col items-center">
            <span className="bg-muted border-4 border-purple-400 rounded-full p-4 mb-2 text-purple-400 text-2xl shadow-lg">
              <FaLightbulb />
            </span>
          </div>
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

        {/* MDB Financial Consultancy */}
        <TimelineItem direction="right">
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
          <div className="flex flex-col items-center">
            <span className="bg-muted border-4 border-purple-400 rounded-full p-4 mb-2 text-purple-400 text-2xl shadow-lg">
              <FaLightbulb />
            </span>
          </div>
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

        {/* City Break Apartments - cleaned */}
        <TimelineItem direction="left">
          <div className="w-5/12 pr-8 flex justify-end">
            <div className="bg-transparent border-2 border-purple-400 rounded-xl p-6 text-foreground max-w-md text-center shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                Reservation System Analyst – City Break Apartments
              </h3>
              <p className="text-sm text-muted-foreground text-justify">
                Managed high-volume reservation data ensuring 100% pricing and inventory
                accuracy, directly supporting revenue management and preventing booking
                losses in a fast-paced environment. Communicated insights and operational
                issues clearly with front-office and operations teams to maintain seamless
                service delivery.
              </p>
            </div>
          </div>
          <div className="w-2/12 flex flex-col items-center">
            <span className="bg-muted border-4 border-purple-400 rounded-full p-4 mb-2 text-purple-400 text-2xl shadow-lg">
              <FaLightbulb />
            </span>
          </div>
          <div className="w-5/12 pl-4">
            <div className="text-sm text-purple-300 italic leading-snug">
              City Break Apartments
              <br />
              <span className="not-italic text-purple-400 font-bold">
                Dublin, Ireland
              </span>
              <br />
              <span className="text-purple-400 font-semibold">
                Aug 2025 – Jan 2026
              </span>
            </div>
          </div>
        </TimelineItem>

      </div>
    </div>
  </section>
);

