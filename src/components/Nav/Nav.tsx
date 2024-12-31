import { useState } from "react";
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

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkProps = {
    color: "white",
    underline: "hover" as "hover" | undefined,
    display: "flex",
    alignItems: "center",
    fontSize: 22,
  };

  const isPhone = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="Nav-Container">
      {isPhone ? (
        <>
          <MenuIcon
            sx={{ mr: 0.5 }}
            fontSize="large"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <MenuList className={`Nav-MobileMenu ${menuOpen ? "open" : ""}`}>
            <MenuItem>
              <ListItemText>Home</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>About</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>Projects</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>Contact</ListItemText>
            </MenuItem>
          </MenuList>
        </>
      ) : (
        <Breadcrumbs aria-label="breadcrumb" className="Nav-Breadcrumbs">
          <Link href="/dan-silva-portfolio" {...linkProps}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link href="/dan-silva-portfolio/about" {...linkProps}>
            <InfoIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            About
          </Link>
          <Link href="/dan-silva-portfolio/code" {...linkProps}>
            <CodeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Projects
          </Link>
          <Link href="/dan-silva-portfolio/contact" {...linkProps}>
            <MailIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Contact
          </Link>
        </Breadcrumbs>
      )}
    </div>
  );
};

export default Nav;
