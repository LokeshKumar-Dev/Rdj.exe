import PropTypes from "prop-types";
import {
  AiFillFastForward,
  AiFillFastBackward,
  AiFillPlayCircle,
  AiFillPauseCircle,
} from "react-icons/ai";
import Slider from "./Slider";
import Enums from "../constants/Enums";
import secondsToDuration from "../utils/index";

function TrackController({
  track,
  status,
  time,
  onStatusChange,
  onNext,
  onPrevious,
}) {
  return (
    <div className="bg-lightBlack w-full p-4 rounded-lg">
      <div className="">
        {track && (
          <div className="w-full flex text-white cursor-pointer">
            <div>
              <img
                src={track.thumbnail}
                alt={track.title}
                className="w-20 h-20 rounded-lg mr-4"
              />
            </div>
            <div className="flex-grow flex flex-col p-2 justify-center">
              <h1 className="text-xl font-bold">{track.title}</h1>
              <div className="flex text-sm">
                <div className="flex-grow opacity-50">
                  {track.singers.toString()}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center gap-8 text-4xl text-white">
          <button
            className="disabled:opacity-50"
            disabled={!track}
            onClick={onPrevious}
          >
            <AiFillFastBackward />
          </button>

          {status === "playing" ? (
            <button
              className="text-5xl disabled:opacity-50"
              disabled={!track}
              onClick={() => onStatusChange(Enums.Track.Status.PAUSED)}
            >
              <AiFillPauseCircle />
            </button>
          ) : (
            <button
              className="text-5xl disabled:opacity-50"
              disabled={!track}
              onClick={() => onStatusChange(Enums.Track.Status.PLAYING)}
            >
              <AiFillPlayCircle />
            </button>
          )}

          <button
            className="disabled:opacity-50"
            disabled={!track}
            onClick={onNext}
          >
            <AiFillFastForward />
          </button>
        </div>
      </div>
      <div className="my-4">
        <Slider
          orientation="horizontal"
          max={track ? track.duration : 100}
          value={time}
        />

        {track && (
          <div className="flex mt-2 text-sm text-white opacity-20 font-bold">
            <div className="">{secondsToDuration(time)}</div>
            <div className="flex-grow"></div>
            <div className="">{secondsToDuration(track.duration)}</div>
          </div>
        )}
      </div>
    </div>
  );
}

TrackController.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    movie: PropTypes.string,
    singers: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number.isRequired,
  }),
  status: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

export default TrackController;
