import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const certifications = [
  {
    emoji: "📊",
    title: "Data Analysis with Python",
    issuer: "IBM",
    date: "March 2024",
    link: "https://courses.cognitiveclass.ai/certificates/d5dca41f2a8840489be99242edeeb493",
  },
  {
    emoji: "🛢️",
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    date: "July 2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/ZSE2XDYK5YGD",
  },
  {
    emoji: "🧠",
    title: "Prompt Engineering for Everyone",
    issuer: "Cognitive Class",
    date: "July 2024",
    link: "https://courses.cognitiveclass.ai/certificates/10a056d2a21a4d0f86e7937c195635e8",
  },
  {
    emoji: "🧮",
    title: "SQL - ADVANCED",
    issuer: "HackerRank",
    date: "May 2025",
    link: "https://www.hackerrank.com/certificates/iframe/bd628639aad3",
  },
];

export const Certifications = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="certifications"
      className="py-20 px-4 md:px-8 lg:px-24 text-foreground mb-24"
    >
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-2">
        🎓 Certifications
      </h2>
      <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded"></div>

      <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-purple-700 transition"
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <h3 className="text-xl font-semibold mb-1 text-purple-300">
              {cert.emoji} {cert.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {cert.issuer} — <em>{cert.date}</em>
            </p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 rounded-full transition "
              >
                View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
