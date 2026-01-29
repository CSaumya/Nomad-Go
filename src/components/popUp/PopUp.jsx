import React, { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const PopUp = ({ orderPopup, setOrderPopup }) => {
  const formRef = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_lyivteg",
    "template_usacbdl",
    formRef.current,
    "1QVhk0I5iBd7eE5Qo"
  )
  .then(() => {
    alert("Order details sent to email!");
    setOrderPopup(false);
  })
  .catch((error) => {
    if (error.text && error.text.includes("Invalid")) {
      alert("Invalid email address! Please enter a correct email.");
    } else {
      alert("Something went wrong! Please try again.");
    }
    console.error("EmailJS Error:", error);
  });
};


  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md w-[300px]">

            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold">Book Your Trip</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>

            {/* Form */}
            <form ref={formRef} onSubmit={sendEmail} className="mt-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-full border px-2 py-1 mb-4"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded-full border px-2 py-1 mb-4"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                className="w-full rounded-full border px-2 py-1 mb-4"
              />
              <div className="flex justify-center">
                <button type="submit"
                  className="bg-gradient-to-r from-[#3c5cdc] to-[#00c3c7] hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
                  Book Now
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
