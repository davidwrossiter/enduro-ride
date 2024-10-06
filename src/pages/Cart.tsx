import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface CartProps {
  cart: number[];
  setCart: React.Dispatch<React.SetStateAction<number[]>>;
}

interface CartItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
}

function Cart({ cart, setCart }: CartProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const itemCounts = cart.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    const items: CartItem[] = Object.entries(itemCounts).map(([id, quantity]) => ({
      id: parseInt(id),
      name: id === "0" ? "MTB EnduroSeal - 250ml (Applicator Bottle)" : "Road & Gravel - 250ml (Applicator Bottle)",
      image: id === "0" ? "./Home/enduro-seal-3.png" : "./Home/enduro-seal-4.png",
      quantity
    }));

    setCartItems(items);
  }, [cart]);

  useEffect(() => {
    if (isLoading) {
      handleCheckout();
    }
  }, [isLoading]);

  function handleCheckout() {
    const cartItemsForCheckout = cartItems.map(item => ({
      priceId: item.id,
      quantity: item.quantity
    }));

    fetch('http://localhost:8787/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItemsForCheckout)
    })
      .then(response => response.json())
      .then(data => {
        setCheckoutUrl(data.sessionUrl);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }

  function updateQuantity(id: number, change: number) {
    const newCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ).filter(item => item.quantity > 0);

    setCartItems(newCartItems);
    setCart(newCartItems.flatMap(item => Array(item.quantity).fill(item.id)));
  }

  return (
    <div className="flex flex-col h-screen items-center justify-between">
      <div className="h-[80vh] pt-14 px-7 w-full max-w-[1250px]">
        <div className="w-full flex pt-20 flex-col gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-row items-center gap-4">
              <img src={item.image} className="w-[64px] h-[64px] rounded-md" alt={item.name} />
              <p>{item.name}</p>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 bg-gray-200 rounded-l">-</button>
                <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 bg-gray-200 rounded-r">+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          {checkoutUrl ? (
            <a
              href={checkoutUrl}
              className="w-fit border rounded-xl px-[14px] py-[14px] bg-[#E72323] border-[0.8] border-[#E72323] text-center text-white text-sm leading-[14px] font-semibold"
            >
              Proceed to Checkout
            </a>
          ) : (
            <button
              onClick={() => setIsLoading(true)}
              disabled={isLoading || cartItems.length === 0}
              className="w-fit border rounded-xl px-[14px] py-[14px] bg-[#E72323] border-[0.8] border-[#E72323] text-center text-white text-sm leading-[14px] font-semibold"
            >
              {isLoading ? 'Loading...' : 'Buy now'}
            </button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
