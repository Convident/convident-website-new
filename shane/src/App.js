import React, { useEffect } from "react";
import AllRouter from "./router/AllRouter";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import HomeThree from "./views/all-home-version/HomeThree";

const App = () => {
  useEffect(() => {
    AOS.init();
    document.body.classList.add("loaded");
  }, []);
  return (
    <div className="shane_tm_all_wrap">
      <ScrollToTop />
      
      <HomeThree />
    </div>
  );
};

export default App;
