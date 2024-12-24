import React from "react";

const Contact = () => {
  return (
    <div className="p-8 bg-[#34353a] min-h-screen text-white">
        <h1 className="font-extrabold text-5xl py-10">Get in Touch</h1>
      <form className="space-y-5" action="">
        <div>
        <label className="font-bold" for="fname">First Name</label><br />
        <input className="w-full p-4 border mb-4 border-orange-600" type="text" name="fname" placeholder="Your first name" id="" /><br />
        <label className="font-bold" for="lname">Last Name</label><br />
        <input className="w-full p-4 border my-1 border-orange-600" type="text" name="lname" placeholder="Your last name" id="" /><br />
        </div>
        <div>
        <label className="font-bold" for="email">Email</label><br />
        <input className="w-full p-4 border my-1 border-orange-600"  type="email" name="email" id="" /><br />
        </div>
        
        <textarea className="w-1/2 h-[200px] rounded border border-orange-600 text-[16px] p-4" name="" id="">Some text ............</textarea><br />
        <button className="btn btn-outline bg-gradient-to-r from-red-500 to-orange-400 text-black">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
