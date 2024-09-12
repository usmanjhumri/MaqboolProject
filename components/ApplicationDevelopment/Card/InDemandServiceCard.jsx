import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import SquareIcon from "@mui/icons-material/Square";
const InDemandServiceCard = ({ data }) => {
  console.log(data);
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "380px",
        padding: "20px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        minHeight: "300px",
        borderRadius: "10px",
      }}
    >
      <Image src={data?.icon} style={{ width: "60px", height: "auto" }} />
      <Typography variant="h5" sx={{ fontWeight: "600" }}>
        {data?.title}
      </Typography>
      <Box>
        <Typography>{data?.desc}</Typography>
      </Box>
    </Box>
  );
};

export default InDemandServiceCard;
