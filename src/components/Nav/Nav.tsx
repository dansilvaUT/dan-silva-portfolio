import { useState, useEffect } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import InfoIcon from "@mui/icons-material/Info";
import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { useMediaQuery } from "react-responsive";

import "./Nav.scss";
import { Typography } from "@mui/material";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const isPhone = useMediaQuery({ query: "(max-width: 767px)" });

  const getUnderline = (isPhone: boolean): "none" | "hover" =>
    isPhone ? "none" : "hover";

  const linkProps = {
    color: "white",
    underline: getUnderline(isPhone),
    display: "flex",
    alignItems: "center",
    fontSize: 22,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Nav-Container ${scroll ? "Scroll" : ""}`}>
      {isPhone ? (
        <>
          <MenuIcon
            sx={{ mr: 0.5 }}
            fontSize="large"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <MenuList className={`Nav-MobileMenu ${menuOpen ? "open" : ""}`}>
            <Link
              href="#home"
              {...linkProps}
              onClick={() => setMenuOpen(false)}
            >
              <MenuItem>
                <ListItemText>Home</ListItemText>
              </MenuItem>
            </Link>
            <Link
              href="#about"
              {...linkProps}
              onClick={() => setMenuOpen(false)}
            >
              <MenuItem>
                <ListItemText>About</ListItemText>
              </MenuItem>
            </Link>
            <Link
              href="#code"
              {...linkProps}
              onClick={() => setMenuOpen(false)}
            >
              <MenuItem>
                <ListItemText>Projects</ListItemText>
              </MenuItem>
            </Link>
            <Link
              href="#contact"
              {...linkProps}
              onClick={() => setMenuOpen(false)}
            >
              <MenuItem>
                <ListItemText>Contact</ListItemText>
              </MenuItem>
            </Link>
          </MenuList>
        </>
      ) : (
        <>
          <Link href="#home" {...linkProps} className="Nav-Link">
            <Typography variant="h5" align="center" className="Nav-Title">
              Dan Silva Portfolio
            </Typography>
          </Link>
          <Breadcrumbs aria-label="breadcrumb" className="Nav-Breadcrumbs">
            <Link href="#home" {...linkProps} className="Nav-Link">
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Link href="#about" {...linkProps} className="Nav-Link">
              <InfoIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              About
            </Link>
            <Link href="#code" {...linkProps} className="Nav-Link">
              <CodeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Projects
            </Link>
            <Link href="#contact" {...linkProps} className="Nav-Link">
              <MailIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Contact
            </Link>
          </Breadcrumbs>
        </>
      )}
    </div>
  );
};

export default Nav;
