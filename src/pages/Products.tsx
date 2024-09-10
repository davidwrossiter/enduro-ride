import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

function Products() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header
        scrollPosition={scrollPosition}
        setScrollPosition={setScrollPosition}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
      <div className="pt-[144px] pb-20 md:py-[200px] mx-7 flex flex-col items-center">
        <div className="w-full max-w-[1230px]">
          <h4 className="font-bold text-[28px] leading-[28px] md:text-[48px] leading-[48px]">
            Shop Enduro
          </h4>
          <div className="flex flex-col mt-8 md:flex-row md:flex-wrap">
            <div className="flex flex-col items-start md:w-1/2 p-2">
              <img src="/Home/enduro-seal-3.png" draggable="false" />
              <div className="mt-5">
                <p className="font-semibold leading-4">
                  MTB EnduroSeal - 250ml (Applicator Bottle)
                </p>
                <p className="mt-2 font-light text-sm leading-[19.6px]">
                  Premium tubeless sealant for mountain bikes.
                </p>
                <a href="/products/1">
                  <p className="text-[#E72323] mt-3 text-sm leading-[14px]">
                    Purchase
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start md:w-1/2 p-2">
              <img src="/Home/enduro-seal-4.png" draggable="false" />
              <div className="mt-5">
                <p className="font-semibold leading-4">
                  Road & Gravel - 250ml (Applicator Bottle)
                </p>
                <p className="mt-2 font-light text-sm leading-[19.6px]">
                  Premium tubeless sealant for road and gravel bikes.
                </p>
                <a href="/products/2">
                  <p className="text-[#E72323] mt-3 text-sm leading-[14px]">
                    Purchase
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start md:mt-6 md:w-1/2 p-2">
              <img src="/Home/enduro-seal-2.png" draggable="false" />
              <div className="mt-5">
                <p className="font-semibold leading-4">MTB EnduroSeal - 1L</p>
                <p className="mt-2 font-light text-sm leading-[19.6px]">
                  Premium tubeless sealant for mountain bikes.
                </p>
                <a href="products/3">
                  <p className="text-[#E72323] mt-3 text-sm leading-[14px]">
                    Purchase
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start md:mt-6 md:w-1/2 p-2">
              <img src="/Home/enduro-seal-5.png" draggable="false" />
              <div className="mt-5">
                <p className="font-semibold leading-4">Road & Gravel - 1L</p>
                <p className="mt-2 font-light text-sm leading-[19.6px]">
                  Premium tubeless sealant for road and gravel bikes.
                </p>
                <a href="products/4">
                  <p className="text-[#E72323] mt-3 text-sm leading-[14px]">
                    Purchase
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start md:mt-6 md:w-1/2 p-2">
              <img src="/Home/enduro-2L-mtb.png" draggable="false" />
              <div className="mt-5">
                <p className="font-semibold leading-4">MTB EnduroSeal - 2L</p>
                <p className="mt-2 font-light text-sm leading-[19.6px]">
                  Premium tubeless sealant for mountain bikes.
                </p>
                <a href="products/6">
                  <p className="text-[#E72323] mt-3 text-sm leading-[14px]">
                    Purchase
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start md:mt-6 md:w-1/2 p-2">
              <img src="/Home/enduro-2L-road.png" draggable="false" />
              <div className="mt-5">
                <p className="font-semibold leading-4">Road & Gravel - 2L</p>
                <p className="mt-2 font-light text-sm leading-[19.6px]">
                  Premium tubeless sealant for road and gravel bikes.
                </p>
                <a href="products/5">
                  <p className="text-[#E72323] mt-3 text-sm leading-[14px]">
                    Purchase
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Products;
