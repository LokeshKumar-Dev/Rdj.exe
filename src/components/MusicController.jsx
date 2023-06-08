import PropTypes from "prop-types";
import { useState } from "react";
import {
  AiFillFastForward,
  AiFillFastBackward,
  AiFillPlayCircle,
  AiFillPauseCircle,
} from "react-icons/ai";
import Slider from "./Slider";

function MusicController({ song }) {
  const [state, setState] = useState({
    status: "playing", // playing, paused,
    time: 0, // number of seconds played
  });

  const onPause = () => {
    setState({
      ...state,
      status: "paused",
    });
  };

  const onPlay = () => {
    setState({
      ...state,
      status: "playing",
    });
  };

  return (
    <div className="bg-lightBlack w-full p-4 rounded-lg">
      <div className="">
        {song && (
          <div className="w-full flex text-white cursor-pointer">
            <div>
              <img
                src={song.thumbnail}
                alt={song.title}
                className="w-20 h-20 rounded-lg mr-4"
              />
            </div>
            <div className="flex-grow flex flex-col p-2 justify-center">
              <h1 className="text-xl font-bold">{song.title}</h1>
              <div className="flex text-sm">
                <div className="flex-grow opacity-50">
                  {song.singers.toString()}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center gap-8 text-4xl text-white">
          <button className="">
            <AiFillFastBackward />
          </button>

          {state.status === "playing" ? (
            <button className="text-5xl" onClick={onPause}>
              <AiFillPauseCircle />
            </button>
          ) : (
            <button className="text-5xl" onClick={onPlay}>
              <AiFillPlayCircle />
            </button>
          )}

          <button className="">
            <AiFillFastForward />
          </button>
        </div>
      </div>
      <div className="my-4">
        <Slider orientation="horizontal" />

        {song && (
          <div className="flex mt-2 text-sm text-white opacity-20 font-bold">
            <div className="">
              {Math.floor(state.time / 60)} :{" "}
              {Math.floor((state.time / 60) * 100) % 100}
            </div>
            <div className="flex-grow"></div>
            <div className="">
              {Math.floor(song.duration / 60)} :{" "}
              {Math.floor((song.duration / 60) * 100) % 100}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

MusicController.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    movie: PropTypes.string,
    singers: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number.isRequired,
  }).isRequired,
};

export default MusicController;
