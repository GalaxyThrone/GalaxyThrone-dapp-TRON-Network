import { useContext } from "react";
import Link from "next/link";
import Galaxygon from "../../context/context";
import { useRouter } from "next/router";

const NavBar = () => {
  const { connect, userAddress } = useContext(Galaxygon);
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="py-6 px-28 2xl:px-52 flex items-center justify-between bg-brand-darkBlue shadow-2xl z-[100]">
      <div className="flex items-center gap-10">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="text-lg font-extrabold tracking-tight logo text-white font-orbitron">
              GalaxyThrone
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-6 2xl:gap-8 text-white  font-orbitron">
        <Link href="/howToPlay">
          <div
            className={`cursor-pointer ${
              pathname === "/howToPlay"
                ? "text-brand-lightCyan hover:text-white"
                : "hover:text-brand-lightCyan"
            }`}
          >
            How to play
          </div>
        </Link>
        <div
          onClick={() => connect()}
          className="bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan uppercase text-white font-semibold px-6 py-2 rounded-xl cursor-pointer hover:opacity-90"
        >
          {userAddress
            ? userAddress.substring(0, 5) + "..." + userAddress.substring(39)
            : "Connect"}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
