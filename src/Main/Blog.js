// BlogList.js

import React, { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Patner, { Choice, Clientele } from "./Patner";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import Form from "../Fotter/Footer";
import Loader from "./Loader";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.infrakeys.com/v1/blogs");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <>
      <div className="p-5 bg-[#f3f4f6]">
        <Container maxWidth="xl">
          <div className="">
            <h1
              className="p-10"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
                fontSize: "36px",
              }}
            >
              Blog List
            </h1>
            <Carousel responsive={responsive} itemClass="px-2 mb-10">
              {blogs.length > 0 &&
                blogs.map((blog) => (
                  <Link to={`/ShowData/${blog.slug}`}>
                    <div className="p-5 shadow-md bg-gray-50 text-gray-800 flex flex-col justify-between rounded-2xl transition-transform duration-500 ease-out transform hover:translate-y-5">
                      <div className="space-y-4 p-2">
                        <div className="space-y-2">
                          <img
                            src={`https://api.infrakeys.com/${blog.image}`}
                            alt=""
                            className="block w-full rounded-md h-[200px] bg-gray-500 object-cover"
                          />
                        </div>
                        <div className="space-y-2 flex-1">
                          <a
                            rel="noopener noreferrer"
                            href="#"
                            className="block"
                          >
                            <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">
                              {blog.title}
                            </h3>
                          </a>
                          <p className="text-gray-600 line-clamp-3 leading-6">
                            {blog.short_description}
                          </p>
                        </div>
                      </div>
                      <button className="inline-flex items-center justify-between px-3 py-2 text-sm font-medium text-center text-white bg-[#f95001] rounded-lg hover:bg-[#f95001]-800">
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
                      </button>
                    </div>
                  </Link>
                ))}
            </Carousel>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogList;

export function Data(params) {
  return (
    <>
      <div className="bg-[#f3f4f6] py-10">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} xl={4} lg={4}>
              <Form />
            </Grid>
            <Grid item xs={12} sm={12} xl={8} lg={8}>
              <Clientele />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export function CoicePathner(params) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} xl={6} lg={6}>
          <Choice />
        </Grid>
        <Grid item xs={12} sm={12} xl={6}>
          <Patner />
        </Grid>
      </Grid>
    </>
  );
}
