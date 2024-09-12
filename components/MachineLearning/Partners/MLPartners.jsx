import React from "react";
import styles from "./Partners.module.css";
import { Box, Typography } from "@mui/material";
import p1 from "../../../Assets/Partners/p1.svg";
import p2 from "../../../Assets/Partners/p2.webp";
import p3 from "../../../Assets/Partners/p3.webp";
import p4 from "../../../Assets/Partners/p4.svg";
import p5 from "../../../Assets/Partners/p5.svg";
import p6 from "../../../Assets/Partners/p6.svg";
import Image from "next/image";
import theme from "Theme/theme";
const MLPartners = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.subcontainer}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Partnerships and Recognitions
        </Typography>
        <Typography sx={{ width: "100%", maxWidth: "1000px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio
        </Typography>
        <Box
          className={styles.imagecontainer}
          sx={{
            [theme.breakpoints.down("lg")]: {
              flexWrap: "wrap",
            },
          }}
        >
          <Image
            src={p1}
            height={100}
            width={200}
            style={{ width: "100%",maxWidth:'150px', height: "100%" }}
          />
          <Image
            src={p2}
            height={100}
            width={200}
            style={{ width: "100%",maxWidth:'150px', height: "100%" }}
          />
          <Image
            src={p3}
            height={100}
            width={200}
            style={{ width: "100%",maxWidth:'150px', height: "100%" }}
          />
          <Image
            src={p4}
            height={100}
            width={200}
            style={{ width: "100%",maxWidth:'150px', height: "100%" }}
          />
          <Image
            src={p5}
            height={100}
            width={200}
            style={{ width: "100%",maxWidth:'150px', height: "100%" }}
          />
          <Image
            src={p6}
            height={100}
            width={200}
            style={{ width: "100%",maxWidth:'150px', height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MLPartners;
