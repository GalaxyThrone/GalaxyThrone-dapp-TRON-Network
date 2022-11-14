import { useState } from "react";
import { allPlanets } from "../../lib/planets";
import SendFleetModal from "../Modals/Craft/SendFleetModal";
import Card from "../_shared/Card";

const ListView = ({ category }) => {
  const route = "universe";
  const [showModal, setShowModal] = useState(false);

  const main = () => {
    if (category === "galaxy-1") {
      return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12">
          {allPlanets.map((s, i) => (
            <Card
              key={i}
              info={s}
              index={i}
              route={route}
              category={category}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      {main()}
      {showModal && (
        <SendFleetModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default ListView;
