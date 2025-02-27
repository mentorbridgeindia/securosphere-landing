import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import axios from "axios";

const Subscribe = () => {
  const [email,setEmail]=useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(email);
    try {
      const response = await axios.post(
        "https://api.securosphere.in/marketing/getStarted",
        {email}
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#faf9f6] py-5">
      <div className="relative w-[900px] p-10 rounded-[30px] bg-white bg-opacity-40 backdrop-blur-xl my-5 mail-msg">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-orange-400 to-white blur-3xl rounded-t-[30px]"></div>

        <Badge
          pill
          bg="light"
          text="dark"
          style={{
            width: "fit-content",
            background:
              "linear-gradient(135deg,rgb(205, 225, 244) 0%,rgb(95, 167, 244) 100%)",
            color: "white",
            padding: "0.5rem 1rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          className="mb-3 px-3 py-2 shadow-sm"
        >
          Elevate Your Business
        </Badge>

        <h1 className="relative text-center text-4xl font-bold mt-4 text-black">
          Ready to Transform <br />
          Your <span className="text-black">Customer Management?</span>
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Sign up today and see the difference Active can make for your
          business.
        </p>

        <div className="relative flex justify-center mt-6">
          <form action=""  onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-80 px-4 py-3 text-gray-800 bg-white rounded-full border border-gray-300 shadow focus:outline-none cta-input"
              style={{ borderRadius: "25px 0 0 25px" }}
              onChange={e=>setEmail(e.target.value)}
            />
            <button
              className="ml-4 px-6 py-3 text-white font-semibold bg-black rounded-full shadow-lg transition hover:scale-105 cta-btn"
              style={{ borderRadius: "0 25px 25px 0" }}
              type="submit"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
