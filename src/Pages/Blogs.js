import { Container, Grid } from "@mui/material";
import BlogList from "../Main/Blog";
import Loader from "../Main/Loader";
import { Link } from "react-router-dom"; // Use react-router-dom for navigation
import { useState, useEffect } from "react";

function Blogs() {
  const [spinner, setSpinner] = useState(true);
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

  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000);
  }, []);

  return (
    <>
      {spinner ? (
        <Loader />
      ) : (
        <div className="">
          <div className="p-5 bg-[#f3f4f6]">
            <Container maxWidth="xl">
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
              <Grid container spacing={4}>
                {blogs.length > 0 &&
                  blogs.map((blog) => (
                    <Grid item xs={12} sm={6} md={3} key={blog.slug}>
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
                              <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">
                                {blog.title}
                              </h3>
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
                    </Grid>
                  ))}
              </Grid>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}

export default Blogs;
