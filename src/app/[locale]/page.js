"use client";
import { useRef } from "react";
import Sidebar from "@/components/sidebar";
import { useTranslations } from "next-intl";
import Language from "@/components/language";
import MainLayout from "@/components/layout";
import { useLocale } from "use-intl";
import Image from "next/image";

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
  const experiencesMSG = useTranslations("experiences");
  console.log("experiences", experiencesMSG("tenplus.title"));
  const resultArray2 = t("2").split("_");
  const resultArray4 = t("4").split("_");
  const resultArray5 = t("5").split("_");
  const localActive = useLocale();
  console.log("localActive", localActive);

  // Yearly data
  const experiences = [
    {
      year: "2021 - 2022",
      title: experiencesMSG("tenplus.title"),
      description: experiencesMSG("tenplus.description"),
      images: [
        "/tenplus/ten-1.png",
        "/tenplus/ten-2.png",
        "/tenplus/ten-3.png",
        "/tenplus/ten-4.png",
      ],
    },
    {
      year: "2022 - 2024",
      title: experiencesMSG("nso.title"),
      description: "",
      subProjects: [
        {
          title: experiencesMSG("nso.subProjects.1.title"),
          description: experiencesMSG("nso.subProjects.1.description"),
          images: ["/nso/medee-app-1.png", "/nso/medee-app-2.png"],
        },
        {
          title: experiencesMSG("nso.subProjects.2.title"),
          description: experiencesMSG("nso.subProjects.2.description"),
          images: [
            "/nso/medee-app-1.png",
            "/nso/medee-app-2.png",
            "/nso/medee-app-3.png",
            "/nso/medee-app-4.png",
          ],
        },
        {
          title: experiencesMSG("nso.subProjects.3.title"),
          description: experiencesMSG("nso.subProjects.3.description"),
          images: ["/nso/web-scraping-1.png"],
        },
      ],
    },
    {
      year: "2024",
      title: experiencesMSG("qpay.title"),
      description: experiencesMSG("qpay.description"),
      images: ["/qpay/customers-1.png", "/qpay/customers-2.png"],
    },
  ];

  console.log("experiences", experiences);

  return (
    <MainLayout>
      <div className="sm:ml-10 h-full">
        <div className="h-48">
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3 text-3xl sm:text-4xl mt-10">
              {t("title")}
            </div>
            {/* <div className="col-span-2 ...">02</div>
            <div className="row-span-2 col-span-2 ...">03</div> */}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-[240px,240px] gap-6 ">
            <div
              className=" bg-white  rounded-md  border-blue-500 flex flex-col justify-center items-center  transition-transform transform hover:scale-105"
              onClick={() => handleScroll(sectionOneRef)}
            >
              <div className="text-6xl">10+</div>
              <div className="mt-3">{t("1")}</div>
            </div>
            <div
              className=" bg-white  flex flex-col justify-center items-center"
              // onClick={() => handleScroll(sectionTwoRef)}
            >
              <div className="text-3xl sm:text-4xl">{resultArray2[0]}</div>
              <div className={`flex flex-col text-3xl sm:text-4xl`}>
                {resultArray2[1]}
              </div>
            </div>
            <div
              className="row-span-2 col-span-2 bg-white grid grid-cols-2 gap-4 md:grid-cols-3  flex justify-center items-center"
              onClick={() => handleScroll(sectionOneRef)}
            >
              <Image
                src="/nso/medee-app-1.png"
                alt="me"
                width={120}
                height={100}
                // className="rounded-full"
              />
              <Image
                src="/nso/web-scraping-1.png"
                alt="me"
                width={120}
                height={100}
                // className="rounded-full"
              />
              <Image
                src="/tenplus/ten-2.png"
                alt="me"
                width={120}
                height={100}
                // className="rounded-full"
              />
              <Image
                src="/qpay/customers-1.png"
                alt="me"
                width={120}
                height={100}
                // className="rounded-full"
              />{" "}
              <Image
                src="/qpay/customers-2.png"
                alt="me"
                width={120}
                height={100}
                // className="rounded-full"
              />
            </div>
            <div className="bg-white flex flex-col justify-center items-center relative">
              <div className="text-xl z-10 sm:left-14 relative">
                {resultArray4[2]}
              </div>
              <div className="text-xl absolute top-1 sm:top-20 left-10 z-0 opacity-70">
                {resultArray4[0]}
              </div>
              <div className="text-xl absolute bottom-1 sm:bottom-20 left-10 z-0 opacity-50">
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
            {/* <div className=" bg-white  flex justify-center items-center">6</div> */}
          </div>
        </div>

        {/* Experience Section */}
        <div ref={sectionOneRef} className="mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5">
            {experiencesMSG("title")}
          </h2>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-10 bg-white p-5 rounded-lg shadow-md overflow-hidden"
            >
              {/* Year */}
              <h3 className="text-3xl font-bold text-blue-600 mb-3">
                {exp.year}
              </h3>

              {/* Title and Description */}
              <div className="mb-5">
                <h4 className="text-xl font-semibold">{exp.title}</h4>
                <p className="text-gray-600 mt-2">{exp.description}</p>
              </div>

              {/* Subprojects (if any) */}
              {exp.subProjects ? (
                <div className="space-y-5">
                  {exp.subProjects.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className="p-4 bg-gray-100 rounded-md shadow-sm"
                    >
                      <h5 className="text-2xl font-bold text-gray-700 mb-2">
                        {sub.title}
                      </h5>
                      <p className="text-gray-600">{sub.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {sub.images.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="relative w-full h-48 overflow-hidden rounded-md"
                          >
                            <Image
                              src={image}
                              alt={`${sub.title} image ${imgIndex + 1}`}
                              layout="fill"
                              objectFit="cover"
                              className="hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Images (if no subprojects) */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {exp.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative w-full h-48 overflow-hidden rounded-md"
                    >
                      <Image
                        src={image}
                        alt={`${exp.year} image ${imgIndex + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Second section */}
        {/* <div
          ref={sectionTwoRef}
          className="h-8 bg-gray-200 flex justify-center items-center"
        >
          2 You ve scrolled down!
        </div> */}
      </div>
    </MainLayout>
  );
}
