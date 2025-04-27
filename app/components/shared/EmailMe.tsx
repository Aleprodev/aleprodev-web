"use client";
import React, { useState } from "react";
import Input from "@/components/shared/Input";
import TextArea from "@/components/shared/TextArea";
import EmailMeSuccess from "@/components/shared/EmailMeSuccess";
import animation from "@/assets/lottie/email.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { useThemeMode } from "../ThemeModeProvider";
import Section from "./Section";

export default function EmailMe() {
  const { mode } = useThemeMode();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div className="relative">
      <Section gradient={mode} type={1} id="contact">
        <div className="p-4 md:p-0 place-content-center grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div className="w-full flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <Typography variant="h2">Let's get in touch</Typography>
            </div>

            <form className="contact-form me-lg-5 pe-lg-3" role="form">
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
      </Section>
      {showFeedback && <EmailMeSuccess />}
    </div>
  );
}
