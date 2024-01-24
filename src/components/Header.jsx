import LOGO from "../assets/logo.svg";
import RING from "../assets/ring.svg";
import MOON from "../assets/icons/moon.svg";
import CART from "../assets/shopping-cart.svg"
import { useState } from "react";
import Cart from "./Cart";

export default function Header() {
  const [showCart, setShowCart] = useState(false)
  function handleCartShow() {
    setShowCart(true)
  }
  return (
    <header>
      {showCart && <Cart onClose={()=> setShowCart(false) } />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={LOGO} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
              <img src={RING} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
              <img src={MOON} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#"
              onClick={handleCartShow}
            >
              <img src={CART} width="24" height="24" alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
