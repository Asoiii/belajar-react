import Button from "../Elements/Button/Button";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

export const Header = ({ image }) => {
  return (
    <a href="#">
      <img
        src={image}
        alt="product"
        className="p-8 rounded-t-lg h-60 w-full object-fill"
      />
    </a>
  );
};

export const Body = ({ name, children }) => {
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)}
        </h5>
        <p className="text-sm text-white">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
};

export const Footer = ({ price, handleAddToCart, id }) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}
      </span>
      <Button className="bg-blue-500" onClick={() => handleAddToCart(id)}>
        Add to Cart
      </Button>
    </div>
  );
};

// Assigning Header, Body, and Footer as subcomponents
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
