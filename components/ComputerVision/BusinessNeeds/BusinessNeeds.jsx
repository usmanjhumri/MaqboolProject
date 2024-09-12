import React, { useState } from "react";
import styles from "./style.module.css";
import analyst from "../../../Assets/solutions/analyst.svg";
import high from "../../../Assets/solutions/high.svg";
import robust from "../../../Assets/solutions/robust.svg";
import accurate from "../../../Assets/solutions/accurate.svg";
import qualityservice from "../../../Assets/solutions/qualityservice.svg";



import { Box, Typography } from "@mui/material";
import BusinessCard from "@/components/ApplicationDevelopment/Card/BusinessCard";
const BusinessNeeds = () => {
  const [serv, setserv] = useState([
    {
      icon: high,
      desc: "Image Analysis software is aided by machine learning and computer analysis that provides high accuracy",
      title: "High-Precision",
    },
    {
      icon: robust,
      desc: "You can leverage IA for exclusive accessibility features to your product to prevent unauthorized access",
      title: "Robust Security",
    },
    {
      icon: analyst,
      desc: "IA allows businesses to analyze the enormous data available on the internet in form of videos and images",
      title: "Analyze audience",
    },
    {
      icon: accurate,
      desc: "Services such as sorting, grading and defect analysis through Image Analysis speed up process and ensure reliability",
      title: "Accurate Product Analysis",
    },
    {
      icon: qualityservice,
      desc: "Machine Learning and AI carry out in-depth and automated product analysis to ensure consistent & high quality",
      title: "Quality Services",
    },
  ]);
  return (
    <Box className={styles.container}>
      <Box className={styles.subContaier}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Why Does Your Business Need Image Analysis Services?
        </Typography>
        <Box className={styles.cardContainer}>
          {serv?.map((data, i) => {
            return <BusinessCard data={data} key={i} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default BusinessNeeds;
