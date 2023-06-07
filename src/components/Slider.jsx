import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import PropTypes from "prop-types";
import "../css/range-slider.css";

function Slider({
  orientation = "vertical",
  disabled,
  className,
  thumbType = "circle",
}) {
  const [value, setValue] = useState(40); // 0 - 100

  return (
    <RangeSlider
      className={
        (orientation === "vertical"
          ? "range-slider-vertical"
          : "range-slider-horizontal") +
        (thumbType === "square" ? " range-slider-thumb-square" : "") +
        " " +
        className
      }
      orientation={orientation}
      disabled={disabled}
      value={orientation == "vertical" ? [100 - value, 100] : [0, value]}
      min={0}
      max={100}
      thumbsDisabled={orientation == "vertical" ? [false, true] : [true, false]}
      rangeSlideDisabled
      onInput={(val) => {
        if (orientation === "vertical") {
          console.debug(100 - val[0]);
          setValue(100 - val[0]);
        } else {
          console.debug(val[1]);
          setValue(val[1]);
        }
      }}
    />
  );
}

Slider.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  thumbType: PropTypes.oneOf(["square", "circle"]),
};

export default Slider;
