import React, { useState } from "react";
import styles from "./style.module.css";
import { Box, Typography, colors } from "@mui/material";
import Link from "next/link";
const DevelopApp = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.subcontainer}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
            Develop Your Applications with Our Experts.
          </Typography>
     
        </Box>
        <Box>
          <Link href="/contact/" className="btn btn-secondary">
            GET IN TOUCH
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default DevelopApp;
