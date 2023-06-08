import Disc from "./components/Disc";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="w-screen h-screen bg-background overflow-hidden">
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
      <div className="h-[40vh] w-full grid grid-cols-3 items-center justify-center">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
