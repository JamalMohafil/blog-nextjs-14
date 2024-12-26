import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";
import React from "react";

const Contact = () => {
  return (
    <section className="w-full h-[75h] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
      {/* <div className="inline-block w-2/5 h-full border-r-2 border-solid border-dark">
        <LottieAnimation />
      </div> */}
      <div className="w-3/5 flex flex-col items-start justify-center px-16 pb-8"><ContactForm/></div>
    </section>
  );
};

export default Contact;
