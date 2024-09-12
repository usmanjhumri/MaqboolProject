import React, { useState } from "react";
import styles from "./style.module.css";
import { Box, Typography, colors } from "@mui/material";
import topnotch from "../../../Assets/topnotch.svg";
import Image from "next/image";
import theme from "Theme/theme";
const TopNotch = () => {
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
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Top-Notch Application Development Company:
          </Typography>
          <Typography>
            Code Ninja is your single-stop application development partner that
            has successfully implemented a diverse range of application
            development services across the globe. We stand matchless in the
            market with our efficient technical expert team, international work
            standards, flexible hiring models, and coherent project management
            practices.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
          <Image
            src={topnotch}
            style={{ width: "100%", maxWidth: "450px", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TopNotch;
