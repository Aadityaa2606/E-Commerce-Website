'use client';
import React, { useState } from "react";

const ColorSelection = () => {
  // State to track the selected color
  const [selectedColor, setSelectedColor] = useState("");

  // Colors available for selection
  const colors = [
    { name: "Gray", code: "bg-gray-500" },
    { name: "Red", code: "bg-red-500" },
    { name: "Blue", code: "bg-blue-500" },
  ];

  // Function to handle color selection
  const handleColorSelect = (colorName) => {
    setSelectedColor(colorName);
  };

  return (
    <div className="flex gap-5 mt-4 items-center">
      <h3 className="text-xl mb-2">Colours:</h3>
      <div className="flex space-x-2">
        {colors.map((color) => (
          <span
            key={color.name}
            className={`w-6 h-6 rounded-full cursor-pointer ${color.code} ${
              selectedColor === color.name ? "border-2 border-black w-5 h-5" : ""
            }`}
            onClick={() => handleColorSelect(color.name)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ColorSelection;
