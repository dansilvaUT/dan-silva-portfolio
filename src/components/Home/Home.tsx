import Nav from "../Nav/Nav";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { HomeHeadingText } from "../helpers/CopyHelpers";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./Home.scss";

const Home = () => {
  const matches = useMediaQuery("(max-width:767px)");

  return (
    <Container maxWidth={false} disableGutters className="Home-Container">
      <Nav />
      <Container fixed className="Home-Content">
        <Typography
          variant="h2"
          align="center"
          className="Home-Title"
          fontSize={matches ? "h4.fontSize" : "h2.fontSize"}
        >
          Dan Silva | Software Engineer
        </Typography>
        <HomeHeadingText />
        <Button variant="outlined" className="Home-Btn" size="large">
          Hire Me
        </Button>
      </Container>
    </Container>
  );
};

export default Home;
