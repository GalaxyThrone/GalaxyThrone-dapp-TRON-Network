import { allPlanets } from "../../lib/planets";
import Card from "../_shared/Card";
import { useContext, useEffect, useState } from "react";
import Galaxygon from "../../context/context";

const ListView = ({ category }) => {
  const route = "yours";

  const { userPlanetsIds } = useContext(Galaxygon);

  const main = () => {
    if (category === "all") {
      return;
    } else if (category === "planets" && userPlanetsIds.length > 0) {
      return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12">
          {allPlanets.map((s, i) => {
            if (userPlanetsIds.includes(parseInt(s.name))) {
              return (
                <Card
                  key={i}
                  info={s}
                  index={i}
                  route={route}
                  category={category}
                />
              );
            }
          })}
        </div>
      );
    } else {
      return <div>to Add</div>;
    }
  };

  return <div>{main()}</div>;
};

export default ListView;
