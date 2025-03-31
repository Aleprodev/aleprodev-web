"use client";
import React, { useState } from "react";
import axios from "axios";
import Input from "@/components/shared/Input";
import TextArea from "@/components/shared/TextArea";
import EmailMeSuccess from "@/components/shared/EmailMeSuccess";
import animation from "@/assets/lottie/email.json";
import Lottie from "lottie-react";
import { motion } from 'framer-motion'
import { Typography } from "@mui/material";

export default function EmailMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const serviceId = "service_uhq4y6q";
    const templateId = "template_3frrdnp";
    const publicKey = "H-9WirW9f8Z6TnjA7";

    const template_params = {
      from_name: name,
      from_email: email,
      to_name: "Innova code",
      message,
    };

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params,
    };

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);

      if (typeof window !== "undefined") {
        const targetElement = document.getElementById("emailus");
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 200,
            behavior: "smooth",
          });
        }
      }
      setName("");
      setEmail("");
      setMessage("");
      setShowFeedback(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={`bg-background py-8 relative flex justify-center`} id="contact">
      <div className="container p-4 md:p-0 place-content-center grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <div className="w-full flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <Typography variant="h2">
              Let's get in touch
            </Typography>
          </div>

          <form
            className="contact-form me-lg-5 pe-lg-3"
            role="form"
            onSubmit={handleSubmit}
          >
            <div className="form-floating flex flex-col">
              <Input
                type="text"
                name="name"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Full name"
              />
            </div>

            <div className="form-floating my-4 flex flex-col">
              <Input
                type="email"
                name="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email address"
              />
            </div>

            <div className="form-floating mb-4 flex flex-col">
              <TextArea
                name="message"
                placeholder=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                label="Tell us about the project"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
        <div>
          <div className="w-full">
            <Lottie
              animationData={animation}
              style={{ width: "100%" }}
              loop={true}
            />
          </div>
        </div>
      </div>
      {showFeedback && <EmailMeSuccess />}
    </section>
  );
}
