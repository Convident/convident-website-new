import React from 'react';
import {useState} from 'react';


const ButtonRow = ({row, onButtonClick}) => {
    const [activeButton, setActiveButton] = useState(5);
    

  
    const handleClick = (index) => {
      setActiveButton(index); // Set the clicked button as active
      onButtonClick(row, index);
    };
    
  
    const buttonLabels = ['0', '1', '2', '3', '4', '5'];
  
    return (
      <div>
        <div >

        {buttonLabels.map((label, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{ fontWeight: activeButton === index ? 'bold' : 'normal', padding: "2px", marginRight: "60px"}}
          >
            {label}
          </button>
        ))}
      </div>
      <div>
        <p> Hello </p>

      </div>
      </div>
    );
  };

const Results = ({row1result, row2result, row3result}) => {
    const resultnumber = ((0.5 * (row1result)) + (0.25 * (row2result)) + (0.25*(row3result)))*3;
    const levels = ["Very Elementary", "Elementary", "Elementary Intermediate", "Intermediate", "Intermediate Advanced", "Advanced", "Fluent"];
    const range = [0, 2, 4, 6, 8, 10, 12, 10000];


    return (<div>
        <p> {resultnumber} </p>
        <table style={{border: "3px solid black", textAlign: "center"}}>
      {levels.map((word, index) => (
        <tr key={index} style={{ border: "3px solid black", margin: '0 10px', cursor: 'pointer' }}>
          {(resultnumber >= range[index]) && (resultnumber < range[index+1]) ? <strong>{word}</strong> : word}
            <br></br>
        </tr>
        
        
      ))}
      </table>
    </div>);
}

const Interactivescale = () => {
    const [activeButtons, setActiveButtons] = useState({});

    const handleButtonClick = (row, buttonIndex) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      [row]: buttonIndex,
    }));
   };

    return (
        <div>
            <p>
                Pronounciation (Tone)
            </p>
            <ButtonRow id="pronounciation" row="row1" onButtonClick={handleButtonClick}/>
            <p>Active button in Row 1: {activeButtons.row1 !== undefined ? activeButtons.row1 + 1 : 'None'}
                </p>
                <p>
                Grammar Accuracy
            </p>
            <div className="tokyo_progress">
                  <div className="progress_inner">
                    <span>
                      <span className="label">Grammar Accuracy</span>
                      <span className="number">{activeButtons.row1}</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: activeButtons.row1*20 + "%"}}
                        ></div>
                      </div>
                    </div>
                  </div>
                  </div>
            
            <ButtonRow id="grammar" row="row2" onButtonClick={handleButtonClick} />
            <p>Active button in Row 2: {activeButtons.row2 !== undefined ? activeButtons.row2 + 1 : 'None'}
                </p>
            <ButtonRow id="vocab" row="row3" onButtonClick={handleButtonClick} />
            <p>
                Vocabulary Range
            </p>
            <p>Active button in Row 3: {activeButtons.row3 !== undefined ? activeButtons.row3 + 1 : 'None'}
                </p>
            <p> Results </p>
            <Results row1result={activeButtons.row1} row2result={activeButtons.row2} row3result={activeButtons.row3}/>
        </div>
    
    


    );
};


export default Interactivescale;








