import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import project1 from "./assets/project-1.jpg"
import project2 from "./assets/project-2.jpg"
import project3 from "./assets/project-3.jpg"
import project4 from "./assets/project-4.jpg"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export const PROJECTS = [
  {
    title: "Project Management App",
    image: project1,
    description:
      "This was a school-sponsored project, supported by Commerce Bank, aimed to develop a website to help organizations efficiently track their projects.",
    technologies: ["HTML", "CSS", "React", "Springboot", "MySql"],
  },
  {
    title: "Expense Reporter",
    image: project2,
    description:
      "A school-sponsored project in collaboration with Charter&Go aimed to assist pilots in tracking expenses. The project involved creating a website where pilots could upload pictures of receipts. Utilizing AWS services, the website would extract information from the images and store it in a database for easy management and retrieval",
    technologies: ["React", "AWS S3", "AWS Textract", "AWS Lambda", "AWS SNS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "IMDB Clone",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Java", "CSS", "React", "Springboot", "Mongo DB"],
  },
];
