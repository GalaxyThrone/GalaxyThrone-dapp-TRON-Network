import { howToPlay } from "../lib/howToPlay";

const HowToPlay = () => {
  return (
    <div className="bg-[url('/brand/Untitled.png')] bg-cover bg-no-repeat bg-[#4D4D4D] bg-blend-overlay w-full h-full grid grid-cols-4 gap-10 p-10">
      {howToPlay.map((step, i) => (
        <div
          key={i}
          className="w-full max-h-[300px] rounded-2xl shadow-slide bg-brand-mediumBlue text-white px-6 py-3 flex flex-col gap-3 items-center"
        >
          <div className="text-2xl font-audiowide text-brand-lightCyan border-b border-brand-lightCyan w-7 text-center">
            {step.title}
          </div>
          <div className="text-lg font-orbitron uppercase">{step.subTitle}</div>
          <div className="text-lg leading-6">{step.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default HowToPlay;
