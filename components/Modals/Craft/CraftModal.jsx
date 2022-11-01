import { ethers } from "ethers";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import Galaxygon from "../../../context/context";
import Craft from "./Craft";
import Crafting from "./Crafting";

const CraftModal = ({ showCraft, setShowCraft, craftInfo, route }) => {
  const { diamond, userPlanetsIds } = useContext(Galaxygon);

  const [crafting, setCrafting] = useState(false);
  const [claim, setClaim] = useState(false);

  useEffect(() => {
    if (diamond && userPlanetsIds.length > 0) {
      const checkCraft = async () => {
        const timestamp = await diamond.getCraftBuildings(userPlanetsIds[0]);
        const now = moment().unix();
        if (now < parseInt(ethers.utils.formatUnits(timestamp[1], 0))) {
          setCrafting(true);
        } else if (parseInt(ethers.utils.formatUnits(timestamp[1], 0)) !== 0) {
          setClaim(true);
        }
      };
      checkCraft();
    }
  }, [diamond, userPlanetsIds]);

  return (
    <div
      onClick={() => setShowCraft(!showCraft)}
      className={`${
        showCraft ? "" : "hidden"
      } flex items-center justify-center cursor-pointer bg-brand-modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full`}
    >
      <div className="relative h-auto w-5/6 flex justify-center">
        <div className="w-2/5 rounded-2xl p-1 min-h-[300px] bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
          {!crafting ? (
            <Craft craftInfo={craftInfo} route={route} claim={claim} />
          ) : (
            <Crafting setShowCraft={setShowCraft} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CraftModal;
