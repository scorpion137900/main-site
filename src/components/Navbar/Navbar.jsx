import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";

import { useDirectionThemeContext } from "../../Context/Direction";
import AvatarProfile from "./AvatarProfile";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CardMedia, useMediaQuery } from "@mui/material";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import theme from "../../Styles/Styles";
import { MenuOpen, Widgets } from "@mui/icons-material";
const Navbar = () => {
  const { t } = useTranslation();
  const Links = t("Links", { returnObjects: true });
  const { isRtl, toggleLanguage } = useDirectionThemeContext();

  const user = useSelector((state) => state.auth.user);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      className={` appBar ${isScrolled ? "scrolled" : ""}`}
      // color={`${isScrolled ? "light" : "transparent"}`}
      color="transparent"
      sx={{
        boxShadow: '0 0 2px rgba(0,0,0,0.1)',
        top: "20px",
        backgroundImage: `radial-gradient(circle at top left,rgba(255,255,255,0.3) 50%,rgba(255,255,255,0.3) 100%)!important;`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="xl" sx={{
        overflowX: "hidden",
      }}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between", overflowX: "hidden" }}>
          {/* Image */}
          <Link to={"/"} style={{ display: matches ? "none" : "flex" }}>
            <CardMedia
              component="img"
              image={logo}
              alt="logo"
              sx={{ width: 55, display: { xs: "none", md: "flex" } }}
            />
          </Link>
          <Box sx={{ display: { xs: "flex", md: "none" }, overflowX: "hidden" }}>
            <IconButton

              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                // backgroundColor: "main",
                color: "text.main",
                fontSize: "40px"
                // borderRadius: "5px",
                // position: "relative",
              }}
            >
              {anchorElNav ? <MenuOpen fontSize="large" /> : <Widgets fontSize="large" />}

            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}

              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                overflowX: "hidden",
                display: { xs: "block", md: "none" },
                width: "100%",
                "& *": {
                  width: "100%",
                },
              }}
            >
              {/* Mobile  */}
              {Links.map((link) => {
                if (link.path === "/times" && user?.role !== "Staff")
                  return null;
                return (
                  <NavLink to={link.path} key={link.path}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{link.name}</Typography>
                    </MenuItem>
                  </NavLink>
                );
              })}
            </Menu>
          </Box>
          {/* Image */}
          <CardMedia
            component="img"
            image={logo}
            alt="logo"
            sx={{ width: 50, display: { xs: "flex", md: "none" } }}

          />

          {/* LAPTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {Links.map((link) => {
              if (link.path === "/times" && user?.role !== "Staff") return null;
              return (
                <NavLink to={link.path} key={link.path}>
                  <Button
                    variant="text"
                    color="text"
                    sx={{ fontWeight: "700" }}
                  >
                    {link.name}
                  </Button>
                </NavLink>
              );
            })}
          </Box>
          <Box gap="10px" display="flex">
            <Button variant="contained" onClick={toggleLanguage} color="primary" >
              {isRtl ? "EN" : "AR"}
            </Button>
            {user ? (
              <AvatarProfile />
            ) : (
              <Button variant="contained" onClick={() => navigate("/login")}>
                تسجيل الدخول
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
};

export default Navbar;
