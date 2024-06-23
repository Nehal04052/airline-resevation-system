import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the form is valid
    if (e.target.checkValidity()) {
      const loginData = { username, password };

      axios
        .post("http://localhost:3002/api/login", loginData)
        .then((response) => {
          setSuccessMessage("Login successful");
          console.log(response.data);
          // Handle the response from the server
          // Redirect the user or perform additional actions
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Error sending login data:", error);
          setErrorMessage("Invalid username or password");
          // Handle the error
        });

      // Reset the form
      setUsername("");
      setPassword("");
    } else {
      // If the form is invalid, display an error message
      setErrorMessage("Please fill in all required fields");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
      <div className="max-w-md mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {successMessage && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="username" className="block font-bold mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="border border-gray-300 px-3 py-2 rounded-sm w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="border border-gray-300 px-3 py-2 rounded-sm w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {errorMessage && (
            <div className="text-red-600 text-sm mb-4">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Log in
          </button>
          <p className="mt-2 text-sm text-gray-600">
            Forgot your password?{" "}
            <a href="#" className="text-blue-500 hover:text-blue-600">
              Reset here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
