import { Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { MdOutlineNoteAlt } from "react-icons/md";
import { PiHandshakeBold } from "react-icons/pi";
import { TbHeartHandshake } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  const data = [
    { name: "Home", icon: <HomeIcon />, link: "/" },
    { name: "About", icon: <InfoIcon />, link: "/About" },
    {
      name: "Products",
      icon: <ProductionQuantityLimitsIcon />,
      link: "/Products",
    },
    { name: "Blogs", icon: <MdOutlineNoteAlt />, link: "/Blogs" },
    { name: "Clientele", icon: <PiHandshakeBold />, link: "/Clientele" },
    { name: "Partners", icon: <TbHeartHandshake />, link: "/Partnes" },
  ];

  const { pathname } = useLocation();

  function checkCurrPath(path) {
    return path === pathname;
  }

  return (
    <div className="nav">
      <Container maxWidth="xl">
        <div style={{ padding: "10px 0" }}>
          <div
            className="  flex items-center justify-between"
            style={{ padding: "10px 0" }}
          >
            <div className="">
              <img
                src="https://www.infrakeys.com/_next/image?url=%2Flogo.webp&w=128&q=75"
                alt="Logo"
              />
            </div>

            <div
              style={{
                width: "30%",
                borderRadius: "10px",
                border: "2px solid #f95001",
              }}
            >
              <div className="flex items-center ">
                <input
                  style={{
                    width: "100%",
                    padding: "5px 10px",
                    outline: "none",
                  }}
                  type="search"
                  placeholder="search..."
                />
                <div style={{ padding: "5px" }}>
                  <button
                    style={{
                      color: "white",
                      backgroundColor: "#f95001",
                      fontSize: "31px",
                      fontWeight: "900",
                      padding: "0 6px",
                      borderRadius: "10px",
                      width: "50px",
                      marginLeft: "5px",
                    }}
                  >
                    <SearchIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Link
                to="/Login"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#f95001] text-white hover:bg-black/90 h-10 px-4 py-2 ml-5"
              >
                Login
              </Link>

              <Link
                to="/SignIn"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#f95001] text-white hover:bg-black/90 h-10 px-4 py-2 ml-5"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className="flex  items-center gap-2 justify-center bg-[#f95001] p-5">
        {data.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={
              checkCurrPath(item.link)
                ? "bg-white text-black flex items-center justify-center rounded-lg gap-2  px-3 py-2 text-[15px] transition-colors "
                : "navLink text-white flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-[15px] transition-colors hover:bg-white hover:text-black "
            }
          >
            {item.icon}
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;

export function PhoneNav(params) {
  const data = [
    { name: "Home", icon: <HomeIcon />, link: "/" },
    { name: "About", icon: <InfoIcon />, link: "/About" },
    {
      name: "Products",
      icon: <ProductionQuantityLimitsIcon />,
      link: "/Products",
    },
    { name: "Blogs", icon: <MdOutlineNoteAlt />, link: "/Blogs" },
    { name: "Clientele", icon: <PiHandshakeBold />, link: "/Clientele" },
    { name: "Partners", icon: <TbHeartHandshake />, link: "/Partners" },
  ];

  const [open, setOpen] = useState(true);
  const { pathname } = useLocation();

  const handleChange = () => {
    setOpen(!open);
  };

  const checkCurrPath = (path) => {
    return path === pathname;
  };

  return (
    <div className="PhoneNav">
      <Container maxWidth="xl">
        <div className="flex justify-between items-center  p-4 ">
          <div className="flex justify-center items-center w-[100%]">
            <img
              src="https://www.infrakeys.com/_next/image?url=%2Flogo.webp&w=128&q=75"
              alt="Logo"
            />
          </div>
          <div onClick={handleChange}>
            <MenuIcon />
          </div>
        </div>
        {open ? null : (
          <div className="w-[80%]">
            {data.map((item, index) => (
              <Link
                to={item.link}
                className={
                  checkCurrPath(item.link)
                    ? "bg-[#f95001] flex items-start justify-start gap-2 rounded-lg px-3 py-2 text-[15px] transition-colors pl-5"
                    : "navLink flex items-start justify-start gap-2 rounded-lg px-3 py-2 text-[15px] transition-colors hover:bg-gray-200 pl-5"
                }
                key={index}
              >
                {item.icon}
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
