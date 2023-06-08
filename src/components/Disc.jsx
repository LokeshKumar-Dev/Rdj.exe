import PropTypes from "prop-types";
import Enums from "../constants/Enums";

function Disc({ className, track, status = Enums.Track.Status.PLAYING }) {
  // Add more breakpoints for width , height and circle size to make it more responsive.
  return (
    <div
      className={
        "w-[25rem] h-[25rem] md:w-[45rem] md:h-[45rem] rounded-full bg-primary overflow-hidden cursor-grab " +
        (status === Enums.Track.Status.PLAYING ? "disc-animation " : " ") +
        className
      }
    >
      <div className="absolute top-1/2 left-1/2 w-[15rem] h-[15rem] bg-background rounded-full -translate-x-1/2 -translate-y-1/2 cursor-default" />
      {track ? (
        <div className="absolute text-white font-bold top-1/2 left-1/2 p-1 opacity-50 translate-x-32 -translate-y-1/2 w-[14rem] text-center">
          {track.title}
        </div>
      ) : (
        <div className="absolute text-white font-bold top-1/2 left-1/2 p-1 opacity-50 translate-x-32 -translate-y-1/2 w-[14rem] text-center text-2xl">
          Choose Track
        </div>
      )}
    </div>
  );
}

Disc.propTypes = {
  className: PropTypes.string,
  track: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    movie: PropTypes.string,
    singers: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number.isRequired,
  }),
  status: PropTypes.oneOf(Object.values(Enums.Track.Status)),
};

export default Disc;
