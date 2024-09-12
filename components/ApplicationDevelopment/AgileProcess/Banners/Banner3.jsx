import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./style.module.css";
import theme from "Theme/theme";
import postdev from "../../../../Assets/postdev.svg";
import Image from "next/image";
const Banner3 = () => {
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
          Post-Development:
        </Typography>
        <Typography>
          After an application is live, the post-development phase starts. It
          can last for a very long time depending on the contract or initial
          deal. Support and maintenance are the two focal points of this phase.
          From finding bugs to fixing issues, from unexpected errors to failed
          updates, all these issues are addressed post-development. It is
          important to ensure that a dedicated resource is allocated for the
          post-development services.
        </Typography>
      </Box>
      <Box className={styles.imageContainer}>
        <Image
          src={postdev}
          style={{ width: "100%", maxWidth: "350px", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default Banner3;
