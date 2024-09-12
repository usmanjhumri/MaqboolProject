import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BookIcon from "@mui/icons-material/Book";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
const DrawerNav = ({ open, setOpen, softdev, tech, indus, ai }) => {
    console.log(softdev);
    console.log(tech);
  const handleClose = () => {
    setOpen(false);
  };
  const [expanded, setExpanded] = React.useState(false);
  const [child, setchild] = React.useState(false);

  const [childs, setchilds] = useState([
    "Artificial Intelligence",
    "Software Development Services",
    "Technology & Analytics",
    "Industries",
  ]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChild = (panel) => (event, isExpanded) => {
    setchild(isExpanded ? panel : false);
  };
  const accordionRoot = {
    boxShadow: "none !important", // Remove box shadow
    border: "none !important", // Remove border
  };
  return (
    <SwipeableDrawer open={open} onClose={handleClose}>
      <Box
        sx={{
          width: "80%",
          maxWidth: "350px",
          minWidth: "250px",
          padding: "100px 20px",
          display: "flex",

          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Link href={"/"}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <HomeIcon sx={{ fontSize: "35px" }} /> Home
          </Box>
        </Link>
        <Link href={"/about-1/"}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <InfoIcon sx={{ fontSize: "35px" }} /> About
          </Box>
        </Link>
        <Box>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ padding: "0px" }}
            classes={{ root: accordionRoot }}
            disableGutters
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{ padding: "0px" }}
            >
              <Link href={""}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <MiscellaneousServicesIcon sx={{ fontSize: "35px" }} />{" "}
                  Services
                </Box>
              </Link>
            </AccordionSummary>
            <AccordionDetails>
              {childs?.map((c, i) => {
                return (
                  <Accordion
                    disableGutters
                    key={i}
                    expanded={child === i}
                    onChange={handleChild(i)}
                    sx={{ padding: "0px" }}
                    classes={{ root: accordionRoot }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      sx={{ padding: "0px" }}
                    >
                      <Link href={""}>
                        <Typography>{c}</Typography>
                      </Link>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: "10px" }}>
                      {c === "Artificial Intelligence"
                        ? ai?.map((temp, i) => {
                            return (
                              <Link href={temp?.link} key={i}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                  }}
                                >
                                  {temp?.logo} {temp?.title}
                                </Box>
                              </Link>
                            );
                          })
                        : c === "Industries"
                        ? indus?.map((temp, i) => {
                            return (
                              <Link href={temp?.link} key={i}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                  }}
                                >
                                  {temp?.logo} {temp?.title}
                                </Box>
                              </Link>
                            );
                          })
                        : c === "Technology & Analytics"
                        ? tech?.map((temp, i) => {
                            return (
                              <Link href={temp?.link} key={i}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                  }}
                                >
                                  {temp?.logo} {temp?.title}
                                </Box>
                              </Link>
                            );
                          })
                        : c === "Software Development Services"
                        ? softdev?.map((temp, i) => {
                            return (
                              <Link href={temp?.link} key={i}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                  }}
                                >
                                  {temp?.logo} {temp?.title}
                                </Box>
                              </Link>
                            );
                          })
                        : null}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </AccordionDetails>
          </Accordion>
        </Box>

        <Link href={"/blogs/"}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <BookIcon sx={{ fontSize: "35px" }} /> Blogs
          </Box>
        </Link>
        <Link href={"/contact/"}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ContactPhoneIcon sx={{ fontSize: "35px" }} /> Contact
          </Box>
        </Link>
      </Box>
    </SwipeableDrawer>
  );
};

export default DrawerNav;
