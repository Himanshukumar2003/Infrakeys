import { Container, Grid } from "@mui/material";

const Parthnes = () => {
  const img = [
    {
      srcTwo:
        "https://www.infrakeys.com/_next/image?url=%2Fpartners%2Fsurya.jpg&w=640&q=75",
    },
    {
      srcTwo:
        "https://www.infrakeys.com/_next/image?url=%2Fpartners%2Fsrb.png&w=640&q=75",
    },
    {
      srcTwo:
        "https://www.infrakeys.com/_next/image?url=%2Fpartners%2Fsail.png&w=640&q=75",
    },
    {
      srcTwo:
        "https://www.infrakeys.com/_next/image?url=%2Fpartners%2Frathi.png&w=640&q=75",
    },
    {
      srcTwo:
        "https://www.infrakeys.com/_next/image?url=%2Fpartners%2Fjsw-neo.jpeg&w=640&q=75",
    },
    {
      srcTwo:
        "https://www.infrakeys.com/_next/image?url=%2Fpartners%2Fkamdhenu.png&w=640&q=75",
    },
    {
      srcTwo:
        "https://www.infrakeys.com/_next/image?url=%2Fpartners%2Fposco.png&w=640&q=75",
    },
    {
      srcTwo:
        "https://www.infrakeys.com/_next/image?url=%2Fpartners%2Fprompt.png&w=640&q=75",
    },
  ];

  const images = [
    {
      src: "https://www.infrakeys.com/_next/image?url=%2Fclientele%2FTata_Projects_Logo.png&w=1080&q=75",
    },
    {
      src: "https://www.infrakeys.com/_next/image?url=%2Fpartners%2Fgoel.png&w=640&q=75",
    },
    {
      src: "https://www.infrakeys.com/_next/image?url=%2Fpartners%2Felectro.png&w=640&q=75",
    },
    {
      src: "https://www.infrakeys.com/_next/image?url=%2Fpartners%2Fapollo.png&w=640&q=75",
    },
    {
      src: "https://www.infrakeys.com/_next/image?url=%2Fpartners%2Famns.png&w=640&q=75",
    },
    {
      src: "https://www.infrakeys.com/_next/image?url=%2Fpartners%2Fgalant.png&w=640&q=75",
    },
    {
      src: "https://www.infrakeys.com/_next/image?url=%2Fpartners%2Fvizag.png&w=640&q=75",
    },
    {
      src: "https://www.infrakeys.com/_next/image?url=%2Fclientele%2FNCRTC_LOGO.png&w=1080&q=75",
    },
  ];

  return (
    <div className="p-10">
      <Container maxWidth="xl">
        <h1 className="text-center font-semibold m-2 text-4xl p-2">
          Our Partner
        </h1>
        <p className="text-center text-2xs text-gray-400 mb-4">
          Through strategic partnerships with leading industry players, we bring
          you comprehensive solutions for all your construction needs. Our
          network of partners includes
        </p>
        <Grid container spacing={4}>
          {images.map((image, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <div className="cards rounded-2xl bg-gray-100 w-full flex items-center justify-center p-8 py-4 h-[10rem]">
                <img
                  className="w-full h-full object-fit mix-blend-multiply"
                  src={image.src}
                  alt={`partner-${index}`}
                />
              </div>
            </Grid>
          ))}
          {img.map((image, index) => (
            <Grid item xs={6} sm={4} md={3} key={index + images.length}>
              <div className="cards rounded-2xl bg-gray-100 w-full flex items-center justify-center p-8 py-4 h-[10rem]">
                <img
                  className="w-full h-full object-fit mix-blend-multiply"
                  src={image.srcTwo}
                  alt={`partner-${index + images.length}`}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Parthnes;
