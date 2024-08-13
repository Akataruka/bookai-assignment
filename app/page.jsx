"use client";
import { useState, useEffect } from "react";
import { LuSunMedium } from "react-icons/lu";
import { IoMdMoon } from "react-icons/io";
import Link from "next/link";




const page = () => {
  const navlink = [
    { name: "Overview", path: "/" },
    { name: "Authentication", path: "/" },
    { name: "Endpoints", path: "/" },
    { name: "Tutorial", path: "/" },
    { name: "Code Examples", path: "/" },
    { name: "Pricing", path: "/" },
  ];

  const [darkmode, setDarkmode] = useState(true);

  const applyTheme = (theme) => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    applyTheme(darkmode ? "dark" : "light");
  }, [darkmode]);

  return (
    <div className=" bg-[#d6b153] dark:bg-[#0f172a] min-h-screen w-full flex flex-col items-center">
      <div className="sticky top-0 z-[2] drop-shadow-md h-[38vh] w-full bg-[#f2dfb0] dark:bg-[#1e293b] flex flex-col lg:flex-row lg:h-20 gap-3 justify-center lg:gap-6 lg:justify-center  items-center">
        {navlink.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className="w-full uppercase lg:w-auto flex justify-center items-center text-[15px] tracking-wider text-black dark:text-white hover:text-yellow-600 dark:hover:text-cyan-400"
          >
            {link.name}
          </Link>
        ))}
        <button
          className={`absolute h-10 w-10 flex justify-center items-center rounded-md top-5 right-5 z-[10] text-white ${
            darkmode ?  "bg-orange-400 hover:bg-orange-500/[0.9]" :"bg-purple-800 hover:bg-purple-900/[0.9]" 
          }`}
          onClick={() => setDarkmode(darkmode ? false : true)}
        >
          {darkmode ? <LuSunMedium size={20} /> : <IoMdMoon size={20} />}
        </button>
      </div>
      <div className="w-[90vw] lg:max-w-[max(700px,60vw)] my-8 rounded-lg border-[1px]  border-[#334155] flex flex-col gap-2 items-center pt-16 pb-8 px-8 bg-[#f2dfb0] dark:bg-[#1e293b]">
        <div className="text-purple-900 dark:text-[#a5b4fc] text-2xl w-full text-left font-bold tracking-wide">
          API Pricing
        </div>
        <p className="text-black dark:text-white text-md block pr-10 md:pr-28">
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </p>

        <div className="mt-4 w-[80vw] lg:w-[max(600px,55vw)] rounded-xl border-[1px] border-[#334155] ">
          <table className="overflow-hidden w-full  text-[15px] text-left text-black dark:text-[#e2e8f0] rounded-xl h-80">
            <thead className=" ">
              <tr className=" border-b-[1px] h-20 bg-[#f4cd6a] dark:bg-[#6366f1] border-[#334155] uppercase">
                <th className=" pl-2 lg:pl-4">API</th>
                <th className=" ">Model</th>
                <th className=" ">Price per 1K tokens</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b-[1px] border-[#334155]">
                <td className="pl-2 lg:pl-4">OpenAI</td>
                <td>GPT-3.5</td>
                <td>$0.002</td>
              </tr>
              <tr className="border-b-[1px] border-[#334155]">
                <td className="pl-2 lg:pl-4">OpenAI</td>
                <td>GPT-4</td>
                <td>$0.03</td>
              </tr>
              <tr className="border-b-[1px] border-[#334155]">
                <td className="pl-2 lg:pl-4">Together AI</td>
                <td>Llama-2-70b</td>
                <td>$0.0008</td>
              </tr>
              <tr className="">
                <td className="pl-2 lg:pl-4">Together AI</td>
                <td>Llama-2-13b</td>
                <td>$0.0006</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="mt-4 text-xl w-full text-left text-purple-900 dark:text-[#a5b4fc] font-bold tracking-wide">
          Token Estimation
        </h3>
        <p className="text-black dark:text-[#e2e8f0] block pr-10 ">
          On average, 1 token is approximately 4 characters or 0.75 words. For
          precise pricing, we recommend using our token calculator tool.
        </p>
        <h3 className="mt-4 text-xl w-full text-left text-purple-900 dark:text-[#a5b4fc] font-bold tracking-wide">
          Billing
        </h3>
        <p className="text-black dark:text-[#e2e8f0] block pr-10">
          You will only be charged for the tokens used in generating the book.
          The API tracks token usage and bills accordingly. Detailed usage
          reports are available in your account dashboard.
        </p>
      </div>
    </div>
  );
};

export default page;
