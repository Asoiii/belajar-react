import Button from "../Elements/Button/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg mx-2 my-2 flex flex-col justify-between ">
      {children}
    </div>
  );
};

export const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="producs" className="p-8 rounded-t-lg" />
    </a>
  );
};

export const Body = (props) => {
  const { children, name } = props;

  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name}
        </h5>
        <p className="text-m text-white">{children}</p>
      </a>
    </div>
  );
};

export const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button className="bg-blue-500">Add to Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
