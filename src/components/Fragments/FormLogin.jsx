import { useRef, useEffect, useState } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/input";
import { login } from "../../services/auth.services";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState(""); // State untuk menangani kesalahan login

  const handleLogin = (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    // Panggil login service
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res); // Simpan token di localStorage jika berhasil
        window.location.href = "/products"; // Redirect ke halaman produk
      } else {
        // Tampilkan pesan error di UI jika gagal
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus(); // Fokus pada input username saat komponen dimuat
  }, []);

  return (
    <div>
      <form onSubmit={handleLogin}>
        <InputForm
          label="username"
          type="text"
          name="username"
          placeholder="Asoi111"
          ref={usernameRef} // Referensi untuk auto-fokus
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

        {/* Tampilkan pesan error jika login gagal */}
        {loginFailed && (
          <p className="text-red-500 text-center mt-5">{loginFailed}</p>
        )}
      </form>
    </div>
  );
};

export default FormLogin;
