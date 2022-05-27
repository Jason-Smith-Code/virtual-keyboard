import "./App.css";
import React, { useState } from "react";
import { MobileNumbers } from "./MobileKeyboardNumbers";
import { MobileLetters } from "./MobileLetters";
import { DesktopKeys } from "./DesktopKeys";

function AppRefactored() {
  const [text, setText] = useState("");
  const [capital, setCapital] = useState("false");
  const [numbers, setNumbers] = useState("false");

  const addCharacter = (e) => {
    setText(text + e.target.value);
  };

  const removeCharacter = () => {
    setText(text.slice(0, -1));
  };

  const capitalize = () => {
    setCapital(!capital);
  };

  const alternateMobileKeys = () => {
    setNumbers(!numbers);
  };

  function handleChange() {}

  document.addEventListener("click", function handleClick(event) {
    const hasClass = event.target.classList.contains("hoverable");
    if (hasClass) {
      event.target.classList.add("pressed");
      event.target.classList.remove("hoverable");
      setTimeout(() => {
        event.target.classList.remove("pressed");
        event.target.classList.add("hoverable");
      }, 250);
    } else return;
  });

  function createMobileNumbers() {
    return MobileNumbers.map((character) => {
      return (
        <button
          key={character.id}
          value={character.value}
          id={character.id}
          onClick={
            character.click === "addCharacter"
              ? addCharacter
              : character.click === "removeCharacter"
              ? removeCharacter
              : character.click === "alternateMobileKeys"
              ? alternateMobileKeys
              : ""
          }
        >
          {character.text}
        </button>
      );
    });
  }

  function createMobileLetters() {
    return MobileLetters.map((character) => {
      return (
        <button
          key={character.id}
          value={capital ? character.upperValue : character.lowerValue}
          id={character.id}
          onClick={
            character.click === "addCharacter"
              ? addCharacter
              : character.click === "removeCharacter"
              ? removeCharacter
              : character.click === "alternateMobileKeys"
              ? alternateMobileKeys
              : character.click === "capitalize"
              ? capitalize
              : ""
          }
        >
          {character.text
            ? character.text
            : capital
            ? character.UpperRender
            : character.lowerRender}
        </button>
      );
    });
  }

  function createDesktopKeys() {
    return DesktopKeys.map((character) => {
      return (
        <div className="grid-item" id={character.id} key={character.id}>
          <button
            value={!capital ? character.upperValue : character.lowerValue}
            id={character.id}
            onClick={
              character.click === "addCharacter"
                ? addCharacter
                : character.click === "removeCharacter"
                ? removeCharacter
                : character.click === "capitalize"
                ? capitalize
                : ""
            }
            className="hoverable"
          >
            {character.text
              ? character.text
              : !capital
              ? character.UpperRender
              : character.lowerRender}
          </button>
        </div>
      );
    });
  }

  return (
    <div id="App">
      <form>
        <textarea autoFocus value={text} onChange={handleChange}></textarea>
      </form>
      {!numbers ? (
        <div id="Mobile-keyboard-numbers">{createMobileNumbers()}</div>
      ) : (
        <div id="Mobile-keyboard-letters">{createMobileLetters()}</div>
      )}

      <div id="Desktop-keyboard">{createDesktopKeys()}</div>
    </div>
  );
}

export default AppRefactored;
