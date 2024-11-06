import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "Doniyor Dev",
    summary:
      "Software engineer obsessed with building exceptional products that people love",
    email: "doniyor096@kyungsung.ac.kr",
    phone: "+821021551331",
    location: "Tokio, Japan",
    url: "https://www.linkedin.com/in/doniyor-dev-7bb83021a/",
  },
  workExperiences: [
    {
      company: "Itransition",
      jobTitle: "Front end engineer Intern",
      date: "Nov 2024 - Present",
      descriptions: [
        "Lead a cross-functional team of 5 engineers in developing a search bar, which enables thousands of daily active users to search content across the entire platform",
        "Create stunning home page product demo animations that drives up sign up rate by 20%",
        "Write clean code that is modular and easy to maintain while ensuring 100% test coverage",
      ],
    },
    {
      company: "Webmasters",
      jobTitle: "Full-Stack Developer",
      date: "Oct 2023 - Nov 2024",
      descriptions: [
        "Full websites, meeting with clients to discuss website templates and improve designs, and testing layouts and functionalities",
        " Creating user-friendly interfaces, creating network communication systems, designing application functionality, and creating business websites"
      ],
    },
    {
      company: "Nflux (엔플럭스)",
      jobTitle: "Front end Engineer",
      date: "Jul 2023 - Oct 2023",
      descriptions: [
        "Front-end developer of an AI plan project, web development, database, backend development, graph bar chart development.",
        " This AI (PECS) project helps users control planting through web pages, illustrating over 2 years of data in one line graph",
      ],
    },
    {
      company: "SB Information Technology (에스비정보기술)",
      jobTitle: "Full-stack Engineer",
      date: "Sep 2022 - Jun 2024",
      descriptions: [
        "UX/UI, web development, and front-end development of SDN controllers. Working with map locations and coordinates, different topologies, and charts",
        " Dendrogram and topology for various switches connected by API Rest API connects data tables and charts.",
      ],
    },
  ],
  educations: [
    {
      school: "Kyungsung University",
      degree: "Bachelor of Science in Computer Science",
      date: "Sep 2018 - May 2022",
      gpa: "3.8",
      descriptions: [
        "Won 1st place in 2022 Education Hackathon, 2nd place in 2023 Health Tech Competition",
        "Teaching Assistant for Programming for the Web (2022 - 2023)",
        "Coursework: Object-Oriented Programming (A+), Programming for the Web (A+), Cloud Computing (A), Introduction to Machine Learning (A-), Algorithms Analysis (A-)",
      ],
    },
  ],
  projects: [
    {
      project: "Webmasters E-Commerce projects (Game store, LMS, Education web platform)", 
      date: "Oct 2023",
      descriptions: [
        "Game Store mainly focuses on selling PC games for lower price, LMS project focuses on classes and meetings, Education web platform is for selling online courses and being a tutor at the platform.",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "HTML", rating: 5 },
      { skill: "CSS", rating: 5 },
      { skill: "Python", rating: 3 },
      { skill: "TypeScript", rating: 4 },
      { skill: "React", rating: 4 },
      { skill: "JavaScript", rating: 4 },
      { skill: "Java", rating: 2}
    ],
    descriptions: [
      "Tech: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git",
      "Soft: Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile",
    ],
  },
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
  custom: {
    descriptions: [],
  },
};
