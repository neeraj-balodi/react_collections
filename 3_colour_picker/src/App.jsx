import React, { useState } from "react";
import ColorButton from "./Components/ColorButton";

const colors = [
  "#6C0345",
  "#DC6B19",
  "#F7C566",
  "#FFF8DC",
  "#003C43",
  "#135D66",
  "#77B0AA",
  "#E3FEF7",
];

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [showHexBox, setShowHexBox] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hexValue, setHexValue] = useState("");

  const changeBackgroundColor = (colorValue) => {
    setBackgroundColor(colorValue);
    setHexValue(colorValue);
    setShowHexBox(true);
  };

  // Function to copy hex value to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(hexValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-2">Choose a Color</h2>
        <div className="grid grid-cols-2 gap-1">
          {colors.map((color, index) => (
            <ColorButton
              key={index}
              color={color}
              onClick={changeBackgroundColor}
            />
          ))}
        </div>
      </div>
      <div
        className="flex-1 relative"
        style={{ backgroundColor: backgroundColor }}>
        {showHexBox && (
          <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-4 rounded-md shadow-lg">
              <div className="text-center mb-2">Hex Value: {hexValue}</div>
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                onClick={copyToClipboard}>
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
