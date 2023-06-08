import { ImSearch } from "react-icons/im";

function SearchBar() {
  return (
    <div className="flex gap-1 w-full">
      <input
        type="text"
        className="bg-lightBlack p-2 color-white rounded-l-lg focus:outline-none w-full"
      />
      <button className="bg-lightBlack text-background rounded-r-lg py-4 px-6">
        <ImSearch size={24} />
      </button>
    </div>
  );
}

export default SearchBar;
