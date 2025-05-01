import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className="flex justify-center items-center gap-5 p-4 bg-[#F3F3F3] font-semibold">
      <button className="btn bg-[#D72050] text-white ">Latest</button>
      <Marquee speed={50} pauseOnHover gradient={false} className=" ">
        🐉 Welcome to Dragon Newsletter — Your daily dose of fire-breathing
        updates! &nbsp;&nbsp;&nbsp; 🔥 New article: "Top 10 Myths About Dragons
        Debunked" &nbsp;&nbsp;&nbsp; ✨ Weekly spotlight: Dragon Riders of the
        East Realm &nbsp;&nbsp;&nbsp; 📢 Breaking: Ancient scroll reveals
        secrets of the Skyborn Clan! &nbsp;&nbsp;&nbsp; 🛡️ Don’t miss our
        upcoming interview with Flamewing, the mountain guardian!
        &nbsp;&nbsp;&nbsp;
      </Marquee>
    </div>
  );
};

export default Marque;
