import { useContext } from "react";
import Galaxygon from "../../context/context";
import ResourceDisplay from "../_shared/ResourceDisplay";

const Resources = () => {
  const { resources, userPlanetsIds, diamond } = useContext(Galaxygon);

  // allow user to select from which planet
  const claim = async (i) => {
    if (i === 0) {
      await diamond.mineMetal(userPlanetsIds[0]);
    }
    if (i === 1) {
      await diamond.mineCrystal(userPlanetsIds[0]);
    }
    if (i === 2) {
      await diamond.mineEthereus(userPlanetsIds[0]);
    }
  };

  const checkResources = () => {
    return (
      <div className="w-full flex flex-col items-center gap-6 self-center text-black text-sm">
        {resources?.map((r, i) => (
          <div className="w-full flex items-center gap-20">
            <div className="w-1/6">
              <ResourceDisplay key={i} resource={r} i={i} />
            </div>
            <div className="w-1/6">
              {userPlanetsIds.length > 0 && (
                <div
                  onClick={() => claim(i)}
                  className="bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan uppercase text-center text-white text-sm font-semibold font-orbitron py-2 px-6 rounded-lg cursor-pointer hover:opacity-90"
                >
                  Claim
                </div>
              )}
            </div>
            {/* add countdown to claim & dropdown menu to allow user to select from which planet*/}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="flex items-center rounded-xl bg-brand-darkBlue w-full h-full text-white font-orbitron uppercase rounded-tr-xl border-b border-brand-darkestBlue p-10">
      {resources && checkResources()}
    </div>
  );
};

export default Resources;
