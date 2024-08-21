import { Container } from "@mui/material";
import Form from "../Fotter/Footer";

function Contact(params) {
  return (
    <div className="p-5">
      <Container maxWith="xl">
        <div className="p-5">
          <Form />
        </div>
      </Container>
    </div>
  );
}

export default Contact;
