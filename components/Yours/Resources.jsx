import moment from "moment";
import { useContext, useEffect, useState } from "react";
import Galaxygon from "../../context/context";
import { HOUR_TO_SEC } from "../../lib/constants";
import ResourceDisplay from "../_shared/ResourceDisplay";
import ClaimPlanet from "./ClaimPlanet";

const Resources = () => {
  const { resources, userPlanetsIds, diamond, planetsContract } =
    useContext(Galaxygon);
  const [planetIds, setPlanetIds] = useState([]);
  const [timeToClaim, setTimeToClaim] = useState([]);
  const [boosts, setBoosts] = useState([]);
  const [open, setOpen] = useState(null);
  const [toClaim, setToClaim] = useState([]);

  const claim = async (i) => {
    if (i === 0) {
      await diamond.mineMetal(planetIds[i]);
    }
    if (i === 1) {
      await diamond.mineCrystal(planetIds[i]);
    }
    if (i === 2) {
      await diamond.mineEthereus(planetIds[i]);
    }
  };

  const checkToClaim = (i) => {
    if (timeToClaim[i] + HOUR_TO_SEC * 8 < moment().unix()) {
      return <div className="text-white">ready to claim</div>;
    } else {
      const diff = timeToClaim[i] + HOUR_TO_SEC * 8 - moment().unix();
      const duration = moment.duration(diff * 1000, "milliseconds");
      return (
        <div className="text-white">
          {duration.hours()} H : {duration.minutes()} M
        </div>
      );
    }
  };

  useEffect(() => {
    if (userPlanetsIds) {
      setPlanetIds([userPlanetsIds[0], userPlanetsIds[0], userPlanetsIds[0]]);
    }
  }, [userPlanetsIds]);

  useEffect(() => {
    if (planetsContract && planetIds.length > 0) {
      const fetchTime = async () => {
        const arr = [];
        for (let i = 0; i < resources.length; i++) {
          arr.push(
            Number(await planetsContract.getLastClaimed(planetIds[i], i))
          );
        }
        setTimeToClaim(arr);
      };

      const fetchBoost = async () => {
        const arr = [];
        for (let i = 0; i < resources.length; i++) {
          arr.push(Number(await planetsContract.getBoost(planetIds[i], i)));
        }
        setBoosts(arr);
      };

      fetchTime();
      fetchBoost();
    }
  }, [planetsContract, planetIds]);

  const checkResources = () => {
    return (
      <div className="w-full flex flex-col items-center gap-6 self-center text-black text-sm">
        {resources?.map((r, i) => (
          <div key={i} className="w-full flex items-center gap-10">
            <div className="w-1/6">
              <ResourceDisplay key={i} resource={r} i={i} />
            </div>
            <div className="w-2/6">
              <ClaimPlanet
                info={{
                  claim,
                  i,
                  setOpen,
                  open,
                  planetIds,
                  userPlanetsIds,
                  setPlanetIds,
                }}
              />
            </div>
            <div className="w-1/5 text-white">
              {(timeToClaim.length > 0 && checkToClaim(i)) || "loading..."}
            </div>
            <div className="text-white">{boosts.length && boosts[i]}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center rounded-xl bg-brand-darkBlue w-full h-full text-white font-orbitron uppercase rounded-tr-xl border-b border-brand-darkestBlue p-10">
      <div className="w-full flex flex-col gap-7">
        <div className="flex items-center gap-10">
          <div className="w-1/6">Resources</div>
          <div className="flex items-center justify-between w-2/6">
            <div className="w-2/5"></div>
            <div className="w-2/5">Planets</div>
          </div>
          <div className="w-1/5">Hours to claim</div>
          <div>Boost</div>
        </div>
        {resources && checkResources()}
      </div>
    </div>
  );
};

export default Resources;
