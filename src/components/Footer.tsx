function Footer() {
  return (
    <div className="py-[104px] bg-[#151515] text-white flex flex-col px-7">
      <p className="text-[24px] leading-[28.8px] font-bold">
        Count on us to <br/> support your ride
      </p>
      <div className="flex flex-col gap-10 mt-7">
        <div className="flex flex-col">
          <p className="font-semibold">Links</p>
          <div className="flex mt-3 flex-col gap-3 text-sm leading-[16.8px]">
            <p>Home</p>
            <p>Products</p>
            <p>Events</p>
            <p>Reviews</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Contact us</p>
          <p className="mt-3 text-sm leading-[16.8px]">Contact form</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Legal</p>
          <div className="flex flex-col mt-3 gap-3 text-sm leading-[16.8px]">
            <p>Terms and conditions</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
