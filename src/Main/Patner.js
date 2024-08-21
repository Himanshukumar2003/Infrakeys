import React, { useState } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function Choice() {
  const [active, setActive] = useState(true);

  const handleBuyerClick = () => setActive(true);
  const handleSellerClick = () => setActive(false);

  const data = [
    {
      icon: <ShoppingCartIcon />,
      Heading: "Get Lowest Price",
      SubHeading: "Access rates at least 1% lower than current market rates.",
    },
    {
      icon: <AccountBalanceWalletOutlinedIcon />,
      Heading: "Get Credit",
      SubHeading:
        "Unlock working capital worry-free and grow with our credit solutions.",
    },
    {
      icon: <LocalShippingOutlinedIcon />,
      Heading: "Pan India & Global Reach",
      SubHeading:
        "Experience world-class fulfillment for both domestic and international markets.",
    },
    {
      icon: <GradeOutlinedIcon />,
      Heading: "Wide Range Of Products",
      SubHeading:
        "Explore over 3 million SKUs from leading brands, all in one convenient place.",
    },
  ];

  const dataTwo = [
    {
      sellIcon: <ShoppingCartIcon />,
      SellHeading: "Expand Your Business",
      SellsubHeading:
        "Access a global buyer base and achieve triple growth and beyond.",
    },
    {
      sellIcon: <AccountBalanceWalletOutlinedIcon />,
      SellHeading: "Advance Payments",
      SellsubHeading:
        "Receive upfront payments while we manage credit concerns.",
    },
    {
      sellIcon: <LocalShippingOutlinedIcon />,
      SellHeading:
        "Secure larger order volumes from our extensive global buyer network.",
      SellsubHeading:
        "Secure larger order volumes from our extensive global buyer network.",
    },
    {
      sellIcon: <GradeOutlinedIcon />,
      SellHeading: "Efficient Fulfillment Services",
      SellsubHeading:
        "Streamline logistics management from start to finish, allowing you to focus on your core business.",
    },
  ];

  return (
    <div className="p-5">
      <Container maxWidth="xl">
        <h1 className="flex items-center justify-center p-2 font-semibold m-2 text-4xl">
          Why Choose Us
        </h1>
        <div className="flex items-center justify-center w-full mb-10">
          <button
            className={`py-2 px-12 rounded-lg font-medium ${
              active ? "bg-[#f95001] text-white" : "bg-gray-200 text-black"
            }`}
            onClick={handleBuyerClick}
          >
            Buyer
          </button>
          <button
            className={`py-2 px-12 rounded-lg font-medium ml-4 ${
              !active ? "bg-[#f95001] text-white" : "bg-gray-200 text-black"
            }`}
            onClick={handleSellerClick}
          >
            Seller
          </button>
        </div>
        <div>
          {active ? (
            <Grid container spacing={3}>
              {data.map((item, index) => (
                <Grid key={index} xl={3} lg={3} md={6} sm={12} xs={12}>
                  <div className="flex flex-col items-center justify-center text-center rounded-lg bg-white p-8  h-full w-full cursor-pointer">
                    <div className="rounded-full bg-gray-200 p-4">
                      <p className="rounded-full bg-[#f95001] p-2 text-white">
                        {item.icon}
                      </p>
                    </div>
                    <h1 className="m-5 text-xl font-semibold capitalize">
                      {item.Heading}
                    </h1>
                    <p className="text-center text-sm font-medium text-gray-600">
                      {item.SubHeading}
                    </p>
                  </div>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container spacing={3}>
              {dataTwo.map((item, index) => (
                <Grid key={index} xl={3} lg={3} md={6} sm={12} xs={12}>
                  <div className="flex flex-col items-center justify-center text-center rounded-lg bg-white p-8 transition-all duration-200 ease-linear h-full w-full cursor-pointer">
                    <div className="rounded-full bg-gray-200 p-4">
                      <p className="rounded-full bg-[#f95001] p-2 text-white">
                        {item.sellIcon}
                      </p>
                    </div>
                    <h1 className="m-5 text-xl font-semibold capitalize">
                      {item.SellHeading}
                    </h1>
                    <p className="text-center text-sm font-medium text-gray-600">
                      {item.SellsubHeading}
                    </p>
                  </div>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </Container>
    </div>
  );
}

const PartnerSection = () => {
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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="p-10">
      <Container maxWidth="xl">
        <h1 className="text-center font-semibold m-2 text-4xl p-2">
          Our Partner
        </h1>
        <div className="partner">
          <p className="text-center text-2xs text-gray-400 mb-4">
            Through strategic partnerships with leading industry players, we
            bring you comprehensive solutions for all your construction needs.
            Our network of partners includes
          </p>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            showDots={false}
            renderButtonGroupOutside={true}
            customTransition="transform 300ms ease-in-out"
            itemClass="px-2 my-2 z-1"
            arrows={false}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="cards rounded-2xl bg-gray-100 w-full flex items-center justify-center p-8 py-4 h-[8rem]"
              >
                <img
                  className="object-fit mix-blend-multiply"
                  src={image.src}
                  alt={`partner-${index}`}
                />
              </div>
            ))}
          </Carousel>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            showDots={false}
            renderButtonGroupOutside={true}
            customTransition="transform 300ms ease-in-out"
            itemClass="px-2 my-2 z-1"
            arrows={false}
          >
            {img.map((image, index) => (
              <div
                key={index + images.length}
                className="rounded-2xl bg-gray-100 w-full flex items-center justify-center p-8 py-4 cards h-[8rem]"
              >
                <img
                  className="w-full h-full object-fit mix-blend-multiply"
                  src={image.srcTwo}
                  alt={`partner-${index + images.length}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default PartnerSection;

const Clientele = () => {
  const data = [
    "https://www.infrakeys.com/_next/image?url=%2Fclientele%2FInterarch_logo.png&w=1080&q=75",
    "https://www.infrakeys.com/_next/image?url=%2Fclientele%2FAhulwalia_Contracts.png&w=1080&q=75",
    "https://www.infrakeys.com/_next/image?url=%2Fclientele%2FKirby.png&w=1080&q=75",
    "https://www.infrakeys.com/_next/image?url=%2Fclientele%2FNCRTC_LOGO.png&w=1080&q=75",
    "https://www.infrakeys.com/_next/image?url=%2Fclientele%2FShapoorji_Pallonji.png&w=1080&q=75",
    "https://www.infrakeys.com/_next/image?url=%2Fclientele%2FTata_Projects_Logo.png&w=1080&q=75",
    "https://www.infrakeys.com/_next/image?url=%2Fclientele%2FNavayuga.png&w=1080&q=75",
    "https://www.infrakeys.com/_next/image?url=%2Fclientele%2FL%26T.png&w=1080&q=75",
    "https://www.infrakeys.com/_next/image?url=%2Fclientele%2FShapoorji_Pallonji.png&w=1080&q=75",
    "https://www.infrakeys.com/_next/image?url=%2Fclientele%2FKALPATPOWR.NS_logo.png&w=1080&q=75",
  ];

  return (
    <Container maxWidth="xl">
      <div className="p-5">
        <h1 className=" text-center font-semibold    m-2 text-4xl p-2 ">
          Our Clientele
        </h1>
        <p className="text-center text-2xs text-gray-400 mb-6 mt-6 p-2 sm:text-justify">
          Our dedication to quality, efficiency, and client satisfaction sets us
          apart as the preferred choice for all construction needs. Explore our
          portfolio to discover more about our successful partnerships and
          impactful projects.
        </p>
      </div>
      <Grid container spacing={4} className="rounded-lg p-2">
        {data.map((logo, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <div className="cards rounded-lg bg-[#fff4f4] flex items-center justify-center p-4">
              <img
                className="img w-full h-auto"
                src={logo}
                alt={`Client Logo ${index + 1}`}
              />
            </div>
          </Grid>
        ))}
      </Grid>
      <div className="flex justify-center items-center mt-5">
        <button className="bg-[#f95001] text-white p-2 rounded-lg hover:bg-[#fedccc] transition duration-300">
          Check Page
        </button>
      </div>
    </Container>
  );
};

export { Clientele };
