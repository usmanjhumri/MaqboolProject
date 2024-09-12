import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./style.module.css";
import theme from "Theme/theme";
import devstage from "../../../../Assets/devstage.svg";
import Image from "next/image";
const Banner2 = () => {
  return (
    <Box
      className={styles.container}
      sx={{
        [theme.breakpoints.down("md")]: {
          flexWrap: "wrap",
        },
      }}
    >
      <Box className={styles.imageContainer}>
        <Image
          src={devstage}
          style={{ width: "100%", maxWidth: "350px", height: "auto" }}
        />
      </Box>
      <Box className={styles.contentContainer}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Development Stage:
        </Typography>
        <Typography>
          Development is the longest and the most important phase of the
          process. During development, the design of the application is
          finalized and the developers start working on it. Prototypes are
          built, and tests are done to find out how the app works. It is first
          shown to the clients to get their approval and then it is finalized to
          be sent for launch.
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner2;
