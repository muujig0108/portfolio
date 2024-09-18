import { useTranslations } from "next-intl";
import MainContent from "./content";
import Sidebar from "./sidebar";

export default function MainLayout({ children }) {
  const t = useTranslations("Sidebar");
  console.log("t", t("Home"));

  return (
    <div className="flex  min-h-screen ">
      <div className="w-1/5 min-h-screen ">
        <Sidebar props={t("Home")}></Sidebar>
      </div>
      <div className="w-4/5 bg-slate-100">
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
}
