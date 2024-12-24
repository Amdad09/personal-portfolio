import React from "react";
import { FaMinus } from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"
import { useState, useEffect } from "react";

const Home = () => {
  const [text, setText] = useState("I am a Developer");

  useEffect(() => {
    const titles = [
      "You-Tuber",
      "Content Creator",
      "Gamer",
      "Traveller",
    ];
    let index = 0;

    const changeText = () => {
      index = (index + 1) % titles.length;
      setText(titles[index]);
    };

    const interval = setInterval(changeText, 2000); 

    return () => clearInterval(interval); 
  }, []);
  return (
    <div className=" bg-[#34353a] text-white px-4 md:px-14 lg:px-28 py-5 md:py-10">

      <div className="min-h-screen lg:flex space-y-5 gap-10 justify-center items-center">
        <div className="w-[300px] md:w-[500px] mr-8">
          <img className="rounded-full outline p-3 outline-4 outline-orange-500 w-[250px] h-[250px] " src='../../../src/assets/photo_6294070012041872562_y.jpg' alt="image of Rafi" />
        </div>
        <div className="space-y-5">
            <h1 className="font-bold md:font-extrabold text-2xl md:text-5xl">KHANDAKAR RAFIQUL</h1>
            <p className="flex items-center gap-2"><span className="font-semibold text-2xl">I am </span><FaMinus className="text-3xl" /><span className="font-bold text-3xl text-orange-700">{text}</span> </p>
            <p className="leading-7">passionate YouTuber and content creator focused on sharing knowledge, creativity, and delivering value through every project.</p>
            <div className="flex gap-5">
                <a className="text-3xl" href=""><FaFacebookF /></a>
                <a className="text-3xl" href=""><FaXTwitter /></a>
                <a className="text-3xl" href=""><FaWhatsapp /></a>
                <a className="text-3xl" href=""><FaInstagram /></a>
            
            </div>
            <div className="mt-20">
            <a href="/about"><button className="btn btn-outline bg-gradient-to-r from-red-500 to-orange-400 text-black">About Me</button></a>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
