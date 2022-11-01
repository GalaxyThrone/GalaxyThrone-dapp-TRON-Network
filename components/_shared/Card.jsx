import Link from "next/link";

const Card = ({
  info,
  index,
  route,
  category,
  showCraft,
  setShowCraft,
  setCraftInfo,
}) => {
  const { name, img, desc } = info;

  const checkButton = () => {
    if (route === "planets") {
      return;
    } else {
      setShowCraft(!showCraft);
      setCraftInfo(info);
    }
  };

  return (
    <div className="w-full rounded-lg p-0.5 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
      <div className="w-full h-[340px] 2xl:h-96 bg-brand-darkestBlue rounded-lg py-1 px-4 flex flex-col justify-between">
        <div>
          <div className="font-orbitron uppercase text-center">{name}</div>
          <div className="mt-1 rounded-xl p-0.5 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
            <img src={img} className="rounded-xl" />
          </div>
          <div className="mt-2 2xl:mt-4 text-sm 2xl:text-base">{desc}</div>
        </div>
        <div className="flex items-center justify-between text-lg mb-2 uppercase">
          <Link href={`/${route}/${category}/${index + 1}`}>
            <div className="p-0.5 w-2/5 rounded bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan skew-x-[15deg]">
              <div className="2xl:py-0.5 w-full text-center bg-brand-darkBlue rounded cursor-pointer hover:opacity-90">
                Info
              </div>
            </div>
          </Link>
          {category !== "your" && (
            <div
              onClick={checkButton}
              className="py-0.5 2xl:py-1 w-2/5 text-center rounded bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan skew-x-[-15deg] cursor-pointer hover:opacity-90"
            >
              {route === "planets" ? "Send Fleet" : "Craft"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
