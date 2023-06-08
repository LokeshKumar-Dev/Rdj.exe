import PropTypes from "prop-types";

function SongItem({ title, thumbnail = null, singers = [], duration }) {
  return (
    <div className="w-full flex bg-foreground text-white rounded-r-lg cursor-pointer hover:scale-[1.02] transition-transform">
      <div>
        <img src={thumbnail} alt={title} className="w-20 h-20 rounded-l-lg" />
      </div>
      <div className="flex-grow flex flex-col p-2 justify-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex text-sm">
          <div className="flex-grow opacity-50">{singers.toString()}</div>
          <div className="font-bold opacity-20">
            {Math.floor(duration / 60)} :{" "}
            {Math.floor((duration / 60) * 100) % 100}
          </div>
        </div>
      </div>
    </div>
  );
}

SongItem.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  movie: PropTypes.string,
  singers: PropTypes.arrayOf(PropTypes.string),
  duration: PropTypes.number.isRequired,
};

export default SongItem;
