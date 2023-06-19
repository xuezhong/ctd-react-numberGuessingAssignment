import React from "react";
import Button from "./Button";

function GuessControl(props) {
  const [currentGuess, setCurrentGuess] = React.useState();
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  }
  function onSubmitGuess() {
    // Since the values from an HTML input are strings by default,
    //  convert to a number for the returned guess value
    //  by passing in the string to the Number function.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    props.onGuess(Number(currentGuess));
    setCurrentGuess('');
  }
  return (
    <div>
        <input
          type="number"
          value={currentGuess}
          onChange={handleInputChange}
        />
        <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  )
}

export default GuessControl;
