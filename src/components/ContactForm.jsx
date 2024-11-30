"use client";

import { useState } from "react";
import axios from "axios";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { isValidEmail } from "../utils/checkemail"; // Adjust path as per your project structure
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="education"
      className="bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 text-white py-16"
    >
      <div className="flex justify-center my-5">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gray-800"></span>
          <span className="bg-gray-800 w-fit text-white p-2 px-5 text-xl rounded-md">
            Contact with me
          </span>
          <span className="w-24 h-[2px] bg-gray-800"></span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-5xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-6">
          <p className="text-sm text-[#d3d8e8] whitespace-nowrap">
            {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-base">Your Name:</label>
              <input
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="text"
                maxLength="100"
                required
                onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                onBlur={checkRequired}
                value={userInput.name}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base">Your Email:</label>
              <input
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="email"
                maxLength="100"
                required
                value={userInput.email}
                onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                onBlur={() => {
                  checkRequired();
                  setError({ ...error, email: !isValidEmail(userInput.email) });
                }}
              />
              {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base">Your Message:</label>
              <textarea
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                maxLength="500"
                name="message"
                required
                onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                onBlur={checkRequired}
                rows="4"
                value={userInput.message}
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              {error.required && <p className="text-sm text-red-400">All fields are required!</p>}
              <button
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                role="button"
                onClick={handleSendMail}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span>Sending Message...</span>
                ) : (
                  <span className="flex items-center gap-1">
                    Send Message
                    <TbMailForward size={20} />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
