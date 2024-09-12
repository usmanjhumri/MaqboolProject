import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const IndustriesCard = ({ data }) => {
  
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "350px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "6px solid white",
        transition: "0.5s",
        borderRadius: "10px",
        cursor: "pointer",
        boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
        "&:hover": {
          borderBottom: "6px solid red",
        },
      }}
    >
      <Box>
        <Typography sx={{fontWeight:'bold'}}>{data?.title}</Typography>
      </Box>
      <Box>
        <Image
          src={data?.logo}
          style={{ width: "100%", maxWidth: "150px", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default IndustriesCard;
