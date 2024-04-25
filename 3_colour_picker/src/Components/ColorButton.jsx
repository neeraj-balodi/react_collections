import React from "react";

const ColorButton = ({ color, onClick }) => {
  const buttonStyle = {
    backgroundColor: `${color}`,
  };

  return (
    <button
      style={buttonStyle}
      className=" w-16 h-16 rounded-full m-2 cursor-pointer shadow-md flex justify-center items-center transition duration-300 ease-in-out hover:scale-105 focus:outline-none"
      onClick={() => onClick(color)}></button>
  );
};

export default ColorButton;
