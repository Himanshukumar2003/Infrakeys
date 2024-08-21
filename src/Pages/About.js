import { Container } from "@mui/material";
import Patner, { Clientele } from "../Main/Patner";

function About(params) {
  return (
    <div className="p-5">
      <Container maxWith="xl">
        <h1 className="scroll-m-20 text-4xl font-extrabold capitalize tracking-tight lg:text-5xl text-center">
          About Us
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
          Infrakeys Technologies is India's largest steel supplier, serving
          clients nationwide. What sets us apart is our commitment to providing
          you direct access to trusted vendors. This direct connection ensures
          competitive prices, enabling you to optimize your budget while
          maintaining the highest quality standards. We understand the
          importance of financial flexibility in your projects, that's why
          Infrakeys offers channel financing options to make your procurement
          process even smoother. With a wide range of steel products and a
          strong network of suppliers, we ensure timely delivery and excellent
          service, making us the preferred choice for all your steel needs.
        </p>
      </Container>
      <div className="p-5">
        <Clientele />

        <Patner />
      </div>
    </div>
  );
}

export default About;
