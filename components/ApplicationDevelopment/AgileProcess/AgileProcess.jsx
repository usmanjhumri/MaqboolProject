import React from "react";
import styles from "./style.module.css";
import { Box, Typography } from "@mui/material";
import Banner1 from "./Banners/Banner1";
import Banner2 from "./Banners/Banner2";
import Banner3 from "./Banners/Banner3";

const AgileProcess = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.subcontainer}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Our Agile Application Development Process:
        </Typography>
        <Box className={styles.bannerContainer}>
          <Banner1 />
          <Banner2 />
          <Banner3 />
        </Box>
      </Box>
    </Box>
  );
};

export default AgileProcess;
