import React from "react";
import styles from "./style.module.css";
import { Box, Typography } from "@mui/material";
import adl from "../../../Assets/adl.svg";
import Image from "next/image";
const ADL = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.subcontainer}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Application Development Lifecycle:
        </Typography>
        <Image src={adl} style={{ height: "auto", width: "100%",maxWidth:'700px' }} />
      </Box>
    </Box>
  );
};

export default ADL;
