import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const WhyUsCards = ({ data }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "380px",
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        flexDirection: "column",
        padding: "20px",
        borderLeft: "6px solid white",
        transition: "0.5s",
        borderRadius: "10px",
        cursor: "pointer",
        textAlign: "left",
        boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
        "&:hover": {
          borderLeft: "6px solid red",
        },
      }}
    >
      <Box>
        <Image
          src={data?.logo}
          style={{ width: "100%", maxWidth: "150px", height: "auto" }}
        />
      </Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "400" }}>
          {data?.title}
        </Typography>
      </Box>
      <Box>
        <Typography >
          {data?.desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default WhyUsCards;
