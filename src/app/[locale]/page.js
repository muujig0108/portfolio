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
  const t = useTranslations("HomePage");
  console.log("t", t("title"));
  const resultArray2 = t("2").split("_");
  const resultArray4 = t("4").split("_");
  const resultArray5 = t("5").split("_");

  return (
    <MainLayout>
      <div className="ml-10 h-full">
        <div className="h-48">
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3 text-4xl mt-10">{t("title")}</div>
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
              <div className="mt-3">{t("1")}</div>
            </div>
            <div
              className=" bg-white  flex flex-col justify-center items-center"
              onClick={() => handleScroll(sectionTwoRef)}
            >
              <div className="text-4xl">{resultArray2[0]}</div>
              <div className="text-4xl">{resultArray2[1]}</div>
            </div>
            <div className="row-span-2 col-span-2 bg-white  flex justify-center items-center">
              3
            </div>
            <div className="bg-white flex flex-col justify-center items-center relative">
              <div className="text-xl z-10 left-14 relative">
                {resultArray4[2]}
              </div>
              <div className="text-xl absolute top-20 left-10 z-0 opacity-70">
                {resultArray4[0]}
              </div>
              <div className="text-xl absolute bottom-20 left-10 z-0 opacity-50">
                {resultArray4[1]}
              </div>
            </div>

            <div className=" bg-white  flex flex-col justify-center items-center">
              <div className=" flex flex-row">
                <div className="text-6xl">3</div>
                <div className="text-3xl">+</div>
                <div className="mt-8">{resultArray5[0]}</div>
              </div>
              <div className="mt-3">{resultArray5[1]}</div>
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
