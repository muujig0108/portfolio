"use client";
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
  // console.log("t", t("Home"));

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
          <p>Elementary, Middle, High school</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          date="2016 - 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>
          <h4 className="vertical-timeline-element-subtitle">
            National University of Mongolia
          </h4>
          <p>Electronic Engineer</p>
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
          <p>Web developer, Front-End developer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          date="2022 - 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            National Statistics Office of Mongolia
          </h4>
          <p>
            Web developer, Desktop App developer, Front-end developer, Back-end
            developer, Database developer, Mobile App developer, CI/CD
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          date="2024 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Back-End Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Innovation Investment LLC
          </h4>
          <p>
            Web developer, Front-end developer, Back-end developer /Node.js/
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
