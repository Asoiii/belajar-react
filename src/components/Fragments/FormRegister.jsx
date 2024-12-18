import Button from "../Elements/Button/Button";
import InputForm from "../Elements/input";

const FormRegister = () => {
  return (
    <div>
      <form action="">
        <InputForm
          label="Fullname"
          type="email"
          placeholder="www.example@gmail.com"
          name="fullname"
        />
        <InputForm
          label="Email"
          type="email"
          placeholder="www.example@gmail.com"
          name="email"
        />
        <InputForm
          label="password"
          type="password"
          placeholder="*******"
          name="password"
        />
        <InputForm
          label="ConfirmPassword"
          type="password"
          placeholder="*******"
          name="ConfirmPassword"
        />
        <Button className="bg-blue-600 w-full">Register</Button>
      </form>
    </div>
  );
};

export default FormRegister;
