"use client";
import { useState } from "react";

//client component for CSR
export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Email:", email);
        console.log("Password:", password);
    } 

  return (
    <div className="w-[380px] mx-auto bg bg-green-200">
      <div className="bg-white shadow-md border border-gray-200 rounded-b-lg p-4 ">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-center font-semibold text-xl text-gray-900">
            Sign in to App
          </h3>
          // Email Input
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              required
              className="bg-gray-50 border border-gray-500 text-gray-900 focus:ring-1 focus:ring-offset-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-lg"
              placeholder="example@gmail.com"
            />
           </div>
          // Password Input
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              name="password"
              required
              className="bg-gray-50 border border-gray-500 text-gray-900 focus:ring-1 focus:ring-offset-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-lg"
              placeholder="xxxxxxxx"
            />
          </div>
          // Remember Me and Forgot Password
          <div className="flex">
            <div className="flex">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="remember"
                  className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                />
              </div>
              <div className="text-sm ml-3">
                <label
                  htmlFor="remember"
                  className="font-medium text-gray-900 "
                >
                  Remember Me
                </label>
              </div>
            </div>
            <a
              href="/forgot-password"
              className="text-sm text-blue-700 hover:underline ml-auto font-medium"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign In
          </button>
          <div className="flex justify-center text-sm font-medium text-gray-500 space-x-1">
            <span>Don't have an account?</span>
            <a
              href="/register"
              className="text-blue-700 hover:underline font-medium"
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
