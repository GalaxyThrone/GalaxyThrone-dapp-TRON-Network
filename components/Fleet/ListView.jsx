import { useContext, useState } from "react";
import Galaxygon from "../../context/context";
import { allShips } from "../../lib/ships";
import CraftModal from "../Modals/Craft/FleetCraftModal";

import Card from "../_shared/Card";

const ListView = ({ category }) => {
  const { fleetClaim } = useContext(Galaxygon);
  const route = "fleet";
  const [showCraft, setShowCraft] = useState(false);
  const [craftInfo, setCraftInfo] = useState(null);

  const main = () => {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12">
        {allShips[category]?.map((s, i) => (
          <Card
            key={i}
            info={s}
            index={i}
            route={route}
            category={category}
            showCraft={showCraft}
            setShowCraft={setShowCraft}
            setCraftInfo={setCraftInfo}
            claim={fleetClaim}
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
