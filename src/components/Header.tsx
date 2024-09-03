import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import API_URL from "../../apiConfig";

export default function Header({
  scrollPosition,
  mobileMenuOpen,
  setMobileMenuOpen,
}: any) {
  gsap.registerPlugin(useGSAP);
  const container = useRef<HTMLDivElement>(null);
  const burgerMenuIcon = useRef<SVGSVGElement>(null);
  const [internalState, setInternalState] = useState(false);

  const handleMenuClick = () => {
    if (mobileMenuOpen) {
      gsap.to(container.current, {
        width: "0px",
        display: "none",
        duration: 0.2,
      });
    } else {
      gsap.to(container.current, {
        width: "60%",
        display: "block",
        duration: 0.2,
      });
    }

    setMobileMenuOpen(!mobileMenuOpen);
    setInternalState(!internalState);
  };

  useEffect(() => {
    if (mobileMenuOpen != internalState) {
      gsap.to(container.current, {
        width: "0px",
        display: "none",
        duration: 0.2,
      });
      setMobileMenuOpen(false);
      setInternalState(false);
    }

    // console.log(scrollPosition);
  }, [mobileMenuOpen]);

  return (
    <div
      className={`flex font-inter bg-white flex-row fixed top-0 w-full justify-center h-[52px] md:h-[62px] px-7 bg-opacity-80 backdrop-blur-md z-50 font-workSans`}
    >
      <p
        className={`${
          mobileMenuOpen ? "blur-sm" : "blur-none"
        } w-full flex max-w-[1250px] justify-between items-center text-center text-black select-none transition-backdrop-blur duration-300`}
      >
        <a
          href="/"
          className="font-semibold leading-[140%] h-full flex items-center pb-[2px]"
        >
          {/* Enduro Ride */}
          <img
            src="/Home/enduro-ride-logo.svg"
            className="w-[70px] md:w-[90px]"
          />
        </a>
        <div className="flex flex-row justify-end w-full">
          <div className="hidden leading-[100%] items-center text-sm lg:flex text-black flex-row pl-10 gap-8">
            <a href="/" className="hover:cursor-pointer">
              Home
            </a>
            <a href="/#products" className="hover:cursor-pointer">
              Products
            </a>
            <a href="/#events" className="hover:cursor-pointer">
              Events
            </a>
            {/* <a href="/#plans" className="hover:cursor-pointer">
              Plans
            </a> */}
            <a href="/#testimonials" className="hover:cursor-pointer">
              Testimonails
            </a>
            <a href="/#faqs" className="hover:cursor-pointer">
              FAQ
            </a>
          </div>
        </div>
      </p>

      <div
        ref={container}
        style={{ display: "none", height: "100vh" }}
        className={`right-0 md:hidden z-10 h-screen top-[0px] absolute bg-[#0e0e0e] border-l-[0.8px] border-[#414141]`}
      >
        <div className="flex flex-row justify-between">
          <p className="text-[#F7F9FC] flex font-semibold py-4 pl-6 min-w-[150px]">
            Enduro Ride
            {/* <svg
              className="border-[0.8px] border-[#414141] rounded-md"
              width="32"
              height="32"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="8" fill="#1D1E1F" />
              <path
                d="M38.6322 18H45.7522L39.7122 38H31.5522L27.9122 25.72L24.3922 38H16.2722L10.1922 18H17.3522L20.7122 32.76L24.6322 18H31.3522L35.2322 32.76L38.6322 18Z"
                fill="white"
              />
            </svg> */}
            {/* <p className="pl-2">wilson</p> */}
          </p>
          <button onClick={handleMenuClick} className="px-6 py-4 leading-6">
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7188 14.3906L9.32501 8.00037L15.7188 1.65714C16.0392 1.28603 16.0219 0.729108 15.679 0.378943C15.3361 0.0287773 14.7832 0.00341392 14.4101 0.320731L7.99765 6.6169L1.69734 0.273674C1.33275 -0.0912247 0.743918 -0.0912247 0.379325 0.273674C0.202363 0.450387 0.102824 0.690937 0.102824 0.941878C0.102824 1.19282 0.202363 1.43337 0.379325 1.61008L6.67028 7.9439L0.276501 14.2777C0.0995389 14.4544 0 14.695 0 14.9459C0 15.1969 0.0995389 15.4374 0.276501 15.6141C0.452909 15.7903 0.69172 15.8885 0.940183 15.887C1.18409 15.8885 1.41891 15.794 1.59452 15.6235L7.99765 9.27089L14.4101 15.7271C14.5865 15.9032 14.8253 16.0014 15.0738 16C15.319 15.9989 15.554 15.9009 15.7281 15.7271C15.9039 15.5491 16.0017 15.3078 16 15.0569C15.9982 14.8059 15.897 14.5661 15.7188 14.3906Z"
                fill="#F7F9FC"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col text-[#F7F9FC] pl-6 text-base gap-2 ">
          <a
            href="/"
            className="w-full flex justify-start min-w-[200px]"
            onClick={handleMenuClick}
          >
            Home
          </a>
          <a
            href="/#products"
            className="w-full flex justify-start min-w-[200px]"
            onClick={handleMenuClick}
          >
            Products
          </a>
          <a
            href="/#events"
            className="w-full flex justify-start min-w-[200px]"
            onClick={handleMenuClick}
          >
            Events
          </a>
          {/* <a
            href="/#plans"
            className="w-full flex justify-start min-w-[200px]"
            onClick={handleMenuClick}
          >
            Plans
          </a> */}
          <a
            href="/#testimonials"
            className="w-full flex justify-start min-w-[200px]"
            onClick={handleMenuClick}
          >
            Testimonials
          </a>
          <a
            href="/#faqs"
            className="w-full flex justify-start min-w-[200px]"
            onClick={handleMenuClick}
          >
            FAQ
          </a>
          <p className="font-semibold mt-3 min-w-[200px]">Quick links</p>
          <div className="flex flex-col gap-2 text-gray-400">
            <a href="/contact" className="min-w-[200px]">
              Contact
            </a>
            <a href="/products" className="min-w-[200px]">
              Store
            </a>

            {/* <p className="min-w-[200px]">Manage account</p> */}
          </div>
        </div>
      </div>

      <p className="z-0 flex self-center justify-end w-full font-semibold text-center text-black select-none lg:hidden align-end">
        <button onClick={handleMenuClick}>
          <svg
            ref={burgerMenuIcon}
            width="34"
            height="10"
            viewBox="0 0 34 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H33"
              stroke="#272829"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 9H33"
              stroke="#272829"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </p>
    </div>
  );
}
