import Link from "next/link";
import { sideLinks } from "../../lib/links";

const SideNav = ({ active }) => {
  return (
    <div className="bg-brand-darkestBlue w-full h-full text-white font-audiowide rounded-l-xl">
      <Link href="/home">
        <div className="h-1/6 text-2xl font-semibold font-orbitron flex items-center justify-center border-b border-gray-400 cursor-pointer">
          Galaxygon
        </div>
      </Link>
      <div className="h-5/6 w-full flex flex-col uppercase overflow-auto">
        {sideLinks.map((s, i) => (
          <Link key={i} href={s.href}>
            <div
              className={`py-4 px-4 text-lg font-medium border-b border-gray-600 hover:text-brand-lightCyan cursor-pointer ${
                active === s.title && "text-brand-lightCyan"
              }`}
            >
              {s.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
