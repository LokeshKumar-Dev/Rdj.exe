import PropTypes from "prop-types";

import { ImSearch } from "react-icons/im";

function SearchBar({ placeholder }) {
  return (
    <div className="flex gap-1 w-full">
      <input
        type="text"
        className="bg-lightBlack p-2 text-primary rounded-l-lg focus:outline-none w-full placeholder:text-gray-700 px-4"
        placeholder={placeholder}
      />
      <button className="bg-lightBlack text-background rounded-r-lg py-4 px-6">
        <ImSearch size={24} />
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchBar;
