import { useState, useEffect, useRef } from "react";
import Button from "../components/Elements/Button/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrices, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const storedCart = localStorage.getItem("cart");
  // Ambil data dari localStorage saat komponen pertama kali di-mount
  useEffect(() => {
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // docode
  // useEffect(() => {
  //   getUsername(token);
  // }, []);

  // Simpan data ke localStorage setiap kali cart berubah
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);

      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  // get data api
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const calculateTotal = (item) => item.price * item.qty;

  // use ref untuk menampilkan total data ketika total ya tidak tampil
  const totalPricesRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPricesRef.current.style.display = "table-row";
    } else {
      totalPricesRef.current.style.display = "none";
    }
  }, [cart]);
  // use refff

  // const cartRef = useRef(storedCart || []);

  // const handleAddtoCartRef = () => {
  //   cartRef.current = [...cartRef.current, { id: 1, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(storedCart));
  // };

  return (
    <div>
      <div className="flex justify-between h-10 bg-blue-600 text-white items-center px-10">
        <h1>Keranjang Belanja</h1>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image}></CardProduct.Header>
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  handleAddToCart={() => handleAddToCart(product)}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          {cart.length === 0 ? (
            <p>Keranjang kosong</p>
          ) : (
            <table className="min-w-full text-left text-white">
              <thead className="border-b bg-gray-700">
                <tr>
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Qty</th>
                  <th className="px-4 py-2">Total</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 &&
                  cart.map((item) => (
                    <tr key={item.id} className="bg-gray-800">
                      <td className="px-4 py-2">
                        {item.title.substring(0, 10)}
                      </td>
                      <td className="px-4 py-2">
                        ${""}
                        {item.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td className="px-4 py-2">{item.qty}</td>
                      <td className="px-4 py-2">
                        ${""}
                        {calculateTotal(item).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td className="px-4 py-2">
                        <Button
                          className="bg-red-500"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Hapus
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
          <div className="mt-4" ref={totalPricesRef}>
            <h2 className="text-xl font-bold text-blue-600">
              ${" "}
              {totalPrices.toLocaleString("id-ID", {
                style: "currency",
                currency: "USD",
              })}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
