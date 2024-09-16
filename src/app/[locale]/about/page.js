"use client";
import { useRef } from "react";
import Sidebar from "@/components/sidebar";
import { useTranslations } from "next-intl";
import Language from "@/components/language";
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

  return (
    <MainLayout>
      <div className="ml-10 h-full">
        <div className="h-48">About</div>
        <div>
          <div class="grid grid-cols-4 grid-rows-[240px,240px,240px] gap-6 "></div>
        </div>
      </div>
    </MainLayout>
  );
}
