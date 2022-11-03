import moment from "moment";
import { useContext, useEffect, useState } from "react";
import Galaxygon from "../../context/context";
import { HOUR_TO_SEC } from "../../lib/constants";
import ResourceDisplay from "../_shared/ResourceDisplay";

const Resources = () => {
  const { resources, userPlanetsIds, diamond, planetsContract } =
    useContext(Galaxygon);
  const [planetIds, setPlanetIds] = useState([]);
  const [toClaim, setToClaim] = useState([]);
  const [boosts, setBoosts] = useState([]);
  const [open, setOpen] = useState(null);

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
    if (toClaim[i] + HOUR_TO_SEC * 8 < moment().unix()) {
      return <div className="text-white">ready to claim</div>;
    } else {
      const diff = toClaim[i] + HOUR_TO_SEC * 8 - moment().unix();
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
        setToClaim(arr);
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
    console.log(1);
    return (
      <div className="w-full flex flex-col items-center gap-6 self-center text-black text-sm">
        {resources?.map((r, i) => (
          <div key={i} className="w-full flex items-center gap-10">
            <div className="w-1/6">
              <ResourceDisplay key={i} resource={r} i={i} />
            </div>
            <div className="w-2/6">
              {userPlanetsIds.length > 0 && (
                <div className="flex items-center justify-between text-sm font-orbitron">
                  <div
                    onClick={() => claim(i)}
                    className="bg-gradient-to-tr w-2/5 from-brand-lightBlue to-brand-lightCyan uppercase text-center text-white font-semibold py-2 px-6 rounded-lg cursor-pointer hover:opacity-90"
                  >
                    Claim
                  </div>
                  <div
                    onClick={() => setOpen(open === i ? null : i)}
                    className={`relative w-2/5 p-2 py-1 text-center text-gray-700 bg-white border ${
                      open === i ? "rounded-t-lg" : "rounded-lg"
                    } shadow-sm cursor-pointer`}
                  >
                    <div className="flex items-center gap-5">
                      <img
                        src={`/brand/planets/${planetIds[i]}.png`}
                        className="w-10 rounded"
                      />
                      <div>{planetIds[i]}</div>
                    </div>
                    <div
                      className={`w-[calc(100%+2px)] absolute left-[-1px] top-[35px] z-[100] ${
                        open === i ? "block" : "hidden"
                      } p-2.5 py-1 text-gray-500 bg-white border rounded-b-lg shadow-sm`}
                    >
                      {userPlanetsIds.map((id, j) => (
                        <div
                          onClick={() => {
                            const arr = planetIds;
                            arr[i] = id;
                            setPlanetIds(arr);
                          }}
                          key={j}
                          className={`flex items-center gap-5 ${
                            j !== 0 && "border-b"
                          }`}
                        >
                          <img
                            src={`/brand/planets/${id}.png`}
                            className="w-10 rounded"
                          />
                          <div>{id}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="w-1/5">{checkToClaim(i)}</div>
            <div className="text-white">{boosts[i]}</div>
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
