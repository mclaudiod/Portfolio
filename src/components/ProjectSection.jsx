import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ProjectTag } from "./ProjectTag";
import { ProjectCard } from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Freelance",
    description:
      "This is the first project I ever made, a simple responsive portfolio for a freelancer using just HTML and CSS.",
    image: "/freelancer-screenshot.png",
    tag: ["All", "Basic"],
    gitUrl: "https://github.com/mclaudiod/Freelancer",
    previewUrl: "https://mclaudiod.github.io/Freelancer/",
  },
  {
    id: 2,
    title: "FrontEnd Store",
    description:
      "My second project is the static and responsive web development themed merch store done using only HTML and CSS.",
    image: "/frontend-store-screenshot.png",
    tag: ["All", "Basic"],
    gitUrl: "https://github.com/mclaudiod/FrontEnd-Store",
    previewUrl: "https://mclaudiod.github.io/FrontEnd-Store/",
  },
  {
    id: 3,
    title: "Coffee Blog",
    description:
      "This project is a static and responsive coffee themed blog done using only HTML and CSS.",
    image: "/coffee-blog-screenshot.png",
    tag: ["All", "Basic"],
    gitUrl: "https://github.com/mclaudiod/Coffee-Blog",
    previewUrl: "https://mclaudiod.github.io/Coffee-Blog/",
  },
  {
    id: 4,
    title: "Music Festival",
    description:
      "A responsive website for a music festival, using HTML, SCSS and JavaScript.",
    image: "/music-festival-screenshot.png",
    tag: ["All", "Basic"],
    gitUrl: "https://github.com/mclaudiod/Music-Festival",
    previewUrl: "https://mclaudiod.github.io/Music-Festival/",
  },
  {
    id: 5,
    title: "Real State",
    description:
      "My first PHP project is a dynamic and responsive website for a real stage agency made using also HTML, SCSS, JavaScript and MySQL.",
    image: "/real-state-screenshot.png",
    tag: ["All", "PHP"],
    gitUrl: "https://github.com/mclaudiod/Real-State-MVC",
    previewUrl: "https://realstatemvc.000webhostapp.com/",
  },
  {
    id: 6,
    title: "App Salon",
    description:
      "A PHP project that is a dynamic and responsive website for a barber shop made using also HTML, SCSS, JavaScript and MySQL.",
    image: "/app-salon-screenshot.png",
    tag: ["All", "PHP"],
    gitUrl: "https://github.com/mclaudiod/AppSalon",
    previewUrl: "https://appsalonphp.000webhostapp.com/",
  },
  {
    id: 7,
    title: "UpTask",
    description:
      "This project is a dynamic and responsive task manager website made using HTML, SCSS, JavaScript, PHP and MySQL.",
    image: "/uptask-screenshot.png",
    tag: ["All", "PHP"],
    gitUrl: "https://github.com/mclaudiod/UpTask",
    previewUrl: "https://uptaskmvc.000webhostapp.com/",
  },
  {
    id: 8,
    title: "DevWebCamp",
    description:
      "My largest project is dynamic and responsive website for a web development convention using HTML, SCSS, JavaScript, PHP and MySQL.",
    image: "/devwebcamp-screenshot.png",
    tag: ["All", "PHP"],
    gitUrl: "https://github.com/mclaudiod/DevWebCamp",
    previewUrl: "https://devwebcampphp.000webhostapp.com/",
  },
  {
    id: 9,
    title: "TP Integrador",
    description:
      "A project made for the Full Stack PHP course of Codo a Codo 4.0 using HTML, Bootstrap, JavaScript, PHP and MySQL.",
    image: "/tp-integrador-screenshot.png",
    tag: ["All", "PHP"],
    gitUrl: "https://github.com/mclaudiod/TP-Integrador-Back",
    previewUrl: "https://tp-integrador-morales.000webhostapp.com/",
  },
  {
    id: 10,
    title: "Adventure Quiz",
    description:
      "My first React project was a collaborative one with a friend. It is a quiz about a streamer made also using HTML, Tailwind and JavaScript.",
    image: "/adventure-quiz-screenshot.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Tamaki-Dayo/AdventureQuiz",
    previewUrl: "https://adventure-quiz.vercel.app/",
  },
  {
    id: 11,
    title: "Cocktails",
    description:
      "A collaborative project made for the React course of Codo a Codo 4.0 using HTML, CSS, Bootstrap and JavaScript.",
    image: "/cocktails-screenshot.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Rodritz/TPIntegrador-CaC-Com23643-G9-React",
    previewUrl: "https://cocktails-steel-eight.vercel.app/",
  },
  {
    id: 12,
    title: "Movies Project",
    description:
      "This React project is a dynamic and responsive website that brings data from an API, in this case movies, and shows it. It was made using HTML, Tailwind and JavaScript.",
    image: "/movies-project-screenshot.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/mclaudiod/Movies-Project",
    previewUrl: "https://movies-project-henna.vercel.app/",
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
      <h2 className="text-center text-4xl font-bold text-zinc-50 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-zinc-50 flex flex-row justify-center items-center gap-2 py-6">
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
