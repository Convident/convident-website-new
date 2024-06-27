import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialTwo() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <ul>
      <Slider {...settings}>
        <li className="item">
          <div className="texts">
            <p>
            In classroom settings, teachers often focus class time primarily on vocabulary and grammar structures. However, mastering tones is crucial as they can change the meaning of words. Convident supplements classroom learning by providing targeted practice to improve tonal accuracy, helping students achieve a more comprehensive understanding of the language.
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/1.jpg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Classroom Students</span>
                </h3>
                <h3 className="job">
                  <span></span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}

        <li className="item">
          <div className="texts">
            <p>
            Many heritage language learners may have grown up listening to their heritage language but still struggle with speaking tones due to interference from their first language, often English. Convident helps these individuals by focusing on tonal accuracy, enabling them to learn their heritage language more fluently and accurately.
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/2.jpg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Heritage Learners</span>
                </h3>
                <h3 className="job">
                  <span></span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}

        <li className="item">
          <div className="texts">
            <p>
            In our increasingly globalized society, learning a second language is vital for bridging communication gaps. For professionals learning Chinese (or any tonal language), accurate tone usage is crucial during negotiations and presentations to ensure their message is clearly understood. Convident helps professionals master tones, enhancing their ability to communicate effectively in critical settings. i.e.
Think how bad it would be if your pharmacist gave you the wrong medication due to a mispronunciation. 


            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/3.jpg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Professional Development</span>
                </h3>
                <h3 className="job">
                  <span></span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}
        <li className="item">
          <div className="texts">
            <p>
            For travelers to countries with tonal languages, mastering tones is key to understanding nuances and effectively communicating needs. Convident helps travelers achieve tonal accuracy, enriching their travel experiences, allowing them to enjoy their experience more! 
Being able to sound native also allows the language learners to explore further possibilities in life and career goals, as they consider the things that matter most to them in their lives. 
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/2.jpg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Frequent Travelers</span>
                </h3>
                <h3 className="job">
                  <span></span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}
      </Slider>
    </ul>
  );
}
