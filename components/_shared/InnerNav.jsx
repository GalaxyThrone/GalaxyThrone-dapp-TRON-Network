import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { checkNavLinks } from "../../lib/constants";

const InnerNav = ({ active }) => {
  const router = useRouter();

  const [links, setLinks] = useState();
  const [navActive, setNavActive] = useState();
  const [hover, setHover] = useState("");

  useEffect(() => {
    if (active !== "home") {
      setLinks(checkNavLinks(active));
    }
  }, [active]);

  useEffect(() => {
    if (links) {
      const handleRouteChange = (url) => {
        const rootSplit = url.split("/");
        if (rootSplit.length > 2) {
          const rootPath = rootSplit[2].toLowerCase();
          links.forEach((l) => {
            if (l.title === rootPath) {
              setNavActive(rootPath);
            }
          });
        }
      };

      handleRouteChange(router.asPath);
      router.events.on("routeChangeStart", handleRouteChange);
      return () => {
        router.events.off("routeChangeStart", handleRouteChange);
      };
    }
  }, [router.asPath, links]);

  return (
    <div className="bg-brand-darkBlue w-full h-full text-white font-orbitron uppercase rounded-tr-xl border-b border-brand-darkestBlue flex items-center px-8 gap-8">
      {links ? (
        links.map((l, i) => (
          <Link key={i} href={l.href}>
            <div
              onMouseEnter={() => setHover(l.title)}
              onMouseLeave={() => setHover("")}
            >
              <div className="cursor-pointer">{l.title}</div>
              {(hover === l.title || navActive === l.title) && (
                <div className="p-[1px] bg-brand-lightCyan"></div>
              )}
            </div>
          </Link>
        ))
      ) : (
        <div className="font-audiowide text-4xl w-full text-center">
          THE{" "}
          <span className="bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan text-transparent bg-clip-text">
            FUTURE
          </span>{" "}
          IS IN{" "}
          <span className="bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan text-transparent bg-clip-text">
            YOUR HANDS
          </span>
        </div>
      )}
    </div>
  );
};

export default InnerNav;
