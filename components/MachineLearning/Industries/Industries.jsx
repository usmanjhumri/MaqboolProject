import React, { useState } from 'react'
import styles from './style.module.css'
import { Box, Typography } from '@mui/material'
import IndustriesCard from '../Cards/IndustriesCard';

import h from '../../../Assets/industries/h.svg'
import c from "../../../Assets/industries/c.svg";
import e from "../../../Assets/industries/e.svg";
import g from "../../../Assets/industries/g.svg";
import l from "../../../Assets/industries/l.svg";
import b from "../../../Assets/industries/b.svg";
import i from "../../../Assets/industries/i.svg";
import f from "../../../Assets/industries/f.svg";
import t from "../../../Assets/industries/t.svg";


const Industries = () => {
    const [indus, setindus] = useState([
      {
        logo:h,
        title: "Healthcare",
      },
      {
        logo: c,
        title: "Construction",
      },
      {
        logo: e,
        title: "Ecommerce & Retail",
      },
      {
        logo: g,
        title: "Oil & Gas",
      },
      {
        logo: l,
        title: "Logistics & Transportation",
      },
      {
        logo: b,
        title: "Banking",
      },
      {
        logo: i,
        title: "Insurance",
      },
      {
        logo: f,
        title: "Finance",
      },
      {
        logo: t,
        title: "Telecommunication",
      },
    ]);
  return (
    <Box className={styles.container}>
      <Box className={styles.subcontainer}>
        <Box className={styles.typocontainer}>
          <Typography variant="h3" sx={{fontWeight:'bold'}}>Industries We Work In</Typography>
          <Typography>
            We focus our software development services in diverse sectors where
            we have wide-ranging experience and exclusive industry knowledge.
          </Typography>
        </Box>
        <Box className={styles.cardContainer}>
            {
                indus?.map((data,i)=>{
                    return <IndustriesCard data={data} key={i} />
                })
            }
        </Box>
      </Box>
    </Box>
  );
}

export default Industries