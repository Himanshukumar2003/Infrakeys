import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
function Form() {
  const [formData, setFormData] = useState({
    type: "buy",
    name: "",
    company: "",
    gst: "",
    pincode: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="">
      <Container maxWidth="xl">
        <div
          className="bg-white p-5 rounded shadow "
          style={{
            borderRadius: "10px",
            boxShadow:
              "0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168)",
            backgroundColor: "#fff",
          }}
        >
          <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
            Tell Us Your Query
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex items-center justify-center sm:flex-row sm:items-center sm:space-x-5 p-4">
              <label
                className={`flex items-center space-x-2 p-3 rounded-xl border transition-color gap-1 w-[30%] ${
                  formData.type === "buy"
                    ? "border-orange-500 bg-[#fedccc]  text-black "
                    : "border-gray-300 bg-gray-100  hover:text-black"
                }`}
              >
                <input
                  type="radio"
                  name="type"
                  value="buy"
                  checked={formData.type === "buy"}
                  onChange={handleChange}
                  className="hidden peer"
                />
                <span
                  className={`w-4 h-4 border-2 rounded-full flex-shrink-0 transition-colors ${
                    formData.type === "buy"
                      ? "border-orange-500 bg-[#fedccc] text-black"
                      : "border-gray-400 peer-checked:border-orange-500 peer-focus:ring-2 peer-focus:ring-orange-500"
                  }`}
                >
                  {formData.type === "buy" && (
                    <span className="w-2.5 h-2.5 bg-orange-500 rounded-full block mx-auto mt-[1px] " />
                  )}
                </span>
                Buy
              </label>
              <label
                className={`flex items-center space-x-2 p-3 rounded-xl border transition-colors gap-1 w-[30%] ${
                  formData.type === "sell"
                    ? "border-orange-500 bg-[#fedccc] text-black"
                    : "border-gray-300 bg-gray-10 hover:text-black"
                }`}
              >
                <input
                  type="radio"
                  name="type"
                  value="sell"
                  checked={formData.type === "sell"}
                  onChange={handleChange}
                  className="hidden peer"
                />
                <span
                  className={`w-4 h-4 border-2 rounded-full flex-shrink-0 transition-colors ${
                    formData.type === "sell"
                      ? "border-orange-500 bg-[#fedccc] text-black"
                      : "border-gray-400 peer-checked:border-orange-500 peer-focus:ring-2 peer-focus:ring-orange-500"
                  }`}
                >
                  {formData.type === "sell" && (
                    <span className="w-2.5 h-2.5 bg-orange-500 rounded-full block mx-auto mt-[1px] " />
                  )}
                </span>
                Sell
              </label>
            </div>
            <div className="flex flex-col gap-5 p-5">
              <TextField
                required
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                fullWidth
              />
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-5 ">
                <TextField
                  required
                  name="company"
                  label="Company"
                  value={formData.company}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                  fullWidth
                />

                <div>
                  {formData.type === "sell" ? (
                    <TextField
                      required
                      name="gst"
                      label="Company GST"
                      value={formData.gst}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        width: "100%",
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                      fullWidth
                    />
                  ) : (
                    <TextField
                      required
                      name="pincode"
                      label="Pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        width: "100%",
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                      fullWidth
                    />
                  )}
                </div>
              </div>
              <TextField
                required
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                fullWidth
              />
              <TextField
                required
                name="phone"
                label="Phone"
                type="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                fullWidth
              />

              <TextField
                required
                name="query"
                label="Query"
                type="query"
                value={formData.query}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={4}
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                fullWidth
              />
              <div className="flex justify-end items-center">
                <button
                  type="submit"
                  className="bg-orange-500 text-white p-2 rounded w-20 hover:bg-orange-600 transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Form;
