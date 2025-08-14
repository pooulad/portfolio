import { Project } from "../../ts/types";
import unizym from "../../assets/images/projects/unizym.png";
import virache from "../../assets/images/projects/virache.png";
import noghtezan from "../../assets/images/projects/noghtezan.png";
import atlas from "../../assets/images/projects/atlas.png";
import canvas from "../../assets/images/projects/canvas.png";
import noName1 from "../../assets/images/projects/noName1.png";
import noName2 from "../../assets/images/projects/noName2.png";
import noName3 from "../../assets/images/projects/noName3.png";
import noName4 from "../../assets/images/projects/noName4.png";
import nasr from "../../assets/images/projects/nasr.png";
import gold from "../../assets/images/projects/gold.png";
import resume from "../../assets/images/projects/resume.png";
import blogApi from "../../assets/images/projects/blogApi.png";
import forjump from "../../assets/images/projects/forjump.png";
import sandoghche from "../../assets/images/projects/sandoghche.png";
import makhzan from "../../assets/images/projects/makhzan.png";
import vetoria from "../../assets/images/projects/vetoria.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Atlas",
    description:
      "A light blue-themed organizational dashboard web app named Atlas, designed for registering trade-related forms and recording data including Excel spreadsheets, featuring dynamic charts, interactive tables, and a clean, user-friendly interface optimized for data management and analysis.",
    image: atlas,
    skills: ["React", "JavaScript"],
  },
  {
    id: 2,
    title: "Virache",
    description:
      "A mobile-first e-commerce platform named Virache, enabling home appliance sellers to register and sell products such as refrigerators and other household items, featuring a clean and user-friendly interface with warm neon gradients for an inviting shopping experience.",
    image: virache,
    skills: ["ReactJS", "TypeScript"],
  },
  {
    id: 3,
    title: "Noghtezan",
    description:
      "An organizational web application called Noghtezan that showcases and analyzes various Iranian trades and businesses, featuring detailed charts, profession-specific icons, and a warm creamy color palette for a professional and inviting user experience.",
    image: noghtezan,
    skills: ["ReactJS", "JavaScript"],
  },
  {
    id: 4,
    title: "Organizational dashboard",
    description:
      "A confidential organizational web application called, featuring a secure monitoring dashboard panel designed for real-time data analytics, access control, and encrypted data visualization, utilizing a dark mode interface with deep blue and black gradients to emphasize privacy and professionalism.",
    image: noName1,
    skills: ["ReactJS", "TypeScript"],
  },
  {
    id: 5,
    title: "Makhzan",
    description:
      "An internal organizational platform named Makhzan, designed to register, list, and manage various services within an organization. It featured real-time status alerts for servers and services, enabling administrators to monitor operational health and respond quickly to issues. Built with a full-black UI and a polymorphic design structure, the platform emphasized both functionality and a modern, bold look.",
    image: makhzan,
    skills: ["ReactJS", "TypeScript"],
  },
  {
    id: 6,
    title: "Organizational dashboard",
    description:
      "A light purple-themed corporate web application, enabling secure file uploads, categorized organization, and easy sharing, featuring a clean and intuitive user interface with tagging and sorting options, designed to enhance collaboration within organizations.",
    image: noName2,
    skills: ["ReactJS", "TypeScript"],
  },
  {
    id: 7,
    title: "Organizational dashboard",
    description:
      "A deep navy blue themed organizational data catalog web app, featuring record creation, data utilization, list displays, and comprehensive control panels, designed to provide efficient data management and streamlined operations within corporate environments.",
    image: noName3,
    skills: ["ReactJS", "TypeScript"],
  },
  {
    id: 8,
    title: "Organizational dashboard",
    description:
      "A white-themed organizational dashboard web app, enabling users to upload files and folders, perform automated file crawling and content analysis, and view detailed metadata and file contents, featuring a clean interface inspired by Google Cloud's minimalist design principles.",
    image: noName4,
    skills: ["ReactJS", "TypeScript"],
  },
  {
    id: 9,
    title: "Unizym",
    description:
      "A mobile-first social media platform named Unizym designed specifically for children passionate about theater, featuring interactive profiles, video sharing, and community engagement with a bright green-themed user interface.",
    image: unizym,
    skills: ["ReactJS", "TypeScript"],
  },
  {
    id: 10,
    title: "Forjump",
    description:
      "A PHP-built video streaming web application, featuring a sleek user interface with video thumbnails, play controls, and progress indicators, designed to provide smooth content sharing and viewing experience for users.",
    image: forjump,
    skills: ["PHP", "JavaScript"],
  },
  {
    id: 11,
    title: "Nasr",
    description:
      "A corporate web application designed for expert analysis and reviews of movies and series, featuring interactive polls and feedback systems, with a clean white and blue-themed user interface that promotes professional engagement and community interaction.",
    image: nasr,
    skills: ["ReactJS", "TypeScript"],
  },
  {
    id: 12,
    title: "Sandoghche",
    description:
      "An internal organizational web application named Sandoghche, built with React and PHP, designed for uploading and securely storing large files into a cloud bucket, featuring a user-friendly interface and efficient file management within a secure environment.",
    image: sandoghche,
    skills: ["ReactJS", "PHP"],
  },
  {
    id: 13,
    title: "Portfolio",
    description:
      "A clean and modern personal resume website showcasing detailed professional information and work experience, designed to present skills and career history in an intuitive and visually appealing format.",
    image: resume,
    skills: ["ReactJS", "GSAP"],
  },
  {
    id: 14,
    title: "Golang blog api",
    description:
      "A robust backend API service for a blogging platform developed with Go (Golang), focusing on server infrastructure, data flow, and cloud connectivity, providing seamless content management and delivery.",
    image: blogApi,
    skills: ["Golang", "Backend"],
  },
  {
    id: 15,
    title: "Canvas editor",
    description:
      "A vibrant, green-themed single-page web application that allows users to create and manipulate various shapes and canvases, featuring a dynamic and creative user interface designed for artistic expression and digital design.",
    image: canvas,
    skills: ["ReactJS", "JavaScript"],
  },
  {
    id: 16,
    title: "Gold",
    description:
      "A full-featured e-commerce website, with a deep navy blue theme, supporting diverse product categories, secure checkout, user profiles, and a sleek, intuitive interface designed to offer a seamless shopping experience.",
    image: gold,
    skills: ["ReactJS", "Laravel"],
  },
  {
    id: 17,
    title: "Vetoria",
    description:
      "A full-featured e-commerce website, with a deep navy blue theme, supporting diverse product categories, secure checkout, user profiles, and a sleek, intuitive interface designed to offer a seamless shopping experience.",
    image: vetoria,
    skills: ["JavaScript", "Laravel"],
  },
];
