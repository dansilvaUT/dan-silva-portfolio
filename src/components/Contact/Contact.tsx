import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
/* Commenting out for now until nodemailer is set up. */
// import TextField from "@mui/material/TextField";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { createLink } from "../../utils/app.utils";
import "./Contact.scss";

const Contact = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    fontSize: "18px",
    textAlign: "center",
    boxShadow: "none",
    transition: ".5",
    color: "#fff",
    cursor: "pointer",
    ...theme.applyStyles("light", {
      backgroundColor: "#006daa",
    }),
  }));

  return (
    <Container
      maxWidth={false}
      disableGutters
      className="Contact-Container"
      id="contact"
    >
      <Typography variant="h2" align="center">
        Let's Connect!
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item
          className="Contact-Item"
          onClick={() => createLink("https://www.linkedin.com/in/danmsilva/")}
        >
          <i className="Contact-Icon devicon-linkedin-plain"></i>
        </Item>
        <Item className="Contact-Item">
          <AlternateEmailIcon className="Contact-MIcon" fontSize="large" />
          dan13silv@gmail.com
        </Item>
        <Item className="Contact-Item">
          <PhoneIphoneIcon className="Contact-MIcon" fontSize="large" />
          801-577-3656
        </Item>
      </Stack>
      {/* Commenting out for now until nodemailer is set up. */}
      {/* <form method="POST" className="Contact-Form">
        <Box className="Contact-InputBox">
          <TextField
            color="info"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: <AccountCircleIcon />,
              },
            }}
            className="Contact-Input"
          />
          <TextField
            color="info"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: <AlternateEmailIcon />,
              },
            }}
            className="Contact-Input"
          />
        </Box>
        <TextField
          color="info"
          id="outlined-basic"
          label="Message"
          variant="outlined"
          multiline
          rows={10}
          className="Contact-Input"
        />
        <Button variant="outlined" color="success" className="Contact-Btn">
          Submit
        </Button>
      </form> */}
    </Container>
  );
};

export default Contact;
