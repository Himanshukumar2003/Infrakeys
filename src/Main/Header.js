import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Header() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="header relative">
        <div className="absolute  h-full   inset-0 z-40 bg-black/60" />
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={4000}
          infinite={true}
          showDots={false}
          renderButtonGroupOutside={true}
          arrows={false}
          customTransition="transform 500ms ease-in-out, opacity 300ms ease-in-out"
        >
          <img
            className="[h-500px] w-full"
            src="https://www.infrakeys.com/_next/static/media/banner-3.37fc892e.jpg"
            style={{
              minHeight: "500px",
              objectFit: "cover",
            }}
          />
          <img
            className=" w-full object-cover"
            src="https://www.infrakeys.com/_next/static/media/banner-3.37fc892e.jpg"
            style={{ backgroundColor: "rgba(0,0,0,.10)", minHeight: "500px" }}
          />
          <img
            className="w-full"
            src="https://www.infrakeys.com/_next/static/media/banner-1.110a87f6.jpg"
            style={{ minHeight: "500px", backgroundColor: "rgba(0,0,0,.10)" }}
          />
        </Carousel>
        <div
          className="absolute top-1/2 transform -translate-y-1/2 font-extrabold text-[#ffffff] text-center flex items-center justify-center z-[999]"
          style={{ flexDirection: "column", width: "100%" }}
        >
          <div className="z-20 space-y-4 flex-1 sm:text-center crouser-text">
            <h1 className="text-4xl font-extrabold mx-auto md:text-5xl text-center">
              Build and scale up your startup <br />
              with the best tools
            </h1>
            <p
              className=" m-auto max-w-xl leading-relaxed sm:mx-auto lg:ml-0 pt-6 text-xl font-[400]"
              style={{
                textAlign: "center",
                margin: "auto",
                fontFamily: "sans-serif Edu_AU_VIC_WA_NT_Hand variant0&quot",
              }}
            >
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
