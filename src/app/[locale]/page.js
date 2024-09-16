"use client";
import { useRef } from "react";
import Sidebar from "@/components/sidebar";
import { useTranslations } from "next-intl";
import Language from "@/components/language";
import MainLayout from "@/components/layout";

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
            <div className="row-span-3 ...">Home</div>
            <div className="col-span-2 ...">02</div>
            <div className="row-span-2 col-span-2 ...">03</div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 grid-rows-[240px,240px,240px] gap-6 ">
            <div
              className=" bg-white  flex justify-center items-center"
              onClick={() => handleScroll(sectionOneRef)}
            >
              1
            </div>
            <div
              className=" bg-white  flex justify-center items-center"
              onClick={() => handleScroll(sectionTwoRef)}
            >
              2
            </div>
            <div className="row-span-2 col-span-2 bg-white  flex justify-center items-center">
              3
            </div>
            <div className=" bg-white  flex justify-center items-center">4</div>
            <div className=" bg-white  flex justify-center items-center">5</div>
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
