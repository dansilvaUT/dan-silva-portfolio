import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Projects.scss";

const Projects = () => {
  const handleClick = () => {
    window.open(
      "https://github.com/dansilvaUT",
      "_blank",
      "noopener,noreferrer"
    );
  };
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
            I use GitHub to keep track of my projects repositories.
          </Typography>
          <i className="Projects-Icon devicon-github-original-wordmark"></i>
          <Button color="secondary" onClick={handleClick}>
            View GitHub
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default Projects;
