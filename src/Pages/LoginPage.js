import React, { useState } from "react";

import { TextField, Button, Typography, Container } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { BorderBottom } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Phone number:", phoneNumber);
  };

  return (
    <Container maxWidth="xl">
      <div className="max-w-md p-10 mt-10 bg-white rounded-lg shadow-md m-auto mb-10">
        <div className="">
          <h1
            className="p-10"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "600",
              margin: "10px",
              fontSize: "36px",
            }}
          >
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                placeholder="Enter your phone nubher"
                onChange={handlePhoneNumberChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#f95001] hover:bg-orange-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-gray-600 text-center">
            Do not have an account?{" "}
            <Link
              to="/SignIn"
              style={{
                textDecoration: "none",
                color: "#f95001",
                fontSize: "medium",
                ":hover": {
                  textDecoration: "underline",
                  color: "#f95001",
                  textDecorationColor: "#f95001",
                },
              }}
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Login;
const SingIn = () => {
  const [user, setUser] = useState({ name: "", phone: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <Container maxWidth="xl" className="flex justify-center h-screen">
      <div className="max-w-md p-10 mt-10 bg-white rounded-lg shadow-md m-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <p className="text-gray-500 mb-6 text-center">
          Nice to meet you! Enter your details to register.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Fullname
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your fullname"
              value={user.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your phone number"
              value={user.phone}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="bg-[#f95001]                 hover:bg-orange-300 text-white font-semibold py-2 px-4 rounded-md w-full"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-500 mt-4 text-center">
          Already have an account?
          <Link
            to="/Login"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "#f95001",
              fontSize: "medium",
              ":hover": {
                textDecoration: "underline",
                color: "#f95001",
                textDecorationColor: "#f95001",
              },
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </Container>
  );
};

export { SingIn };
