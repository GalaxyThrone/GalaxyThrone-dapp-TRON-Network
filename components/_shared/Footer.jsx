import Link from "next/link";
import { footerLogos } from "../../lib/constants";

const Footer = () => {
  return (
    <div className="w-full bg-brand-darkBlue gap-4 py-8 2xl:py-12 md:px-28 2xl:px-52 flex flex-col md:flex-row items-center justify-between shadow-onTop z-[100] text-white">
      <div className="flex items-center gap-6">
        {footerLogos.map((l, i) => (
          <img key={i} src={l.img} alt={l.name} />
        ))}
      </div>
      <Link href="/">
        <div className=" flex items-center gap-2.5 cursor-pointer">
          <div className="text-lg font-bold font-orbitron">Galaxygon</div>
        </div>
      </Link>
      <div>© 2022 Hansel. All rights reserved.</div>
    </div>
  );
};

export default Footer;
