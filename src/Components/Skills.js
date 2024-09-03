import React from "react";
import { BsFiletypeJava } from "react-icons/bs";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
} from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb } from "react-icons/si";
// import{LiaHtml5} from "react-icons/lia";

const Skills = ({ skill }) => {
  const icon = {
    Java: <BsFiletypeJava />,
    Python: <FaPython />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Bootstrap: <FaBootstrap />,
    Javascript: <DiJavascript1 />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
