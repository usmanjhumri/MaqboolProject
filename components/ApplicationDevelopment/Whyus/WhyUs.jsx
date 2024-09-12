import React, { useState } from "react";
import styles from "./style.module.css";

import { Box, Typography } from "@mui/material";
import CoreServicesCard from "../Card/CoreServicesCard";
import web from "../../../Assets/indemand/web.svg";
import mobile from "../../../Assets/indemand/mobile.svg";
import mbl from "../../../Assets/indemand/mbl.svg";
import maintain from "../../../Assets/indemand/maintain.svg";
import pwa from "../../../Assets/indemand/pwa.svg";
import saas from "../../../Assets/indemand/saas.svg";
import ar from "../../../Assets/indemand/ar.svg";
import vr from "../../../Assets/indemand/vr.svg";
import enterprise from "../../../Assets/indemand/enterprise.svg";
import InDemandServiceCard from "../Card/InDemandServiceCard";

const WhyUs = () => {
  const [serv, setserv] = useState([
    {
      icon: web,
      desc: "We don’t just say it but we have proved that we are your best application development partners as we have built applications for multiple industries ranging from healthcare to education and many more.",
      title: "Applications Built for Diverse Industries",
    },
    {
      icon: mobile,
      desc: "Code Ninja has built trust by providing application development services to a number of happy clients",
      title: "Globally Satisfied Clients",
    },
    {
      icon: mbl,
      desc: "We are a proud team of application developers from across the globe who are experienced in providing you with the best application development services. ",
      title: "Extensive Team of Application Developers",
    },
    {
      icon: maintain,
      desc: "We choose our developers very meticulously so don’t you worry about our talent. You only get access to the top of the talent pool for your development requirements.",
      title: "Technical Expert Team",
    },
    {
      icon: saas,
      desc: "Code Ninja can help you shape up your idea or simply provide consultation for your pre-existing apps. We have solutions to your every problem.",
      title: "Effective Solutions",
    },
    {
      icon: pwa,
      desc: "From the time we take up your project, to the time we deliver it to you, we make your wait worthwhile. Our promise is to deliver quality along with valuing your time.",
      title: "Rapid Application Delivery",
    },
  ]);
  return (
    <Box className={styles.container}>
      <Box className={styles.subContaier}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Talk to an Industry Expert Why CodeNinja As Your Best Application
          Development Partner?
        </Typography>
        <Box className={styles.cardContainer}>
          {serv?.map((data, i) => {
            return <InDemandServiceCard data={data} key={i} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default WhyUs;
