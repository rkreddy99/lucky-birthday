import './App.css';
import { useState } from 'react';
import happy from "./images/happy.svg"
import unhappy from "./images/unhappy.svg"

function App() {
  const [birthday, setBirthday] = useState("")
  const [luckynumber, setLuckyNumber] = useState("")
  const [lucky, setLucky] = useState("")

  function changeBirthday(event) {
    event.preventDefault();
    console.log(event.target.value)
    setBirthday(event.target.value);
  }

  function changeLuckyNumber(event) {
    event.preventDefault();
    setLuckyNumber(event.target.value);
  }

  function showLuck(event) {
    event.preventDefault();
    let date = birthday.split("-");
    let sum = 0;
    date.map((string) => {
      //to access each number in string and add into sum
      for (let i = 0; i < string.length; i++) {
        sum = sum + Number(string[i]);
      }
      return null;
    });
    if (sum%luckynumber === 0) {
      setLucky(true)
    } else {
      setLucky(false)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Is your birth-date lucky?</h1>
      </header>

      <div className="section">
        <div className="content">
          <h3>Enter your birth-date and lucky-number to continue...</h3>
          <hr/>
          <form onSubmit={showLuck}>
            <span>Birth Date - </span>
            <input
              className="birthday"
              type="date"
              placeholder="Select your birth date"
              onChange={changeBirthday}
              value={birthday}
              required
            />
            <br/>
            <span>Lucky Number - </span>
            <input
              className="lucky"
              type="number"
              placeholder="Enter your lucky number"
              onChange={changeLuckyNumber}
              value={luckynumber}
              required
            />
            <br/>
            <button type='submit'>Check</button>
          </form>
          <hr/>
          {(lucky === false) && 
            <div className="output">
              <p>It's unlucky, but you can change your lucky number right 😉!!!</p>
              <img src={unhappy} alt="unhappy-img" />
            </div>
          }
          {(lucky === true) && 
            <div className="output">
              <p>It's lucky, yay 🥳!!!</p>
              <img src={happy} alt="happy-img" />
            </div>
          }
        </div>
      </div>

      <footer>
        <div>
            <span className="footerLink github">
              <a href="https://github.com/rkreddy99">
                <i className="fab fa-github"></i>
              </a>
            </span>
            <span className="footerLink twitter">
              <a href="https://twitter.com/rkreddy99778320">
                <i className="fab fa-twitter"></i>
              </a>
            </span>
            <span className="footerLink linkedin">
              <a href="https://www.linkedin.com/in/rkreddy99">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
            <span className="footerLink portfolio">
              <a href="https://rkreddy99-portfolio.netlify.app/">
                <i className="fas fa-briefcase"></i>
              </a>
            </span>
            </div>
      </footer>
    </div>
  );
}

export default App;
