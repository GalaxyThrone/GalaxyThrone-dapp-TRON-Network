import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { sideLinks } from "../../lib/links";
import InnerNav from "./InnerNav";
import SideNav from "./SideNav";

const InnerLayout = ({ children }) => {
  const router = useRouter();

  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleRouteChange = (url) => {
      const check = false;
      const rootSplit = url.split("/");
      if (rootSplit.length > 1) {
        const rootPath = rootSplit[1].toLowerCase();
        sideLinks.forEach((l) => {
          if (l.title === rootPath) {
            setActive(rootPath);
            check = true;
          }
        });
        if (check) {
          return;
        } else setActive("home");
      }
    };

    handleRouteChange(router.pathname);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.query]);

  return (
    <div className="bg-[url('/brand/Untitled.png')] bg-cover bg-no-repeat bg-[#4D4D4D] bg-blend-overlay w-full h-full flex items-center justify-center">
      <div className="w-5/6 2xl:w-2/3 h-[480px] 2xl:h-[650px] rounded-xl shadow-slide bg-brand-mediumBlue text-white flex justify-between">
        <div className="w-1/6 h-full">
          <SideNav active={active} />
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-1/6">
            <InnerNav active={active} />
          </div>
          <div className="h-5/6 px-10 py-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default InnerLayout;
