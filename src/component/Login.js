import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Usercontext from "./Usercontext";

const Login = () => {
  const [inputName, setInputName] = useState("");
  const { setUserName } = useContext(Usercontext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (inputName.trim()) {
      setUserName(inputName);
      navigate("/"); // back to home
    }
  };

  return (
    <div className="p-10 flex flex-col gap-4 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold">Login</h2>
      <input
        className="border p-2 rounded"
        placeholder="Enter username"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white py-2 rounded"
        onClick={handleLogin}
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
