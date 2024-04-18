import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ProjectTag } from "./ProjectTag";
import { ProjectCard } from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Freelance",
    description:
      "This is the first project I ever made, a simple responsive portfolio for a freelancer using just HTML and CSS. It has three sections, a navbar and a form.",
    image: "/freelancer-screenshot.png",
    tag: ["All", "Basic"],
    gitUrl: "https://github.com/mclaudiod/Freelancer",
    previewUrl: "https://mclaudiod.github.io/Freelancer/",
  },
  {
    id: 2,
    title: "FrontEnd Store",
    description:
      "My second project is the static and responsive web development themed merch store done using only HTML and CSS mainly to practice the use of grid.",
    image: "/frontend-store-screenshot.png",
    tag: ["All", "Basic"],
    gitUrl: "https://github.com/mclaudiod/FrontEnd-Store",
    previewUrl: "https://mclaudiod.github.io/FrontEnd-Store/",
  },
  {
    id: 3,
    title: "Coffee Blog",
    description:
      "This project is a static and responsive coffee themed blog done using only HTML and CSS mainly to practice flex and other more complex techniques.",
    image: "/coffee-blog-screenshot.png",
    tag: ["All", "Basic"],
    gitUrl: "https://github.com/mclaudiod/Coffee-Blog",
    previewUrl: "https://mclaudiod.github.io/Coffee-Blog/",
  },
  {
    id: 4,
    title: "Music Festival",
    description:
      "A responsive website for a music festival, using HTML, SCSS and JavaScript to practice the application of the last two in a complete project.",
    image: "/music-festival-screenshot.png",
    tag: ["All", "Basic"],
    gitUrl: "https://github.com/mclaudiod/Music-Festival",
    previewUrl: "https://mclaudiod.github.io/Music-Festival/",
  },
  {
    id: 5,
    title: "Real State",
    description:
      "My first PHP project is a dynamic and responsive website for a real stage agency made using HTML, SCSS, JavaScript and PHP a apractive for bringing information from a MySQL database.",
    image: "/real-state-screenshot.png",
    tag: ["All", "PHP"],
    gitUrl: "https://github.com/mclaudiod/Real-State-MVC",
    previewUrl: "https://realstatemvc.000webhostapp.com/",
  },
  {
    id: 6,
    title: "App Salon",
    description:
      "A PHP project that is a dynamic and responsive website for a barber made using HTML, SCSS, JavaScript and PHP a apractive for bringing information from a MySQL database.",
    image: "/app-salon-screenshot.png",
    tag: ["All", "PHP"],
    gitUrl: "https://github.com/mclaudiod/Real-State-MVC",
    previewUrl: "https://realstatemvc.000webhostapp.com/",
  },
];

export const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Basic"
          isSelected={tag === "Basic"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="PHP"
          isSelected={tag === "PHP"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
