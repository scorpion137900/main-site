import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./store/store";
import ScrollTop from "./components/ScrollTop";
import "./i18n";
import { ParallaxProvider } from "react-scroll-parallax";
import { HMSRoomProvider } from "@100mslive/react-sdk";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <ToastContainer />
      <ScrollTop />
      <ParallaxProvider>
        <HMSRoomProvider>
          <App />
        </HMSRoomProvider>
      </ParallaxProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
