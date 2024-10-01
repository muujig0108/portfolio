"use client";
import { useRef } from "react";
import Sidebar from "@/components/sidebar";
import { useTranslations } from "next-intl";
import Language from "@/components/language";
import MainLayout from "@/components/layout";
<link rel="icon" href="/favicon.ico" sizes="any" />;
export default function Home() {
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);

  const handleScroll = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const t = useTranslations("Sidebar");
  console.log("t", t("Home"));

  return (
    <MainLayout>
      <div className="ml-10 h-full">
        <div className="h-48">
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3 text-4xl mt-10">
              Software Development Services
            </div>
            {/* <div className="col-span-2 ...">02</div>
            <div className="row-span-2 col-span-2 ...">03</div> */}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 grid-rows-[240px,240px,240px] gap-6 ">
            <div
              className=" bg-white  rounded-md  border-blue-500 flex flex-col justify-center items-center  transition-transform transform hover:scale-105"
              onClick={() => handleScroll(sectionOneRef)}
            >
              <div className="text-6xl">10+</div>
              <div className="mt-3">Completed Projects</div>
            </div>
            <div
              className=" bg-white  flex flex-col justify-center items-center"
              onClick={() => handleScroll(sectionTwoRef)}
            >
              <div className="text-4xl">Web</div>
              <div className="text-4xl">Expert</div>
            </div>
            <div className="row-span-2 col-span-2 bg-white  flex justify-center items-center">
              3
            </div>
            <div className="bg-white flex flex-col justify-center items-center relative">
              <div className="text-xl z-10 left-14 relative">
                Satisfied Clients
              </div>
              <div className="text-xl absolute top-20 left-10 z-0 opacity-70">
                Company
              </div>
              <div className="text-xl absolute bottom-20 left-10 z-0 opacity-50">
                Government
              </div>
            </div>

            <div className=" bg-white  flex flex-col justify-center items-center">
              <div className=" flex flex-row">
                <div className="text-6xl">3</div>
                <div className="text-3xl">+</div>
                <div className="mt-8">years</div>
              </div>
              <div className="mt-3">Production Experience</div>
            </div>
            <div className=" bg-white  flex justify-center items-center">6</div>
          </div>
        </div>
        {/* First section */}
        <div className="h-8">
          <div ref={sectionOneRef} className=" bg-gray-200">
            1 You ve scrolled down!
          </div>
        </div>
        {/* Second section */}
        <div
          ref={sectionTwoRef}
          className="h-8 bg-gray-200 flex justify-center items-center"
        >
          2 You ve scrolled down!
        </div>
      </div>
    </MainLayout>
  );
}
