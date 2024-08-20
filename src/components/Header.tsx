function Header() {
  return (
    <div className="w-full flex fixed justify-center bg-white">
      <div className="flex flex-row items-center  w-full justify-between h-[73px] max-w-[1230px] md:h-[88px] px-7 ">
        <div className="">
          <img
            src="./Home/enduro-ride-logo.png"
            className="w-full min-w-[91px] max-w-[91px]"
            //   width="91"
            //   height="40"
            draggable="false"
          />
        </div>
        <div className="sm:hidden">
          <img src="./Home/burger-icon.svg" draggable="false" />
        </div>
        <div className="hidden ml-12 w-full max-w-[493px] sm:flex flex-row justify-between">
          <a>Home</a>
          <a>Products</a>
          <a>Events</a>
          <a>About</a>
          <a>Reviews</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
