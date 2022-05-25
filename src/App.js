import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useState} from 'react';
// replace the long words with icons

function App() {
  const iconSize = "lg";
  const [text, setText] = useState("");
  const [capital, setCapital] = useState("false")

  const addCharacter = (e) => {
    // push the value of the button pressed, to the text area
    setText(text + e.target.value)
  }

  const removeCharacter = () => {
    // push the value of the button pressed, to the text area
    setText(text.slice(0, -1))
  }

  const capitalize = () => {
    setCapital(!capital)
  }

  document.addEventListener('click', function handleClick(event) {
    // fixed bug where it was possible to add class to the wrong element
    const hasClass = event.target.classList.contains('hoverable');
    if (hasClass) {
      event.target.classList.add('pressed');
      event.target.classList.remove('hoverable');
      setTimeout(() => { 
        event.target.classList.remove('pressed');
        event.target.classList.add('hoverable');
      }, 250);
    }
  });


  return (
    <div id="App">
      <form>
        <textarea
        value={text}
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
        <div className="grid-item" id="Desktop-One">
          <button onClick={addCharacter} value="1" className="hoverable">1</button>
        </div>
        <div className="grid-item" id="Desktop-Two">
          <button onClick={addCharacter} value="2" className="hoverable">2</button>
        </div>
        <div className="grid-item" id="Desktop-Three">
          <button onClick={addCharacter} value="3" className="hoverable">3</button>
        </div>
        <div className="grid-item" id="Desktop-Four">
          <button onClick={addCharacter} value="4" className="hoverable">4</button>
        </div>
        <div className="grid-item" id="Desktop-Five">
          <button onClick={addCharacter} value="5" className="hoverable">5</button>
        </div>
        <div className="grid-item" id="Desktop-Six">
          <button onClick={addCharacter} value="6" className="hoverable">6</button>
        </div>
        <div className="grid-item" id="Desktop-Seven">
          <button onClick={addCharacter} value="7" className="hoverable">7</button>
        </div>
        <div className="grid-item" id="Desktop-Eight">
          <button onClick={addCharacter} value="8" className="hoverable">8</button>
        </div>
        <div className="grid-item" id="Desktop-Nine">
          <button onClick={addCharacter} value="9" className="hoverable">9</button>
        </div>
        <div className="grid-item" id="Desktop-Zero">
          <button onClick={addCharacter} value="0" className="hoverable">0</button>
        </div>
        <div className="grid-item" id="Desktop-Minus">
          <button onClick={addCharacter} value="-" className="hoverable">-</button>
        </div>
        <div className="grid-item" id="Desktop-Plus">
          <button onClick={addCharacter} value="+" className="hoverable">+</button>
        </div>
        <div className="grid-item" id="Desktop-Delete">
          <button onClick={removeCharacter} className="hoverable">
            <FontAwesomeIcon className="icon" size={iconSize} icon={faDeleteLeft}/>
          </button>
        </div>
        {capital ? 
        <>
        <div className="grid-item" id="Desktop-Q">
          <button onClick={addCharacter} value="q" className="hoverable">q</button>
        </div> 
        <div className="grid-item" id="Desktop-W">
          <button onClick={addCharacter} value="w" className="hoverable">w</button>
        </div>
        <div className="grid-item" id="Desktop-E">
          <button onClick={addCharacter} value="e" className="hoverable">e</button>
        </div>
        <div className="grid-item" id="Desktop-R">
          <button onClick={addCharacter} value="r" className="hoverable">r</button>
        </div>
        <div className="grid-item" id="Desktop-T">
          <button onClick={addCharacter} value="t" className="hoverable">t</button>
        </div>
        <div className="grid-item" id="Desktop-Y">
          <button onClick={addCharacter} value="y" className="hoverable">y</button>
        </div>
        <div className="grid-item" id="Desktop-U">
          <button onClick={addCharacter} value="u" className="hoverable">u</button>
        </div>
        <div className="grid-item" id="Desktop-I">
          <button onClick={addCharacter} value="i" className="hoverable">i</button>
        </div>
        <div className="grid-item" id="Desktop-O">
          <button onClick={addCharacter} value="o" className="hoverable">o</button>
        </div>
        <div className="grid-item" id="Desktop-P">
          <button onClick={addCharacter} value="p" className="hoverable">p</button>
        </div>
        <div className="grid-item" id="Desktop-A">
          <button onClick={addCharacter} value="a" className="hoverable">a</button>
        </div>
        <div className="grid-item" id="Desktop-S">
          <button onClick={addCharacter} value="s" className="hoverable">s</button>
        </div>
        <div className="grid-item" id="Desktop-D">
          <button onClick={addCharacter} value="d" className="hoverable">d</button>
        </div>
        <div className="grid-item" id="Desktop-F">
          <button onClick={addCharacter} value="f" className="hoverable">f</button>
        </div>
        <div className="grid-item" id="Desktop-G">
          <button onClick={addCharacter} value="g" className="hoverable">g</button>
        </div>
        <div className="grid-item" id="Desktop-H">
          <button onClick={addCharacter} value="h" className="hoverable">h</button>
        </div>
        <div className="grid-item" id="Desktop-J">
          <button onClick={addCharacter} value="j" className="hoverable">j</button>
        </div>
        <div className="grid-item" id="Desktop-K">
          <button onClick={addCharacter} value="k" className="hoverable">k</button>
        </div>
        <div className="grid-item" id="Desktop-L">
          <button onClick={addCharacter} value="l" className="hoverable">l</button>
        </div>
        <div className="grid-item" id="Desktop-Semi-colon">
          <button onClick={addCharacter} value=":" className="hoverable">:</button>
        </div>
        <div className="grid-item" id="Desktop-Single-quote">
          <button onClick={addCharacter} value="@" className="hoverable">@</button>
        </div>
        <div className="grid-item" id="Desktop-Hash">
          <button onClick={addCharacter} value="#" className="hoverable">#</button>
        </div>
        <div className="grid-item" id="Desktop-Z">
          <button onClick={addCharacter} value="z" className="hoverable">z</button>
        </div>
        <div className="grid-item" id="Desktop-X">
          <button onClick={addCharacter} value="x" className="hoverable">x</button>
        </div>
        <div className="grid-item" id="Desktop-C">
          <button onClick={addCharacter} value="c" className="hoverable">c</button>
        </div>
        <div className="grid-item" id="Desktop-V">
          <button onClick={addCharacter} value="v" className="hoverable">v</button>
        </div>
        <div className="grid-item" id="Desktop-B">
          <button onClick={addCharacter} value="b" className="hoverable">b</button>
        </div>
        <div className="grid-item" id="Desktop-N">
          <button onClick={addCharacter} value="n"className="hoverable">n</button>
        </div>
        <div className="grid-item" id="Desktop-M">
          <button onClick={addCharacter} value="m" className="hoverable">m</button>
        </div>
        <div className="grid-item" id="Desktop-Comma">
          <button onClick={addCharacter} value="," className="hoverable">,</button>
        </div>
        <div className="grid-item" id="Desktop-Dot">
          <button onClick={addCharacter} value="." className="hoverable">.</button>
        </div>
        <div className="grid-item" id="Desktop-Back-slash">
          <button onClick={addCharacter} value="?" className="hoverable">?</button>
        </div>
      </>
        : 
        <>
          <div className="grid-item" id="Desktop-Q">
            <button onClick={addCharacter} value="Q" className="hoverable">Q</button>
          </div>
          <div className="grid-item" id="Desktop-W">
            <button onClick={addCharacter} value="W" className="hoverable">W</button>
          </div>
          <div className="grid-item" id="Desktop-E">
            <button onClick={addCharacter} value="E" className="hoverable">E</button>
          </div>
          <div className="grid-item" id="Desktop-R">
            <button onClick={addCharacter} value="R" className="hoverable">R</button>
          </div>
          <div className="grid-item" id="Desktop-T">
            <button onClick={addCharacter} value="T" className="hoverable">T</button>
          </div>
          <div className="grid-item" id="Desktop-Y">
            <button onClick={addCharacter} value="Y" className="hoverable">Y</button>
          </div>
          <div className="grid-item" id="Desktop-U">
            <button onClick={addCharacter} value="U" className="hoverable">U</button>
          </div>
          <div className="grid-item" id="Desktop-I">
            <button onClick={addCharacter} value="I" className="hoverable">I</button>
          </div>
          <div className="grid-item" id="Desktop-O">
            <button onClick={addCharacter} value="O" className="hoverable">O</button>
          </div>
          <div className="grid-item" id="Desktop-P">
            <button onClick={addCharacter} value="P" className="hoverable">P</button>
          </div>
          <div className="grid-item" id="Desktop-A">
            <button onClick={addCharacter} value="A" className="hoverable">A</button>
          </div>
          <div className="grid-item" id="Desktop-S">
            <button onClick={addCharacter} value="S" className="hoverable">S</button>
          </div>
          <div className="grid-item" id="Desktop-D">
            <button onClick={addCharacter} value="D" className="hoverable">D</button>
          </div>
          <div className="grid-item" id="Desktop-F">
            <button onClick={addCharacter} value="F" className="hoverable">F</button>
          </div>
          <div className="grid-item" id="Desktop-G">
            <button onClick={addCharacter} value="G" className="hoverable">G</button>
          </div>
          <div className="grid-item" id="Desktop-H">
            <button onClick={addCharacter} value="H" className="hoverable">H</button>
          </div>
          <div className="grid-item" id="Desktop-J">
            <button onClick={addCharacter} value="J" className="hoverable">J</button>
          </div>
          <div className="grid-item" id="Desktop-K">
            <button onClick={addCharacter} value="K" className="hoverable">K</button>
          </div>
          <div className="grid-item" id="Desktop-L">
            <button onClick={addCharacter} value="L" className="hoverable">L</button>
          </div>
          <div className="grid-item" id="Desktop-Semi-colon">
            <button onClick={addCharacter} value=";" className="hoverable">;</button>
          </div>
          <div className="grid-item" id="Desktop-Single-quote">
            <button onClick={addCharacter} value="'" className="hoverable">'</button>
          </div>
          <div className="grid-item" id="Desktop-Hash">
            <button onClick={addCharacter} value="#" className="hoverable">#</button>
          </div>
          <div className="grid-item" id="Desktop-Z">
            <button onClick={addCharacter} value="Z" className="hoverable">Z</button>
          </div>
          <div className="grid-item" id="Desktop-X">
            <button onClick={addCharacter} value="X" className="hoverable">X</button>
          </div>
          <div className="grid-item" id="Desktop-C">
            <button onClick={addCharacter} value="C" className="hoverable">C</button>
          </div>
          <div className="grid-item" id="Desktop-V">
            <button onClick={addCharacter} value="V" className="hoverable">V</button>
          </div>
          <div className="grid-item" id="Desktop-B">
            <button onClick={addCharacter} value="B" className="hoverable">B</button>
          </div>
          <div className="grid-item" id="Desktop-N">
            <button onClick={addCharacter} value="N"className="hoverable">N</button>
          </div>
          <div className="grid-item" id="Desktop-M">
            <button onClick={addCharacter} value="M" className="hoverable">M</button>
          </div>
          <div className="grid-item" id="Desktop-Comma">
            <button onClick={addCharacter} value="," className="hoverable">,</button>
          </div>
          <div className="grid-item" id="Desktop-Dot">
            <button onClick={addCharacter} value="." className="hoverable">.</button>
          </div>
          <div className="grid-item" id="Desktop-Back-slash">
            <button onClick={addCharacter} value="/" className="hoverable">/</button>
          </div>
        </>
        }
        <div className="grid-item" id="Desktop-Captial">
          <button onClick={capitalize} className="hoverable">
            <FontAwesomeIcon className="icon" size={iconSize} icon={faAngleUp} />
          </button>
        </div>
        <div className="grid-item" id="Desktop-Space">
          <button onClick={addCharacter} value=" " className="hoverable">Space</button>
        </div>
      </div>
    </div>
  );
}

export default App;
