import React from "react";

const Slider = () => {
  return (
    <>
      <div className="shane_tm_hero" id="home" data-style="two">
        <div className="background">
          <div
            className="image"
            style={{ backgroundImage: "url(img/slider/logo-with-background-image.png)" }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>Convident</span><span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                Master tones, master conversations
                <span className="overlay_effect"></span>
              </span>
            </div>
            <div className="job_wrap_2">
              <div className="job2">
              Grammar? Sure, but what about true FLUENCY? It's all about pronunciation, tempo, and the art of speaking. We care more about HOW you say it than WHAT you say. Speaking perfectly? No. Being easily understood? Yes!
              
              <span className="overlay_effect"></span> 
              </div>
              
              
            </div>
            {/* End designation */}
          </div>
          {/* End content */}

          <div className="shane_tm_down loaded">
            <div className="line_wrapper">
              <div className="line"></div>
            </div>
          </div>
        </div>
        {/* End .container */}
      </div>
    </>
  );
};

export default Slider;
