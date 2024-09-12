import React from "react";
import styles from "./style.module.css";
import { Box, Typography } from "@mui/material";
import theme from "Theme/theme";
import appserve from "../../../Assets/imageanalysis.svg";
import Image from "next/image";
const ApplicationServices = () => {
  return (
    <Box className={styles.container}>
      <Box
        className={styles.subcontainer}
        sx={{
          [theme.breakpoints.down("md")]: {
            flexWrap: "wrap",
          },
        }}
      >
        <Box className={styles.contentContainer}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bolder", fontSize: "48px" }}
          >
            Image Analysis Software
          </Typography>
          <Typography>
            CodeNinja provides consultancy and development of modern image
            analysis software for your business. Our customized solutions for
            diverse industries allow businesses and institutions to carry out
            effective research, analysis and diagnosis. CodeNinja’s versatile
            software is capable of detecting fundamental components in an image
            and extracting required information with powerful algorithms.
          </Typography>
         
        </Box>
        <Box className={styles.imageContainer}>
          <Image
            src={appserve}
            style={{ width: "100%", maxWidth: "450px", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ApplicationServices;
