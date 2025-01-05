import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";
import { createLink } from "../../utils/app.utils";
import "./Projects.scss";

const Projects = () => {
  const CustomButton = styled(Button)({
    color: "white",
    borderColor: "white",
  });

  return (
    <Container
      maxWidth={false}
      disableGutters
      className="Projects-Container"
      id="code"
    >
      <Typography variant="h2" align="center" className="Projects-Title">
        Projects
      </Typography>
      <Box className="Projects-Content">
        <div className="Projects-Card">
          <Typography>
            Checkout my GitHub profile to see what I'm working on and what
            languages, I use the most.
          </Typography>
          <i className="Projects-Icon devicon-github-original-wordmark"></i>
          <CustomButton
            color="secondary"
            onClick={() => createLink("https://github.com/dansilvaUT")}
          >
            View GitHub
          </CustomButton>
        </div>
      </Box>
    </Container>
  );
};

export default Projects;
