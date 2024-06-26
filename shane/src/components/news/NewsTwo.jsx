import React, { useState } from "react";
import Modal from "react-modal";
import Social from "../Social";

Modal.setAppElement("#root");

const NewsTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  return (
    <div className="shane_tm_section" id="news">
      <div className="shane_tm_news">
        <div className="container">
          <div className="shane_tm_title">
            <span>placeholder</span> 
            <h3>Features</h3>
          </div>
          {/* End shane_tm_title */}
          <div className="news_list">
            <ul>
              <li data-aos="fade-right" data-aos-duration="1200">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalOne}>
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/news/thinking.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <h3 className="title" onClick={toggleModalOne}>
                      Identify Areas of Improvement
                    </h3>
                    <p className="date">
                      Understand Proficiency and Challenges
                    </p>
                  </div>
                  {/* End details */}

                  {/* START MODAL */}
                  <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModalOne}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
                    <div className="shane_tm_modalbox_news">
                      <button className="close-modal" onClick={toggleModalOne}>
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* End close icon */}
                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + "img/news/thinking.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                          {/* End image */}
                          <div className="details">
                            <h3 className="title">
                            Identify Areas of Improvement
                            </h3>
                            <p className="date">
                            Understand Proficiency and Challenges
                            </p>
                          </div>
                          {/* End details */}
                          <div className="description">
                            <p>
                            Your journey at convident starts with a placement quiz to understand proficiency and challenges. 
                            </p>
                            {/*                            <blockquote>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </blockquote>
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. We
                              encounter professionals with careers to covet and
                              lives to write books about. As Vintage decided to
                              have a closer look into fast-paced New York web
                              design realm in person, we get to acquaint with
                              most diverse and exceptionally captivating
                              personalities. As Vintage decided to have a closer
                              look into fast-paced New York web design realm in
                              person, we get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                            */}
                          </div>
                          {/* End description */}
                          <div className="news_share">
                            <Social />
                            {/* End social share */}
                          </div>
                          {/* End news share */}
                        </div>
                      </div>
                      {/* End box inner */}
                    </div>
                    {/* End modal box news */}
                  </Modal>
                  {/* End modal */}
                </div>
              </li>
              {/* End single blog */}

              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="150"
              >
                <div className="list_inner">
                  <div className="image" onClick={toggleModalTwo}>
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/news/roadmap.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <h3 className="title" onClick={toggleModalTwo}>
                      Weekly Customized Milestones
                    </h3>
                    <p className="date">
                      Stay motivated with a clear roadmap
                    </p>
                  </div>
                  {/* End details */}

                  <Modal
                    isOpen={isOpen2}
                    onRequestClose={toggleModalTwo}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
                    <div className="shane_tm_modalbox_news">
                      <button className="close-modal" onClick={toggleModalTwo}>
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* End close modal */}
                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + "img/news/roadmap.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                          {/* End image */}
                          <div className="details">
                            <h3 className="title">
                              Weekly customized milestones
                            </h3>
                            <p className="date">
                              Stay motivated with a clear roadmap
                            </p>
                          </div>
                          {/* End details */}
                          <div className="description">
                            <p>
                            Convident sets customized milestones based on your learning goals and current skills.
                            Each week, we provide the next milestone to work on, along with resource recommendations 
                            and targeted practice suggestions.
                            </p>
                            {/*
                            <blockquote>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </blockquote>
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. We
                              encounter professionals with careers to covet and
                              lives to write books about. As Vintage decided to
                              have a closer look into fast-paced New York web
                              design realm in person, we get to acquaint with
                              most diverse and exceptionally captivating
                              personalities. As Vintage decided to have a closer
                              look into fast-paced New York web design realm in
                              person, we get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                          </div>
                          {/* End description */}
                          {/*
                          </div> 
                          <div className="news_share">
                            <Social />
                            {/* End social share */}
                  
                          </div>
                          {/* End news share */}
                    
                      
                        </div>
                      </div>
                    </div>
                  </Modal>
                  {/* End modal */}
                </div>
                {/* End list inner */}
              </li>
              {/* End single blog */}

              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="list_inner">
                  <div className="image" onClick={toggleModalThree}>
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/news/practice-photo.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                  {/* END IMAGE */}

                  <div className="details">
                    <h3 className="title" onClick={toggleModalThree}>
                      Tailored Resources
                    </h3>
                    <p className="date">
                      Practice targeted to your goals 
                    </p>
                  </div>
                  {/* END DETAILS */}

                  {/* START MODAL */}
                  <Modal
                    isOpen={isOpen3}
                    onRequestClose={toggleModalThree}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
                    <div className="shane_tm_modalbox_news">
                      <button
                        className="close-modal"
                        onClick={toggleModalThree}
                      >
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* END CLOSE MODAL */}
                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + "img/news/practice-photo.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <h3 className="title">
                              Tailored Resources
                            </h3>
                            <p className="date">
                              By <a href="#">Brook Kennedy</a>{" "}
                              <span>07 April 2020</span>
                            </p>
                          </div>
                          {/* END DETAILS */}
                          <div className="description">
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                            <blockquote>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </blockquote>
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. We
                              encounter professionals with careers to covet and
                              lives to write books about. As Vintage decided to
                              have a closer look into fast-paced New York web
                              design realm in person, we get to acquaint with
                              most diverse and exceptionally captivating
                              personalities. As Vintage decided to have a closer
                              look into fast-paced New York web design realm in
                              person, we get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                          </div>
                          {/* END DESCRIPTION */}
                          <div className="news_share">
                            <Social />
                            {/* END SOCIAL SHARE */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
                {/* END LIST INNER */}
              </li>

              {/* End single blog */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTwo;
