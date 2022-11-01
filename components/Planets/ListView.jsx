import { allPlanets } from "../../lib/planets";
import Card from "../_shared/Card";
import { useContext, useEffect, useState } from "react";
import Galaxygon from "../../context/context";

const ListView = ({ category }) => {
  const route = "planets";

  const { userPlanetsIds } = useContext(Galaxygon);

  const main = () => {
    if (category === "all") {
      return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12">
          {allPlanets.map((s, i) => (
            <Card
              key={i}
              info={s}
              index={i}
              route={route}
              category={category}
            />
          ))}
        </div>
      );
    } else if (category === "your" && userPlanetsIds.length > 0) {
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
      return <div>Register to the game</div>;
    }
  };

  return <div>{main()}</div>;
};

export default ListView;
