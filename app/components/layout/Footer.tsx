"use client";
import { useThemeMode } from "../ThemeModeProvider";

const Footer = () => {
  const { mode } = useThemeMode();

  return (
    <footer
      className={`py-8 ${
        mode === "light" ? "bg-gray-100" : "bg-gray-900"
      } transition-all`}
    >
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="https://www.linkedin.com/in/aleprodev"
            className="text-gray-400 hover:text-white mx-2"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Aleprodev"
            className="text-gray-400 hover:text-white mx-2"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
