import React, { useState } from "react";
import styles from "./styles.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import theme from "Theme/theme";
import SquareIcon from "@mui/icons-material/Square";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ai from '../../../Assets/EmergingInnovations/ai.webp'
import bi from '../../../Assets/EmergingInnovations/bi.webp'
import bd from '../../../Assets/EmergingInnovations/bd.webp'
import blc from '../../../Assets/EmergingInnovations/blc.webp'
import iot from '../../../Assets/EmergingInnovations/iot.webp'
import mr from '../../../Assets/EmergingInnovations/mr.webp'
import ds from '../../../Assets/EmergingInnovations/ds.webp'
import Image from "next/image";








const EmergingInnovations = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [data, setdata] = useState([
    {
      title: "Artificial Intelligence",
      desc: "Artificial Intelligence hugely impacts the way we develop software. AI plays a vital role in the design, code generation, and testing of software thus increasing.",
      image: ai,
      features: [
        "Artificial Intelligence Consulting Services",
        "Image Analysis Software",
      ],
    },
    {
      title: "Business Intelligence",
      desc: "Business Intelligence is trending nowadays and we are proud to be an expert provider of BI solutions. We help companies structure and organize data to help them in decision making. We offer multiple solutions ranging from data warehouses, data integration and data extraction.",
      image: bi,
      features: [
        "Business Intelligence Services",
        "Business Intelligence Consulting",
        "Business Intelligence Implementation",
        "Enterprise Business Intelligence",
        "Data Warehouse",
      ],
    },
    {
      title: "Data Science",
      desc: "With our dedicated Data science services, we aim to help businesses identify the data trends in their business insights. We offer data science consulting services with AI and ML to run data analytics for companies.",
      image: ds,
      features: [
        "Data Science Consulting",
        "DSaaS",
        "Machine Learning Consulting",
      ],
    },
    {
      title: "Big Data",
      desc: "With the incorporation of Big Data, software development architectural patterns become data-centric and event-driven – Big Data applications test every software component and then analyze the results.",
      image: bd,
      features: [
        "Big Data Services",
        "Big Data Consulting",
        "Big Data Implementation",
        "Big Data Testing",
      ],
    },
    {
      title: "IoT",
      desc: "Using IoT for software development can help automate many complex processes, saving you both time and money. Another huge benefit of IoT as it enhances processes’ efficiency, meaning that you and your team can focus on other important business tasks whilst still being completely in the loop with your data.",
      image: iot,
      features: [
        "Internet of Things (IOT) Services",
        "IOT Consulting Services",
        "IOT Application Development Services",
        "IOT Analytics Solutions and Services",
      ],
    },
    {
      title: "Blockchain",
      desc: "Blockchain for software development enables organizations to increase security, speed up information exchange, and ensure transparency.",
      image: blc,
      features: ["Blockchain Development Services"],
    },
    {
      title: "Mixed Reality",
      desc: "Augmented and virtual realities are nothing new and have changed how people interact. It comprises of creating digital products, applying modern technologies and blending digital experiences with the physical world.",
      image: mr,
      features: [
        "Virtual Reality Development",
        "Augmented Reality Development",
      ],
    },
  ]);
  const [activeimage,setactiveimage] = useState(ai)
  const handleChange = (panel,dt) => (event, isExpanded) => {
    setactiveimage(dt?.image)
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box className={styles.container}>
      <Box className={styles.subcontainer}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Emerging Innovations
        </Typography>
        <Typography>
          Everchanging technologies drive businesses to success. Code Ninja
          incorporates these leading technologies to deliver software
          development services to you, thus becoming your best software
          development company.
        </Typography>
        <Box
          className={styles.contentContainer}
          sx={{
            [theme.breakpoints.down("md")]: {
              flexDirection: "column-reverse",
            },
          }}
        >
          <Box className={styles.contentBox}>
            {data?.map((temp, i) => {
              return (
                <Accordion
                  key={i}
                  sx={{
                    backgroundColor: (theme) => theme.palette.background.main,
                  }}
                  disableGutters
                  expanded={expanded === i}
                  onChange={handleChange(i,temp)}
                >
                  <AccordionSummary
                    sx={{ width: "100%", textAlign: "left" }}
                    expandIcon={
                      <ExpandMoreIcon
                        color="primary"
                        sx={{ fontSize: "35px", fontWeight: "bold" }}
                      />
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography variant="h6" sx={{ width: "100%" }}>
                      {temp?.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ width: "100%", textAlign: "left" }}>
                    <Typography>{temp?.desc}</Typography>
                    <Box className={styles.listContainer}>
                      {temp?.features?.map((d, ind) => {
                        return (
                          <Box
                            key={ind}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            <SquareIcon color="error" fontSize="20" />
                            <Typography>{d}</Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
          <Box className={styles.imageContainer}>
            <Image src={activeimage} style={{height:'100%',width:'100%'}} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmergingInnovations;
