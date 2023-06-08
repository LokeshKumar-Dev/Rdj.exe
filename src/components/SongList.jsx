import songs from "../dummy/songs.json";
import SongItem from "./SongItem";

function SongList() {
  return (
    <div className="flex flex-col bg-lightBlack p-4 rounded-lg w-full gap-2">
      {songs.map((song, index) => {
        return (
          <SongItem
            key={index}
            title={song.title}
            thumbnail={song.thumbnail}
            movie={song.movie}
            singers={song.singers}
            duration={song.duration}
          />
        );
      })}
    </div>
  );
}

export default SongList;
