import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { Container } from "@mui/material";

const Layout = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  // const navigate = useNavigate();
  const { pathname } = useLocation()
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user]);
  useEffect(() => {
    window.scrollTo(
      {
        top: 0,
        left: 0,
        behavior: 'smooth'
      }
    )
  }, [pathname])
  return (
    <>
      <Container maxWidth="fluid" sx={{
        background: "rgba( 255, 255, 255, 0.4 )",
        // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: " blur( 5px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",

        padding: "0 !important",
      }}>
        <Navbar />
        {/* <Box sx={{ minHeight: "50vh", alignItems: "center" }}>{children}</Box> */}
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
