function Footer() {
  return (
    <div className="py-[104px] w-full bg-[#151515] text-white flex flex-col px-7 md:items-center">
      <div className="w-full max-w-[1230px] flex flex-col md:flex-row md:justify-between md:items-start">
        <p className="text-[24px] leading-[28.8px] font-bold md:text-[32px]">
          Count on us to <br /> support your ride
        </p>
        <div className="flex flex-col gap-10 mt-7 md:gap-[72px] md:mt-0 md:flex-row">
          <div className="flex flex-col">
            <p className="font-semibold">Links</p>
            <div className="flex mt-3 flex-col gap-3 text-sm leading-[16.8px]">
              <a href="/">Home</a>
              <a href="/#products">Products</a>
              <a href="/#events">Events</a>
              <a href="/#testimonials">Tesimonials</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Contact us</p>
            <a href="/contact" className="mt-3 text-sm leading-[16.8px]">
              Contact form
            </a>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Legal</p>
            <div className="flex flex-col mt-3 gap-3 text-sm leading-[16.8px]">
              <a href="/terms">Terms and conditions</a>
              <a href="/privacy">Privacy policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
