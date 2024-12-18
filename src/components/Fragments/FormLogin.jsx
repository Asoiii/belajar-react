import Button from "../Elements/Button/Button";
import InputForm from "../Elements/input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log("login");

    window.location.href = "/products";
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <InputForm
          label="email"
          type="email"
          name="email"
          placeholder="www.example@gmail.com"
        />
        <InputForm
          label="password"
          type="password"
          name="password"
          placeholder="************"
        />
        <Button className="bg-blue-600 w-full" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;
