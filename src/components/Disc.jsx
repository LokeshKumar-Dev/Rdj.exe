function Disc({ className, title, status = "playing" }) {
  return (
    <div
      className={
        "w-[16rem] h-[16rem] rounded-full outline-[16rem] outline-primary outline m-[2rem] cursor-pointer  " +
        (status === "playing" ? "disc-animation " : " ") +
        className
      }
    >
      <div className="absolute text-white font-bold -bottom-[10rem] left-[5rem] opacity-50 -rotate-90">
        {title}
      </div>
    </div>
  );
}

export default Disc;
