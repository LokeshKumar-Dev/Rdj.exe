import Disc from "./components/Disc";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="flex w-screen h-screen bg-background">
      <div className="h-1/2 w-full grid grid-cols-5 items-center justify-center relative">
        <div className="col-span-2">
          <Disc className="absolute left-0 top-0" title="Kya Hua Tera Wada" />
        </div>
        <div className="h-full flex flex-col gap-8">
          <div className="h-full flex justify-around">
            <div className="h-full w-20 rounded-lg bg-lightBlack m-4 flex justify-center p-4">
              <Slider />
            </div>
            <div className="h-full w-20 rounded-lg bg-lightBlack m-4 flex justify-center p-4">
              <Slider />
            </div>
          </div>
          <div>
            <div className="h-full w-full rounded-lg bg-lightBlack m-4 flex items-center p-4">
              <Slider orientation="horizontal" thumbType="square" />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <Disc className="absolute right-0 top-0" />
        </div>
      </div>
    </div>
  );
}

export default App;
