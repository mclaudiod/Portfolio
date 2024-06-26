import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="place-self-center text-center"
      >
        <h1 className="flex flex-col text-zinc-50 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal whitespace-pre">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-violet-800 to-purple-900">
            Hello, I&apos;m
          </span>
          <TypeAnimation
            sequence={[
              "Claudio D. Morales",
              1000,
              "Front End",
              1000,
              "Back End",
              1000,
              "Full Stack",
              1000,
              "Web Developer",
              1000,
              "Teacher",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-zinc-50 sm:text-lg mb-6 lg:text-xl">
          Web developer specialized in HTML, CSS, JavaScript, React, PHP and
          more.
        </p>
        <div>
          <a
            href="#contact"
            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-indigo-700 via-violet-800 to-purple-900 text-zinc-50"
          >
            Contact me
          </a>
          <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-indigo-700 via-violet-800 to-purple-900 hover:bg-zinc-800 text-zinc-50 mt-3">
            <a
              href="#"
              download
              className="block bg-zinc-950 hover:bg-zinc-800 rounded-full px-5 py-2"
            >
              Download CV
            </a>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
