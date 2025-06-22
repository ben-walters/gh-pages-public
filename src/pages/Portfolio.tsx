import {Box, Stack, Typography} from "@mui/material";
import {pageStyles} from "../style/pageStyles";
import {stackSpacing} from "../constants";
import LinkList from "../components/LinkList";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const links = [
  {
    url: "https://www.herts.ac.uk",
    title: "University of Hertfordshire",
    description:
      "As part of the Full-Stack Development team, I contributed to the design and implementation of a web application that streamlined the management of student records, course schedules, and faculty interactions. The project focused on improving the user experience for both students and staff by introducing intuitive interfaces and automating administrative tasks. Technologies used included React, Node.js, and MongoDB.",
  },
  {
    url: "https://www.beds.ac.uk",
    title: "University of Bedfordshire",
    description:
      "Collaborated with a Full-Stack Development team to create a comprehensive web application for managing student records, course schedules, and faculty communications. The platform was designed to enhance operational efficiency and provide a seamless experience for users. My role involved implementing key features using Angular, Express.js, and PostgreSQL, as well as ensuring the application met accessibility standards.",
  },
  {
    url: "https://www.justice.gov.uk",
    title: "Ministry of Justice",
    description:
      "Worked as part of the Full-Stack and Architecture team to develop a secure, scalable web application for managing case files, court schedules, and legal documentation. The project required strict adherence to government regulations and data security protocols. I contributed to both the front-end (using React) and back-end (using Node.js and AWS Lambda), ensuring the system was robust and user-friendly for legal professionals.",
  },
  {
    url: "https://www.ebay.co.uk",
    title: "eBay UK",
    description:
      "As a member of the Backend Development team, I worked on creating innovative solutions for targeted and customizable ad campaigns. One notable feature involved leveraging real-time weather data to infer user behavior and optimize product recommendations, resulting in higher conversion rates. The project utilized Python, Flask, and machine learning models deployed on AWS infrastructure.",
  },
  {
    url: "https://www.williamhill.com",
    title: "William Hill",
    description:
      "As part of the Backend and Consultancy team, I implemented a live-odds feed system that provided real-time betting odds to television and web platforms during live events. This involved integrating APIs, optimizing data pipelines, and ensuring low-latency performance. The solution was built using Node.js, Redis, and Kafka, and was deployed on a cloud-based infrastructure to handle high traffic volumes.",
  },
  {
    url: "https://www.veratrak.com",
    title: "Veratrak",
    description:
      "As a member of the DevOps and Backend team, I contributed to the development of a blockchain-based supply chain solution for the pharmaceutical industry. The system, built on Hyperledger Fabric and deployed on Kubernetes, ensured secure and transparent tracking of pharmaceutical products across the supply chain. My role included designing smart contracts, optimizing deployment pipelines, and ensuring system reliability.",
  },
];

const personalLinks = [
  {
    url: "https://github.com/ben-walters/",
    title: "GitHub",
    description:
      "This is my personal GitHub profile, where I showcase a variety of projects, including open-source contributions, personal experiments, and professional work. It highlights my expertise in full-stack development, DevOps, and software architecture.",
    icon: <GitHubIcon />,
  },
  {
    url: "https://www.linkedin.com/in/ben-writes-code/",
    title: "LinkedIn",
    description:
      "This is my LinkedIn profile, where I connect with other professionals, share insights, and highlight my career achievements. It serves as a platform to showcase my skills, experience, and professional network.",
    icon: <LinkedInIcon />,
  },
];
function PortfolioPage({id}: {id: string}) {
  return (
    <Box id={id} sx={pageStyles}>
      <Stack spacing={stackSpacing} direction={"column"}>
        <Typography variant="h1">Portfolio</Typography>
        <Typography variant="body1">
          Here are some projects i've worked on in the past:
        </Typography>
        <LinkList links={links} />
        <Typography variant="body1">...and my personal links:</Typography>
        <LinkList links={personalLinks} />
      </Stack>
    </Box>
  );
}

export default PortfolioPage;
