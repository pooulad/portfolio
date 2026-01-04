import { Box, Typography, useTheme } from "@mui/material";
import { useRef } from "react";
import CertificatesGSAPAnimation from "../../components/global/animation/gsap/certificateGSAPAnimation";
import CertificateRow from "../../components/certificate/certificateRow/CertificateRow";
import { v4 as uuidv4 } from 'uuid';
import ProgrammingWithGoogleGo from "../../assets/images/certificates/ProgrammingWithGoogleGo.jpeg";
import Become_a_Django_Developer from "../../assets/images/certificates/Become_a_Django_Developer.jpeg";
import ConcurrencyInGo from "../../assets/images/certificates/ConcurrencyInGo.jpeg";
import FunctionsMethodsAndInterfacesInGo from "../../assets/images/certificates/FunctionsMethodsAndInterfacesInGo.jpeg";
import GettingStartedWithGo from "../../assets/images/certificates/GettingStartedWithGo.jpeg";
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
import { Certification } from "../../ts/types";


export const CertificatesData: Certification[] = [
  {
    id: uuidv4(),
    link: "https://www.coursera.org/account/accomplishments/specialization/WKFD8X169XGL",
    title: "Programming with Google Go",
    provider: "Coursera",
    date: "January 24, 2025",
    image: ProgrammingWithGoogleGo,
    skills: ["Go (Programming Language)", "Data Structures", "Computer Programming Tools"],
  },
  {
    id: uuidv4(),
    link: "https://www.coursera.org/account/accomplishments/records/8POPNMYZXDY7",
    title: "Concurrency in Go",
    provider: "Coursera",
    date: "December 1, 2025",
    image: ConcurrencyInGo,
    skills: ["Go (Programming Language)", "Operating Systems", "Algorithms", "System Programming"],
  },
  {
    id: uuidv4(),
    link: "https://www.coursera.org/account/accomplishments/records/4RAONU5BEBQ1",
    title: "Functions, Methods, and Interfaces in Go",
    provider: "Coursera",
    date: "December 1, 2025",
    image: FunctionsMethodsAndInterfacesInGo,
    skills: ["Software Design", "Object Oriented Programming (OOP)", "Functional Design"],
  },
  {
    id: uuidv4(),
    link: "https://www.coursera.org/account/accomplishments/records/O5I048EJZBCD",
    title: "Getting Started with Go",
    provider: "Coursera",
    date: "December 1, 2025",
    image: GettingStartedWithGo,
    skills: ["Data Access", "Debugging", "Back-End Web Development", "System Programming"],
  },
  {
    id: uuidv4(),
    link: "https://www.linkedin.com/learning/certificates/f78a2f8a5679d6940fad8dd05518a9ef7e5ea672a76e4514d03f00f9810fea0a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B%2BeyJFoZtR%2Bi%2FWoZG9jfP7Q%3D%3D",
    title: "Become a Django Developer",
    provider: "Linkedin Learning",
    date: "November 13, 2025",
    image: Become_a_Django_Developer,
    skills: ["Django", "Python", "Web Development"],
  },
  {
    id: uuidv4(),
    link: "https://www.linkedin.com/learning/certificates/55879a7f899270e71cebebc5874654582efcb1725d58226a400f9a8e1ae5fb1d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B%2BeyJFoZtR%2Bi%2FWoZG9jfP7Q%3D%3D",
    title: "Micro Front-End Architecture with React",
    provider: "Linkedin Learning",
    date: "November 17, 2025",
    image: Micro_Front_End_Architecture_with_React,
    skills: ["React", "Micro-Frontend", "Architecture"],
  },
  {
    id: uuidv4(),
    link: "https://www.maktabkhooneh.org/certificates/MK-KZNN1O/",
    title: "Maktabkhone Git And GitHub",
    provider: "Maktabkhone",
    date: "November 18, 2025",
    image: Maktabkhone_Git_And_Github,
    skills: ["Git", "GitHub", "Version Control"],
  },
  {
    id: uuidv4(),
    link: "https://www.maktabkhooneh.org/certificates/MK-BNZGRX/",
    title: "Maktabkhone Django 3.2",
    provider: "Maktabkhone",
    date: "November 13, 2025",
    image: Maktabkhone_Django_3_2,
    skills: ["Django", "Web Development"],
  },
  {
    id: uuidv4(),
    link: "https://www.linkedin.com/learning/certificates/75cdd84800728506d6eb57a6aac469d47d63618c6e48eee7c04bc19486bc66d8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BueZHNVq2RKaFhWk8GycIhw%3D%3D",
    title: "Build a Microservice with Go",
    provider: "Linkedin Learning",
    date: "October 25, 2025",
    image: Build_a_Microservice_with_Go,
    skills: ["Golang", "Microservices", "REST API"],
  },
  {
    id: uuidv4(),
    link: "https://www.linkedin.com/learning/certificates/6d4a51dc9fc3142e6744f8aa0c502fe431e32887a018cad5861da1e07d61119f?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BueZHNVq2RKaFhWk8GycIhw%3D%3D",
    title: "Getting Started with Python",
    provider: "Linkedin Learning",
    date: "October 10, 2025",
    image: Getting_Started_with_Python,
    skills: ["Python", "Programming Basics"],
  },
  {
    id: uuidv4(),
    link: "https://www.linkedin.com/learning/certificates/13eb57e4e2a42cf816b0e4c9f09bd41fea97e7537d716cbc58054e1ef2d619cc?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BueZHNVq2RKaFhWk8GycIhw%3D%3D",
    title: "Go Essentials: Concurrency & High-Performance Apps",
    provider: "Linkedin Learning",
    date: "October 25, 2025",
    image: Go_Essentials_Concurrency_Connectivity_and_HighPerformance_Apps,
    skills: ["Golang", "Concurrency", "High Performance"],
  },
  {
    id: uuidv4(),
    link: "https://www.maktabkhooneh.org/certificates/MK-QTW4PO/",
    title: "Maktabkhone Python Programming",
    provider: "Maktabkhone",
    date: "October 28, 2025",
    image: Maktabkhone_Python_Programming,
    skills: ["Python", "Programming Basics"],
  },
  {
    id: uuidv4(),
    link: "https://www.linkedin.com/learning/certificates/2a4d4c14532cb616a2614fd2d52d4526f8e9f1eb69f2b3c1508d443245c51121?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BueZHNVq2RKaFhWk8GycIhw%3D%3D",
    title: "React Essential Training",
    provider: "LinkedIn Learning",
    date: "September 19, 2025",
    image: React_Essential_Training,
    skills: ["React", "JSX", "Components"],
  },
  {
    id: uuidv4(),
    link: "https://www.ratatype.com/en/u8069072/certificate/en_new/",
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
  const listRef = useRef<HTMLDivElement>(null);

  CertificatesGSAPAnimation({ listRef });
  // GSAP

  const theme = useTheme()

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
        <Box sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          [theme.breakpoints.down("md")]: {
            justifyContent: "center",
            alignItems: "center"
          },
        }}>
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
