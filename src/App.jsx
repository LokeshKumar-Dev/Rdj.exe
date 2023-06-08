import SearchBar from "./components/SearchBar";
import Disc from "./components/Disc";
import Slider from "./components/Slider";
import TrackList from "./components/TrackList";
import TrackController from "./components/TrackController";
import songs from "./dummy/songs.json";
import KnobButton from "./components/KnobButton";
import { useEffect, useState } from "react";
import Enums from "./constants/Enums";

function App() {
  const [player1, setPlayer1] = useState({
    status: Enums.Track.Status.IDLE,
    time: 0,
    track: null,
  });

  const [player2, setPlayer2] = useState({
    status: Enums.Track.Status.IDLE,
    time: 0,
    track: null,
  });

  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");

  //  Todo: These useEffects are used for updating audio track without a real audio track. Remove this when <audio/> tag is implemented and use `durationchange` event to update `time`

  useEffect(() => {
    var interval;
    if (player1.status === Enums.Track.Status.PLAYING) {
      interval = setInterval(() => {
        if (player1.time > player1.track.duration) {
          clearInterval(interval);
          setPlayer1({
            ...player1,
            status: Enums.Track.Status.STOPPED,
            time: 0,
          });
        }

        setPlayer1((prevState) => {
          return {
            ...prevState,
            time: prevState.time + 1,
          };
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [player1]);

  useEffect(() => {
    var interval;
    if (player2.status === Enums.Track.Status.PLAYING) {
      interval = setInterval(() => {
        if (player2.time > player2.track.duration) {
          clearInterval(interval);
          setPlayer2({
            ...player2,
            status: Enums.Track.Status.STOPPED,
            time: 0,
          });
        }

        setPlayer2((prevState) => {
          return {
            ...prevState,
            time: prevState.time + 1,
          };
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [player2]);

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Upper Panel with Disc and Sliders */}
      <div className="h-[60vh] w-full grid grid-cols-3 items-center justify-center">
        <div className="h-full">
          <div className="h-full w-full relative overflow-hidden">
            <Disc
              className="absolute right-0 bottom-0"
              track={player1.track}
              status={player1.status}
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
              track={player2.track}
              status={player2.status}
            />
          </div>
        </div>
      </div>

      {/* Lower Panel with Search , Track List and Round Controllers */}
      <div className="h-full w-full grid grid-cols-3 p-4 mt-8 gap-4">
        <div className="flex flex-col w-full gap-4">
          <h2 className="font-bold text-md text-gray-500">Track 1</h2>
          <TrackController
            track={player1.track}
            status={player1.status}
            time={player1.time}
            onStatusChange={(status) => {
              setPlayer1({ ...player1, status });
            }}
            onPrevious={() => {
              console.debug("Previous Track");
            }}
            onNext={() => {
              console.debug("Next Track");
            }}
          />
          <SearchBar
            placeholder="Search Songs, Tracks"
            value={query1}
            onChange={(q) => {
              setQuery1(q);
            }}
          />
          <TrackList
            tracks={
              query1
                ? songs.filter((song) =>
                    song.title.toLowerCase().includes(query1.toLowerCase())
                  )
                : songs
            }
            onSelect={(song) => {
              setPlayer1({ ...player1, track: song });
            }}
          />
        </div>
        <div>
          <div className="flex gap-4  justify-around">
            <KnobButton> Trebel </KnobButton>
            <KnobButton> Bass </KnobButton>
            <KnobButton> Time </KnobButton>
          </div>
          <div className="h-96 flex justify-around my-16">
            <div className="h-full w-20 rounded-lg bg-lightBlack flex justify-center p-4">
              <Slider />
            </div>
            <div className="h-full w-20 rounded-lg bg-lightBlack flex justify-center p-4">
              <Slider />
            </div>
            <div className="h-full w-20 rounded-lg bg-lightBlack flex justify-center p-4">
              <Slider />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <h2 className="font-bold text-md text-gray-500">Track 2</h2>
          <TrackController
            track={player2.track}
            status={player2.status}
            time={player2.time}
            onStatusChange={(status) => {
              setPlayer2({ ...player2, status });
            }}
            onPrevious={() => {
              console.debug("Previous Track");
            }}
            onNext={() => {
              console.debug("Next Track");
            }}
          />
          <SearchBar
            placeholder="Search Songs, Tracks"
            value={query2}
            onChange={(q) => {
              setQuery2(q);
            }}
          />
          <TrackList
            tracks={
              query2
                ? songs.filter((song) =>
                    song.title.toLowerCase().includes(query2.toLowerCase())
                  )
                : songs
            }
            onSelect={(song) => {
              setPlayer2({ ...player2, track: song });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
