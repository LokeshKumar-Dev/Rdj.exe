import { useState } from "react";
import { Knob } from "react-rotary-knob";
import { PropTypes } from "prop-types";

function KnobButton({ children }) {
  const [value, setValue] = useState(0);

  return (
    <div className="text-white">
      <Knob
        style={{
          width: "5rem",
          height: "5rem",
        }}
        onChange={(val) => {
          // console.debug(val);
          setValue(val);
        }}
        min={0}
        max={100}
        value={value}
        unlockDistance={0}
        preciseMode={false}
      />
      <div className="font-bold text-2xl text-center py-2">{children}</div>
    </div>
  );
}

KnobButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default KnobButton;
