import React, { useState } from "react";
import styles from "./style.module.css";

import { Box, Typography } from "@mui/material";
import CoreServicesCard from "../Card/CoreServicesCard";
import web from '../../../Assets/indemand/web.svg'
import mobile from '../../../Assets/indemand/mobile.svg'
import mbl from '../../../Assets/indemand/mbl.svg'
import maintain from '../../../Assets/indemand/maintain.svg'
import pwa from '../../../Assets/indemand/pwa.svg'
import saas from '../../../Assets/indemand/saas.svg'
import ar from '../../../Assets/indemand/ar.svg'
import vr from '../../../Assets/indemand/vr.svg'
import enterprise from '../../../Assets/indemand/enterprise.svg'
import InDemandServiceCard from "../Card/InDemandServiceCard";




const InDemandServices = () => {
  const [serv, setserv] = useState([
    {
      icon: web,
      desc: "Get your hands on our cutting-edge web application development solutions including responsive web designs, e-commerce functionality, highly functional web elements, and seamless user experience across devices.",
      title: "Web Application Development",
    },
    {
      icon: mobile,
      desc: "A combination of the rich in-house technical expertise, number of years of experience, and thorough understanding of the desktop operating systems architecture, for a full cycle of desktop application development services.",
      title: "Desktop Application Development",
    },
    {
      icon: mbl,
      desc: "We build mobile applications that meet the market needs and further empower your business’s brand image.",
      title: "Mobile Application Development",
    },
    {
      icon: maintain,
      desc: "Improve customer satisfaction with professional application support services.",
      title: "Application Maintenance & Support",
    },
    {
      icon: saas,
      desc: "Services ranging from designing, implementing, deploying, and maintaining are provided for SaaS applications.",
      title: "SaaS Application Development",
    },
    {
      icon: pwa,
      desc: "We build Progressive Web Applications to combine the best features of mobile and web apps to give you the freedom of all the platforms. Our talented PWA Developers transform your apps into a fast and immersive experience.",
      title: "PWA Development",
    },
    {
      icon: enterprise,
      desc: "As our services are scalable, we cater to the needs of businesses that are accustomed to their complex business processes and need a solution for their vast range of products and networks.",
      title: "Enterprise Application Development",
    },
    {
      icon: ar,
      desc: "With our AR application development service you can focus on 3D modelling and implementing complex algorithms to transform the processes",
      title: "AR Application Development",
    },
    {
      icon: vr,
      desc: "Create interactive simulations or processes with our VR application development services that focus on data visualization.",
      title: "VR Application Development",
    },
  ]);
  return (
    <Box className={styles.container}>
      <Box className={styles.subContaier}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Our Most In-Demand Application Development Services:
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

export default InDemandServices;
