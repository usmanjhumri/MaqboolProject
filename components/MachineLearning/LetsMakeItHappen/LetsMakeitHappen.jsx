import React, { useState } from "react";
import styles from "./style.module.css";
import {

  Box,
  Typography,
  colors,
} from "@mui/material";
import Link from "next/link";
const LetsMakeitHappen = () => {
 

  return (
    <Box className={styles.container}>
      <Box className={styles.subcontainer}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
            Let's Make it Happen
          </Typography>
          <Typography>
            Send us a message so that we can put our thinking caps on,{" "}
            <Typography component={"span"} color={"primary"}>
              together.
            </Typography>
          </Typography>
        </Box>
        <Box>
          <Link href="/contact/" className="btn btn-secondary">
            GET STARTED NOW
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LetsMakeitHappen;
