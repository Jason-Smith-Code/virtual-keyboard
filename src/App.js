import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

// replace the long words with icons

function App() {
const iconSize = "lg";

  return (
    <div id="App">
      <form>
        <textarea
        value="Hello there, this is some text in a text area"
        >
          
        </textarea>
      </form>
      <div id="keyboard-letters">
        <button id="Q">Q</button>
        <button id="W">W</button>
        <button id="E">E</button>
        <button id="R">R</button>
        <button id="T">T</button>
        <button id="Y">Y</button>
        <button id="U">U</button>
        <button id="I">I</button>
        <button id="O">O</button>
        <button id="P">P</button>
        <button id="A">A</button>
        <button id="S">S</button>
        <button id="D">D</button>
        <button id="F">F</button>
        <button id="G">G</button>
        <button id="H">H</button>
        <button id="J">J</button>
        <button id="K">K</button>
        <button id="L">L</button>
        <button id="Capital"><FontAwesomeIcon className="icon" size={iconSize} icon={faAngleUp} /></button>
        <button id="Z">Z</button>
        <button id="X">X</button>
        <button id="C">C</button>
        <button id="V">V</button>
        <button id="B">B</button>
        <button id="N">N</button>
        <button id="M">M</button>
        <button id="Delete-keyboard"><FontAwesomeIcon className="icon" size={iconSize} icon={faDeleteLeft} /></button>
        <button id="Numbers-link">123</button>
        <button id="Space-keyboard">Space</button>
      </div>
      <div id="keyboard-numbers">
        <button id="One">1</button>
        <button id="Two">2</button>
        <button id="Three">3</button>
        <button id="Four">4</button>
        <button id="Five">5</button>
        <button id="Six">6</button>
        <button id="Seven">7</button>
        <button id="Eight">8</button>
        <button id="Nine">9</button>
        <button id="Zero">0</button>
        <button id="At">@</button>
        <button id="Hash">#</button>
        <button id="Dollar">$</button>
        <button id="Percent">%</button>
        <button id="Ampersand">&amp;</button>
        <button id="Star">*</button>
        <button id="Minus">-</button>
        <button id="Plus">+</button>
        <button id="Left-bracket">(</button>
        <button id="Right-bracket">)</button>
        <button id="Alt">ALT</button>
        <button id="Exclamation">!</button>
        <button id="Double-quote">"</button>
        <button id="Single-quote">'</button>
        <button id="Colon">:</button>
        <button id="Semi-colon">;</button>
        <button id="Forward-slash">/</button>
        <button id="Question">?</button>
        <button id="Ampersand">&amp;</button>
        <button id="Delete-number"><FontAwesomeIcon className="icon" size={iconSize} icon={faDeleteLeft} /></button>
        <button id="Comma">,</button>
        <button id="Space-number">SPACE</button>
        <button id="Dot">.</button>
      </div>
    </div>
  );
}

export default App;
