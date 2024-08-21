import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Main/Loader";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Container } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Form from "../Fotter/Footer";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import * as React from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./ShowData.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";

function CategoryData() {
  const { slugId } = useParams();
  const [category, setCategory] = useState(null);
  const [spinner, setSpinner] = useState(true);
  const [activeButtons, setActiveButtons] = useState({});
  const [categoryTwo, setCategoryTwo] = useState(null);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const [openFilter, setOpenFilter] = useState(null);
  const filterRef = useRef(null);
  const toggleFilter = (filter) => {
    setOpenFilter(openFilter === filter ? null : filter);
  };

  const handleFilterValueClick = (filter, value) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };

      // Initialize filter array if it doesn't exist
      if (!newFilters[filter]) {
        newFilters[filter] = [];
      }

      // Check if value already exists in the filter array
      if (newFilters[filter].includes(value)) {
        // Remove the value if it exists
        newFilters[filter] = newFilters[filter].filter(
          (item) => item !== value
        );

        // If the filter array is empty, delete the filter key
        if (newFilters[filter].length === 0) {
          delete newFilters[filter];
        }
      } else {
        // Add the value if it doesn't exist
        newFilters[filter].push(value);
      }

      return newFilters;
    });
    setOpenFilter(null);
  };
  //cliar select DATA
  const handleClearFilters = () => {
    setSelectedFilters({});
  };

  const filteredProducts = category?.data.filter((product) => {
    return Object.keys(selectedFilters).every((filter) => {
      return selectedFilters[filter].some((selectedValue) =>
        product.custom_properties.some(
          (property) =>
            property.name.toLowerCase() === filter &&
            property.values.includes(selectedValue)
        )
      );
    });
  });
  console.log("Selected Filters:", selectedFilters);
  console.log("Filters:", filters);

  useEffect(() => {
    const fetchCategoryTwo = async () => {
      try {
        const response = await fetch(
          `https://api.infrakeys.com/v1/categories/${slugId}`
        );
        if (!response.ok) {
          throw new Error("Network not responsive");
        }
        const data = await response.json();
        setCategoryTwo(data);
      } catch (error) {
        setError(error.message);
        console.log("Error:", error);
      }
    };

    fetchCategoryTwo();
  }, [slugId]);

  const handleCardClick = () => {
    setOpenFilter(null);
  };

  const handleClick = (productId, buttonType) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      [productId]: buttonType,
    }));
  };

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  useEffect(() => {
    const fetchCategoryTwo = async () => {
      try {
        const response = await fetch(
          `https://api.infrakeys.com/v1/categories/${slugId}`
        );
        if (!response.ok) {
          throw new Error("Network not responsive");
        }
        const data = await response.json();
        setCategoryTwo(data);
      } catch (error) {
        setError(error.message);
        console.log("Error:", error);
      }
    };

    fetchCategoryTwo();
  }, [slugId]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          `https://api.infrakeys.com/v1/products/getByCategory/${slugId}`
        );
        if (!response.ok) {
          throw new Error("Network is not responding");
        }
        const data = await response.json();
        setCategory(data);
        data?.data?.map((item) => {
          item?.custom_properties?.map((property) => {
            if (property.name in filters) {
              return;
            }

            setFilters((prev) => ({
              ...prev,
              [property.name.toLowerCase()]: property.values,
            }));
          });
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setSpinner(false);
      }
    };

    console.log(fetchCategory());
  }, [slugId]);
  console.log({ filters });
  if (spinner) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!category || !category.data || category.data.length === 0) {
    return (
      <div
        className="p-5 bg-gray-200"
        style={{
          borderRadius: "10px",
          boxShadow:
            " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px ",
        }}
      >
        {categoryTwo && categoryTwo.data && categoryTwo.data.banners ? (
          categoryTwo.data.banners.map((banner, index) => (
            <div key={index} className="flex item-center justify-center">
              <div className="rounded-full w-[250px] h-[250px] bg-gray-400 object-cover overflow-hidden">
                <img
                  className="w-[100%] h-full"
                  src={`https://api.infrakeys.com/${banner}`}
                  alt={`https://api.infrakeys.com/${category.image}`}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-red-500">Data not found.</div>
        )}
        <div className="">
          <p
            className="text-center"
            style={{
              color: "#F95001",
              fontSize: "1.5rem",
              fontWeight: "500",
              marginTop: "0.85rem",
            }}
          >
            No records has been added yet.
          </p>
        </div>
      </div>
    );
  }

  if (!categoryTwo || !categoryTwo.data || categoryTwo.data.length === 0) {
    return <div>No data found for products</div>;
  }

  console.log(category.data.custom_properties);
  return (
    <div className="mt-5">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xl={4} sm={12} md={12} xs={12}>
            <div
              className=" p-5 bg-white "
              style={{
                borderRadius: "10px",
                boxShadow:
                  "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px ",
              }}
            >
              <h1 className=" mb-2 font-semibold text-[21px]">
                Top Categories
              </h1>
              <div className=" h-[18rem] overflow-y-scroll">
                {categoryTwo.data.top_sub_categories.length > 0 &&
                  categoryTwo.data.top_sub_categories.map((item, index) => (
                    <div
                      className="flex mb-3 items-center gap-8 p-2 justify-between bg-gray-100 border border-gray-200 rounded-xl shadow-md"
                      style={{
                        height: "60px",
                      }}
                      key={index}
                    >
                      <div className="flex items-center gap-5">
                        <div className="bg-white rounded-full w-[50px] h-[50px] overflow-hidden">
                          <img
                            className="h-full w-full object-cover"
                            src={`https://api.infrakeys.com/${item.image}`}
                          />
                        </div>

                        <p className="mr-auto text-sm font-medium capitalize">
                          {item.name}
                        </p>
                      </div>
                      <div>
                        <ArrowForwardIcon className="text-orange-500 text-2xl font-medium -translate-x-3 transition-transform hover:-translate-x-2" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </Grid>
          <Grid item xl={8} sm={12} md={12} xs={12}>
            <div className="w-full">
              {categoryTwo.data.banners.map((banner, index) => (
                <div
                  className=" p-5 bg-white "
                  onClick={() => handleCardClick()}
                  style={{
                    borderRadius: "10px",
                    boxShadow:
                      "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px ",
                  }}
                >
                  <img
                    key={index}
                    className="w-[100%] h-[20.5rem] rounded-[10px]"
                    src={`https://api.infrakeys.com/${banner}`}
                    alt="Banner"
                  />
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
        <div>
          <div
            className="p-5 mt-10 rounded-[10px]"
            style={{
              boxShadow:
                "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
            }}
          >
            <div className="Products-section">
              <h1 className="mb-2 font-semibold text-[21px]">Products</h1>

              <div className="flex flex-warp justify-start gap-5 items-center">
                <div className="select-filter flex gap-5 items-end ">
                  {Object.keys(selectedFilters).length > 0 ? (
                    <p
                      onClick={handleClearFilters}
                      className="bg-orange-400 p-2   rounded-lg text-white  border border-orange-500  hover:bg-orange-400"
                    >
                      Clear Filters
                    </p>
                  ) : null}

                  <div className="flex flex-wrap gap-10">
                    {Object.keys(selectedFilters).map((filter) => (
                      <div key={filter} className="mb-2 flex flex-col z-[999]">
                        <span className=" font-semibold capitalize text-black ">
                          {filter}
                        </span>
                        <div className="flex flex-wrap gap-2 items-center  justify-between cursor-pointer">
                          {selectedFilters[filter].map((value, index) => (
                            <span
                              key={index}
                              onClick={() =>
                                handleFilterValueClick(filter, value)
                              }
                              className="flex items-centergap-2 px-2 py-1 bg-orange-200 text-orange-500 rounded-lg items-center"
                            >
                              {value}
                              <CloseIcon
                                className=""
                                style={{ fontSize: "16px" }}
                              ></CloseIcon>
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div ref={filterRef} className="py-4">
                <div className="flex flex-wrap items-center gap-5  ">
                  {Object.keys(filters).map((filter, index) => (
                    <div key={index} className="relative">
                      <div
                        className="flex items-center justify-start text-orange-400 gap-2 rounded-lg border border-orange-400 bg-white px-3 py-2 text-sm capitalize cursor-pointer"
                        onClick={() => toggleFilter(filter)}
                      >
                        <p>{filter}</p>
                        <KeyboardArrowDownIcon />
                      </div>
                      <div
                        className={`absolute left-0 mt-2 w-40 sm:w-48 md:w-56 lg:w-64 transition-all duration-300 ease-in-out ${
                          openFilter === filter
                            ? "max-h-screen opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                      >
                        <div className="bg-white shadow-md overflow-y-auto p-2 w-[150px] rounded-lg">
                          {filters[filter].map((value, valueIndex) => (
                            <div
                              key={valueIndex}
                              className="flex items-center"
                              onClick={() =>
                                handleFilterValueClick(filter, value)
                              }
                            >
                              <span
                                className={`h-4 w-4 rounded-sm border border-orange-500 cursor-pointer flex items-center ${
                                  selectedFilters[filter]?.includes(value)
                                    ? "bg-orange-500"
                                    : ""
                                }`}
                              />
                              <p
                                className={`ml-2 text-md font-semibold cursor-pointer ${
                                  selectedFilters[filter]?.includes(value)
                                    ? "text-orange-500"
                                    : ""
                                }`}
                              >
                                {value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {filteredProducts?.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-1 border-b border-gray-300 cursor-pointer"
                  >
                    <Link
                      to={`/ProductId/${product.slug}`}
                      className="hover:text-orange-400"
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                      {product.title}
                    </Link>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center justify-between gap-10">
                        <div className="flex items-center justify-between gap-4">
                          <label
                            className={`flex items-center p-2 rounded-xl border transition-color gap-1 font-medium cursor-pointer text-xs capitalize transition-colors border-primary/50 bg-primary/20 ${
                              activeButtons[product.id] === "buy" &&
                              "border-orange-500 bg-[#fedccc]"
                            }`}
                            onClick={() => handleClick(product.id, "buy")}
                          >
                            <input type="radio" className="hidden peer" />
                            <span
                              className={`w-4 h-4 border-2 rounded-full flex-shrink-0 transition-colors ${
                                activeButtons[product.id] === "buy" &&
                                "bg-[#fedccc]"
                              }`}
                            >
                              <span
                                className={`w-2.5 h-2.5 rounded-full block mx-auto mt-[1px] border-orange-500 ${
                                  activeButtons[product.id] === "buy" &&
                                  "bg-orange-400"
                                }`}
                              />
                            </span>
                            Buy
                          </label>

                          <label
                            className={`flex items-center p-2 rounded-xl border transition-color gap-1 font-medium cursor-pointer text-xs capitalize transition-colors border-primary/50 bg-primary/20 ${
                              activeButtons[product.id] === "sell" &&
                              "border-orange-500 bg-[#fedccc]"
                            }`}
                            onClick={() => handleClick(product.id, "sell")}
                          >
                            <input type="radio" className="hidden peer" />
                            <span
                              className={`w-4 h-4 border-2 rounded-full flex-shrink-0 transition-colors ${
                                activeButtons[product.id] === "sell" &&
                                "bg-[#fedccc]"
                              }`}
                            >
                              <span
                                className={`w-2.5 h-2.5 rounded-full block mx-auto mt-[1px] border-orange-500 ${
                                  activeButtons[product.id] === "sell" &&
                                  "bg-orange-400"
                                }`}
                              />
                            </span>
                            Sell
                          </label>
                        </div>
                        <div className="flex items-center gap-4">
                          <button className="gap-2 bg-orange-500 text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-orange-600 h-10 px-4 py-2">
                            <AddShoppingCartIcon />
                            Add
                          </button>
                          <button className="bg-green-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 text-white hover:bg-[#00a884]">
                            <WhatsAppIcon style={{ color: "white" }} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className=" p-5 bg-white my-10"
            style={{
              borderRadius: "10px",
              boxShadow:
                "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px ",
            }}
          >
            <h1 className="mb-2 font-semibold text-[21px] p-3">
              Scaffolding FAQs
            </h1>

            {categoryTwo.data.faq.map((faq, index) => (
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                key={index}
                sx={{
                  marginBottom: "5px",
                  boxShadow: "none",
                  "& .MuiAccordionSummary-content": {
                    flexDirection: { xs: "column", sm: "row" },
                  },
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        flexShrink: 0,
                        fontWeight: "600",
                        color: "black",
                      }}
                    />
                  }
                  aria-controls="panel1bh-content"
                  id={`panel${index}-header`}
                >
                  <Typography
                    className="hover:border-b-[1px] border-black "
                    sx={{
                      flexShrink: 0,
                      fontWeight: "600",
                      fontSize: { xs: "13px", sm: "15px" },
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      borderTop: "1px solid #e5e7eb",
                      paddingTop: "1rem",
                      fontSize: { xs: "12px", sm: "14px" },
                      fontWeight: "400",
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CategoryData;
