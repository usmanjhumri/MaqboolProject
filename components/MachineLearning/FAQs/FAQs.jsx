import React, { useState } from "react";
import styles from "./style.module.css";
import {
    Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const FAQs = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [questions, setquestions] = useState([
    {
      title:
        "How long will it take your company to complete a software development project?",
      desc: "Essentially, the timeline cannot be defined instantly. Various factors influence the calculation of overall deadlines. From product analysis to the creation of prototypes, from designing UX and UI to deployment and integration, all these processes will take time.",
    },
    {
      title:
        "Do you provide support after completing the software development project?",
      desc: "Yes, at Code Ninja we deliver continuous support even after your project is completed. Our support team is available 24/7 to cater to your issues post-project delivery.",
    },
    {
      title: "What kind of technologies do you use to develop software?",
      desc: "Our technologies range from NET development to blockchain; we also work with C#, ASP.NET Core/MVC, Xamarin, Angular/Angular.JS, React/React.JS, Node.JS, Java, C++, React, AWS, Azure, Ruby, Python and WPF. We also strive to incorporate the newest technologies to deliver unmatched software development services.",
    },
    {
      title: "Do you sign an NDA to ensure my data security?",
      desc: "Yes, we create SLAs and NDAs before even starting a job. As we are most concerned for your security, we implement strict privacy protocols.",
    },
    {
      title:
        "What makes Code Ninja different than other software development companies?",
      desc: "No matter what sort of software development or solution you are looking for, we have highly skilled resources working on the latest technology stacks. ‘Transparency and adding value’ – our motto.",
    },
    {
      title: "How do you guarantee product quality?",
      desc: "We do not only test the final product, but we also ensure quality at every milestone. We encourage our partners to be fully involved in the process to incorporate your feedback at every step.",
    },
    {
      title: "What do I need to know before contacting you for a project?",
      desc: "It is essential for you to identify the key problem areas in your existing system or to list your business requirements. Once you are able to identify these, only then will you know whether you need new software or you want your current system to be upgraded. If you are still unsure, feel free to reach out to our team for a consultation.",
    },
  ]);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.subcontainer}>
        <Box className={styles.typocontainer}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Frequently Asked Questions
          </Typography>
          <Typography>
            Most Frequently Asked Question from our valuable customers
          </Typography>
        </Box>
        <Box className={styles.cardContainer}>
          {questions?.map((ques, i) => {
            return (
              <Accordion
                key={i}
                expanded={expanded === i}
                onChange={handleChange(i)}
                sx={{textAlign:'left'}}
                disableGutters
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "100%", flexShrink: 0 ,fontWeight:'600'}}>
                   {ques?.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                   {ques?.desc}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQs;
