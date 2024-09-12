import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./style.module.css";
import theme from "Theme/theme";
import predevelop from "../../../../Assets/predevelop.svg";
import Image from "next/image";
const Banner1 = () => {
  return (
    <Box
      className={styles.container}
      sx={{
        [theme.breakpoints.down("md")]: {
          flexWrap: "wrap",
        },
      }}
    >
      <Box className={styles.contentContainer}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Pre-Development:
        </Typography>
        <Typography>
          In the first phase of application development; Pre-Design, we tend to
          take the initial brief. During this phase, it is essential to work out
          all the requirements and to understand where they arise. It is also
          the right time to ask the right questions such as which technologies
          are to be used, who is the target audience, on which platform the app
          is to be built, and so on. All stakeholders should be involved in this
          phase to ensure a seamless application development process.
        </Typography>
      </Box>
      <Box className={styles.imageContainer}>
        <Image
          src={predevelop}
          style={{ width: "100%", maxWidth: "350px", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default Banner1;
