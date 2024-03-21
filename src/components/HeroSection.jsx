import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="place-self-center text-center"
      >
        <h1 className="flex flex-col text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal whitespace-pre">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-700 to-blue-900">
            Hello, I&apos;m
          </span>
          <TypeAnimation
            sequence={[
              "Claudio Morales",
              1000,
              "Web Developer",
              1000,
              "Full Stack",
              1000,
              "Responsive Design",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">Web developer specialized in HTML, CSS, JavasCript, React, PHP and more.</p>
      </motion.div>
    </div>
  );
};
