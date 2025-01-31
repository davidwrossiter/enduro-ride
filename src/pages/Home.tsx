//import Header from "../components/Header";
import Footer from "../components/Footer";
// import FAQ from "../components/FAQ";
import { useState, useEffect } from "react";
//import Notification from "../components/Notification";

function Home({ cart, setCart }: any) {
  //const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  //const [notifications, setNotifications] = useState<{ [key: string]: boolean }>({});
  const imageSources = [
    "./Home/hero-image.png",
    "./Home/hero-image-2.png",
    "./Home/hero-image-3.png",
    "./Home/hero-image-4.png",
    "./Home/hero-image-5.png",
    "./Home/hero-image-6.png",
    "./Home/hero-image-7.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const updateCart = (itemKey: string, newCount: number) => {
    setCart((prevCart: any) => ({
      ...prevCart,
      [itemKey]: newCount
    }));
    //setNotifications(prev => ({ ...prev, [itemKey]: true }));
    //setTimeout(() => setNotifications(prev => ({ ...prev, [itemKey]: false })), 2000);
  };
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    setCurrentImageIndex(randomIndex);
    setMobileMenuOpen(mobileMenuOpen);
  }, [imageSources.length]);

  // <div
  //   className={`${
  //     mobileMenuOpen ? "overflow-hidden" : ""
  //   } bg-[#F7F9FC] min-h-screen font-workSans`}
  // >

  return (
    <div
      className={`${mobileMenuOpen ? "overflow-hidden" : ""
        }  font-inter flex flex-col items-center min-h-screen`}
    >
      {/* HERO */}
      <div className={`${mobileMenuOpen ? "" : ""} `}>
        <div
          className={`mb-12 px-7 pt-[108px] w-full max-w-[1230px] flex flex-col-reverse md:items-center md:flex-row-reverse md:pt-[128px]`}
        >
          <img
            src={imageSources[currentImageIndex]}
            className="w-full md:max-w-[572px] mt-10 md:mt-0"
            draggable="false"
          />
          <div className="md:pr-10 lg:pr-[88px]">
            <div className="flex flex-col mt-8 md:mt-0">
              <h1 className="text-[48px] max-w-[572px] font-bold leading-[46.8px] lg:text-[70px] lg:leading-[68px]">
                Grab your bike and head outside.
              </h1>
              <p className="text-sm leading-[22.4px] mt-4 lg:mt-6 lg:text-lg lg:leading-[25px]">
                Whether commuting to the office, a family ride, road cycling or
                mountain biking, our aim is to keep you riding with zero
                interruptions.
              </p>
            </div>
            <a href="/#products">
              <button className="mt-8  text-white text-center bg-[#E72323] rounded-xl px-6 py-[14px]">
                <p className="text-sm leading-[14px] pt-[1px] lg:text-base lg:leading-[16px] font-semibold">
                  See products
                </p>
              </button>
            </a>
          </div>

        </div>
        {/* WHAT WE DO */}
        <div className="py-20 px-7 lg:py-16 flex flex-col items-center">
          <div className="w-full md:max-w-[800px] md:text-center">
            <h2 className="font-bold text-[28px] leading-[28px] md:text-[40px] md:leading-[40px]">
              Our Mission
            </h2>
            <p className="mt-3 font-light text-sm leading-[19.6px] md:text-base md:leading-[22.4px]">
              … is to keep the ‘joy of cycling’ alive by delivering technically
              superior tubeless tyre sealant that keeps you rolling, not fixing.
              We’re all about maximising your ride time and minimising those
              punctures that slow you down. But it’s more than just sealing
              tyres—it’s about building stronger connections, whether with
              yourself, your family, or your friends. By taking the stress out
              of tyre repairs, we help you focus on what really matters: the
              ride and the relationships you build along the way.
            </p>
          </div>
        </div>
        {/* GET TO KNOW US */}
        <div className="pt-6 pb-20 px-7 flex flex-col items-center w-full md:pt-20 md:pb-[104px]">
          <div className="md:flex md:flex-row w-full max-w-[1230px] items-center md:justify-between">
            <img
              className="w-full md:max-w-[572px]"
              src="./Home/get-to-know-us.png"
              draggable="false"
            />
            <div className="md:pl-10 lg:pl-[88px] ">
              <p className="text-[#757A7F] mt-10 md:mt-0 font-semibold text-sm leading-[14px] lg:text-lg lg:leading-[18px]">
                About
              </p>
              <h3 className="mt-4 font-bold text-[28px] leading-[28px] lg:mt-10 lg:text-[32px] lg:leading-[32px] ">
                Get to know us
              </h3>
              <div className="mt-3 max-w-[572px] flex flex-col gap-3 font-light text-sm leading-[19.6px] lg:text-base lg:leading-[22.4px]">
                <p>
                  <span className="font-medium">
                    Born from a deep passion for cycling and community,
                  </span>{" "}
                  Enduro Seal was developed in South Africa with the aim of
                  preventing riding downtime and the hassle associated with
                  puncture repairs while maximising ride time and the
                  relationships you build along the way.
                </p>
                <p>
                  Our products are enjoyed by cyclists from all backgrounds
                  ranging from the novice, fun-loving ‘every now and again’
                  cyclist to the seasoned professional counting on Enduro Seal
                  to keep them inflated over long distances. Having been
                  rigorously tested on the most challenging cycling terrains in
                  South Africa, ensuring durability and reliability, we are
                  excited to make the Enduro brand of products available to you.
                </p>
              </div>
              <a href="/#products">
                <p
                  id="products"
                  className="text-[#E72323] mt-6 text-sm leading-[14px]"
                >
                  See products
                </p>
              </a>
            </div>
          </div>
        </div>
        {/* PRODUCTS */}
        <div className="pt-10 pb-20 mx-7 flex flex-col items-center">
          <div className="w-full max-w-[1230px]">
            <h4 className="font-bold text-[28px] leading-[28px]">
              Our products
            </h4>
            <div className="flex flex-col mt-8 gap-10 md:gap-4 md:flex-row">
              <div className="flex flex-col items-start md:w-1/2">
                <img src="./Home/enduro-seal-3.png" draggable="false" />
                <div className="mt-5">
                  <p className="font-semibold leading-4">
                    MTB EnduroSeal - 250ml (Applicator Bottle)
                  </p>
                  <p className="mt-2 font-light text-sm leading-[19.6px]">
                    Premium tubeless sealant for mountain bikes.
                  </p>
                  <div className="mt-6 flex flex-row gap-3">
                    {/*                    <a
                      href="https://buy.stripe.com/14k14IebFgB09Hi5kk"
                      className="w-1/2 border rounded-xl py-[14px] bg-[#E72323] border-[0.8] border-[#E72323] text-center text-white text-sm leading-[14px] font-semibold"
                    >
                      <button>Buy now</button>
                    </a> */}
                    <div className="w-1/2 relative">
                      {/*{notifications['item_1'] && <Notification />}*/}
                      <a
                        href="https://amzn.eu/d/cJdFOEV"
                        target="_blank"
                        onClick={() => { updateCart('item_1', cart.item_1 + 1) }}
                        className="w-full border hover:cursor-pointer rounded-xl py-[14px] border-[0.8] border-[#E72323] text-center text-[#E72323] text-sm leading-[14px] font-semibold block"
                      >
                        <button>Buy on Amazon</button>
                      </a>
                    </div>
                  </div>                </div>
              </div>
              <div className="flex flex-col items-start md:w-1/2">
                <img src="./Home/enduro-seal-4.png" draggable="false" />
                <div className="mt-5">
                  <p className="font-semibold leading-4">
                    Road & Gravel - 250ml (Applicator Bottle)
                  </p>
                  <p className="mt-2 font-light text-sm leading-[19.6px]">
                    Premium tubeless sealant for road and gravel bikes.
                  </p>
                  <div className="mt-6 flex flex-row gap-3">
                    {/* <a
                      href="https://buy.stripe.com/5kA9BeaZtbgGbPq7st"
                      className="w-1/2 border rounded-xl py-[14px] bg-[#E72323] border-[0.8] border-[#E72323] text-center text-white text-sm leading-[14px] font-semibold"
                    >
                      <button>Buy now</button>
                    </a> */}
                    <div className="w-1/2 relative">
                      {/*{notifications['item_2'] && <Notification />} */}

                      <a
                        href="https://amzn.eu/d/5njtpg5"
                        target="_blank"
                        className="w-full border hover:cursor-pointer rounded-xl py-[14px] border-[0.8] border-[#E72323] text-center text-[#E72323] text-sm leading-[14px] font-semibold block"
                      >
                        <button>Buy on Amazon</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col items-start md:w-1/3">
                <img src="./Home/enduro-seal-2.png" draggable="false" />
                <div className="mt-5">
                  <p className="font-semibold leading-4">MTB EnduroSeal - 1L</p>
                  <p className="mt-2 font-light text-sm leading-[19.6px]">
                    Premium tubeless sealant for mountain bikes.
                  </p>
                  <a href="/products/3">
                    <p className="text-[#E72323] mt-3 text-sm leading-[14px]">
                      Purchase
                    </p>
                  </a>
                </div>
              </div> */}
            </div>
            {/*       <a href="/products">
              <button
                id="events"
                className="mt-10 text-white text-center bg-[#E72323] rounded-xl px-6 py-[14px]"
              >
                <p className="text-sm leading-[14px] pt-[1px] font-semibold">
                  See all products
                </p>
              </button>
            </a> */}
          </div>
        </div>
        {/* EVENTS */}
        {/* <div className="flex flex-col items-center pt-6 pb-20  max-w-[1230px] w-full">
          <h5 className="font-bold text-[28px] leading-[28px] text-center">
            Upcoming events
          </h5>
          <div className="w-full px-7 flex flex-row justify-center">
            <div className="pt-8 flex flex-col w-full max-w-[500px]">
              <img src="./Home/event-1.png" />
              <div className="pt-5">
                <p className="leading-4 font-semibold">
                  London to Brighton Off Road Bike Ride 2024
                </p>
                <p className="mt-2 text-sm leading-[19.6px] font-light">
                  9:30am & 10am waves open! Join thousands of riders taking on
                  Europe’s largest charity mountain bike event to power
                  lifesaving research.
                </p>
                <p className="mt-2 text-sm leading-[19.6px] font-semibold">
                  21 September, 2024
                </p>
                <a href="#" target="_blank">
                  <p
                    id="testimonials"
                    className="text-[#E72323] pt-4 font-semibold text-sm leading-[14px]"
                  >
                    See more
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* WHAT OTHERS ARE SAYING */}
        <div className="flex flex-col pt-6 pb-20 mx-7 ">
          <p className="text-sm leading-[14px] font-semibold">Testimonials</p>
          <h6 className="font-bold mt-4 text-[28px] leading-[28px]">
            What others are saying
          </h6>
          <p className="mt-2 text-sm leading-[19.6px] font-light">
            See what our cyclists are saying
          </p>
          <div className="flex flex-col mt-10 gap-3 md:flex-row">
            <div className="rounded-lg border-[0.8px] gap-2 p-6 h-fit justify-center w-full max-w-[400px] flex flex-col bg-[#F9F9F9] border-[#E1E3E6]">
              <p className="text-sm leading-[19.6px] font-light">
                "Go into any bike shop worth its spokes, and you'll see a big
                bottle of this stuff in the workshop… It's been tried and tested
                - and proven - on all of our roughest mountain-bike trails."
              </p>
              <p className="text-sm leading-[19.6px] font-medium">
                - News article
              </p>
            </div>
            <div className="rounded-lg border-[0.8px] gap-2 p-6 h-fit flex max-w-[400px] flex-col bg-[#F9F9F9] border-[#E1E3E6]">
              <p className="text-sm leading-[19.6px] font-light">
                I had the experience last weekend of testing enduro seal… and I
                must say I was very impressed.
              </p>
              <p className="text-sm leading-[19.6px] font-medium">- Johann</p>
            </div>
            <div className="rounded-lg border-[0.8px] gap-2 p-6 h-fit flex max-w-[400px] flex-col bg-[#F9F9F9] border-[#E1E3E6]">
              <p className="text-sm leading-[19.6px] font-light">
                "Thanks to Enduro Seal… I was able to finish the Darling Brewery
                40 km cycle race without a single puncture."
              </p>
              <p className="text-sm leading-[19.6px] font-medium">- Wayne</p>
            </div>
          </div>
          <div className="flex mt-10 flex-row items-center justify-start">
            <button className=" w-fit text-center border-[0.8px] text-[#E72323] border-[#E72323] rounded-xl px-6 py-[14px]">
              <p className="text-sm leading-[14px] pt-[1px] font-semibold">
                See more
              </p>
            </button>
          </div>
          <div className="trustpilot-widget mt-10" data-locale="en-GB" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="670f6b37a66db548f75afc07" data-style-height="52px" data-style-width="100%">
          </div>
        </div>
        {/* CONTACT US */}
        <div
          id="faqs"
          className="pt-6 mb-[104px] px-7 w-full flex justify-center"
        >
          {/* <div className="w-full max-w-[1230px] flex flex-col md:flex-row-reverse items-center justify-between">
          <img src="./Home/contact-us.png" className="max-w-[572px]" />
          <div>
            <p className="font-bold text-[24px] leading-[24px] mt-8 md:text-[32px] md:leading-[32px]">
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
        </div> */}
          {/*<FAQ /> */}
        </div>

        {/* FOOTER */}
      </div>
      <Footer />
    </div >
  );
}

export default Home;
