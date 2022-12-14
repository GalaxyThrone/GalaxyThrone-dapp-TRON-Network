import moment from "moment";
import { useContext } from "react";
import Galaxygon from "../../../context/context";

const Craft = ({ craftInfo, route, claim }) => {
  const { diamond, signer, setFleetClaim, setBuildingClaim, planetToCheck } =
    useContext(Galaxygon);

  const checkRoute = async () => {
    if (route === "buildings") {
      await diamond.craftBuilding(craftInfo.id, planetToCheck);
    }
    if (route === "fleet") {
      await diamond.craftFleet(craftInfo.id, planetToCheck);
    }
  };

  const claimer = async () => {
    if (route === "buildings") {
      await diamond.claimBuilding(planetToCheck);
      setBuildingClaim(false);
    }
    if (route === "fleet") {
      await diamond.claimFleet(planetToCheck);
      setFleetClaim(false);
    }
  };

  const checkBtn = () => {
    if (signer) {
      if (!claim) {
        return (
          <div
            onClick={checkRoute}
            className="bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan uppercase text-center text-white text-xl font-semibold font-orbitron py-3 w-full rounded-xl cursor-pointer hover:opacity-90"
          >
            Confirm
          </div>
        );
      } else {
        return (
          <div
            onClick={claimer}
            className="bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan uppercase text-center text-white text-xl font-semibold font-orbitron py-3 w-full rounded-xl cursor-pointer hover:opacity-90"
          >
            Claim your {route === "fleet" ? "ship" : "building"}
          </div>
        );
      }
    } else {
      return <div className="text-center text-3xl">Connect or register</div>;
    }
  };

  return (
    <div className="h-full w-full flex flex-col gap-6 justify-around bg-brand-darkestBlue rounded-2xl px-10 py-6">
      {!claim && (
        <div className="text-4xl text-center font-bold font-audiowide text-brand-lightBlue uppercase">
          {craftInfo?.name}
        </div>
      )}
      <div className="rounded-xl w-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
        <img
          src={!claim ? craftInfo?.img : "/brand/claim-chest.png"}
          className="rounded-xl"
        />
      </div>
      <div className="w-full flex items-center justify-around">
        {!claim &&
          craftInfo?.prices.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-10 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
                <div className="w-full rounded-full bg-brand-darkestBlue flex items-center justify-center">
                  <img src={p.img} />
                </div>
              </div>
              <div>{p.value}</div>
            </div>
          ))}

        {!claim && (
          <div className="flex items-center gap-2">
            <div className="w-10 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
              <div className="w-full rounded-full bg-gray-200 flex items-center justify-center">
                <img src="/brand/time.png" />
              </div>
            </div>
            <div>{moment.utc(craftInfo?.time * 1000).format("H[h] mm[m]")}</div>
          </div>
        )}
      </div>
      {checkBtn()}
    </div>
  );
};

export default Craft;
