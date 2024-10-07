import { useState, useEffect } from "react";
import Footer from "../components/Footer";

function Cart({ cart, setCart }: any) {

  const [checkoutLink, setCheckoutLink] = useState();

  const updateCart = (itemKey: any, newCount: any) => {
    setCart((prevCart: any) => ({
      ...prevCart,
      [itemKey]: newCount
    }));
  };

  const generateUrl = async () => {

    const url = 'https://enduro-ride-worker.davyrossiter.workers.dev/api/create-checkout-session';

    const bodyObject = [
      { priceId: 1, quantity: cart.item_1 },
      { priceId: 0, quantity: cart.item_2 },
    ].filter(item => item.quantity > 0);
    console.log(bodyObject);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyObject),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data)

      setCheckoutLink(data.sessionUrl)
      return response;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      throw error;
    }

  }

  useEffect(() => {
    generateUrl()
  }, [cart])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col h-screen items-center justify-between">
      <div className="pt-[96px] text-wrap md:pt-[256px] max-w-[1250px] flex flex-col w-full px-7 ">
        <p className="font-bold text-3xl">Cart</p>
        <div className="flex flex-col w-full gap-2 mt-4">

          {cart.item_1 === 0 && cart.item_2 === 0 ?
            <p className="text-2xl font-semibold pb-[96px]">Your cart is empty, go checkout our products to add something to your cart</p> : <></>}

          {cart.item_1 > 0 ?
            <div className="flex flex-row w-full items-center justify-between border rounded-xl p-4 ">
              <div className="flex flex-row items-center">
                <img src="./Home/enduro-seal-3.png" className="w-[32px] mr-3 h-[32px] rounded-sm" />
                <p className="w-full max-w-[336px]">MTB EnduroSeal - 250ml (Applicator Bottle)</p>
              </div>
              <div className="flex gap-3 flex-row">
                <p onClick={() => { updateCart('item_1', cart.item_1 + 1) }} className="select-none hover:cursor-pointer">+</p>
                <p>{cart.item_1}</p>
                <p onClick={() => updateCart('item_1', cart.item_1 - 1)} className="select-none hover:cursor-pointer">-</p>
              </div>
              <div>
                <p onClick={() => updateCart('item_1', 0)} className="text-gray-500 select-none hover:cursor-pointer">x</p>
              </div>
            </div>
            : <></>}

          {cart.item_2 > 0 ?
            <div className="flex flex-row w-full items-center justify-between border rounded-xl p-4 ">
              <div className="flex flex-row items-center">
                <img src="./Home/enduro-seal-4.png" className="w-[32px] mr-3 h-[32px] rounded-sm" />
                <p className="w-full max-w-[336px]">Road & Gravel - 250ml (Applicator Bottle)</p>
              </div>
              <div className="flex gap-3 flex-row">
                <p onClick={() => { updateCart('item_2', cart.item_2 + 1) }} className="select-none hover:cursor-pointer">+</p>
                <p>{cart.item_2}</p>
                <p onClick={() => updateCart('item_2', cart.item_2 - 1)} className="select-none hover:cursor-pointer">-</p>
              </div>
              <div>
                <p onClick={() => updateCart('item_2', 0)} className="text-gray-500 select-none hover:cursor-pointer" >x</p>
              </div>
            </div>
            : <></>}


        </div>

        {cart.item_1 > 0 || cart.item_2 > 0 ?
          <div className="flex w-full justify-start mt-4 pb-[96px]">
            <a href={checkoutLink}>
              <button className="border hover:cursor-pointer rounded-xl py-[14px] border-[0.8] border-[#E72323] text-center text-white text-sm leading-[14px] font-semibold px-[14px] bg-[#E72323]">Checkout</button>
            </a>
          </div> : <a href="/#products">
            <button className="border mt-6 hover:cursor-pointer rounded-xl py-[14px] border-[0.8] border-[#E72323] text-center text-white text-sm leading-[14px] font-semibold px-[14px] bg-[#E72323]">Take me to the products</button>
          </a>}

      </div >
      <Footer />
    </div >
  );
}

export default Cart;
