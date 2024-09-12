import React, { useState } from "react";
import styles from "./style.module.css";
import { Box, Typography } from "@mui/material";
import IndustriesCard from "../Cards/IndustriesCard";

import appro from "../../../Assets/whyus/appro.svg";
import client from "../../../Assets/whyus/client.svg";
import innovation from "../../../Assets/whyus/innovation.svg";
import profession from "../../../Assets/whyus/profession.svg";
import rapid from "../../../Assets/whyus/rapid.svg";
import satisfaction from "../../../Assets/whyus/satisfaction.svg";

import WhyUsCards from "../Cards/WhyusCards";

const WhyChooseUs = () => {
  const [indus, setindus] = useState([
    {
      logo: satisfaction,
      title: "Enhance Customer Satisfaction",
      desc: "With our best software developing practices, we are able to enhance customer experience. The multiple tests performed on the software will make it an easy-to-use product thus increasing customer satisfaction.",
    },
    {
      logo: innovation,
      title: "Innovation Technology",
      desc: "We constantly work on our Software Development team to upgrade their skills. We constantly strive to provide you with the relevant and new technology stacks.",
    },
    {
      logo: profession,
      title: "200+ Experienced QA Professionals",
      desc: "Our vast pool consists of more than 200 QA professionals who are trained in all the popular software development methodologies.",
    },
    {
      logo: rapid,
      title: "Rapid Application Delivery",
      desc: "From the time we take up your project, to the time we deliver it to you, we make your wait worthwhile. Our promise is to deliver quality along with valuing your time.",
    },
    {
      logo: client,
      title: "Client-Centric Orientation",
      desc: "Using our deep understanding of the processes and technology, we aim to offer uniquely customized solutions. Our client is our top priority therefore we make sure that our solutions are tailored to their defined requisites.",
    },
    {
      logo: appro,
      title: "360-Degree Approach",
      desc: "We offer a 360-degree approach to software development solutions as we start from ideation to delivery, and ongoing support. During the full lifecycle of software design, integration, and management our team is available 24/7.",
    },
  ]);
  return (
    <Box className={styles.container}>
      <Box className={styles.subcontainer}>
        <Box className={styles.typocontainer}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Why Choose Us
          </Typography>
          <Typography>
            With our team of highly skilled professionals who possess expertise
            in diverse Business and Technology areas we aim to prove ourselves
            to be your optimal software development company.
          </Typography>
        </Box>
        <Box className={styles.cardContainer}>
          {indus?.map((data, i) => {
            return <WhyUsCards data={data} key={i} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
