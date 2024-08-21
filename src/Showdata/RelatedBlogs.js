import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RelatedBlogs({ id }) {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const hendelTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  console.log({ id });
  useEffect(() => {
    if (typeof id !== "string") {
      console.error("Invalid ID:", id);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.infrakeys.com/v1/blogs/getRelatedBlogs/${id}`
        );
        const data = await response.json();
        setBlogs(data[0].blogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blogs) {
    return <div>No data found</div>;
  }

  console.log(blogs);

  return (
    <>
      <div>
        <h1
          className="text-orange-600  font-bold"
          style={{ fontSize: "21px", marginBottom: "20px" }}
        >
          Related Blogs
        </h1>
        {blogs.map((blog) => (
          <Link
            onClick={hendelTop}
            to={`/ShowData/${blog.slug}`}
            className="link flex flex-col md:flex-row items-center gap-2 bg-white border p-2 border-gray-200 rounded-lg shadow-md md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-3 h-90"
          >
            <img
              className="object-cover w-full md:w-48 h-20 rounded-lg"
              src={`https://api.infrakeys.com/${blog.image}`}
              alt=""
            />
            <div className="flex flex-col justify-between leading-normal">
              <h5 className="font-semibold text-2sm text-orange-600 dark:text-white line-clamp-1">
                {blog.title}
              </h5>
              <h5 className="font-semibold text-sm text-gray-600 dark:text-white line-clamp-1">
                {new Date(blog.created_at).toLocaleDateString()}
              </h5>

              <p className="font-[14px] dark:text-gray-400 line-clamp-2">
                {blog.short_description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default RelatedBlogs;
