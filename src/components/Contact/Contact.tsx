import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Contact.scss";

const Contact = () => {
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
      <form method="POST" className="Contact-Form">
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
      </form>
    </Container>
  );
};

export default Contact;
