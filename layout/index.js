import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Layout({ children }) {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <div className="grid grid-cols-12 h-[70px] bg-sky-950">
        <div className="col-span-2 ">
          <p className="text-white">Menu</p>
        </div>
        <div className="col-span-10 flex items-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="p-2 rounded-full outline-none w-[300px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-12  h-screen  w-full">
        <div className="col-span-2 bg-sky-950"></div>
        <div className="col-span-10 px-8">{children}</div>
      </div>
    </main>
  );
}
