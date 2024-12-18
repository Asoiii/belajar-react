import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          welcome , please enter your details
        </p>
        {children}
        {/* conditional rendering menggunakan desracstring  */}
        {/* menggunakan tenary ? a : b harus hanya 2 pilihan */}
        {/* jika menggunakan && bisa menggunakan lebih dari 2  */}
        {/* <p className="my-4 text-center ">
          {type === "login"
            ? "dont have an Account  "
            : "Already have an account    "}

          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-500">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-500">
              login
            </Link>
          )}

          {type === "logout" && (
            <Link to="/logout" className="font-bold text-blue-500">
              Logout
            </Link>
          )}
        </p> */}

        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <>
        <p className="my-4 text-center ">
          dont have an Account{" "}
          <Link to="/register" className="font-bold text-blue-500">
            Register
          </Link>
        </p>
      </>
    );
  } else {
    return (
      <>
        <p className="my-4 text-center ">
          have an Account{" "}
          <Link to="/login" className="font-bold text-blue-500">
            login
          </Link>
        </p>
      </>
    );
  }
};

export default AuthLayout;
