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
      <div id="Mobile-keyboard-letters">
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
      <div id="Mobile-keyboard-numbers">
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

      <div id="Desktop-keyboard">
        {/* ADD SYMBOLS ASWELL! */}
        <div className="grid-item" id="Desktop-One">    <button className="hoverable">1</button></div>
        <div className="grid-item" id="Desktop-Two">    <button className="hoverable">2</button></div>
        <div className="grid-item" id="Desktop-Three">  <button className="hoverable">3</button></div>
        <div className="grid-item" id="Desktop-Four">   <button className="hoverable">4</button></div>
        <div className="grid-item" id="Desktop-Five">   <button className="hoverable">5</button></div>
        <div className="grid-item" id="Desktop-Six">    <button className="hoverable">6</button></div>
        <div className="grid-item" id="Desktop-Seven">  <button className="hoverable">7</button></div>
        <div className="grid-item" id="Desktop-Eight">  <button className="hoverable">8</button></div>
        <div className="grid-item" id="Desktop-Nine">   <button className="hoverable">9</button></div>
        <div className="grid-item" id="Desktop-Zero">   <button className="hoverable" >0</button></div>
        <div className="grid-item" id="Desktop-Minus">  <button className="hoverable">-</button></div>
        <div className="grid-item" id="Desktop-Plus">   <button className="hoverable">+</button></div>
        <div className="grid-item" id="Desktop-Delete"> <button className="hoverable"><FontAwesomeIcon className="icon" size={iconSize} icon={faDeleteLeft}/></button></div>
        <div className="grid-item" id="Desktop-Q">      <button className="hoverable">Q</button></div>
        <div className="grid-item" id="Desktop-W">      <button className="hoverable">W</button></div>
        <div className="grid-item" id="Desktop-E">      <button className="hoverable">E</button></div>
        <div className="grid-item" id="Desktop-R">      <button className="hoverable">R</button></div>
        <div className="grid-item" id="Desktop-T">      <button className="hoverable">T</button></div>
        <div className="grid-item" id="Desktop-Y">      <button className="hoverable">Y</button></div>
        <div className="grid-item" id="Desktop-U">      <button className="hoverable">U</button></div>
        <div className="grid-item" id="Desktop-I">      <button className="hoverable">I</button></div>
        <div className="grid-item" id="Desktop-O">      <button className="hoverable">O</button></div>
        <div className="grid-item" id="Desktop-P">      <button className="hoverable">P</button></div>
        <div className="grid-item" id="Desktop-A">      <button className="hoverable">A</button></div>
        <div className="grid-item" id="Desktop-S">      <button className="hoverable">S</button></div>
        <div className="grid-item" id="Desktop-D">      <button className="hoverable">D</button></div>
        <div className="grid-item" id="Desktop-F">      <button className="hoverable">F</button></div>
        <div className="grid-item" id="Desktop-G">      <button className="hoverable">G</button></div>
        <div className="grid-item" id="Desktop-H">      <button className="hoverable">H</button></div>
        <div className="grid-item" id="Desktop-J">      <button className="hoverable">J</button></div>
        <div className="grid-item" id="Desktop-K">      <button className="hoverable">K</button></div>
        <div className="grid-item" id="Desktop-L">      <button className="hoverable">L</button></div>
        <div className="grid-item" id="Desktop-Semi-colon"><button className="hoverable">;</button></div>
        <div className="grid-item" id="Desktop-Single-quote"><button className="hoverable">'</button></div>
        <div className="grid-item" id="Desktop-Hash">   <button  className="hoverable">#</button></div>
        <div className="grid-item" id="Desktop-Z">      <button  className="hoverable">Z</button></div>
        <div className="grid-item" id="Desktop-X">      <button  className="hoverable">X</button></div>
        <div className="grid-item" id="Desktop-C">      <button className="hoverable">C</button></div>
        <div className="grid-item" id="Desktop-V">      <button className="hoverable">V</button></div>
        <div className="grid-item" id="Desktop-B">      <button className="hoverable">B</button></div>
        <div className="grid-item" id="Desktop-N">      <button className="hoverable">N</button></div>
        <div className="grid-item" id="Desktop-M">      <button  className="hoverable">M</button></div>
        <div className="grid-item" id="Desktop-Comma">  <button className="hoverable">,</button></div>
        <div className="grid-item" id="Desktop-Dot">    <button className="hoverable">.</button></div>
        <div className="grid-item" id="Desktop-Back-slash"><button className="hoverable">/</button></div>
        <div className="grid-item" id="Desktop-Captial"><button  className="hoverable"><FontAwesomeIcon className="icon" size={iconSize} icon={faAngleUp} /></button></div>
        <div className="grid-item" id="Desktop-Space">  <button className="hoverable">Space</button></div>
      </div>
    </div>
  );
}

export default App;
