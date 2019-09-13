import React from "react";

const OperatorButton = (props) => {
  const {value, data} = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    
    <button value ={value}>{data}</button>
    </>
  );
};

export default OperatorButton;