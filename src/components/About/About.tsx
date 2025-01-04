import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import profile from "../../assets/images/profile.jpg";
import Box from "@mui/material/Box";
import { useMediaQuery } from "react-responsive";

import "./About.scss";

const About = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <Container
      maxWidth={false}
      disableGutters
      className="About-Container"
      id="about"
    >
      <Container className="About-Content Variant">
        <Typography variant="h2" align="center" className="About-Title">
          Welcome!
        </Typography>
        <Container fixed className="About-Content">
          <img className="About-Img" src={profile} alt="profile-pic" />
          <Box className="About-Text">
            <Typography
              className="About-Copy"
              fontSize={isPhone ? "18px" : "22px"}
              gutterBottom
            >
              I'm a passionate software engineer with a proven track record of
              thriving in collaborative team environments. I'm also a lifelong
              learner who continuously seeks out new technologies and
              methodologies to stay ahead in the ever-evolving tech landscape.
            </Typography>
            <Typography
              className="About-Copy"
              fontSize={isPhone ? "18px" : "22px"}
              gutterBottom
            >
              Known for a strong work ethic, dependability, and a commitment to
              delivering high-quality solutions. Whether tackling complex
              problems or contributing to team success, I bring energy,
              curiosity, and a steadfast dedication to every project.
            </Typography>
          </Box>
        </Container>
        <Container fixed className="About-Content Variant">
          <Typography variant="h4">Stack</Typography>
          <Box component={"section"} className="About-Stack">
            <i className="About-Icon devicon-nodejs-plain-wordmark colored"></i>
            <i className="About-Icon devicon-html5-plain colored"></i>
            <i className="About-Icon devicon-sass-plain colored"></i>
            <i className="About-Icon devicon-javascript-plain colored"></i>
            <i className="About-Icon devicon-svelte-plain colored"></i>
            <i className="About-Icon devicon-postgresql-plain colored"></i>
            <i className="About-Icon devicon-typescript-plain colored"></i>
            <i className="About-Icon devicon-ruby-plain colored"></i>
            <i className="About-Icon devicon-mysql-original colored"></i>
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export default About;
