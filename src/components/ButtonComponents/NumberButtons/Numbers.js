import React, {useState} from "react";

import {numbers, operators, specials} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumbeState] = useState(numbers);

  const [operatorState, setOperaterState] = useState(operators);

  const [specialsState, setSpecialsState] = useState(specials);


  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
