import React, { useState } from "react";
import styles from "./style.module.css";
import consult from "../../../Assets/appservices/consult.svg";
import custom from "../../../Assets/appservices/custom.svg";
import integration from "../../../Assets/appservices/integration.svg";
import manage from "../../../Assets/appservices/manage.svg";
import migration from "../../../Assets/appservices/migration.svg";
import modern from "../../../Assets/appservices/modern.svg";
import mvc from "../../../Assets/appservices/mvc.svg";
import security from "../../../Assets/appservices/security.svg";
import testing from "../../../Assets/appservices/testing.svg";
import { Box, Typography } from "@mui/material";
import CoreServicesCard from "../Card/CoreServicesCard";
const CoreServices = () => {
  const [serv, setserv] = useState([
    {
      icon: custom,
      title: "Custom Application Development",
      list: [
        "Custom iOS and android app development",
        "Native and cross platform solution",
        "Second platform app development",
      ],
    },
    {
      icon: migration,
      title: "Application Migration",
      list: [
        "Improved functionality",
        "Native and cross platform solution",
        "Analyzing application’s architecture",
      ],
    },
    {
      icon: integration,
      title: "Application Integration",
      list: [
        "Digitally transform your app",
        "Quick data transfer",
        "Integrated apps",
      ],
    },
    {
      icon: modern,
      title: "Application Modernization",
      list: [
        "Cloud migration",
        "Application reengineering",
        "App code refactoring",
      ],
    },
    {
      icon: testing,
      title: "Application Testing",
      list: [
        "Conducting all-inclusive testing",
        "Digital transformation-oriented testing",
        "Efficiently developed testing",
      ],
    },
    {
      icon: manage,
      title: "Application Management",
      list: [
        "Outcome driven approach to automation",
        "End-to-End automation solutions",
        "Defining core automation objectives",
      ],
    },
    {
      icon: consult,
      title: "Application Development Consulting",
      list: [
        "Consultation for needs analysis and requirements elicitation",
        "Consultation for app concept finalization",
        "Consultation for app architecture",
      ],
    },
    {
      icon: security,
      title: "Custom Application Development",
      list: [
        "Building and deploying secure applications",
        "Quick vulnerability recognition",
        "Assessing application security",
      ],
    },
    {
      icon: mvc,
      title: "Custom Application Development",
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
          Our Core Application Development Services:
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
