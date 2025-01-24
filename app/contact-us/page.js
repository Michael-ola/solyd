"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./customPhoneInput.css"; // Import the custom CSS file
import ImageHero from "@components/image-hero";
import Image from "next/image";

// Success and error icons
const ContactForm = () => {
  const [status, setStatus] = useState({ success: false, error: false });
  const [showMessage, setShowMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setStatus({ success: false, error: false });
    const formData = {
      ...data,
      phone: phoneNumber,
    };

    try {
      const response = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ success: true, error: false });
        setSuccessMessage("Form submitted successfully!");
        setShowMessage(true);
        reset();
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      } else {
        setStatus({ success: false, error: true });
      }
    } catch (error) {
      setStatus({ success: false, error: true });
    }
  };

  return (
    <div className="relative">
      {/* Notification */}
      {status.success && showMessage && (
        <div
          className={`fixed w-[60%] md:w-[40%] text-center justify-center top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-6 rounded-md shadow-md flex items-center space-x-2 z-50 transition-transform duration-500`}
        >
          <span>Message sent successfully!</span>
        </div>
      )}
      {status.error && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-6 rounded-md shadow-md flex items-center space-x-2 z-50">
          <span>Failed to send message. Please try again.</span>
        </div>
      )}
      <ImageHero
        image="/images/contact/image1.jpeg"
        header="Reach Out to Us"
        paragraph=""
      >
        <span className="w-full md:w-[52%]">
          Have a question or need assistance? Fill out the form below or email{" "}
          <a
            href="mailto:info@solyd.com.ng"
            className="inline underline text-[#0C8CE9]"
          >
            info@solyd.com.ng
          </a>
          , and our team will respond promptly.
        </span>
      </ImageHero>
      <div className="max-w-2xl mx-auto px-6 py-12 my-[7%] md:border border-[#C4C4C4] rounded-[12px] bg-white md:shadow-md text-[#1a1a1a]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("firstName", { required: true })}
                className="w-full p-2 border border-[#C4C4C4]  rounded-md focus:outline-none focus:ring focus:ring-red-300"
                placeholder="Enter your name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">First name is required.</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("lastName", { required: true })}
                className="w-full p-2 border rounded-md border-[#C4C4C4]  focus:outline-none focus:ring focus:ring-red-300"
                placeholder="Enter your name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">Last name is required.</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-2 border rounded-md border-[#C4C4C4]  focus:outline-none focus:ring focus:ring-red-300"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required.</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="w-full border border-[#C4C4C4] rounded-[0.375rem] ">
              <PhoneInput
                country={"ng"}
                enableSearch
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
                containerClass="custom-phone-container"
                inputClass="custom-phone-input"
                buttonClass="custom-phone-dropdown"
              />
            </div>
            {!phoneNumber && (
              <p className="text-red-500 text-sm">Phone number is required.</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("message", { required: true })}
              className="w-full p-2 border rounded-md border-[#C4C4C4]  focus:outline-none focus:ring focus:ring-red-300"
              placeholder="Type your message here..."
              rows="5"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">Message is required.</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 my-[3%] rounded-md w-[199px] h-[60px]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
