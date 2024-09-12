import React, { useState } from "react";
import styles from "./styles.module.css";
import { Box, Button, Typography } from "@mui/material";
import {
  webtech,
  mobdev,
  deskapp,
  dbs,
  devops,
  cloud,
  ml,
  bd,
} from "@/utils/technologies";
import Image from "next/image";
const Technology = () => {
  const [activebutton, setactivebutton] = useState(0);
  const [activedata, setactivedata] = useState(webtech);
  const [btns, setbtns] = useState([
    "Web Development",
    "Mobile Development",
    "Desktop Applications",
    "Database",
    "DevOps",
    "Cloud Computing",
    "Machine Learning",
    "Big Data",
  ]);
  const handleButtonClick = (i) => {
    setactivebutton(i);
    if (i === 0) {
      setactivedata(webtech);
    } else if (i === 1) {
      setactivedata(mobdev);
    } else if (i === 2) {
      setactivedata(deskapp);
    } else if (i === 3) {
      setactivedata(dbs);
    } else if (i === 4) {
      setactivedata(devops);
    } else if (i === 5) {
      setactivedata(cloud);
    } else if (i === 6) {
      setactivedata(ml);
    } else if (i === 7) {
      setactivedata(bd);
    } else {
      setactivedata(webtech);
    }
  };
  return (
    <Box className={styles.container}>
      <Box className={styles.subcontainer}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Technologies We Work With
        </Typography>
        <Typography>
          Get hold of our top tech stacks that we use to develop our software to
          cater to every unique business need.
        </Typography>
        <Box className={styles.buttonContainer}>
          {btns?.map((bt, i) => {
            return (
              <Button
                onClick={() => handleButtonClick(i)}
                className={activebutton === i ? styles?.active : styles.buttons}
              >
                {bt}
              </Button>
            );
          })}
        </Box>
        <Box className={styles.contentContainer}>
          {activedata?.map((data, i) => {
            return (
              <Box key={i} className={styles.contentBox}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {data?.title}
                </Typography>
                <Box className={styles?.imageContainer}>
                  {data?.images?.map((img, idx) => {
                    return <Image src={img} className={styles.imgs} />;
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Technology;
