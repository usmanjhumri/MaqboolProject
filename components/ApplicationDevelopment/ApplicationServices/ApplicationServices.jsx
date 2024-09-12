import React from 'react'
import styles from './style.module.css'
import { Box, Typography } from '@mui/material'
import theme from 'Theme/theme';
import appserve from '../../../Assets/appserve.svg'
import Image from 'next/image';
const ApplicationServices = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.subcontainer} sx={{[theme.breakpoints.down('md')]:{
        flexWrap:'wrap'
      }}}>
        <Box className={styles.contentContainer}>
          <Typography variant="h2" sx={{ fontWeight: "bolder",fontSize:'48px' }}>
            Application Development Services
          </Typography>
          <Typography>
            As technology is on the rise, consumer habits have changed
            tremendously as well. With the main focus on building brands and
            starting new businesses, it is essential to transform the business
            regularly and continue to keep up with the ever-changing market.
            Developing applications for your business or company now is becoming
            more important than ever.{" "}
          </Typography>
          <Typography>
            CodeNinja, the high-end application development company, brings you
            impeccable application development solutions that can help you
            connect with your consumers easily and effectively. We help
            companies design and build their digital platforms enabling them to
            provide seamless user experience to their clients.
          </Typography>
        </Box>
        <Box className={styles.imageContainer}>
          <Image src={appserve} style={{width:'100%',maxWidth:'450px',height:'auto'}} />
        </Box>
      </Box>
    </Box>
  );
}

export default ApplicationServices