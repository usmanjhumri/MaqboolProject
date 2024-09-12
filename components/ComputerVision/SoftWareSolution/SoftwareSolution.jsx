import React, { useState } from "react";
import styles from "./style.module.css";
import threed from '../../../Assets/solutions/3d.svg'
import automated from '../../../Assets/solutions/automated.svg'
import damage from '../../../Assets/solutions/damage.svg'
import emotion from '../../../Assets/solutions/emotion.svg'
import event from '../../../Assets/solutions/event.svg'
import facial from '../../../Assets/solutions/facial.svg'
import grading from '../../../Assets/solutions/grading.svg'
import madical from '../../../Assets/solutions/medical.svg'
import quality from '../../../Assets/solutions/quality.svg'
import { Box, Typography } from "@mui/material";
import CoreServicesCard from "@/components/ApplicationDevelopment/Card/CoreServicesCard";
const SoftWareSolution = () => {
  const [serv, setserv] = useState([
    {
      icon: damage,
      title: "Damage Assessment",
      list: [
        "Custom iOS and android app development",
        "Native and cross platform solution",
        "Second platform app development",
      ],
    },
    {
      icon: madical,
      title: "Medical Image Analysis Software",
      list: [
        "Improved functionality",
        "Native and cross platform solution",
        "Analyzing application’s architecture",
      ],
    },
    {
      icon: automated,
      title: "Automated Visual Inspection Software",
      list: [
        "Digitally transform your app",
        "Quick data transfer",
        "Integrated apps",
      ],
    },
    {
      icon: grading,
      title: "Grading and Sorting",
      list: [
        "Cloud migration",
        "Application reengineering",
        "App code refactoring",
      ],
    },
    {
      icon: emotion,
      title: "Emotion Recognition",
      list: [
        "Conducting all-inclusive testing",
        "Digital transformation-oriented testing",
        "Efficiently developed testing",
      ],
    },
    {
      icon: facial,
      title: "Facial Recognition",
      list: [
        "Outcome driven approach to automation",
        "End-to-End automation solutions",
        "Defining core automation objectives",
      ],
    },
    {
      icon: threed,
      title: "3D Reconstruction",
      list: [
        "Consultation for needs analysis and requirements elicitation",
        "Consultation for app concept finalization",
        "Consultation for app architecture",
      ],
    },
    {
      icon: event,
      title: "Event Detection",
      list: [
        "Building and deploying secure applications",
        "Quick vulnerability recognition",
        "Assessing application security",
      ],
    },
    {
      icon: quality,
      title: "Quality Control",
      list: [
        "Testing the application to ensure its feasibility",
        "Validating the application’s uniqueness",
        "Creating MVP for user’s feedback",
      ],
    },
  ]);
  return (
    <Box className={styles.container}>
      <Box className={styles.subContaier}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Image Analysis Software Solutions
        </Typography>
        <Box className={styles.cardContainer}>
          {serv?.map((data, i) => {
            return <CoreServicesCard data={data} key={i} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default SoftWareSolution;
