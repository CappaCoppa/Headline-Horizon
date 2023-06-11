import React from "react";

export const Header = () => {
  return (
    <>
      <div className="bg-black-opacity-0.50 px-64 py-0 flex justify-between items-center">
        <h3 className=" font-antic p-0 m-0 uppercase text-black-25">
          Headline Horizone
        </h3>
        <div className="flex gap-16 font-normal text-black-10 uppercase">
          <h7 className="cursor-pointer">Business</h7>
          <h7 className="cursor-pointer">Entertainment</h7>
          <h7 className="cursor-pointer">Health</h7>
          <h7 className="cursor-pointer">Lifestyle</h7>
          <h7 className="cursor-pointer">Politics</h7>
          <h7 className="cursor-pointer">Science</h7>
          <h7 className="cursor-pointer">Tech</h7>
          <h7 className="cursor-pointer">U.S</h7>
          <h7 className="cursor-pointer">World</h7>
        </div>
      </div>
      <div className="bg-primary-opacity-0.30 backdrop-blur-lg px-64 py-8 flex gap-16 uppercase text-black-10 font-medium justify-between">
        <h7 className="text-error font-semibold cursor-pointer">spotlight</h7>
        <h7 className="cursor-pointer">Latest</h7>
        <h7 className="cursor-pointer">Politics</h7>
        <h7 className="cursor-pointer">Health</h7>
        <h7 className="cursor-pointer">Science</h7>
        <h7 className="cursor-pointer">Tech</h7>
        <h7 className="cursor-pointer">Bussiness</h7>
        <h7 className="cursor-pointer">Ukraine</h7>
      </div>
    </>
  );
};
