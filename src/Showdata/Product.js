import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Container } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ProductId() {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [activeButtons, setActiveButtons] = useState({});

  const handleClick = (productId, buttonType) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      [productId]: buttonType,
    }));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.infrakeys.com/v1/products/${slug}`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    };
    fetchProduct();
  }, [slug]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const productData = product.data || {};

  return (
    <div>
      <Container maxWidth="xl">
        <div
          className="p-5 m-10 rounded-[10px]"
          style={{
            boxShadow:
              "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
          }}
        >
          <h1 className="scroll-m-20 text-2xl capitalize tracking-tight border-none font-bold">
            {productData.slug}
          </h1>

          <button className="gap-2 my-10 bg-orange-500 text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-orange-600 h-10 px-4 py-2">
            <AddShoppingCartIcon />
            Add
          </button>

          <div>
            <p className="mb-2 font-semibold text-[21px] flex gap-2 items-center">
              Category:
              <span className="font-normal text-[16px]">
                {productData.category_name}
              </span>
            </p>
          </div>
        </div>

        <div
          className="p-5 mt-10 mb-10 rounded-[10px]"
          style={{
            boxShadow:
              "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
          }}
        >
          <h1 className="mb-2 font-semibold text-[21px]">Related products</h1>
          <div
            className="bg-[#fedccc] flex items-center justify-between p-5 rounded-lg mb-1"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
              fontWeight: "500",
            }}
          >
            <p>Product</p>
            <p>Action</p>
          </div>
          <div className="overflow-x-auto">
            {productData.related_products &&
              productData.related_products.map((product) => (
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
                          <WhatsAppIcon
                            style={{
                              color: "white",
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductId;
