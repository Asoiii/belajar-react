import axios from "axios";
// import { jwt_decode } from "jwt-decode";

export const login = async (data, callback) => {
  try {
    const response = await axios.post(
      "http://160.20.104.177:4141/api/Auth/login",
      data
    );

    // Pastikan token ada sebelum digunakan
    if (response.data && response.data.token) {
      callback(true, response.data.token);
      console.log(response.data.token);
    } else {
      // Jika tidak ada token di response, kirim error
      callback(false, new Error("Token not found in response"));
    }
  } catch (error) {
    // Cek apakah error adalah response error dari server
    if (error.response) {
      console.error(
        "Server responded with error:",
        error.response.status,
        error.response.data
      );
      callback(false, error.response.data);
    } else {
      // Jika error terjadi pada sisi client
      console.error("Error during login:", error.message);
    }
  }
};

// export const getUsername = (token) => {
//   const decode = jwt_decode(token);
//   console.log(decode);
// };
