import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="font-inter">
      <Header />
      {/* HERO */}
      <div className="mb-12 px-7">
        <img src="./Home/hero-image.png" draggable="false" />
        <div className="flex flex-col mt-8">
          <h1 className="text-[32px] font-bold leading-[37.8px]">
            Grab your bike, head outside, and count on us to support your ride.
          </h1>
          <p className="text-sm leading-[22.4px] mt-4">
            Whether commuting, on family rides, road cycling, or mountain
            biking, rest assured that our Enduro products will keep you going.
          </p>
        </div>
        <button className="mt-8  text-white text-center bg-[#E72323] rounded-xl px-6 py-[14px]">
          <p className="text-sm leading-[14px] pt-[1px] font-semibold">
            See products
          </p>
        </button>
      </div>
      {/* WHAT WE DO */}
      <div className="py-20 px-7">
        <h2 className="font-bold text-[28px] leading-[28px]">What we do</h2>
        <p className="mt-3 font-light text-sm leading-[19.6px]">
          At Enduro Ride, we focus on enhancing outdoor experiences and
          <span className="font-medium">
            {" "}
            fostering a strong community of cyclists
          </span>{" "}
          through our quality products. We're here to support you on every ride.
        </p>
      </div>
      {/* GET TO KNOW US */}
      <div className="pt-6 pb-20 px-7 flex flex-col">
        <img src="./Home/get-to-know-us.png" draggable="false" />
        <p className="text-[#757A7F] mt-10 font-semibold text-sm leading-[14px]">
          About
        </p>
        <h3 className="mt-4 font-bold text-[28px] leading-[28px]">
          Get to know us
        </h3>
        <p className="mt-3 flex flex-col gap-3 font-light text-sm leading-[19.6px]">
          <p>
            <span className="font-medium">
              Born from a deep passion for cycling and community.
            </span>{" "}
            Developed in South Africa, now launching in the UK, our products
            have been rigorously tested on challenging terrains, ensuring
            durability and reliability.
          </p>
          <p>
            We understand mountain biking as a lifestyle, creating gear that
            enhances every ride. Our mission is to bring South African mountain
            biking spirit to the UK, fostering a community of enthusiasts who
            push boundaries.
          </p>
        </p>
        <a className="text-[#E72323] mt-6 text-sm leading-[14px]">
          See products
        </a>
      </div>
      {/* PRODUCTS */}
      <div className="pt-10 pb-20 px-7 ">
        <h4 className="font-bold text-[28px] leading-[28px]">Our products</h4>
        <div className="flex flex-col mt-8 gap-10">
          <div className="flex flex-col items-start">
            <img src="./Home/enduro-seal-3.png" draggable="false" />
            <div className="mt-5">
              <p className="font-semibold leading-4">MTB Tire Seal</p>
              <p className="mt-2 font-light text-sm leading-[19.6px]">
                Premium tubeless sealant for mountain bikes.
              </p>
              <a className="text-[#E72323] mt-3 text-sm leading-[14px]">
                See more
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <img src="./Home/enduro-seal-1.png" draggable="false" />
            <div className="mt-5">
              <p className="font-semibold leading-4">Road Bike Tire Seal</p>
              <p className="mt-2 font-light text-sm leading-[19.6px]">
                Premium tubeless sealant for road and gravel bikes.
              </p>
              <a className="text-[#E72323] mt-3 text-sm leading-[14px]">
                See more
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <img src="./Home/enduro-seal-2.png" draggable="false" />
            <div className="mt-5">
              <p className="font-semibold leading-4">MTB Tire Seal</p>
              <p className="mt-2 font-light text-sm leading-[19.6px]">
                Premium tubeless sealant for mountain bikes.
              </p>
              <a className="text-[#E72323] mt-3 text-sm leading-[14px]">
                See more
              </a>
            </div>
          </div>
        </div>
        <button className="mt-10 text-white text-center bg-[#E72323] rounded-xl px-6 py-[14px]">
          <p className="text-sm leading-[14px] pt-[1px] font-semibold">
            All products
          </p>
        </button>
      </div>
      {/* EVENTS */}
      <div className="flex flex-col pt-6 pb-20 px-7 ">
        <h5 className="font-bold text-[28px] leading-[28px]">Events</h5>
        <div className="pt-8 flex flex-col">
          <img src="./Home/event-1.png" />
          <div className="pt-5">
            <p className="leading-4 font-semibold">
              London to Brighton Off Road Bike Ride 2024
            </p>
            <p className="mt-2 text-sm leading-[19.6px] font-light">
              9:30am & 10am waves open! Join thousands of riders taking on
              Europe’s largest charity mountain bike event to power lifesaving
              research.
            </p>
            <p className="mt-2 text-sm leading-[19.6px] font-semibold">
              21 September, 2024
            </p>
            <a>
              <p className="text-[#E72323] pt-4 font-semibold text-sm leading-[14px]">
                See more
              </p>
            </a>
          </div>
        </div>
      </div>
      {/* WHAT OTHERS ARE SAYING */}
      <div className="flex flex-col pt-6 pb-20 px-7 ">
        <p className="text-sm leading-[14px] font-semibold">Testimonials</p>
        <h6 className="font-bold mt-4 text-[28px] leading-[28px]">
          What others are saying
        </h6>
        <p className="mt-2 text-sm leading-[19.6px] font-light">
          See what our cyclists are saying
        </p>
        <div className="flex flex-col mt-10 gap-3">
          <div className="rounded-lg border-[0.8px] gap-2 p-6 flex flex-col bg-[#F9F9F9] border-[#E1E3E6]">
            <p className="text-sm leading-[19.6px] font-light">
              "Go into any bike shop worht its spokes, and you'll see a big
              bottle of this stuff in the workshop… It's been tried and tested -
              and proven - on all of our roughest mountain-bike trails."
            </p>
            <p className="text-sm leading-[19.6px] font-medium">
              - News article
            </p>
          </div>
          <div className="rounded-lg border-[0.8px] gap-2 p-6 flex flex-col bg-[#F9F9F9] border-[#E1E3E6]">
            <p className="text-sm leading-[19.6px] font-light">
              I had the experience last weekend of testing enduro seal… and I
              must say I was very impressed.
            </p>
            <p className="text-sm leading-[19.6px] font-medium">- Johann</p>
          </div>
          <div className="rounded-lg border-[0.8px] gap-2 p-6 flex flex-col bg-[#F9F9F9] border-[#E1E3E6]">
            <p className="text-sm leading-[19.6px] font-light">
              "Thanks to Enduro Seal… I was able to finish the Darling Brewery
              40 km cycle race without a single puncture."
            </p>
            <p className="text-sm leading-[19.6px] font-medium">- Wayne</p>
          </div>
        </div>
        <button className="mt-10 w-fit text-center border-[0.8px] text-[#E72323] border-[#E72323] rounded-xl px-6 py-[14px]">
          <p className="text-sm leading-[14px] pt-[1px] font-semibold">
            See more
          </p>
        </button>
      </div>
      {/* CONTACT US */}
      <div className="pt-6 mb-[104px] px-7 ">
        <img src="./Home/contact-us.png" />
        <p className="font-bold text-[24px] leading-[24px] mt-8     ">
          Contact us
        </p>
        <p className="text-sm font-light leading-[19.6px] mt-2">
          We are happy to help with any questions that you might have!
        </p>
        <button className="mt-6 w-fit text-center text-white bg-[#E72323] rounded-xl px-6 py-[14px]">
          <p className="text-sm leading-[14px] pt-[1px] font-semibold">
            Contact
          </p>
        </button>
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;
