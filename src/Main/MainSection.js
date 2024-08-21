import React from "react";
import { Container } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MainSection({ categories = [] }) {
  console.log(categories);
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

  console.log(categories);

  return (
    <div className="p-5">
      <Container maxWidth="xl">
        <h1 className="flex items-center justify-center font-semibold m-2 text-4xl p-2">
          Featured Categories
        </h1>
        <div>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            showDots={false}
            renderButtonGroupOutside={true}
            customTransition="transform 300ms ease-in-out"
            itemClass="px-1 mb-10"
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="max-w-sm relative bg-white border border-gray-200 rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700 min-h-[340px] p-5 transition-transform duration-500 ease-out transform hover:translate-y-5"
              >
                <div>
                  <img
                    className="rounded-t-lg h-[150px] w-full mix-blend-multiply"
                    src={`https://api.infrakeys.com/${category.image}`}
                    alt={`Category ${index + 1}`}
                  />
                </div>

                <div className="p-2 text-center">
                  <h5 className="m-2 text-xl font-semibold  md:line-clamp-1 md:h-auto lg:line-clamp-1">
                    {category.name}
                  </h5>
                  <p className="line-clamp-2  md:line-clamp-2 md:h-auto lg:line-clamp-2 text-sm font-medium text-gray-600 ">
                    {category.sub_categories.map((subCategory, index) => (
                      <span key={index}>
                        {subCategory?.name
                          ? `${subCategory.name}, `
                          : "and more"}
                      </span>
                    ))}
                  </p>
                  <Link
                    to={`/CategoryData/${category.slug}`}
                    className="inline-flex items-center justify-between  px-3 py-2 left-1/2 transform -translate-x-1/2 w-[90%] text-sm font-medium text-center text-white mt-2 bg-[#f95001] rounded-lg hover:bg-[#f95001]-800 transition duration-300 absolute bottom-6"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
}

MainSection.propTypes = {
  categories: PropTypes.array,
};

export default MainSection;

function Services(params) {
  const data = [
    {
      imgSrc: "https://www.infrakeys.com/raw_material.svg",
      heading: "Buy & Sell With Us",
      subHeading:
        "Discover a seamless solution for all your raw material sourcing and selling needs.",
    },
    {
      imgSrc: "https://www.infrakeys.com/news.svg",
      heading: "Live Raw Materials Prices",
      subHeading:
        "Access real-time prices for the raw materials essential to your operations.",
    },
    {
      imgSrc: "https://www.infrakeys.com/credit.svg",
      heading: "Daily Raw Materials News",
      subHeading:
        "Stay informed with daily news and insights directly from the industry.",
    },
    {
      imgSrc: "https://www.infrakeys.com/credit.svg",
      heading: "Gain access to credit",
      subHeading:
        "Gain access to credit tailored for manufacturers and contractors, facilitating growth opportunities.",
    },
    {
      imgSrc: "https://www.infrakeys.com/credit.svg",

      heading: "Experience transparency",
      subHeading:
        "Experience transparency in your orders, live tracking, and more through our advanced app and web platforms.",
    },
  ];

  return (
    <div className="p-5">
      <Container maxWidth="xl">
        <div>
          <h1 className="flex items-center justify-center font-semibold m-2 text-4xl p-2">
            Our Services
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-1 gap-10 p-5">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-5"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
                }}
              >
                <div className="flex items-center justify-center w-full pt-10">
                  <img
                    className="img rounded-lg w-full"
                    src={item.imgSrc}
                    alt={`Service ${index + 1}`}
                    style={{
                      objectFit: "contain",
                      height: "120px",
                    }}
                  />
                </div>
                <div className="p-2 text-center">
                  <h5 className="mb-2 text-lg tracking-tight text-gray-900 font-bold">
                    {item.heading}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 line-clamp-3 leading-5">
                    {item.subHeading}
                  </p>

                  <Link
                    to="/"
                    className="inline-flex items-center justify-between px-3 py-2 text-sm font-medium text-center text-white bg-[#f95001] rounded-lg hover:bg-[#f95001]-800 w-full"
                  >
                    Read more
                    <svg
                      className="w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export { Services };

// <div
//               key={category.id}
//               className="bg-white rounded-lg shadow-lg relative h-72 w-full"
//             >
//               <div className="relative">
//                 <img
//                   src={`https://api.infrakeys.com/${category.image}`}
//                   alt={category.name}
//                   className="w-full h-[150px] object-cover rounded-lg"
//                 />
//                 <div className="absolute inset-0 bg-black opacity-40 hover:opacity-30 transition-opacity duration-300"></div>
//                 <div className="absolute inset-0 flex items-center justify-center p-10">
//                   <p className="text-white text-lg font-semibold text-center">
//                     {category.name}
//                   </p>
//                 </div>
//               </div>
//               <div className="text-center leading-3 p-5">
//                 {category.sub_categories.map((subCategory, index) => (
//                   <span
//                     key={index}
//                     className="text-xs capitalize text-gray-500 transition-colors hover:text-primary"
//                   >
//                     {subCategory.name
//                       ? `${subCategory.name}, `
//                       : "and more, "}
//                   </span>
//                 ))}
//               </div>
//               <button className="bg-[#f95001] text-white p-2 rounded-lg block mx-auto hover:bg-[#fedccc] transition duration-300 mt-10 absolute bottom-2 left-1/2 transform -translate-x-1/2">
//                 Check Page
//               </button>
//             </div> */

// <div
// key={category.id}
// className="max-w-xs mx-auto bg-white  rounded-[24px] relative overflow-visible h-[300px]"
// style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
// >
// <div className="p-4">
//   <div className="flex justify-center items-center ">
//     <div className=" rounded-full h-[120px] overflow-hidden flex items-center justify-center w-full">
//       <img
//         src={`https://api.infrakeys.com/${category.image}`}
//         alt={`Product: ${category.name}`}
//         className=""
//       />
//     </div>
//   </div>
//   <div className="text-center pt-2">
//     <h1
//       className=""
//       style={{ fontSize: "18px", fontWight: "900" }}
//     >
//       {category.name}
//     </h1>
//     <p className="mt-2 text-xl font-bold line-clamp-3 h-[40px] leading-5 md:line-clamp-3 md:h-auto lg:line-clamp-3">
//       {category.sub_categories.map((subCategory, index) => (
//         <span
//           key={index}
//           className="text-xs capitalize text-gray-500 transition-colors hover:text-primary"
//         >
//           {subCategory.name || "and more"}
//           {index < category.sub_categories.length - 1 && ", "}
//         </span>
//       ))}
//     </p>
