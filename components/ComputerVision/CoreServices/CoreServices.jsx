import React, { useState } from "react";
import styles from "./style.module.css";
import detect from "../../../Assets/appservices/detect.svg";
import recognize from "../../../Assets/appservices/recognize.svg";
import identify from "../../../Assets/appservices/identify.svg";

import { Box, Typography } from "@mui/material";
import CoreServicesCard from "@/components/ApplicationDevelopment/Card/CoreServicesCard";
const CoreServices = () => {
  const [serv, setserv] = useState([
    {
      icon: detect,
      title: "Detect Image",
      list: [
        "Analyzing image for objects",
        "Detecting individual objects, textures, and background",
        "Separating each object from the other",
      ],
    },
    {
      icon: recognize,
      title: "Recognize Image",
      list: [
        "Advanced use of machine learning",
        "Recognition and classification of objects",
        "Feature analysis based on object classes",
      ],
    },
    {
      icon: identify,
      title: "Identify Image",
      list: [
        "Identification of individual objects",
        "Classifying objects in categories",
        "Use of high performing algorithms",
      ],
    },
  ]);
  return (
    <Box className={styles.container}>
      <Box className={styles.subContaier}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Our Core Image Analysis Software Key Tasks
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

export default CoreServices;
