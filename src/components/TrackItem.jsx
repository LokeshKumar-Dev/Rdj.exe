import PropTypes from "prop-types";
import secondsToDuration from "../utils/index";

function TrackItem({
  title,
  thumbnail = null,
  singers = [],
  duration,
  onClick,
}) {
  return (
    <div
      className="w-full flex bg-foreground text-white rounded-r-lg cursor-pointer hover:scale-[1.02] transition-transform"
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      <div>
        <img
          src={thumbnail}
          alt={title}
          className="w-20 h-20 rounded-l-lg object-cover mr-4"
        />
      </div>
      <div className="flex-grow flex flex-col p-2 justify-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex text-sm">
          <div className="flex-grow opacity-50">{singers.toString()}</div>
          <div className="opacity-20">{secondsToDuration(duration)}</div>
        </div>
      </div>
    </div>
  );
}

TrackItem.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  movie: PropTypes.string,
  singers: PropTypes.arrayOf(PropTypes.string),
  duration: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default TrackItem;
