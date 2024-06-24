import React, { useContext } from "react";
import { Context } from "../../main";
import Card from "../miniComponents/Card";
import HeroResource from "../miniComponents/HeroResource";

function Resource() {
  const { mode } = useContext(Context);

  const projectList = [
    {
      title: "1st Year 1st Sem",
      description: "Courses",
      link: "/resource/1",
    },
    {
      title: "1st Year 2nd Sem",
      description: "Courses",
      link: "/resource/2",
    },
    {
      title: "2nd Year 1st Sem",
      description: "Courses",
      link: "/resource/3",
    },
    {
      title: "2nd Year 2nd Sem",
      description: "Courses",
      link: "/resource/4",
    },
    {
      title: "3rd Year 1st Sem",
      description: "Courses",
      link: "/resource/5",
    },
    {
      title: "3rd Year 2nd Sem",
      description: "Courses",
      link: "/resource/6",
    },
    {
        title: "4th Year 1st Sem",
        description: "Courses",
        link: "/resource/7",
    },
    {
        title: "4th Year 2nd Sem",
        description: "Courses",
        link: "/resource/8",
    },
  ];

  
  const chunkedProjects = [];
  while (projectList.length) {
    chunkedProjects.push(projectList.splice(0, 2));
  }

  return (
    
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <HeroResource/>
      <section className="skills section" id="Project">
       
        <div className="project__container bd-grid">
          <h1 className="sub-title">Semester</h1>
          
          {chunkedProjects.map((row, index) => (
            <div className="project-row" key={index}>
              {row.map((project, projectIndex) => (
                <Card 
                  key={projectIndex}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

export default Resource;
