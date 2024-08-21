import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import RelatedBlogs from "./RelatedBlogs";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Loader from "../Main/Loader";

const ShowData = () => {
  const { slugId } = useParams();
  const [blogs, setBlogs] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000);

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.infrakeys.com/v1/blogs/getBySlug/${slugId}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setSpinner(false);
      }
    };

    fetchData();
  }, [slugId]);

  if (spinner) {
    return <Loader />;
  }

  if (!blogs) {
    return <div>No data found</div>;
  }

  return (
    <div className="p-5">
      <Container maxWidth="xl">
        <div className="py-5">
          <img
            src={`https://api.infrakeys.com/${blogs.image}`}
            className="w-full rounded-lg object-cover object-center h-[30rem]"
            alt={blogs.title}
          />
        </div>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} xl={8} lg={8}>
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blogs.content }}
            />

            {blogs.faq.length > 0 && (
              <div>
                <h1
                  className="text-orange-600 font-bold"
                  style={{ fontSize: "21px", marginBottom: "5px" }}
                >
                  FAQs
                </h1>
                {blogs.faq.map((item, index) => (
                  <div key={index} className="mb-4">
                    <Accordion
                      expanded={expanded === `panel${index}`}
                      onChange={handleChange(`panel${index}`)}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                      >
                        <Typography sx={{ color: "text.secondary" }}>
                          {item.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{item.answer}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))}
              </div>
            )}
          </Grid>
          <Grid item xs={12} sm={12} xl={4} lg={4}>
            <RelatedBlogs id={blogs.id} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ShowData;
