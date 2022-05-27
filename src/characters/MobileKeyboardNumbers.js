import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
const iconSize = "lg";

export let MobileNumbers = [
  {
    id: "One",
    value: "1",
    click: "addCharacter",
    text: "1",
  },
  {
    id: "Two",
    value: "2",
    click: "addCharacter",
    text: "2",
  },
  {
    id: "Three",
    value: "3",
    click: "addCharacter",
    text: "3",
  },
  {
    id: "Four",
    value: "4",
    click: "addCharacter",
    text: "4",
  },
  {
    id: "Five",
    value: "5",
    click: "addCharacter",
    text: "5",
  },
  {
    id: "Six",
    value: "6",
    click: "addCharacter",
    text: "6",
  },
  {
    id: "Seven",
    value: "7",
    click: "addCharacter",
    text: "7",
  },
  {
    id: "Eight",
    value: "8",
    click: "addCharacter",
    text: "8",
  },
  {
    id: "Nine",
    value: "9",
    click: "addCharacter",
    text: "9",
  },
  {
    id: "Zero",
    value: "0",
    click: "addCharacter",
    text: "0",
  },
  {
    id: "At",
    value: "@",
    click: "addCharacter",
    text: "@",
  },
  {
    id: "Hash",
    value: "#",
    click: "addCharacter",
    text: "#",
  },
  {
    id: "Dollar",
    value: "$",
    click: "addCharacter",
    text: "$",
  },
  {
    id: "Percent",
    value: "%",
    click: "addCharacter",
    text: "%",
  },
  {
    id: "Ampersand",
    value: "&",
    click: "addCharacter",
    text: "&",
  },
  {
    id: "Star",
    value: "*",
    click: "addCharacter",
    text: "*",
  },
  {
    id: "Minus",
    value: "-",
    click: "addCharacter",
    text: "-",
  },
  {
    id: "Plus",
    value: "+",
    click: "addCharacter",
    text: "+",
  },
  {
    id: "Left-bracket",
    value: "(",
    click: "addCharacter",
    text: "(",
  },
  {
    id: "Right-bracket",
    value: ")",
    click: "addCharacter",
    text: ")",
  },
  {
    id: "Alt",
    click: "alternateMobileKeys",
    text: "abc",
  },
  {
    id: "Exclamation",
    value: "!",
    click: "addCharacter",
    text: "!",
  },
  {
    id: "Double-quote",
    value: '"',
    click: "addCharacter",
    text: '"',
  },
  {
    id: "Single-quote",
    value: "'",
    click: "addCharacter",
    text: "'",
  },
  {
    id: "Colon",
    value: ":",
    click: "addCharacter",
    text: ":",
  },
  {
    id: "Semi-colon",
    value: ";",
    click: "addCharacter",
    text: ";",
  },
  {
    id: "Forward-slash",
    value: "/",
    click: "addCharacter",
    text: "/",
  },
  {
    id: "Question",
    value: "?",
    click: "addCharacter",
    text: "?",
  },
  {
    id: "Delete-number",
    click: "removeCharacter",
    text: (
      <FontAwesomeIcon
        className="icon"
        size={iconSize}
        icon={faDeleteLeft}
      ></FontAwesomeIcon>
    ),
  },
  {
    id: "Comma",
    value: ",",
    click: "addCharacter",
    text: ",",
  },
  {
    id: "Space-number",
    value: " ",
    click: "addCharacter",
    text: "SPACE",
  },
  {
    id: "Dot",
    value: ".",
    click: "addCharacter",
    text: ".",
  },
];
