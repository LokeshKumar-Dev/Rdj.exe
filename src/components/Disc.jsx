import PropTypes from "prop-types";

function Disc({ className, title, status = "playing" }) {
  // Add more breakpoints for width , height and circle size to make it more responsive.
  return (
    <div
      className={
        "w-[25rem] h-[25rem] md:w-[45rem] md:h-[45rem] rounded-full bg-primary overflow-hidden cursor-grab " +
        (status === "playing" ? "disc-animation " : " ") +
        className
      }
    >
      <div className="absolute top-1/2 left-1/2 w-[15rem] h-[15rem] bg-background rounded-full -translate-x-1/2 -translate-y-1/2 cursor-default" />
      <div className="absolute text-white font-bold top-1/2 left-1/2 p-1 opacity-50 translate-x-32 -translate-y-1/2 w-[14rem] text-center">
        {title}
      </div>
    </div>
  );
}

Disc.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["playing", "paused"]),
};

export default Disc;
