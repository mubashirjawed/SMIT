import "./App.css";
import { useEffect, useState } from "react";
import { getAllProducts } from "./assets/products";
import { Card } from "./components/card";
import { data } from "autoprefixer";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchproducts();
  }, []);

  useEffect(() => {
    const itemInCart = JSON.parse(localStorage.getItem("cart"));
    if (itemInCart) {
      setCartItems([...itemInCart]);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addCartItem = (item) => {
    const items = [...cartItems];
    const itemInd = items.findIndex((data) => data.id === item.id);
    if (itemInd == -1) {
      items.push(item);
      setCartItems([...items]);
    }
  };

  const fetchproducts = async () => {
    const products = await getAllProducts();
    setProducts([...products]);
    console.log(products);
  };
  return (
    <>
      <div className="mx-auto ">
        <div className="flex fixed w-full bg-white py-8 justify-around items-center">
          <h1 className="text-4xl text-center font-bold">Shopping List</h1>
          <h1 className="text-4xl text-center font-bold underline">
            Card items {cartItems.length}
          </h1>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {products.map((data, ind) => {
                const isAddedToCart =
                  cartItems.findIndex((product) => product.id === data.id) !==
                  -1;
                return (
                  <Card
                    key={data.id}
                    item={data}
                    addToCart={() => addCartItem(data)}
                    isAddedToCart={isAddedToCart}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
