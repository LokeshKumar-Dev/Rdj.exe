import SearchBar from "./components/SearchBar";
import Disc from "./components/Disc";
import Slider from "./components/Slider";
import SongList from "./components/SongList";
import MusicController from "./components/MusicController";
import songs from "./dummy/songs.json";

function App() {
  return (
    <div className="w-full min-h-screen bg-background">
      {/* Upper Panel with Disc and Sliders */}
      <div className="h-[60vh] w-full grid grid-cols-3 items-center justify-center">
        <div className="h-full">
          <div className="h-full w-full relative overflow-hidden">
            <Disc
              className="absolute right-0 bottom-0"
              title="Kya Hua Tera Wada"
            />
          </div>
        </div>
        <div className="h-full flex flex-col gap-4 p-4">
          <div className="h-full flex justify-around">
            <div className="h-full w-20 rounded-lg bg-lightBlack flex justify-center p-4">
              <Slider />
            </div>
            <div className="h-full w-20 rounded-lg bg-lightBlack flex justify-center p-4">
              <Slider />
            </div>
          </div>
          <div className="h-f w-full rounded-lg bg-lightBlack flex items-center p-8">
            <Slider orientation="horizontal" thumbType="square" />
          </div>
        </div>
        <div className="h-full relative">
          <div className="h-full w-full relative overflow-hidden">
            <Disc
              className="absolute left-0 bottom-0 "
              title="Perfect - Ed Sheeren"
            />
          </div>
        </div>
      </div>

      {/* Lower Panel with Search , Song List and Round Controllers */}
      <div className="h-full w-full grid grid-cols-3 p-4 mt-8 gap-4">
        <div className="flex flex-col w-full gap-4">
          <h2 className="font-bold text-2xl text-gray-500">Track 1</h2>
          <SearchBar placeholder="Search Tracks, Songs" />
          <MusicController song={songs[0]} />
          <SongList />
        </div>
        <div></div>
        <div className="flex flex-col w-full gap-4">
          <h2 className="font-bold text-2xl text-gray-500">Track 2</h2>
          <SearchBar placeholder="Search Tracks, Songs" />
          <MusicController song={songs[0]} />
          <SongList />
        </div>
      </div>
    </div>
  );
}

export default App;
