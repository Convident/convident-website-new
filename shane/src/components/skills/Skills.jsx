import React from "react";

const Skills = () => {
  return (
    <>
      <div className="shane_tm_section">
        <div className="shane_tm_skills">
          <div className="container">
            <div className="skills_inner">
              <div className="left">
                <div className="shane_tm_title">
                  <h3>Customized language learning</h3>
                </div>
                <div className="text">
                  <p>
                  Every language learner has different goals, strengths, and learning strategies. 
                  Convident gives you a tailored approach for an effective learning experience.
                  </p>
                </div>
              </div>
              {/* End .left */}

              <div className="right">
                <div className="tokyo_progress">
                  <div className="progress_inner">
                    <span>
                      <span className="label">Web Development</span>
                      <span className="number">95%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 95 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* End .progress_inner */}

                  <div className="progress_inner">
                    <span>
                      <span className="label">Brand Identity</span>
                      <span className="number">80%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 80 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* End .progress_inner */}

                  <div className="progress_inner">
                    <span>
                      <span className="label">Logo Design</span>
                      <span className="number">90%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 90 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* End .progress_inner */}
                </div>
              </div>
              {/* End .right */}
            </div>
          </div>
          {/* End .conainer */}
        </div>
      </div>
    </>
  );
};

export default Skills;
