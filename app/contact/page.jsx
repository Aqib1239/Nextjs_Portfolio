"use client";
import React from "react";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* Text and Illustration */}
        <div className="grid xl:grid-cols-2 gap-28 items-center place-items-center text-center xl:text-left">
          {/* Text */}
          <div className="md:order-2 sm:order-2 xl:order-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0 }}
              className="flex items-center justify-center xl:justify-start gap-x-4 text-primary text-xl mb-4"
            >
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
              <span className="text-4xl">👋</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-3xl xl:text-4xl font-bold mb-6 max-w-md mx-auto xl:mx-0"
            >
              Let's get in touch.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.75 }}
              className="text-lg xl:text-xl max-w-md mx-auto xl:mx-0"
            >
              I’m excited to connect with you! Whether you have a question, a
              project idea, or just want to say hi, feel free to reach out. I'm
              always open to new opportunities and collaborations.
            </motion.p>
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="md:order-1 sm:order-1 xl:order-2 xl:w-[500px] xl:h-[500px] lg:w-[450px] lg:h-[450px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-center bg-no-repeat"
          ></motion.div>
        </div>

        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32 ">
          {/* info text */}
          <div className="flex flex-col xl:items-start md:items-center gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.25 }}
              className="flex  gap-x-8 lg:mt-12 md:mt-12 sm:mt-12"
            >
              <MailIcon size={20} className="text-primary" />
              <div className="xl:w-[450px]  sm:w-[300px]">
                maqib8577@gmail.com
              </div>
            </motion.div>

            {/* address */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex items-center gap-x-8"
            >
              <HomeIcon size={20} className="text-primary" />
              <div className="xl:w-[450px]  sm:w-[300px]">
                32-Mahmand Garhi, Near Hindustan Building Material,
                Shahjahanpur, Uttar Pradesh Pin Code - 242001
              </div>
            </motion.div>

            {/* phone */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.75 }}
              className="flex items-center gap-x-8"
            >
              <PhoneCall size={20} className="text-primary" />
              <div className="xl:w-[450px]  sm:w-[300px]">+91 8577 0512 39</div>
            </motion.div>
          </div>

          <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
          >
            {/* form */}
            <Form />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
