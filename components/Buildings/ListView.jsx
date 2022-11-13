import { useContext, useState } from "react";
import Galaxygon from "../../context/context";
import { allBuildings } from "../../lib/buildings";
import CraftModal from "../Modals/Craft/BuildingCraftModal";

import Card from "../_shared/Card";

const ListView = ({ category }) => {
  const { buildingClaim } = useContext(Galaxygon);
  const route = "buildings";
  const [showCraft, setShowCraft] = useState(false);
  const [craftInfo, setCraftInfo] = useState(null);

  const main = () => {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12">
        {allBuildings[category]?.map((s, i) => (
          <Card
            key={i}
            info={s}
            index={i}
            route={route}
            category={category}
            showCraft={showCraft}
            setShowCraft={setShowCraft}
            setCraftInfo={setCraftInfo}
            claim={buildingClaim}
          />
        ))}
        <CraftModal
          showCraft={showCraft}
          setShowCraft={setShowCraft}
          craftInfo={craftInfo}
          route={route}
        />
      </div>
    );
  };
  return <div>{main()}</div>;
};

export default ListView;
