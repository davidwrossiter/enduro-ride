import Header from "../components/Header";
import Footer from "../components/Footer";

function Products() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="pt-[144px] pb-20 mx-7 flex flex-col items-center">
        <div className="w-full max-w-[1230px]">
          <h4 className="font-bold text-[28px] leading-[28px]">Shop Enduro</h4>
          <div className="flex flex-col mt-8 gap-10 md:gap-4 md:flex-row">
            <div className="flex flex-col items-start">
              <img src="/Home/enduro-seal-3.png" draggable="false" />
              <div className="mt-5">
                <p className="font-semibold leading-4">MTB Tire Seal</p>
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
            <div className="flex flex-col items-start">
              <img src="/Home/enduro-seal-1.png" draggable="false" />
              <div className="mt-5">
                <p className="font-semibold leading-4">Road Bike Tire Seal</p>
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
            <div className="flex flex-col items-start">
              <img src="/Home/enduro-seal-2.png" draggable="false" />
              <div className="mt-5">
                <p className="font-semibold leading-4">MTB Tire Seal</p>
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Products;
