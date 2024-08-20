import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQItem from "../components/FAQItem";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();

  // Mock data for demonstration. Replace with your actual data fetching logic.
  const products = {
    "1": {
      name: "MTB Tire Seal",
      description: "Premium tubeless sealant for mountain bikes.",
      image: "/Home/enduro-seal-3.png",
    },
    "2": {
      name: "MTB Handlebar",
      description: "Ergonomic handlebar for mountain bikes.",
      image: "/Home/enduro-seal-1.png",
    },
    "3": {
      name: "MTB Helmet",
      description: "Safety-first helmet for mountain biking.",
      image: "/Home/enduro-seal-2.png",
    },
  };

  const product = products[productId as keyof typeof products];

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="min-h-screen flex justify-between flex-col">
      <Header />
      <div className="pt-[88px] px-7">
        <img src={product.image} />
        <p className="text-[#414346] text-sm leading-[16.8px] font-medium mt-6">
          Products
        </p>
        <h1 className="mt-4 text-2xl leading-[28.8px] font-bold">
          {product.name}
        </h1>
        <p className="text-xl leading-[24px] mt-2 font-medium">£23.95</p>
        <div className="flex flex-row items-center mt-4">
          <div className="flex flex-row gap-[2px]">
            <img src="/Home/star.svg" />
            <img src="/Home/star.svg" />
            <img src="/Home/star.svg" />
            <img src="/Home/star.svg" />
            <img src="/Home/star.svg" />
          </div>
          <div className="flex flex-row pl-3">
            <p className="text-sm leading-[16.8px] font-medium">4 reviews</p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-[19.6px]">{product.description}</p>
        <div className="flex flex-col mt-4 text-sm leading-[16.8px]">
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
        </div>
        <div className="mt-6 flex flex-row gap-3">
          <button className="w-1/2 border rounded-xl py-[14px] bg-[#E72323] border-[0.8] border-[#E72323] text-white text-sm leading-[14px] font-semibold">
            Buy now
          </button>
          <button className="w-1/2 border rounded-xl py-[14px] text-[#E72323] border-[0.8] border-[#E72323] text-sm leading-[14px] font-semibold">
            Add to cart
          </button>
        </div>
        <div className="mt-10">
          <p className="leading-[19.2px] font-bold">Details</p>
          <div className="mt-6 mb-20">
            <div className="w-full flex flex-col gap-2">
              <FAQItem
                question="How to use"
                answer="We currently support Claude 3.5 Sonnet, GPT-4o, GPT-4o-mini, Llama-3.1-8b, Llama-3.1-70b, and Llama-3.1-405b."
              />
              <FAQItem
                question="Product details"
                answer="Wilson is still new, so we need as many people testing it as possible, and it is completely free for the moment."
              />
              <FAQItem
                question="Packaging"
                answer={
                  <span>
                    We have an enterprise plan which is only available upon
                    request, please get in touch on{" "}
                    <a className="underline" href="/contact">
                      this form
                    </a>{" "}
                    if you would like to know more.
                  </span>
                }
              />
              <FAQItem
                question="Features and benefits"
                answer={
                  <span>
                    We have an enterprise plan which is only available upon
                    request, please get in touch on{" "}
                    <a className="underline" href="/contact">
                      this form
                    </a>{" "}
                    if you would like to know more.
                  </span>
                }
              />
              <FAQItem
                question="Reviews"
                answer={
                  <span>
                    We have an enterprise plan which is only available upon
                    request, please get in touch on{" "}
                    <a className="underline" href="/contact">
                      this form
                    </a>{" "}
                    if you would like to know more.
                  </span>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
