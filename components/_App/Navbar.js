import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import navstyle from "../../styles/nav.module.css";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import OilBarrelIcon from "@mui/icons-material/OilBarrel";
import ConstructionIcon from "@mui/icons-material/Construction";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SavingsIcon from "@mui/icons-material/Savings";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import DataObjectIcon from "@mui/icons-material/DataObject";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import ApiIcon from "@mui/icons-material/Api";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import BarChartIcon from "@mui/icons-material/BarChart";
import SchemaIcon from "@mui/icons-material/Schema";
import LanguageIcon from "@mui/icons-material/Language";
import TerminalIcon from "@mui/icons-material/Terminal";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import ChecklistIcon from "@mui/icons-material/Checklist";
import DrawerNav from "../Drawer/Drawer";
const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const cart = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(true);
  const [open, setOpen] = useState(false);
  const toggleNavbar = (e) => {
    console.log('sdfd')
    // e.stopPropagation();
    // setMenu(!menu);
    setOpen(!open);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  const [ai] = useState([
    {
      link: "/computer-vision/",
      logo: <ImportantDevicesIcon />,
      title: "Computer Vision",
    },
    {
      link: "",
      logo: <SettingsEthernetIcon />,
      title: "NLP/OCR",
    },
    {
      link: "",
      logo: <BarChartIcon />,
      title: "Data Analytics",
    },
    {
      link: "",
      logo: <SchemaIcon />,
      title: "Blockchain",
    },
  ]);

  const [indus] = useState([
    {
      link: "",
      logo: <VideoCameraFrontIcon />,
      title: "Security And Surveillance",
    },
    {
      link: "",
      logo: <AddShoppingCartIcon />,
      title: "Ecommerce And Retail ",
    },
    {
      link: "",
      logo: <OilBarrelIcon />,
      title: "Oil and Gas",
    },
    {
      link: "",
      logo: <ConstructionIcon />,
      title: "Construction",
    },
    {
      link: "",
      logo: <AccountBalanceIcon />,
      title: "Banking ",
    },
    {
      link: "",
      logo: <SavingsIcon />,
      title: "Finance",
    },
    {
      link: "",
      logo: <Diversity1Icon />,
      title: "Healthcare",
    },
    {
      link: "",
      logo: <LocalShippingIcon />,
      title: "Logistics And Transportation",
    },
  ]);

  const [tech] = useState([
    {
      link: "",
      logo: <DevicesOtherIcon />,
      title: "Technologies",
    },
    {
      link: "",
      logo: <PendingActionsIcon />,
      title: "Data Engineering",
    },
    {
      link: "",
      logo: <DataObjectIcon />,
      title: "Data Science ",
    },
    {
      link: "",
      logo: <PsychologyIcon />,
      title: "Business Intelligence",
    },
    {
      link: "",
      logo: <AddBusinessIcon />,
      title: "Ecommerce Applications ",
    },
    {
      link: "",
      logo: <ApiIcon />,
      title: "Infrastructure and DevOps",
    },
  ]);

  const [softdev] = useState([
    {
      link: "/application-development/",
      logo: <TerminalIcon />,
      title: "Software Development ",
    },
    {
      link: "/application-development/",
      logo: <LanguageIcon />,
      title: "Web Development",
    },
    {
      link: "/application-development/",
      logo: <MobileFriendlyIcon />,
      title: "Mobile Development ",
    },
    {
      link: "",
      logo: <ImportantDevicesIcon />,
      title: "UI/UX Design ",
    },
    {
      link: "",
      logo: <ChecklistIcon />,
      title: "QA & Testing ",
    },
  ]);

  return (
    <>
      <header id="header" className="headroom">
        <div className="startp-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </Link>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleNavbar();
                }}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link
                      href="/"
                      // onClick={toggleNavbar}
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      Home
                      {/* <Icon.ChevronDown /> */}
                    </Link>

                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/" && "active"
                          }`}
                        >
                          IT Startup
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/it-startup-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/it-startup-2/" && "active"
                          }`}
                        >
                          IT Startup Two
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/iot/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/iot/" && "active"
                          }`}
                        >
                          IOT
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/hosting/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/hosting/" && "active"
                          }`}
                        >
                          Hosting
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/machine-learning/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/machine-learning/" && "active"
                          }`}
                        >
                          Machine Learning
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/machine-learning-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/machine-learning-2/" && "active"
                          }`}
                        >
                          Machine Learning 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/bigdata-analytics/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/bigdata-analytics/" && "active"
                          }`}
                        >
                          Bigdata Analytics
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/digital-agency/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/digital-agency/" && "active"
                          }`}
                        >
                          Digital Agency
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/digital-agency-portfolio/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/digital-agency-portfolio/" &&
                            "active"
                          }`}
                        >
                          Digital Agency Portfolio
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/pc-repair/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/pc-repair/" && "active"
                          }`}
                        >
                          PC Repair
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about-1/"
                      // onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/about-1/" && "active"
                      }`}
                    >
                      About
                      {/* <Icon.ChevronDown /> */}
                    </Link>
                    {/* 
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/about-1/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/about-1/" && "active"
                          }`}
                        >
                          About Style 1
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/about-2/" && "active"
                          }`}
                        >
                          About Style 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about-3/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/about-3/" && "active"
                          }`}
                        >
                          About Style 3
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  <li className={navstyle.activehov}>
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                      style={{ color: "#5d7e96 !important" }}
                    >
                      <Typography
                        variant=""
                        sx={{
                          color: "#5d7e96 !important",
                          "&:hover": {
                            color: (theme) => theme.palette.primary.main,
                          },
                        }}
                      >
                        Services <Icon.ChevronDown />
                      </Typography>
                    </Link>
                    <Box className={navstyle.contained}>
                      <Box
                        sx={{
                          width: "100%",
                          padding: "20px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          color={"secondary"}
                          sx={{ fontWeight: "bold" }}
                        >
                          Artificial Intelligence
                        </Typography>
                        <Box
                          sx={{
                            margin: "20px 0px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          {ai?.map((ind, i) => {
                            return (
                              <Link href={ind?.link} key={i}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    flexWrap: "wrap",
                                  }}
                                >
                                  {ind?.logo}{" "}
                                  <Typography
                                    sx={{ fontWeight: "bold" }}
                                    className="nav-link"
                                  >
                                    {ind?.title}
                                  </Typography>
                                </Box>
                              </Link>
                            );
                          })}
                        </Box>
                        <Typography
                          variant="h6"
                          color={"secondary"}
                          sx={{ fontWeight: "bold" }}
                        >
                          Software Development Services
                        </Typography>
                        <Box
                          sx={{
                            margin: "20px 0px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          {softdev?.map((ind, i) => {
                            return (
                              <Link href={ind?.link} key={i}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    flexWrap: "wrap",
                                  }}
                                >
                                  {ind?.logo}{" "}
                                  <Typography
                                    sx={{ fontWeight: "bold" }}
                                    className="nav-link"
                                  >
                                    {ind?.title}
                                  </Typography>
                                </Box>
                              </Link>
                            );
                          })}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                          padding: "20px",
                        }}
                      >
                        {" "}
                        <Typography
                          variant="h6"
                          color={"secondary"}
                          sx={{ fontWeight: "bold" }}
                        >
                          Technology & Analytics
                        </Typography>
                        <Box
                          sx={{
                            margin: "20px 0px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          {tech?.map((ind, i) => {
                            return (
                              <Link href={ind?.link} key={i}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    flexWrap: "wrap",
                                  }}
                                >
                                  {ind?.logo}{" "}
                                  <Typography
                                    sx={{ fontWeight: "bold" }}
                                    className="nav-link"
                                  >
                                    {ind?.title}
                                  </Typography>
                                </Box>
                              </Link>
                            );
                          })}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                          padding: "20px",
                        }}
                      >
                        {" "}
                        <Typography
                          variant="h6"
                          color={"secondary"}
                          sx={{ fontWeight: "bold" }}
                        >
                          Industries
                        </Typography>
                        <Box
                          sx={{
                            margin: "20px 0px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          {indus?.map((ind, i) => {
                            return (
                              <Link href={ind?.link} key={i}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    flexWrap: "wrap",
                                  }}
                                >
                                  {ind?.logo}{" "}
                                  <Typography
                                    sx={{ fontWeight: "bold" }}
                                    className="nav-link"
                                  >
                                    {ind?.title}
                                  </Typography>
                                </Box>
                              </Link>
                            );
                          })}
                        </Box>
                      </Box>
                    </Box>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      href="/shop/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/shop/" && "active"
                      }`}
                    >
                      Shop <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/shop/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/shop/" && "active"
                          }`}
                        >
                          Shop
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/checkout/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/checkout/" && "active"
                          }`}
                        >
                          Checkout
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className="nav-item">
                    <Link
                      href="/blogs/"
                      // onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/blogs/" && "active"
                      }`}
                    >
                      Blog
                    </Link>

                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blog-1/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-1/" && "active"
                          }`}
                        >
                          Blog Grid
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-2/" && "active"
                          }`}
                        >
                          Blog Right Sidebar
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-3/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-3/" && "active"
                          }`}
                        >
                          Blog Grid 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-4/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-4/" && "active"
                          }`}
                        >
                          Blog Right Sidebar 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-5/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-5/" && "active"
                          }`}
                        >
                          Blog Grid 3
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-6/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-6/" && "active"
                          }`}
                        >
                          Blog Right Sidebar 3
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-details/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-details/" && "active"
                          }`}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      // onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others option */}
              {/* <div className="others-option">
                <Link href="/cart/" className="cart-wrapper-btn">
                  <Icon.ShoppingCart />
                  <span>{cart.length}</span>
                </Link>

                <Link href="/contact/" className="btn btn-light">
                  Support
                </Link>

                <Link href="/login/" className="btn btn-primary">
                  Login
                </Link>
              </div> */}
              {open ? (
                <DrawerNav
                  open={open}
                  setOpen={setOpen}
                  softdev={softdev}
                  tech={tech}
                  indus={indus}
                  ai={ai}
                />
              ) : null}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
