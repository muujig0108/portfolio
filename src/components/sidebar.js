"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "use-intl";
import { useTranslations } from "next-intl";

function Sidebar({ props }) {
  const [selectNavbar, setSelectNavbar] = useState(0); // Current selected item
  const resultArray = props.split("_");
  const pathName = usePathname();
  const localActive = useLocale();
  const searchParams = useSearchParams();
  // console.log("localActive", localActive);
  const t = useTranslations("Sidebar");
  // console.log("Name", t("Name"));

  const pages = ["", "career", "tech-tools", "about", "contact"];

  // Function to update selected navbar
  // const handleSelect = (index) => {
  //   console.log("index", index);

  //   setSelectNavbar(index);
  // };
  let key = 1;
  if (pathName.substring(1) === localActive) {
    key = 1;
  } else if (pathName.includes("career")) {
    key = 2;
  } else if (pathName.includes("tech-tools")) {
    key = 3;
  } else if (pathName.includes("about")) {
    key = 4;
  } else if (pathName.includes("contact")) {
    key = 5;
  }
  //setSelectNavbar(key - 1);
  // console.log(
  //   "selectNavbar",
  //   key,
  //   pathName,
  //   pathName.substring(1),
  //   selectNavbar
  // );

  return (
    <>
      <div className="flex h-screen ">
        <div className="w-1/4 sm:w-1/3"></div>
        <div className="w-full sm:w-2/3">
          <div className="h-1/3 flex-col flex items-start justify-center">
            <Image
              src="/profile.png"
              alt="me"
              width={120}
              height={100}
              className="rounded-full"
            />
            <div className="text-black font-merriweather text-lg sm:text-xl font-semibold tracking-wide mt-4">
              {t("Name")}
            </div>
          </div>

          <div className="h-2/3 flex ml-2 sm:ml-0 items-start justify-start">
            <div className="grid gap-y-12">
              {resultArray.map((v, i) => (
                <Link
                  href={"/" + localActive + "/" + pages[i]}
                  key={v}
                  className={`cursor-pointer text-lg transition-colors duration-200 ${
                    key - 1 === i
                      ? "text-blue-500 font-bold border-l-4 border-blue-500 pl-2"
                      : "text-gray-500 hover:text-blue-400"
                  }`}
                  // onClick={() => handleSelect(i)}
                >
                  {v}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
