import React, { useState } from "react";
import styles from "./style.module.css";

import { Box, Typography } from "@mui/material";
import cloud from "../../../Assets/architectmodal/cloud.svg";
import micro from "../../../Assets/architectmodal/micro.svg";
import reactive from "../../../Assets/architectmodal/reactive.svg";
import tiered from "../../../Assets/architectmodal/tiered.svg";
import ArchitectCard from "../Card/ArchitectCard";

const ArchitectModal = () => {
  const [serv, setserv] = useState([
    {
      icon: cloud,
      desc: "We take a modular approach to develop applications that are based on cloud-native architecture. Cloud-based architecture offers lots of benefits ranging from scalability to dynamic agile application development.",
      title: "Cloud-Native Architecture",
    },
    {
      icon: micro,
      desc: "We develop applications based on microservices architecture. This architecture consists of a collection of autonomous services and each of these services is an independent codebase.",
      title: "Microservices Architecture",
    },
    {
      icon: reactive,
      desc: "This architectural style allows multiple applications to merge together into a singular unit.",
      title: "Reactive Architecture",
    },
    {
      icon: tiered,
      desc: "We implement tiered architecture when multiple tiers or phases are involved in the application. It may be 3 or more tiers.",
      title: "Tiered Architecture",
    },
  ]);
  return (
    <Box className={styles.container}>
      <Box className={styles.subContaier}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Application Architecture Models We Work On:
        </Typography>
        <Box className={styles.cardContainer}>
          {serv?.map((data, i) => {
            return <ArchitectCard data={data} key={i} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ArchitectModal;
