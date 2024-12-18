import Button from "../components/Elements/Button/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "sepatu",
    price: "12.000.000",
    image: "/public/images/shoes-1.jpg",
    description: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam
        laborum voluptate doloremque quidem quod quo non ut, quasi saepe quis
        minus est excepturi. Quisquam consequatur suscipit aut dolores
        voluptates!`,
  },
  {
    id: 2,
    name: "sepatu baruuuu",
    price: "9.000.000",
    image: "/public/images/shoes-1.jpg",
    description: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam
        laborum voluptate doloremque quidem quod quo non ut, quasi !`,
  },
  {
    id: 3,
    name: "sepatu okeee",
    price: "9.00.000",
    image: "/public/images/shoes-1.jpg",
    description: `  Lsepatu baruuuu nihhht, quasi !`,
  },
];

const ProductsPage = () => {
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex justify-between h-10 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {/* rendering list */}
          {products.map((products) => (
            <CardProduct key={products.id}>
              <CardProduct.Header image={products.image}></CardProduct.Header>
              <CardProduct.Body name={products.name}>
                {products.description}
              </CardProduct.Body>
              <CardProduct.Footer price={products.price}></CardProduct.Footer>
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4 ">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
        </div>
      </div>
      {/* <div className="flex w-100 justify-center">
        <Counter></Counter>
      </div> */}
    </>
  );
};

export default ProductsPage;
