import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function App() {
  const iconSize = "lg";
  const [text, setText] = useState("");
  const [capital, setCapital] = useState("false");
  const [numbers, setNumbers] = useState("false");

  const addCharacter = (e) => {
    // push the value of the button pressed, to the text area
    setText(text + e.target.value);
  };

  const removeCharacter = () => {
    // remove the last character in the text string
    setText(text.slice(0, -1));
  };

  const capitalize = () => {
    setCapital(!capital);
  };

  const alternateMobileKeys = () => {
    setNumbers(!numbers);
  };

  document.addEventListener("click", function handleClick(event) {
    // fixed bug where it was possible to add class to the wrong element
    const hasClass = event.target.classList.contains("hoverable");
    if (hasClass) {
      event.target.classList.add("pressed");
      event.target.classList.remove("hoverable");
      setTimeout(() => {
        event.target.classList.remove("pressed");
        event.target.classList.add("hoverable");
      }, 250);
    }
  });

  return (
    <div id="App">
      <form>
        <textarea autoFocus value={text}></textarea>
      </form>
      {!numbers ? (
        <div id="Mobile-keyboard-numbers">
          <button onClick={addCharacter} value="1" id="One">
            1
          </button>
          <button onClick={addCharacter} value="2" id="Two">
            2
          </button>
          <button onClick={addCharacter} value="3" id="Three">
            3
          </button>
          <button onClick={addCharacter} value="4" id="Four">
            4
          </button>
          <button onClick={addCharacter} value="5" id="Five">
            5
          </button>
          <button onClick={addCharacter} value="6" id="Six">
            6
          </button>
          <button onClick={addCharacter} value="7" id="Seven">
            7
          </button>
          <button onClick={addCharacter} value="8" id="Eight">
            8
          </button>
          <button onClick={addCharacter} value="9" id="Nine">
            9
          </button>
          <button onClick={addCharacter} value="0" id="Zero">
            0
          </button>
          <button onClick={addCharacter} value="@" id="At">
            @
          </button>
          <button onClick={addCharacter} value="#" id="Hash">
            #
          </button>
          <button onClick={addCharacter} value="$" id="Dollar">
            $
          </button>
          <button onClick={addCharacter} value="%" id="Percent">
            %
          </button>
          <button onClick={addCharacter} value="&amp;" id="Ampersand">
            &amp;
          </button>
          <button onClick={addCharacter} value="*" id="Star">
            *
          </button>
          <button onClick={addCharacter} value="-" id="Minus">
            -
          </button>
          <button onClick={addCharacter} value="+" id="Plus">
            +
          </button>
          <button onClick={addCharacter} value="(" id="Left-bracket">
            (
          </button>
          <button onClick={addCharacter} value=")" id="Right-bracket">
            )
          </button>
          <button onClick={alternateMobileKeys} id="Alt">
            abc
          </button>
          <button onClick={addCharacter} value="!" id="Exclamation">
            !
          </button>
          <button onClick={addCharacter} value='"' id="Double-quote">
            "
          </button>
          <button onClick={addCharacter} value="'" id="Single-quote">
            '
          </button>
          <button onClick={addCharacter} value=":" id="Colon">
            :
          </button>
          <button onClick={addCharacter} value=";" id="Semi-colon">
            ;
          </button>
          <button onClick={addCharacter} value="/" id="Forward-slash">
            /
          </button>
          <button onClick={addCharacter} value="?" id="Question">
            ?
          </button>
          <button onClick={removeCharacter} id="Delete-number">
            <FontAwesomeIcon
              className="icon"
              size={iconSize}
              icon={faDeleteLeft}
            />
          </button>
          <button onClick={addCharacter} value="," id="Comma">
            ,
          </button>
          <button onClick={addCharacter} value=" " id="Space-number">
            SPACE
          </button>
          <button onClick={addCharacter} value="." id="Dot">
            .
          </button>
        </div>
      ) : (
        <div id="Mobile-keyboard-letters">
          {capital ? (
            <>
              <button onClick={addCharacter} value="Q" id="Q">
                Q
              </button>
              <button onClick={addCharacter} value="W" id="W">
                W
              </button>
              <button onClick={addCharacter} value="E" id="E">
                E
              </button>
              <button onClick={addCharacter} value="R" id="R">
                R
              </button>
              <button onClick={addCharacter} value="T" id="T">
                T
              </button>
              <button onClick={addCharacter} value="Y" id="Y">
                Y
              </button>
              <button onClick={addCharacter} value="U" id="U">
                U
              </button>
              <button onClick={addCharacter} value="I" id="I">
                I
              </button>
              <button onClick={addCharacter} value="O" id="O">
                O
              </button>
              <button onClick={addCharacter} value="P" id="P">
                P
              </button>
              <button onClick={addCharacter} value="A" id="A">
                A
              </button>
              <button onClick={addCharacter} value="S" id="S">
                S
              </button>
              <button onClick={addCharacter} value="D" id="D">
                D
              </button>
              <button onClick={addCharacter} value="F" id="F">
                F
              </button>
              <button onClick={addCharacter} value="G" id="G">
                G
              </button>
              <button onClick={addCharacter} value="H" id="H">
                H
              </button>
              <button onClick={addCharacter} value="J" id="J">
                J
              </button>
              <button onClick={addCharacter} value="K" id="K">
                K
              </button>
              <button onClick={addCharacter} value="L" id="L">
                L
              </button>
              <button onClick={capitalize} id="Capital">
                <FontAwesomeIcon
                  className="icon"
                  size={iconSize}
                  icon={faAngleDown}
                />
              </button>
              <button onClick={addCharacter} value="Z" id="Z">
                Z
              </button>
              <button onClick={addCharacter} value="X" id="X">
                X
              </button>
              <button onClick={addCharacter} value="C" id="C">
                C
              </button>
              <button onClick={addCharacter} value="V" id="V">
                V
              </button>
              <button onClick={addCharacter} value="B" id="B">
                B
              </button>
              <button onClick={addCharacter} value="N" id="N">
                N
              </button>
              <button onClick={addCharacter} value="M" id="M">
                M
              </button>
              <button onClick={removeCharacter} id="Delete-keyboard">
                <FontAwesomeIcon
                  className="icon"
                  size={iconSize}
                  icon={faDeleteLeft}
                />
              </button>
              <button onClick={alternateMobileKeys} id="Numbers-link">
                123
              </button>
              <button onClick={addCharacter} value=" " id="Space-keyboard">
                Space
              </button>
            </>
          ) : (
            <>
              <button onClick={addCharacter} value="q" id="Q">
                q
              </button>
              <button onClick={addCharacter} value="w" id="W">
                w
              </button>
              <button onClick={addCharacter} value="e" id="E">
                e
              </button>
              <button onClick={addCharacter} value="r" id="R">
                r
              </button>
              <button onClick={addCharacter} value="t" id="T">
                t
              </button>
              <button onClick={addCharacter} value="y" id="Y">
                y
              </button>
              <button onClick={addCharacter} value="u" id="U">
                u
              </button>
              <button onClick={addCharacter} value="i" id="I">
                i
              </button>
              <button onClick={addCharacter} value="o" id="O">
                o
              </button>
              <button onClick={addCharacter} value="p" id="P">
                p
              </button>
              <button onClick={addCharacter} value="a" id="A">
                a
              </button>
              <button onClick={addCharacter} value="s" id="S">
                s
              </button>
              <button onClick={addCharacter} value="d" id="D">
                d
              </button>
              <button onClick={addCharacter} value="f" id="F">
                f
              </button>
              <button onClick={addCharacter} value="g" id="G">
                g
              </button>
              <button onClick={addCharacter} value="h" id="H">
                h
              </button>
              <button onClick={addCharacter} value="j" id="J">
                j
              </button>
              <button onClick={addCharacter} value="k" id="K">
                k
              </button>
              <button onClick={addCharacter} value="l" id="L">
                l
              </button>
              <button onClick={capitalize} id="Capital">
                <FontAwesomeIcon
                  className="icon"
                  size={iconSize}
                  icon={faAngleUp}
                />
              </button>
              <button onClick={addCharacter} value="z" id="Z">
                z
              </button>
              <button onClick={addCharacter} value="x" id="X">
                x
              </button>
              <button onClick={addCharacter} value="c" id="C">
                c
              </button>
              <button onClick={addCharacter} value="v" id="V">
                v
              </button>
              <button onClick={addCharacter} value="b" id="B">
                b
              </button>
              <button onClick={addCharacter} value="n" id="N">
                n
              </button>
              <button onClick={addCharacter} value="m" id="M">
                m
              </button>
              <button onClick={removeCharacter} id="Delete-keyboard">
                <FontAwesomeIcon
                  className="icon"
                  size={iconSize}
                  icon={faDeleteLeft}
                />
              </button>
              <button onClick={alternateMobileKeys} id="Numbers-link">
                123
              </button>
              <button onClick={addCharacter} value=" " id="Space-keyboard">
                Space
              </button>
            </>
          )}
        </div>
      )}

      <div id="Desktop-keyboard">
        {capital ? (
          <>
            <div className="grid-item" id="Desktop-One">
              <button onClick={addCharacter} value="1" className="hoverable">
                1
              </button>
            </div>
            <div className="grid-item" id="Desktop-Two">
              <button onClick={addCharacter} value="2" className="hoverable">
                2
              </button>
            </div>
            <div className="grid-item" id="Desktop-Three">
              <button onClick={addCharacter} value="3" className="hoverable">
                3
              </button>
            </div>
            <div className="grid-item" id="Desktop-Four">
              <button onClick={addCharacter} value="4" className="hoverable">
                4
              </button>
            </div>
            <div className="grid-item" id="Desktop-Five">
              <button onClick={addCharacter} value="5" className="hoverable">
                5
              </button>
            </div>
            <div className="grid-item" id="Desktop-Six">
              <button onClick={addCharacter} value="6" className="hoverable">
                6
              </button>
            </div>
            <div className="grid-item" id="Desktop-Seven">
              <button onClick={addCharacter} value="7" className="hoverable">
                7
              </button>
            </div>
            <div className="grid-item" id="Desktop-Eight">
              <button onClick={addCharacter} value="8" className="hoverable">
                8
              </button>
            </div>
            <div className="grid-item" id="Desktop-Nine">
              <button onClick={addCharacter} value="9" className="hoverable">
                9
              </button>
            </div>
            <div className="grid-item" id="Desktop-Zero">
              <button onClick={addCharacter} value="0" className="hoverable">
                0
              </button>
            </div>
            <div className="grid-item" id="Desktop-Minus">
              <button onClick={addCharacter} value="-" className="hoverable">
                -
              </button>
            </div>
            <div className="grid-item" id="Desktop-Plus">
              <button onClick={addCharacter} value="+" className="hoverable">
                +
              </button>
            </div>
            <div className="grid-item" id="Desktop-Delete">
              <button onClick={removeCharacter} className="hoverable">
                <FontAwesomeIcon
                  className="icon"
                  size={iconSize}
                  icon={faDeleteLeft}
                />
              </button>
            </div>
            <div className="grid-item" id="Desktop-Q">
              <button onClick={addCharacter} value="q" className="hoverable">
                q
              </button>
            </div>
            <div className="grid-item" id="Desktop-W">
              <button onClick={addCharacter} value="w" className="hoverable">
                w
              </button>
            </div>
            <div className="grid-item" id="Desktop-E">
              <button onClick={addCharacter} value="e" className="hoverable">
                e
              </button>
            </div>
            <div className="grid-item" id="Desktop-R">
              <button onClick={addCharacter} value="r" className="hoverable">
                r
              </button>
            </div>
            <div className="grid-item" id="Desktop-T">
              <button onClick={addCharacter} value="t" className="hoverable">
                t
              </button>
            </div>
            <div className="grid-item" id="Desktop-Y">
              <button onClick={addCharacter} value="y" className="hoverable">
                y
              </button>
            </div>
            <div className="grid-item" id="Desktop-U">
              <button onClick={addCharacter} value="u" className="hoverable">
                u
              </button>
            </div>
            <div className="grid-item" id="Desktop-I">
              <button onClick={addCharacter} value="i" className="hoverable">
                i
              </button>
            </div>
            <div className="grid-item" id="Desktop-O">
              <button onClick={addCharacter} value="o" className="hoverable">
                o
              </button>
            </div>
            <div className="grid-item" id="Desktop-P">
              <button onClick={addCharacter} value="p" className="hoverable">
                p
              </button>
            </div>
            <div className="grid-item" id="Desktop-A">
              <button onClick={addCharacter} value="a" className="hoverable">
                a
              </button>
            </div>
            <div className="grid-item" id="Desktop-S">
              <button onClick={addCharacter} value="s" className="hoverable">
                s
              </button>
            </div>
            <div className="grid-item" id="Desktop-D">
              <button onClick={addCharacter} value="d" className="hoverable">
                d
              </button>
            </div>
            <div className="grid-item" id="Desktop-F">
              <button onClick={addCharacter} value="f" className="hoverable">
                f
              </button>
            </div>
            <div className="grid-item" id="Desktop-G">
              <button onClick={addCharacter} value="g" className="hoverable">
                g
              </button>
            </div>
            <div className="grid-item" id="Desktop-H">
              <button onClick={addCharacter} value="h" className="hoverable">
                h
              </button>
            </div>
            <div className="grid-item" id="Desktop-J">
              <button onClick={addCharacter} value="j" className="hoverable">
                j
              </button>
            </div>
            <div className="grid-item" id="Desktop-K">
              <button onClick={addCharacter} value="k" className="hoverable">
                k
              </button>
            </div>
            <div className="grid-item" id="Desktop-L">
              <button onClick={addCharacter} value="l" className="hoverable">
                l
              </button>
            </div>
            <div className="grid-item" id="Desktop-Semi-colon">
              <button onClick={addCharacter} value=":" className="hoverable">
                :
              </button>
            </div>
            <div className="grid-item" id="Desktop-Single-quote">
              <button onClick={addCharacter} value="@" className="hoverable">
                @
              </button>
            </div>
            <div className="grid-item" id="Desktop-Hash">
              <button onClick={addCharacter} value="#" className="hoverable">
                #
              </button>
            </div>
            <div className="grid-item" id="Desktop-Z">
              <button onClick={addCharacter} value="z" className="hoverable">
                z
              </button>
            </div>
            <div className="grid-item" id="Desktop-X">
              <button onClick={addCharacter} value="x" className="hoverable">
                x
              </button>
            </div>
            <div className="grid-item" id="Desktop-C">
              <button onClick={addCharacter} value="c" className="hoverable">
                c
              </button>
            </div>
            <div className="grid-item" id="Desktop-V">
              <button onClick={addCharacter} value="v" className="hoverable">
                v
              </button>
            </div>
            <div className="grid-item" id="Desktop-B">
              <button onClick={addCharacter} value="b" className="hoverable">
                b
              </button>
            </div>
            <div className="grid-item" id="Desktop-N">
              <button onClick={addCharacter} value="n" className="hoverable">
                n
              </button>
            </div>
            <div className="grid-item" id="Desktop-M">
              <button onClick={addCharacter} value="m" className="hoverable">
                m
              </button>
            </div>
            <div className="grid-item" id="Desktop-Comma">
              <button onClick={addCharacter} value="," className="hoverable">
                ,
              </button>
            </div>
            <div className="grid-item" id="Desktop-Dot">
              <button onClick={addCharacter} value="." className="hoverable">
                .
              </button>
            </div>
            <div className="grid-item" id="Desktop-Back-slash">
              <button onClick={addCharacter} value="?" className="hoverable">
                ?
              </button>
            </div>
            <div className="grid-item" id="Desktop-Captial">
              <button onClick={capitalize} className="hoverable">
                <FontAwesomeIcon
                  className="icon"
                  size={iconSize}
                  icon={faAngleUp}
                />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="grid-item" id="Desktop-One">
              <button onClick={addCharacter} value="!" className="hoverable">
                !
              </button>
            </div>
            <div className="grid-item" id="Desktop-Two">
              <button onClick={addCharacter} value='"' className="hoverable">
                "
              </button>
            </div>
            <div className="grid-item" id="Desktop-Three">
              <button onClick={addCharacter} value="£" className="hoverable">
                £
              </button>
            </div>
            <div className="grid-item" id="Desktop-Four">
              <button onClick={addCharacter} value="$" className="hoverable">
                $
              </button>
            </div>
            <div className="grid-item" id="Desktop-Five">
              <button onClick={addCharacter} value="%" className="hoverable">
                %
              </button>
            </div>
            <div className="grid-item" id="Desktop-Six">
              <button onClick={addCharacter} value="^" className="hoverable">
                ^
              </button>
            </div>
            <div className="grid-item" id="Desktop-Seven">
              <button
                onClick={addCharacter}
                value="&amp;"
                className="hoverable"
              >
                &amp;
              </button>
            </div>
            <div className="grid-item" id="Desktop-Eight">
              <button onClick={addCharacter} value="*" className="hoverable">
                *
              </button>
            </div>
            <div className="grid-item" id="Desktop-Nine">
              <button onClick={addCharacter} value="(" className="hoverable">
                (
              </button>
            </div>
            <div className="grid-item" id="Desktop-Zero">
              <button onClick={addCharacter} value=")" className="hoverable">
                )
              </button>
            </div>
            <div className="grid-item" id="Desktop-Minus">
              <button onClick={addCharacter} value="_" className="hoverable">
                _
              </button>
            </div>
            <div className="grid-item" id="Desktop-Plus">
              <button onClick={addCharacter} value="+" className="hoverable">
                +
              </button>
            </div>
            <div className="grid-item" id="Desktop-Delete">
              <button onClick={removeCharacter} className="hoverable">
                <FontAwesomeIcon
                  className="icon"
                  size={iconSize}
                  icon={faDeleteLeft}
                />
              </button>
            </div>
            <div className="grid-item" id="Desktop-Q">
              <button onClick={addCharacter} value="Q" className="hoverable">
                Q
              </button>
            </div>
            <div className="grid-item" id="Desktop-W">
              <button onClick={addCharacter} value="W" className="hoverable">
                W
              </button>
            </div>
            <div className="grid-item" id="Desktop-E">
              <button onClick={addCharacter} value="E" className="hoverable">
                E
              </button>
            </div>
            <div className="grid-item" id="Desktop-R">
              <button onClick={addCharacter} value="R" className="hoverable">
                R
              </button>
            </div>
            <div className="grid-item" id="Desktop-T">
              <button onClick={addCharacter} value="T" className="hoverable">
                T
              </button>
            </div>
            <div className="grid-item" id="Desktop-Y">
              <button onClick={addCharacter} value="Y" className="hoverable">
                Y
              </button>
            </div>
            <div className="grid-item" id="Desktop-U">
              <button onClick={addCharacter} value="U" className="hoverable">
                U
              </button>
            </div>
            <div className="grid-item" id="Desktop-I">
              <button onClick={addCharacter} value="I" className="hoverable">
                I
              </button>
            </div>
            <div className="grid-item" id="Desktop-O">
              <button onClick={addCharacter} value="O" className="hoverable">
                O
              </button>
            </div>
            <div className="grid-item" id="Desktop-P">
              <button onClick={addCharacter} value="P" className="hoverable">
                P
              </button>
            </div>
            <div className="grid-item" id="Desktop-A">
              <button onClick={addCharacter} value="A" className="hoverable">
                A
              </button>
            </div>
            <div className="grid-item" id="Desktop-S">
              <button onClick={addCharacter} value="S" className="hoverable">
                S
              </button>
            </div>
            <div className="grid-item" id="Desktop-D">
              <button onClick={addCharacter} value="D" className="hoverable">
                D
              </button>
            </div>
            <div className="grid-item" id="Desktop-F">
              <button onClick={addCharacter} value="F" className="hoverable">
                F
              </button>
            </div>
            <div className="grid-item" id="Desktop-G">
              <button onClick={addCharacter} value="G" className="hoverable">
                G
              </button>
            </div>
            <div className="grid-item" id="Desktop-H">
              <button onClick={addCharacter} value="H" className="hoverable">
                H
              </button>
            </div>
            <div className="grid-item" id="Desktop-J">
              <button onClick={addCharacter} value="J" className="hoverable">
                J
              </button>
            </div>
            <div className="grid-item" id="Desktop-K">
              <button onClick={addCharacter} value="K" className="hoverable">
                K
              </button>
            </div>
            <div className="grid-item" id="Desktop-L">
              <button onClick={addCharacter} value="L" className="hoverable">
                L
              </button>
            </div>
            <div className="grid-item" id="Desktop-Semi-colon">
              <button onClick={addCharacter} value=";" className="hoverable">
                ;
              </button>
            </div>
            <div className="grid-item" id="Desktop-Single-quote">
              <button onClick={addCharacter} value="'" className="hoverable">
                '
              </button>
            </div>
            <div className="grid-item" id="Desktop-Hash">
              <button onClick={addCharacter} value="#" className="hoverable">
                #
              </button>
            </div>
            <div className="grid-item" id="Desktop-Z">
              <button onClick={addCharacter} value="Z" className="hoverable">
                Z
              </button>
            </div>
            <div className="grid-item" id="Desktop-X">
              <button onClick={addCharacter} value="X" className="hoverable">
                X
              </button>
            </div>
            <div className="grid-item" id="Desktop-C">
              <button onClick={addCharacter} value="C" className="hoverable">
                C
              </button>
            </div>
            <div className="grid-item" id="Desktop-V">
              <button onClick={addCharacter} value="V" className="hoverable">
                V
              </button>
            </div>
            <div className="grid-item" id="Desktop-B">
              <button onClick={addCharacter} value="B" className="hoverable">
                B
              </button>
            </div>
            <div className="grid-item" id="Desktop-N">
              <button onClick={addCharacter} value="N" className="hoverable">
                N
              </button>
            </div>
            <div className="grid-item" id="Desktop-M">
              <button onClick={addCharacter} value="M" className="hoverable">
                M
              </button>
            </div>
            <div className="grid-item" id="Desktop-Comma">
              <button onClick={addCharacter} value="," className="hoverable">
                ,
              </button>
            </div>
            <div className="grid-item" id="Desktop-Dot">
              <button onClick={addCharacter} value="." className="hoverable">
                .
              </button>
            </div>
            <div className="grid-item" id="Desktop-Back-slash">
              <button onClick={addCharacter} value="/" className="hoverable">
                /
              </button>
            </div>
            <div className="grid-item" id="Desktop-Captial">
              <button onClick={capitalize} className="hoverable">
                <FontAwesomeIcon
                  className="icon"
                  size={iconSize}
                  icon={faAngleDown}
                />
              </button>
            </div>
          </>
        )}
        <div className="grid-item" id="Desktop-Space">
          <button onClick={addCharacter} value=" " className="hoverable">
            Space
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
