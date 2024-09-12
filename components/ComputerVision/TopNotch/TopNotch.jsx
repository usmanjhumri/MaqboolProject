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
            Top-Rated Image Analysis Company
          </Typography>
          <Typography>
            With more than 10 years in the IT industry and deep expertise in
            Machine Learning, CodeNinja is a go-to company for your next Image
            Analysis Project. We have experience in developing IA products for
            multiple industries, hence facing multiple challenges and offering
            solutions. Our 100% job success rate speaks of the wonders we
            create!
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
