import RangeSlider from "react-range-slider-input";
import PropTypes from "prop-types";
import "../css/range-slider.css";

function Slider({
  orientation = "vertical",
  disabled,
  className,
  thumbType = "circle",
  min = 0,
  max = 100,
  value = 0,
  onChange,
}) {
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
      min={min}
      max={max}
      thumbsDisabled={orientation == "vertical" ? [false, true] : [true, false]}
      rangeSlideDisabled
      onInput={(val) => {
        if (orientation === "vertical") {
          // console.debug(100 - val[0]);
          onChange(100 - val[0]);
        } else {
          // console.debug(val[1]);
          onChange(val[1]);
        }
      }}
    />
  );
}

Slider.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  thumbType: PropTypes.oneOf(["square", "circle"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default Slider;
