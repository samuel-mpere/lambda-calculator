import React from "react";

const SpecialButton = (props) => {
  
  const {data} = props;
  return (
    <>
      <button>{data}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;