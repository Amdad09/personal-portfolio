import React from "react";

const About = () => {
  return (
    <div className="bg-[#34353a] text-white p-8">
      <h3 className="font-extrabold text-5xl py-10">About Me</h3>
      <figure className="ml-4 md:ml-14 lg:ml-28 py-5">
        <figcaption>KHANDAKAR RAFIQUL ISLAM</figcaption>
        <img
          className="w-[400px] h-[400px]"
          src="../../../src/assets/rafi.jpeg"
          alt="picture of Image"
        />
      </figure>
      <div className="my-5 pt-5">
        <h3 className="font-bold text-2xl">Khandakar Rafiq</h3>
        <p className="font-semibold text-[#767676]">Content Creator</p>
        
        <p className="border-y border-gray-700 py-5 my-5 text-gray-300">
          Hi, I am a passionate YouTuber and content creator. I craft content
          that blends creativity with valuable knowledge. My videos are designed
          not just to inform, but to inspire action. I specialize in creating
          engaging and thought-provoking content. Every project is an
          opportunity to grow and push boundaries. I am committed to providing
          value and building a meaningful community. Through my channel, I aim
          to spark curiosity and foster learning. My mission is to make a
          lasting impact with every video I share. 
          <br /><br />I continuously experiment with new ideas to keep my content fresh and exciting.
          My passion is to inspire others to think creatively and pursue their dreams.
        </p>
        <div className="flex-row md:flex space-y-10 justify-around border-b border-gray-700 pb-5">
            <div className="space-y-2">
                <h3><span className="font-bold w-10 mr-5">Birthday :</span> <span className="text-[#767676]">01.08.1999</span></h3>
                <h3><span className="font-bold mr-14 w-10">Age :</span> <span className="text-[#767676]">25</span></h3>
                <h3><span className="font-bold mr-5 w-10">Address :</span> <span className="text-[#767676]"><a href="https://www.google.com/maps/place/Kushtia/@23.9094246,89.0423609,12z/data=!3m1!4b1!4m6!3m5!1s0x39fe965536b7d61f:0x28fea367efdb38c9!8m2!3d23.9088541!4d89.1221818!16s%2Fg%2F122lq2v0?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="blank">Mirpur Kushtia Zip codes /7000</a></span></h3>
                <h3><span className="font-bold w-10">Email :</span> <span className="text-[#767676] ml-10"><a href="mailto:satuislama1@gmail.com">satuislama1@gmail.com</a></span></h3>
                <h3><span className="font-bold mr-5">Phone :</span> <span className="text-[#767676]">01799032297</span></h3>
            </div>
            <div className="space-y-2">
                <h3><span className="font-bold w-10 mr-5">Nationality :</span> <span className="text-[#767676]">BD</span></h3>
                <h3><span className="font-bold mr-14 w-10">Study :</span> <span className="text-[#767676]">National University</span></h3>
                <h3><span className="font-bold mr-5 w-10">Degree :</span> <span className="text-[#767676]">Honour's</span></h3>
                <h3><span className="font-bold w-10">Interest :</span> <span className="text-[#767676] ml-10">Video Editing</span></h3>
                <h3><span className="font-bold mr-5">Freelance :</span> <span className="text-[#767676]">Available</span></h3>
            </div>
        </div>
        <div className="flex justify-center items-center mt-10">
        <a href="/about"><button className="btn btn-outline bg-gradient-to-r from-red-500 to-orange-400 text-black">Contact Me</button></a>
        </div>
      </div>

    </div>
  );
};

export default About;
