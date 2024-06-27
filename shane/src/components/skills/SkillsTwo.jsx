import React from "react";
import Interactivescale from "./Interactivescale";
import "./skillstyles.scss";

const SkillsTwo = () => {
  return (
    <>
    
      <div className="shane_tm_section">
        <div className="shane_tm_skills">
          <div className="container">
            <div className="skills_inner">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                
                <div className="shane_tm_title">
                  <h3>Okay, how do you actually improve tones?</h3>
                </div>
                <div className="text">
                  <p>
                  The best way to fix tones is to practice consistently with <span style={{ fontWeight: 'bold' }}> native speakers </span> and use <span style={{ fontWeight: 'bold' }}>targeted exercises</span> that focus on listening and repeating the correct tones.

                  Mastering tones is the key to fluency. Use our sliders to see how each skill affects fluency perception and how you'd rank on the ACTFL/CEFR scale!
                  <br></br>
                  <br></br>
                  </p>
                </div>
                <div id="pronounciationtext" className="hiddentext">
                Pronunciation refers to how clearly and accurately someone can produce the sounds of a language. In languages like Mandarin, it's especially important to get the tones right. Tones are like musical notes that go up or down when you speak. These tones can change the meaning of words that otherwise sound the same. For example, in Mandarin, the word "ma" can mean "mother," "horse," "scold," or "hemp," depending on the tone you use. Getting the tones correct ensures that others understand you clearly and prevents confusion.
                </div>
                <div id="grammartext" className="hiddentext">
                Grammar accuracy involves using the rules of the language correctly. This includes things like forming sentences properly, using the right verb forms, and choosing the correct words for the right context. For example, in English, saying "She go to the store" instead of "She goes to the store" is a grammar mistake. High grammar accuracy means making fewer mistakes like this, which helps you communicate more clearly and makes you sound more fluent and native-like.
                </div>
                <div id="vocabtext" className="hiddentext">
                Vocabulary range refers to how many words you know and can use correctly. A large vocabulary allows you to express yourself more precisely and in more detail. For instance, instead of always saying "good," you might use words like "great," "amazing," or "fantastic" to describe a positive experience. For example, if someone asks you how your day was, instead of just saying "It was good," you could say "It was fantastic! I had a wonderful time at the park and then enjoyed a delicious dinner." This not only makes your communication more engaging but make you sound less like a dodo bird and more like a kiwi!


                </div>
              </div>
              {/* End .left */}

              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
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
                    <Interactivescale />
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

export default SkillsTwo;
