import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";

export const SocialSidebar = () => (
  <div className="fixed top-1/2 left-8 -translate-y-1/2 flex flex-col items-center space-y-14 z-50">
    <a href="https://github.com/monci-mamachan628" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 text-2xl transition-colors hover:scale-110">
      <FaGithub />
    </a>
    <a href="https://www.linkedin.com/in/monci-mamachan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 text-2xl transition-colors hover:scale-110">
      <FaLinkedin />
    </a>
    <a href="https://medium.com/@moncimamachan8547" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 text-2xl transition-colors hover:scale-110">
      <FaMedium />
    </a>
    <a href="mailto:moncimamachan8547@gmail.com" className="text-gray-400 hover:text-purple-400 text-2xl transition-colors hover:scale-110">
      <FaEnvelope />
    </a>
  </div>
);