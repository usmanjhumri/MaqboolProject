import React, { useState } from "react";
import styles from "./style.module.css";

import { Box, Typography } from "@mui/material";
import modern from "../../../Assets/whyus/modern.svg";
import expert from "../../../Assets/whyus/expert.svg";
import end from "../../../Assets/whyus/end.svg";
import high from "../../../Assets/whyus/high.svg";
import robust from "../../../Assets/whyus/robust.svg";
import cost from "../../../Assets/whyus/cost.svg";
import post from "../../../Assets/whyus/post.svg";
import diverse from "../../../Assets/whyus/diverse.svg";

import InDemandServiceCard from "@/components/ApplicationDevelopment/Card/InDemandServiceCard";

const WhyUs = () => {
  const [serv, setserv] = useState([
    {
      icon: expert,
      desc: "We don’t just say it but we have proved that we are your best application development partners as we have built applications for multiple industries ranging from healthcare to education and many more.",
      title: "Expertise in Machine Learning",
    },
    {
      icon: diverse,
      desc: "Code Ninja has built trust by providing application development services to a number of happy clients",
      title: "Diverse Industry Experience",
    },
    {
      icon: end,
      desc: "We are a proud team of application developers from across the globe who are experienced in providing you with the best application development services. ",
      title: "End-to-End IA Services Provider",
    },
    {
      icon: robust,
      desc: "We choose our developers very meticulously so don’t you worry about our talent. You only get access to the top of the talent pool for your development requirements.",
      title: "Use of Robust Algorithms",
    },
    {
      icon: high,
      desc: "Code Ninja can help you shape up your idea or simply provide consultation for your pre-existing apps. We have solutions to your every problem.",
      title: "High Success Rate",
    },
    {
      icon: cost,
      desc: "From the time we take up your project, to the time we deliver it to you, we make your wait worthwhile. Our promise is to deliver quality along with valuing your time.",
      title: "Cost-effective Solutions",
    },
    {
      icon: post,
      desc: "From the time we take up your project, to the time we deliver it to you, we make your wait worthwhile. Our promise is to deliver quality along with valuing your time.",
      title: "Post-deployment services",
    },
    {
      icon: modern,
      desc: "From the time we take up your project, to the time we deliver it to you, we make your wait worthwhile. Our promise is to deliver quality along with valuing your time.",
      title: "Modern Practices",
    },
  ]);
  return (
    <Box className={styles.container}>
      <Box className={styles.subContaier}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Why CodeNinja As Your Best Image Analysis Development Partner?
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
