import PropTypes from "prop-types";
import TrackItem from "./TrackItem";

function TrackList({ onSelect, tracks }) {
  return (
    <div className="flex flex-col bg-lightBlack p-4 rounded-lg w-full gap-2">
      {tracks.length == 0 && (
        <div className="text-gray-700 text-center">No Tracks found</div>
      )}
      {tracks.map((song, index) => {
        return (
          <TrackItem
            key={index}
            title={song.title}
            thumbnail={song.thumbnail}
            movie={song.movie}
            singers={song.singers}
            duration={song.duration}
            onClick={() => onSelect(song)}
          />
        );
      })}
    </div>
  );
}

TrackList.propTypes = {
  onSelect: PropTypes.func,
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string,
      movie: PropTypes.string,
      singers: PropTypes.arrayOf(PropTypes.string),
      duration: PropTypes.number.isRequired,
    })
  ),
};

export default TrackList;
