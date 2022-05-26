import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faAngleUp } from "@fortawesome/free-solid-svg-icons";
const iconSize = "lg";

// explore usng toLowerCase()

export let MobileLetters = [
  {
    id: "Q",
    click: "addCharacter",
    lowerValue: "q",
    lowerRender: "q",
    upperValue: "Q",
    UpperRender: "Q",
  },
  {
    id: "W",
    click: "addCharacter",
    lowerValue: "w",
    lowerRender: "w",
    upperValue: "W",
    UpperRender: "W",
  },
  {
    id: "E",
    click: "addCharacter",
    lowerValue: "e",
    lowerRender: "e",
    upperValue: "E",
    UpperRender: "E",
  },
  {
    id: "R",
    click: "addCharacter",
    lowerValue: "r",
    lowerRender: "r",
    upperValue: "R",
    UpperRender: "R",
  },
  {
    id: "T",
    click: "addCharacter",
    lowerValue: "t",
    lowerRender: "t",
    upperValue: "T",
    UpperRender: "T",
  },
  {
    id: "Y",
    click: "addCharacter",
    lowerValue: "y",
    lowerRender: "y",
    upperValue: "Y",
    UpperRender: "Y",
  },
  {
    id: "U",
    click: "addCharacter",
    lowerValue: "u",
    lowerRender: "u",
    upperValue: "U",
    UpperRender: "U",
  },
  {
    id: "I",
    click: "addCharacter",
    lowerValue: "i",
    lowerRender: "i",
    upperValue: "I",
    UpperRender: "I",
  },
  {
    id: "O",
    click: "addCharacter",
    lowerValue: "o",
    lowerRender: "o",
    upperValue: "O",
    UpperRender: "O",
  },
  {
    id: "P",
    click: "addCharacter",
    lowerValue: "p",
    lowerRender: "p",
    upperValue: "P",
    UpperRender: "P",
  },
  {
    id: "A",
    click: "addCharacter",
    lowerValue: "a",
    lowerRender: "a",
    upperValue: "A",
    UpperRender: "A",
  },
  {
    id: "S",
    click: "addCharacter",
    lowerValue: "s",
    lowerRender: "s",
    upperValue: "S",
    UpperRender: "S",
  },
  {
    id: "D",
    click: "addCharacter",
    lowerValue: "d",
    lowerRender: "d",
    upperValue: "D",
    UpperRender: "D",
  },
  {
    id: "F",
    click: "addCharacter",
    lowerValue: "f",
    lowerRender: "f",
    upperValue: "F",
    UpperRender: "F",
  },
  {
    id: "G",
    click: "addCharacter",
    lowerValue: "g",
    lowerRender: "g",
    upperValue: "G",
    UpperRender: "G",
  },
  {
    id: "H",
    click: "addCharacter",
    lowerValue: "h",
    lowerRender: "h",
    upperValue: "H",
    UpperRender: "H",
  },
  {
    id: "J",
    click: "addCharacter",
    lowerValue: "j",
    lowerRender: "j",
    upperValue: "J",
    UpperRender: "J",
  },
  {
    id: "K",
    click: "addCharacter",
    lowerValue: "k",
    lowerRender: "k",
    upperValue: "K",
    UpperRender: "K",
  },
  {
    id: "L",
    click: "addCharacter",
    lowerValue: "l",
    lowerRender: "l",
    upperValue: "L",
    UpperRender: "L",
  },
  {
    id: "Capital",
    click: "capitalize",
    text: <FontAwesomeIcon className="icon" size={iconSize} icon={faAngleUp} />,
  },
  {
    id: "Z",
    click: "addCharacter",
    lowerValue: "z",
    lowerRender: "z",
    upperValue: "Z",
    UpperRender: "Z",
  },
  {
    id: "X",
    click: "addCharacter",
    lowerValue: "x",
    lowerRender: "x",
    upperValue: "X",
    UpperRender: "X",
  },
  {
    id: "C",
    click: "addCharacter",
    lowerValue: "c",
    lowerRender: "c",
    upperValue: "C",
    UpperRender: "C",
  },
  {
    id: "V",
    click: "addCharacter",
    lowerValue: "v",
    lowerRender: "v",
    upperValue: "V",
    UpperRender: "V",
  },
  {
    id: "B",
    click: "addCharacter",
    lowerValue: "b",
    lowerRender: "b",
    upperValue: "B",
    UpperRender: "B",
  },
  {
    id: "N",
    click: "addCharacter",
    lowerValue: "n",
    lowerRender: "n",
    upperValue: "N",
    UpperRender: "N",
  },
  {
    id: "M",
    click: "addCharacter",
    lowerValue: "m",
    lowerRender: "m",
    upperValue: "M",
    UpperRender: "M",
  },
  {
    id: "Delete-keyboard",
    click: "removeCharacter",
    text: (
      <FontAwesomeIcon className="icon" size={iconSize} icon={faDeleteLeft} />
    ),
  },
  {
    id: "Numbers-link",
    click: "alternateMobileKeys",
    text: "123",
  },
  {
    id: "Space-keyboard",
    lowerValue: " ",
    upperValue: " ",
    click: "addCharacter",
    text: "Space",
  },
];
