import React from "react";
import { TbSmartHome } from "react-icons/tb";
import catImg from "../../assets/images/card/card1.png";

const HomePage = () => {
  return (
    <>
      <nav className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex items-center justify-between">
          <TbSmartHome className="text-xl" />
          <span className="ml-2">Dashboard - NFT & Gaming</span>
        </div>
      </nav>

      <div className="flex gax-x-6 mb-6">
        <section className="w-2/3">
          <div className="rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-600 py-10 px-14 flex items-center gap-x-8">
            <img src={catImg} alt="cat" className="w-1/3" />
            <div>
              <h2 className="text-4xl text-white font-semibold mb-6">
                Discover The Largest NFTs Marketplace
              </h2>
              <p className="text-lg text-white font-medium mb-6">
                The largest NFT (Non-Fungible Token) marketplace is OpenSea.
                Established in 2017, OpenSea has grown to become the leading
                platform for buying, selling, and trading digital assets,
              </p>
              <div className="flex gap-x-3">
                <button className="py-3 px-8 rounded-3xl border border-white outline-none font-medium text-white ">
                  Explore
                </button>
                <button className="py-3 px-8 rounded-3xl border border-blue-500 outline-none font-medium text-white bg-blue-500">
                  Create now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-1/3"></section>
      </div>
    </>
  );
};

export default HomePage;
