function Header() {
  return (
    <div className="w-full px-7 flex fixed justify-center bg-white">
      <div className="flex flex-row items-center  w-full justify-between h-[73px] max-w-[1230px] md:h-[88px]">
        <div className="">
          <a href="/">
            <img
              src="/Home/enduro-ride-logo.png"
              className="w-full min-w-[91px] max-w-[91px]"
              //   width="91"
              //   height="40"
              draggable="false"
            />
          </a>
        </div>
        <div className="sm:hidden">
          <img src="/Home/burger-icon.svg" draggable="false" />
        </div>
        <div className="hidden ml-12 w-full max-w-[493px] sm:flex flex-row justify-between">
          <a href="/">Home</a>
          <a href="/#products">Products</a>
          <a href="/#events">Events</a>
          <a href="/#testimonials">Testimonials</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
