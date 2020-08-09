import React, { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

/**
 * Available layouts
 * https://github.com/hodgef/simple-keyboard-layouts/tree/master/src/lib/layouts
 */
import japaneseLayout from "simple-keyboard-layouts/build/layouts/japanese";


// let keyboard = new Keyboard({
//   onChange: input => onChange(input),
//   onKeyPress: button => onKeyPress(button),
//   layout: layout
// });

const App = () => {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState(japaneseLayout);
  const keyboard = useRef();
  
  const onChange = input => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const handleJapanese = () => {
      const newLayoutName = layout === 'default' ? 'japanese' : 'default';
  }
  const onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = event => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  return (
    <div>
      <input
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInput}
      />
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
        physicalKeyboardHighlight={true}
      />
    </div>
  );
}

export default App