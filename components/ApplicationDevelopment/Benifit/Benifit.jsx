import React from "react";
import styles from "./style.module.css";
import { Box, Typography } from "@mui/material";
import benifit from '../../../Assets/benifitimage.svg'
import Image from "next/image";
const Benifit = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.subcontainer}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Benefits of Image Analysis Development
        </Typography>
        <Image src={benifit} style={{ width: "100%", height: "auto" }} />
      </Box>
    </Box>
  );
};

export default Benifit;
