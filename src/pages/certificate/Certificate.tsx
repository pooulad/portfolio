import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import CertificatesGSAPAnimation from "../../components/global/animation/gsap/certificateGSAPAnimation";
import CertificateRow from "../../components/certificate/certificateRow/CertificateRow";
import { v4 as uuidv4 } from 'uuid';
import Become_a_Django_Developer from "../../assets/images/certificates/Become_a_Django_Developer.jpeg";
import Build_a_Microservice_with_Go from "../../assets/images/certificates/Build_a_Microservice_with_Go.jpeg";
import Getting_Started_with_Python from "../../assets/images/certificates/Getting_Started_with_Python.jpeg";
import Go_Essentials_Concurrency_Connectivity_and_HighPerformance_Apps from "../../assets/images/certificates/Go_Essentials_Concurrency_Connectivity_and_High-Performance_Apps.jpeg";
import Maktabkhone_Django_3_2 from "../../assets/images/certificates/Maktabkhone_Django_3.2.jpeg";
import Maktabkhone_Git_And_Github from "../../assets/images/certificates/Maktabkhone_Git_And_Github.jpeg";
import Maktabkhone_Python_Programming from "../../assets/images/certificates/Maktabkhone_Python_Programming.jpeg";
import Micro_Front_End_Architecture_with_React from "../../assets/images/certificates/Micro_Front-End_Architecture_with_React.jpeg";
import Rate_Type_Certificate from "../../assets/images/certificates/Rate_Type_Certificate.jpeg";
import React_Essential_Training from "../../assets/images/certificates/React_Essential_Training.jpeg";
import { useTranslation } from "react-i18next";


export const CertificatesData = [
  {
    id: uuidv4(),
    title: "Become a Django Developer",
    provider: "Linkedin Learning",
    date: "November 13, 2025",
    image: Become_a_Django_Developer,
    skills: ["Django", "Python", "Web Development"],
  },
  {
    id: uuidv4(),
    title: "Micro Front-End Architecture with React",
    provider: "Linkedin Learning",
    date: "November 17, 2025",
    image: Micro_Front_End_Architecture_with_React,
    skills: ["React", "Micro-Frontend", "Architecture"],
  },
  {
    id: uuidv4(),
    title: "Maktabkhone Git And GitHub",
    provider: "Maktabkhone",
    date: "November 18, 2025",
    image: Maktabkhone_Git_And_Github,
    skills: ["Git", "GitHub", "Version Control"],
  },
  {
    id: uuidv4(),
    title: "Maktabkhone Django 3.2",
    provider: "Maktabkhone",
    date: "November 13, 2025",
    image: Maktabkhone_Django_3_2,
    skills: ["Django", "Web Development"],
  },
  {
    id: uuidv4(),
    title: "Build a Microservice with Go",
    provider: "Linkedin Learning",
    date: "October 25, 2025",
    image: Build_a_Microservice_with_Go,
    skills: ["Golang", "Microservices", "REST API"],
  },
  {
    id: uuidv4(),
    title: "Getting Started with Python",
    provider: "Linkedin Learning",
    date: "October 10, 2025",
    image: Getting_Started_with_Python,
    skills: ["Python", "Programming Basics"],
  },
  {
    id: uuidv4(),
    title: "Go Essentials: Concurrency & High-Performance Apps",
    provider: "Linkedin Learning",
    date: "October 25, 2025",
    image: Go_Essentials_Concurrency_Connectivity_and_HighPerformance_Apps,
    skills: ["Golang", "Concurrency", "High Performance"],
  },
  {
    id: uuidv4(),
    title: "Maktabkhone Python Programming",
    provider: "Maktabkhone",
    date: "October 28, 2025",
    image: Maktabkhone_Python_Programming,
    skills: ["Python", "Programming Basics"],
  },
  {
    id: uuidv4(),
    title: "React Essential Training",
    provider: "LinkedIn Learning",
    date: "September 19, 2025",
    image: React_Essential_Training,
    skills: ["React", "JSX", "Components"],
  },
  {
    id: uuidv4(),
    title: "Rate Type Certificate",
    provider: "Linkedin Learning",
    date: "September 14, 2025",
    image: Rate_Type_Certificate,
    skills: ["Typeing"],
  },
];

function Certificate() {
  const { t } = useTranslation()
  // GSAP
  const listRef = useRef<any>(null);

  CertificatesGSAPAnimation({ listRef });
  // GSAP

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "150px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "90%", display: "flex", flexDirection: "column", gap: 4 }}>
          <Typography
            variant="h4"
          >
            {t("certificates")}
          </Typography>

          <Box ref={listRef} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {CertificatesData.map((cert) => (
              <CertificateRow key={cert.id} cert={cert} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Certificate;
