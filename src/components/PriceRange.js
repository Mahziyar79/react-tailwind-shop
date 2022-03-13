import React from "react";
import Slider from "@material-ui/core/Slider";

const PriceRange = () => {
  // Our States
  const [value, setValue] = React.useState([2, 10]);

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div
      style={{
        display: "block",
      }}
    >
      <p className="text-xs mb-2"> بازه قیمتی خود را مشخص کنید:</p>

      <Slider value={value} onChange={rangeSelector} valueLabelDisplay="auto" />
      <button class="bg-red-400 w-full text-sm rounded-md border-2 border-red-400 text-white p-1 hover:bg-white hover:text-red-400 transition-all duration-200">
        تایید
      </button>
    </div>
  );
};

export default PriceRange;
