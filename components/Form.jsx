"use client";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import Swal from "sweetalert2";
import {motion} from "framer-motion";

const Form = () => {
  const [result, setResult] = React.useState(" ");

  const submitHandler = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "29e17d46-429b-47b1-a407-f3481c0c4081");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        icon: "success",
        text: "Thank you for contacting me. I will get back to you as soon as possible.",
        title: "Form Submitted Successfully",
        confirmButtonText: "Ok",
        backdrop: "rgba(0, 0, 0, 0.5)",
        confirmButtonColor: "#ECC94B",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <form
      action="https://api.web3forms.com/submit"
      className="flex flex-col gap-y-4 mr-12"
      onSubmit={submitHandler}
      method="post"
    >
      {/* input */}
      <input
        type="hidden"
        name="access_key"
        value="29e17d46-429b-47b1-a407-f3481c0c4081"
      ></input>
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" name="name" required />
        <User size={20} className="absolute right-6" />
      </div>

      {/* Email */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          required
        />
        <MailIcon size={20} className="absolute right-6" />
      </div>

      {/* message */}
      <div className="relative flex items-center">
        <Textarea
          type="name"
          id="name"
          placeholder="Type Your Message Here..."
          name="message"
          required
        />
        <MessageSquare size={20} className="absolute top-4 right-6" />
      </div>
      <motion.div 
      initial={{ opacity: 0, y: 170 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
      >
        <Button className="flex items-center gap-x-2 max-w-[166px]">
          Let's Talk <ArrowRightIcon size={20} />{" "}
        </Button>
      </motion.div>
    </form>
  );
};

export default Form;
