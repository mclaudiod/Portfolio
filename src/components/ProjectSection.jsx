import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ProjectTag } from "./ProjectTag";
import { ProjectCard } from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut nisl vestibulum, fermentum lacus sed, pharetra magna. Etiam ac risus eros.",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mclaudiod",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut nisl vestibulum, fermentum lacus sed, pharetra magna. Etiam ac risus eros.",
    image: "",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/mclaudiod",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut nisl vestibulum, fermentum lacus sed, pharetra magna. Etiam ac risus eros.",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mclaudiod",
    previewUrl: "",
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
