import { useState } from "react";
import { Header } from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meal";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import Delivery from "./Components/Delivery/Delivery";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      <Delivery />
    </CartProvider>
  );
}

export default App;
