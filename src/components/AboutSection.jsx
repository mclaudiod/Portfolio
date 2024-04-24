import { useTransition, useState } from "react";
import { TabButton } from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS and SCSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>PHP</li>
        <li>MySQL</li>
        <li>Git</li>
        <li>GitHub</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>IPET 1308</li>
        <li>Codo a Codo 4.0</li>
        <li>Udemy</li>
        <li>Self-Taught</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Science Teacher</li>
        <li>Full Stack PHP</li>
        <li>Full Stack JavaScript</li>
        <li>React</li>
        <li>Several Udemy courses</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="bg-[url('/coding.jpg')] bg-cover bg-center bg-no-repeat">
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            A computer science teacher with experience in HTML, CSS, JavaScript, React, Node.js, PHP,
            MySQL, Git and Github. I focus on creating interactive and
            responsive web applications. I&lsquo;m a quick learner and I&lsquo;m
            constantly looking to expand my skills in web development. I enjoy
            collaborating in teams to carry out effective and functional
            projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8 h-64">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
