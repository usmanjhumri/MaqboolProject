import React from "react";
import styles from "./style.module.css";
import { Box, FormControl, TextField, Typography } from "@mui/material";
import theme from "Theme/theme";
import Link from "next/link";

const AppDiscussForm = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.subcontainer}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Dynamic IA Services
        </Typography>
        <Typography sx={{ width: "100%" }}>
          We develop a range of Image Analysis software using both the
          rule-based approach for small projects and machine learning for large
          data requirements. Our software services incorporate the latest
          frameworks and automated processes that allow efficient execution for
          obtaining desired results.
        </Typography>
        <Box className={styles.formSection}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Let's Discuss Your Project
          </Typography>
          <Typography>
            Submit a request and we ‘ll get in touch within a day
          </Typography>
          <Box
            className={styles.formBox}
            sx={{
              [theme.breakpoints.down("md")]: {
                flexWrap: "wrap",
              },
            }}
          >
            <Box className={styles.fieldContainer}>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  name="name"
                  placeholder="Name"
                  label={"Name"}
                  size="small"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  name="email"
                  placeholder="Email"
                  label={"Email"}
                  size="small"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  name="phone"
                  placeholder="Phone Number"
                  label={"Phone Number"}
                  size="small"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  name="company"
                  placeholder="Company"
                  label={"Company"}
                  size="small"
                />
              </FormControl>
            </Box>
            <Box className={styles.textAreaContainer}>
              <TextField
                multiline
                name="desc"
                placeholder="Please Describe a Little"
                label={"Description"}
                fullWidth
                minRows={8}
              />
            </Box>
          </Box>
          <Box>
            <Typography>
              By submitting this form you agree to code Ninja{" "}
              <Typography
                component={"span"}
                color={"primary"}
                sx={{ cursor: "pointer" }}
              >
                Terms of use
              </Typography>{" "}
              and{" "}
              <Typography
                component={"span"}
                color={"primary"}
                sx={{ cursor: "pointer" }}
              >
                Privacy policy.
              </Typography>
            </Typography>
          </Box>
          <Box>
            <Link
              href="/contact/"
              className="btn btn-secondary"
              style={{ padding: "10px 100px" }}
            >
              SEND
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppDiscussForm;
