"use client";
import { useRef } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import MainLayout from "@/components/layout";

export default function About() {
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);

  const handleScroll = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const t = useTranslations("Sidebar");
  console.log("t", t("Home"));
  const resultArray = [
    {
      url: "https://github.com/muujig0108",
      prot: "github",
      imgUrl: "https://img.icons8.com/sf-black-filled/50/github.png",
    },
    {
      url: "https://www.linkedin.com/in/munkhtur-sodkhuu-31111b302/",
      prot: "linkedin",
      imgUrl: "https://img.icons8.com/color/48/linkedin.png",
    },
    {
      url: "https://www.facebook.com/mafio.munkhtur/",
      prot: "facebook",
      imgUrl: "https://img.icons8.com/fluency/48/facebook-new.png",
    },
    {
      url: "",
      prot: "Munkhtur1@icloud.com",
      imgUrl: "https://img.icons8.com/fluency/48/apple-mail.png",
    },
    {
      url: "",
      prot: "+976 91057005",
      imgUrl: "https://img.icons8.com/fluency/48/iphone14-pro--v1.png",
    },
  ];
  return (
    <MainLayout>
      <div className="ml-10 h-full">
        <div className="h-48"></div>

        <div className="h-2/3 flex items-start justify-start">
          <div className="flex flex-col mt-14">
            {resultArray.map((v, i) => (
              <div className="flex flex-row ml-5 mb-7" key={i}>
                <Link
                  href={v.url}
                  key={v}
                  target="_blank"
                  className="flex items-center text-blue-500"
                  // onClick={() => handleSelect(i)}
                >
                  <Image
                    width="45"
                    height="45"
                    src={v.imgUrl}
                    alt="math"
                    className="mr-5"
                  />
                  {v.prot}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
