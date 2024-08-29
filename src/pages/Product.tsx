import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQItem from "../components/FAQItem";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();

  // Mock data for demonstration. Replace with your actual data fetching logic.
  const products = {
    "1": {
      name: "MTB EnduroSeal - 250ml (Applicator Bottle)",
      description: "Premium tubeless sealant for mountain bikes.",
      price: "£11.50",
      image: "/Home/enduro-seal-3.png",
      faq: {
        one: {
          question: <p>How to use</p>,
          answer: (
            <p className="py-2">
              <span className="font-bold">First</span>, before you dispense any
              Enduro Seal, ‘seat’ the{" "}
              <span className="font-bold">mountain bicycle</span> tyre onto the
              rim using a pump or air compressor (preferred).
              <br />
              <br />
              When you hear a ‘pop’, you know your tyre is seated.
              <br />
              <br />
              *Do not use a CO2 canister as this reduces the life of the
              product.
              <br />
              <br />
              <span className="font-bold">Second</span>, slowly unscrew the
              valve core using a valve core tool{" "}
              <span className="italic">
                (included with the 250ml Applicator bottle)
              </span>{" "}
              thereby deflating the tyre.
              <br />
              <br />
              <span className="font-bold">Third</span>, make sure to vigorously
              shake the bottle of Enduro Seal{" "}
              <span className="font-bold">(very important)</span>
              <br />
              <br />
              <span className="font-bold">Fourth</span>, push the applicator
              nozzle over the valve stem and dispense an initial 125ml of
              EnduroSeal into the tyre by gently squeezing the applicator bottle
              and using the measures on the bottle as guides.
              <br />
              <br />
              <span className="font-bold">Fifth</span>, reinsert the valve core
              using the valve core tool and inflate the tyre to the desired
              pressure.
              <br />
              <br />
              <span className="font-bold">Finally</span>, to ensure even
              distribution of the product in the tyre and to seal any small
              leaks, rotate the tyre in different directions.
            </p>
          ),
        },
        two: {
          question: <p>Product Details</p>,
          answer: (
            <p className="py-2">
              While we are fierce advocates of riding and the outdoors, caring
              for our environment is even closer to our hearts. Making use of
              natural fibres, we strive to keep our products as safe and
              eco-friendly as possible.
              <br />
              <br />
              Using natural fibre and certified distilled water, ensuring a
              fixed (neutral) PH level is maintained, Enduro Seal is safe for
              bicycle rims and spokes and is pollutant and mineral free.
              <br />
              <br />
              EnduroSeal also contains propylene glycol, which is a non-toxic
              substance considered to be safe for human use. A common ingredient
              in a variety of beauty products, pharmaceuticals and indirect food
              additives.
            </p>
          ),
        },
        three: {
          question: <p>Features and Benefits</p>,
          answer: (
            <ul className="py-2">
              <li>
                Instant puncture repair up to 6.5mm in treads and sidewalls
              </li>
              <br />
              {/* <br /> */}
              <li>
                Remains liquid inside tyres for 3 - 7 months before top-up
                required *In arid / dry conditions, more frequent monitoring may
                be necessary
              </li>
              <br />
              {/* <br /> */}
              <li>Effective in temperatures as low as -18°C</li>
              <br />
              {/* <br /> */}
              <li>
                Protects against damage to wheels and tyres with a natural
                rubber latex formula
              </li>
              <br />
              {/* <br /> */}
              <li>Non - corrosive</li>
              <br />
              {/* <br /> */}
              <li>No balling of a rims inner latex-compound</li>
            </ul>
          ),
        },
      },
    },
    "2": {
      name: "Road & Gravel - 250ml (Applicator Bottle)",
      description: "Premium Tubeless Sealant for Road and Gravel bikes.",
      price: "£11.50",
      image: "/Home/enduro-seal-4.png",
      faq: {
        one: {
          question: <p>How to use</p>,
          answer: (
            <p className="py-2">
              <span className="font-bold">First</span>, before you dispense any
              Enduro Seal, ‘seat’ the{" "}
              <span className="font-bold">road / gravel bicycle</span> tyre onto
              the rim using a pump or air compressor (preferred).
              <br />
              <br />
              When you hear a ‘pop’, you know your tyre is seated.
              <br />
              <br />
              *Do not use a CO2 canister as this reduces the life of the
              product.
              <br />
              <br />
              <span className="font-bold">Second</span>, slowly unscrew the
              valve core using a valve core tool{" "}
              <span className="italic">
                (included with the 250ml Applicator bottle)
              </span>{" "}
              thereby deflating the tyre.
              <br />
              <br />
              <span className="font-bold">Third</span>, make sure to vigorously
              shake the bottle of Enduro Seal{" "}
              <span className="font-bold">(very important)</span>
              <br />
              <br />
              <span className="font-bold">Fourth</span>, push the applicator
              nozzle over the valve stem and dispense an initial 125ml of
              EnduroSeal into the tyre by gently squeezing the applicator bottle
              and using the measures on the bottle as guides.
              <br />
              <br />
              <span className="font-bold">Fifth</span>, reinsert the valve core
              using the valve core tool and inflate the tyre to the desired
              pressure.
              <br />
              <br />
              <span className="font-bold">Finally</span>, to ensure even
              distribution of the product in the tyre and to seal any small
              leaks, rotate the tyre in different directions.
            </p>
          ),
        },
        two: {
          question: <p>Product Details</p>,
          answer: (
            <p className="py-2">
              While we are fierce advocates of riding and the outdoors, caring
              for our environment is even closer to our hearts. Making use of
              natural fibres, we strive to keep our products as safe and
              eco-friendly as possible.
              <br />
              <br />
              Using natural fibre and certified distilled water, ensuring a
              fixed (neutral) PH level is maintained, Enduro Seal is safe for
              bicycle rims and spokes and is pollutant and mineral free.
              <br />
              <br />
              EnduroSeal also contains propylene glycol, which is a non-toxic
              substance considered to be safe for human use. A common ingredient
              in a variety of beauty products, pharmaceuticals and indirect food
              additives.
            </p>
          ),
        },
        three: {
          question: <p>Features and Benefits</p>,
          answer: (
            <ul className="py-2">
              <li>
                Instant puncture repair up to 6.5mm in treads and sidewalls
              </li>
              <br />
              {/* <br /> */}
              <li>
                Remains liquid inside tyres for 3 - 7 months before top-up
                required *In arid / dry conditions, more frequent monitoring may
                be necessary
              </li>
              <br />
              {/* <br /> */}
              <li>Effective in temperatures as low as -18°C</li>
              <br />
              {/* <br /> */}
              <li>
                Protects against damage to wheels and tyres with a natural
                rubber latex formula
              </li>
              <br />
              {/* <br /> */}
              <li>Non - corrosive</li>
              <br />
              {/* <br /> */}
              <li>No balling of a rims inner latex-compound</li>
            </ul>
          ),
        },
      },
    },
    "3": {
      name: "MTB EnduroSeal - 1L",
      description: "Premium tubeless sealant for mountain bikes.",
      price: "£28.50",
      image: "/Home/enduro-seal-2.png",
      faq: {
        one: {
          question: <p>How to use</p>,
          answer: (
            <p className="py-2">
              <span className="font-bold">First</span>, before you dispense any
              Enduro Seal, ‘seat’ the{" "}
              <span className="font-bold">mountain bicycle</span> tyre onto the
              rim using a pump or air compressor (preferred).
              <br />
              <br />
              When you hear a ‘pop’, you know your tyre is seated.
              <br />
              <br />
              *Do not use a CO2 canister as this reduces the life of the
              product.
              <br />
              <br />
              <span className="font-bold">Second</span>, slowly unscrew the
              valve core using a valve core tool{" "}
              <span className="italic">
                (included with the 250ml Applicator bottle)
              </span>{" "}
              thereby deflating the tyre.
              <br />
              <br />
              <span className="font-bold">Third</span>, make sure to vigorously
              shake the bottle of Enduro Seal{" "}
              <span className="font-bold">(very important)</span>
              <br />
              <br />
              <span className="font-bold">Fourth</span>, push the applicator
              nozzle over the valve stem and dispense an initial 125ml of
              EnduroSeal into the tyre by gently squeezing the applicator bottle
              and using the measures on the bottle as guides.
              <br />
              <br />
              <span className="font-bold">Fifth</span>, reinsert the valve core
              using the valve core tool and inflate the tyre to the desired
              pressure.
              <br />
              <br />
              <span className="font-bold">Finally</span>, to ensure even
              distribution of the product in the tyre and to seal any small
              leaks, rotate the tyre in different directions.
            </p>
          ),
        },
        two: {
          question: <p>Product Details</p>,
          answer: (
            <p className="py-2">
              While we are fierce advocates of riding and the outdoors, caring
              for our environment is even closer to our hearts. Making use of
              natural fibres, we strive to keep our products as safe and
              eco-friendly as possible.
              <br />
              <br />
              Using natural fibre and certified distilled water, ensuring a
              fixed (neutral) PH level is maintained, Enduro Seal is safe for
              bicycle rims and spokes and is pollutant and mineral free.
              <br />
              <br />
              EnduroSeal also contains propylene glycol, which is a non-toxic
              substance considered to be safe for human use. A common ingredient
              in a variety of beauty products, pharmaceuticals and indirect food
              additives.
            </p>
          ),
        },
        three: {
          question: <p>Features and Benefits</p>,
          answer: (
            <ul className="py-2">
              <li>
                Instant puncture repair up to 6.5mm in treads and sidewalls
              </li>
              <br />
              {/* <br /> */}
              <li>
                Remains liquid inside tyres for 3 - 7 months before top-up
                required *In arid / dry conditions, more frequent monitoring may
                be necessary
              </li>
              <br />
              {/* <br /> */}
              <li>Effective in temperatures as low as -18°C</li>
              <br />
              {/* <br /> */}
              <li>
                Protects against damage to wheels and tyres with a natural
                rubber latex formula
              </li>
              <br />
              {/* <br /> */}
              <li>Non - corrosive</li>
              <br />
              {/* <br /> */}
              <li>No balling of a rims inner latex-compound</li>
            </ul>
          ),
        },
      },
    },
    "4": {
      name: "Road & Gravel - 1L",
      description: "Premium Tubeless Sealant for Road and Gravel bikes.",
      price: "£28.50",
      image: "/Home/enduro-seal-5.png",
      faq: {
        one: {
          question: <p>How to use</p>,
          answer: (
            <p className="py-2">
              <span className="font-bold">First</span>, before you dispense any
              Enduro Seal, ‘seat’ the{" "}
              <span className="font-bold">road / gravel bicycle</span> tyre onto
              the rim using a pump or air compressor (preferred).
              <br />
              <br />
              When you hear a ‘pop’, you know your tyre is seated.
              <br />
              <br />
              *Do not use a CO2 canister as this reduces the life of the
              product.
              <br />
              <br />
              <span className="font-bold">Second</span>, slowly unscrew the
              valve core using a valve core tool{" "}
              <span className="italic">
                (included with the 250ml Applicator bottle)
              </span>{" "}
              thereby deflating the tyre.
              <br />
              <br />
              <span className="font-bold">Third</span>, make sure to vigorously
              shake the bottle of Enduro Seal{" "}
              <span className="font-bold">(very important)</span>
              <br />
              <br />
              <span className="font-bold">Fourth</span>, push the applicator
              nozzle over the valve stem and dispense an initial 125ml of
              EnduroSeal into the tyre by gently squeezing the applicator bottle
              and using the measures on the bottle as guides.
              <br />
              <br />
              <span className="font-bold">Fifth</span>, reinsert the valve core
              using the valve core tool and inflate the tyre to the desired
              pressure.
              <br />
              <br />
              <span className="font-bold">Finally</span>, to ensure even
              distribution of the product in the tyre and to seal any small
              leaks, rotate the tyre in different directions.
            </p>
          ),
        },
        two: {
          question: <p>Product Details</p>,
          answer: (
            <p className="py-2">
              While we are fierce advocates of riding and the outdoors, caring
              for our environment is even closer to our hearts. Making use of
              natural fibres, we strive to keep our products as safe and
              eco-friendly as possible.
              <br />
              <br />
              Using natural fibre and certified distilled water, ensuring a
              fixed (neutral) PH level is maintained, Enduro Seal is safe for
              bicycle rims and spokes and is pollutant and mineral free.
              <br />
              <br />
              EnduroSeal also contains propylene glycol, which is a non-toxic
              substance considered to be safe for human use. A common ingredient
              in a variety of beauty products, pharmaceuticals and indirect food
              additives.
            </p>
          ),
        },
        three: {
          question: <p>Features and Benefits</p>,
          answer: (
            <ul className="py-2">
              <li>
                Instant puncture repair up to 6.5mm in treads and sidewalls
              </li>
              <br />
              {/* <br /> */}
              <li>
                Remains liquid inside tyres for 3 - 7 months before top-up
                required *In arid / dry conditions, more frequent monitoring may
                be necessary
              </li>
              <br />
              {/* <br /> */}
              <li>Effective in temperatures as low as -18°C</li>
              <br />
              {/* <br /> */}
              <li>
                Protects against damage to wheels and tyres with a natural
                rubber latex formula
              </li>
              <br />
              {/* <br /> */}
              <li>Non - corrosive</li>
              <br />
              {/* <br /> */}
              <li>No balling of a rims inner latex-compound</li>
            </ul>
          ),
        },
      },
    },
  };

  const product = products[productId as keyof typeof products];

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="min-h-screen flex justify-between flex-col">
      <Header />
      <div className="w-full flex justify-center">
        <div className="pt-[88px] mx-7 w-full max-w-[1230px] flex items-center md:items-start flex-col md:flex-row md:justify-between">
          <img
            src={product.image}
            className="w-full rounded-3xl max-w-[572px] max-h-[572px] object-cover aspect-square md:mr-10 lg:mr-20"
          />
          <div className="w-full max-w-[572px]">
            <p className="text-[#414346] text-sm leading-[16.8px] font-medium mt-6">
              Products
            </p>
            <h1 className="mt-4 text-2xl leading-[28.8px] font-bold">
              {product.name}
            </h1>
            <p className="text-xl leading-[24px] mt-2 font-medium">
              {product.price}
            </p>
            <div className="flex flex-row items-center mt-4">
              <div className="flex flex-row gap-[2px]">
                <img src="/Home/star.svg" />
                <img src="/Home/star.svg" />
                <img src="/Home/star.svg" />
                <img src="/Home/star.svg" />
                <img src="/Home/star.svg" />
              </div>
              <div className="flex flex-row pl-3">
                <p className="text-sm leading-[16.8px] font-medium">
                  4 reviews
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-[19.6px]">
              {product.description}
            </p>
            {/* <div className="flex flex-col mt-4 text-sm leading-[16.8px]">
              <p className="text-sm leading-[16.8px] font-bold">Size</p>
              <div className="flex flex-row justify-between mt-3 gap-2">
                <div className="w-1/4 flex justify-center items-center py-1 rounded-lg border-[0.8px] border-[#E0E0E0]">
                  <p className="text-sm leading-[19.6px]">60ml</p>
                </div>
                <div className="w-1/4 flex justify-center items-center py-1 rounded-lg border-[0.8px] border-[#E0E0E0]">
                  <p className="text-sm leading-[19.6px]">250ml</p>
                </div>
                <div className="w-1/4 flex justify-center items-center py-1 rounded-lg border-[0.8px] border-[#E0E0E0]">
                  <p className="text-sm leading-[19.6px]">1L</p>
                </div>
                <div className="w-1/4 flex justify-center items-center py-1 rounded-lg border-[0.8px] border-[#E0E0E0]">
                  <p className="text-sm leading-[19.6px]">5L</p>
                </div>
              </div>
            </div> */}
            <div className="mt-6 flex flex-row gap-3">
              <button className="w-1/2 border rounded-xl py-[14px] bg-[#E72323] border-[0.8] border-[#E72323] text-white text-sm leading-[14px] font-semibold">
                Buy now
              </button>
              {/* <button className="w-1/2 border rounded-xl py-[14px] text-[#E72323] border-[0.8] border-[#E72323] text-sm leading-[14px] font-semibold">
                Add to cart
              </button> */}
            </div>
            <div className="mt-10">
              <p className="leading-[19.2px] font-bold">Details</p>
              <div className="mt-6 mb-20">
                <div className="w-full flex flex-col gap-2">
                  <FAQItem
                    question={product.faq.one.question}
                    answer={product.faq.one.answer}
                  />
                  <FAQItem
                    question={product.faq.two.question}
                    answer={product.faq.two.answer}
                  />
                  <FAQItem
                    question={product.faq.three.question}
                    answer={product.faq.three.answer}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
