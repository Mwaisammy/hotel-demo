import React from "react";
import { Button } from "./ui/button";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center gap-y-5">
      <h2 className="text-4xl font-bold">Contact us</h2>

      <div className=" flex flex-col space-y-2">
        <h3 className="text-black font-medium">Subscribe to our email</h3>

        <div className="flex  bg-rose-300 p-5 rounded-md space-x-4">
          <input
            className="border-2 border-black rounded-md pl-3"
            type="email"
            placeholder="Enter your email"
          />
          <Button>Submit</Button>
        </div>
      </div>
      <div className="flex flex-col items-center font-medium">
        <p>For any inquiries or reservations, please contact us at:</p>
        <p>Email: XXXXXXXXXXXXXXXXXXXXXXX</p>
        <p>Phone: +0000000000000000</p>
      </div>
    </div>
  );
};

export default ContactForm;
