"use client";

import Image from "next/image";
import { useRef } from "react";
import Sidebar from "@/components/sidebar";
import { useTranslations } from "next-intl";
import Language from "@/components/language";
import MainLayout from "@/components/layout";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { MdWork as WorkIcon, MdSchool, StarIcon } from "react-icons/md"; // Import the Work Icon

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
      <VerticalTimeline>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          date="2006 - 2016"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>
          <h4 className="vertical-timeline-element-subtitle">23th school</h4>
          <span className="flex flex-row ml-2">
            <Image
              width="45"
              height="45"
              src="https://img.icons8.com/color/48/equation.png"
              alt="math"
              className="mr-2"
            />
            <Image
              width="45"
              height="45"
              src="https://img.icons8.com/external-febrian-hidayat-gradient-febrian-hidayat/64/external-09-school-and-education-febrian-hidayat-gradient-febrian-hidayat.png"
              alt="physics"
              className="mr-2"
            />
          </span>
          <p>Math, Physics ...</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          date="2016 - 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>
          <h4 className="vertical-timeline-element-subtitle ">
            National University of Mongolia
            <span className="flex flex-row ml-2">
              <Image
                width="45"
                height="45"
                src="https://img.icons8.com/color/48/c-programming.png"
                alt="c-programming"
              />
              <Image
                width="45"
                height="45"
                src="https://img.icons8.com/color/48/html-5--v1.png"
                alt="html-5"
              />
              <Image
                width="45"
                height="45"
                src="https://img.icons8.com/color/48/css3.png"
                alt="css3"
              />
              <Image
                width="45"
                height="45"
                src="https://img.icons8.com/fluency/48/javascript.png"
                alt="javascript"
              />
              <Image
                width="45"
                height="45"
                src="https://img.icons8.com/color/48/python--v1.png"
                alt="python"
              />
              <Image
                width="45"
                height="45"
                src="https://img.icons8.com/color/48/assembly.png"
                alt="assembly"
              />
              <Image
                width="45"
                height="45"
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/50/external-embedded-web-development-flaticons-lineal-color-flat-icons.png"
                alt="embedded"
              />
              <Image
                width="45"
                height="45"
                src="https://img.icons8.com/sf-black-filled/50/github.png"
                alt="github"
              />
            </span>
          </h4>
          <p>
            Programming C language, html-5, css-3, Javascript language, Python
            language, Assembly language, Embedded system, git controller with
            Github
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">TenPlus</h4>
          <span className="flex flex-row ml-2">
            <Image
              width="45"
              height="45"
              src="https://img.icons8.com/color/48/angularjs.png"
              alt="angularjs"
              className="mr-2"
            />
            <Image
              width="45"
              height="45"
              src="https://img.icons8.com/color/48/spring-logo.png"
              alt="spring-boot"
              className="mr-2"
            />
            <Image
              width="45"
              height="45"
              src="https://w7.pngwing.com/pngs/534/663/png-transparent-net-framework-software-framework-c-microsoft-asp-net-microsoft-blue-angle-text-thumbnail.png"
              alt="asp_net"
              className="mr-2"
            />
            <Image
              width="45"
              height="45"
              src="https://img.icons8.com/color/48/microsoft-sql-server.png"
              alt="mssql"
              className="mr-2"
            />
            <Image
              width="45"
              height="45"
              src="https://img.icons8.com/color/48/gitlab.png"
              alt="gitlab"
              className="mr-2"
            />
          </span>
          <p>
            Angular js, Spring-boot, Asp.net, Microsoft SQL server, git
            controller with Gitlab
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            National Statistics Office of Mongolia
          </h4>
          <span className="flex flex-row ml-2">
            <Image
              width="45"
              height="45"
              src="https://img.icons8.com/color/48/react-native.png"
              alt="reactjs"
              className="mr-2"
            />
            <Image
              width="45"
              height="45"
              src="https://img.icons8.com/color/48/nodejs.png"
              alt="nodejs"
              className="mr-2"
            />
            <Image
              width="45"
              height="45"
              src="https://img.icons8.com/color/48/nextjs.png"
              alt="nextjs"
              className="mr-2"
            />
            <Image
              width="45"
              height="45"
              src="https://img.icons8.com/color/48/microsoft-sql-server.png"
              alt="mssql"
              className="mr-2"
            />
            <Image
              width="34"
              height="24"
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-shadow-tal-revivo.png"
              alt="postgresql"
              className="mr-2"
            />
            <Image
              width="45"
              height="45"
              src="https://img.icons8.com/color/48/mongodb.png"
              alt="mongodb"
              className="mr-2"
            />
            <Image
              width="45"
              height="45"
              src="https://img.icons8.com/color/48/python--v1.png"
              alt="python"
              className="mr-2"
            />
            <Image
              width="45"
              height="45"
              src="https://img.icons8.com/color/48/net-framework.png"
              alt="net"
              className="mr-2"
            />
          </span>
          <span>
            <Image
              width="45"
              height="45"
              src="https://img.icons8.com/color/48/gitlab.png"
              alt="gitlab"
              className="ml-2"
            />
          </span>
          <p>
            Reactjs, React-Native, Nodejs, Nextjs, MSSQL, MongoDB, PostgreSQL,
            Python, .Net, git controller with Gitlab
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* <div className="ml-10 h-full">
        <div className="h-48">Career</div>
        <div>
          <div className="grid grid-cols-4 grid-rows-[240px,240px,240px] gap-6">
            <div className="bg-white flex justify-center items-center">1</div>
            <div className="bg-white flex justify-center items-center">2</div>
            <div className="bg-white flex justify-center items-center">3</div>
            <div className="bg-white flex justify-center items-center">4</div>
          </div>
        </div>
      </div> */}
    </MainLayout>
  );
}
