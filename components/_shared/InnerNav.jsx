import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Galaxygon from "../../context/context";
import { checkNavLinks } from "../../lib/constants";

const InnerNav = ({ active }) => {
  const { userMetal, userCrystal, userEthereus } = useContext(Galaxygon);

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

  const main = () => {
    return (
      <div className="flex items-center gap-8">
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

  const checkResources = () => {
    return (
      <div className="flex items-center justify-between self-center gap-5 text-black text-sm">
        <div className="bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan p-0.5 rounded-lg">
          <div className="flex items-center gap-1 bg-white opacity-70 rounded-lg">
            <div className="w-8 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
              <div className="w-full rounded-full bg-brand-darkestBlue flex items-center justify-center">
                <img src="/brand/metal-icon.png" />
              </div>
            </div>
            <div className="pr-2">{userMetal}</div>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan p-0.5 rounded-lg">
          <div className="flex items-center gap-1 bg-white opacity-70 rounded-lg">
            <div className="w-8 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
              <div className="w-full rounded-full bg-brand-darkestBlue flex items-center justify-center">
                <img src="/brand/crystal-icon.png" />
              </div>
            </div>
            <div className="pr-2">{userCrystal}</div>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan p-0.5 rounded-lg">
          <div className="flex items-center gap-1 bg-white opacity-70 rounded-lg">
            <div className="w-8 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
              <div className="w-full rounded-full bg-brand-darkestBlue flex items-center justify-center">
                <img src="/brand/eth.png" />
              </div>
            </div>
            <div className="pr-2">{userEthereus}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-between bg-brand-darkBlue w-full h-full text-white font-orbitron uppercase rounded-tr-xl border-b border-brand-darkestBlue px-8">
      {main()}
      {userMetal && userCrystal && userEthereus && checkResources()}
    </div>
  );
};

export default InnerNav;
