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
      url: "https://tailwindcss.com/docs/list-style-type",
      prot: "tailwindcss",
      imgUrl: "https://img.icons8.com/color/48/equation.png",
    },
    {
      url: "https://www.linkedin.com/feed/",
      prot: "linkedin",
      imgUrl: "https://img.icons8.com/color/48/equation.png",
    },
  ];
  return (
    <MainLayout>
      <div className="ml-10 h-full">
        <div className="h-48"></div>

        <div className="h-2/3 flex flex-col items-start justify-start">
          <div className="flex flex-col">
            Hobby GYM Basketball Book Classical Music Movie Documentary film
          </div>
          <div className="flex flex-col">
            Role model Platon Dr.House Henry Ford
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
