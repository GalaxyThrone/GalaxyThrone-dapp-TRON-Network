import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Galaxygon from "../../context/context";
import { resources } from "../../lib/resource";

const Item = ({ category }) => {
  const { userMetal, userCrystal, userEthereus, userPlanetsIds, diamond } =
    useContext(Galaxygon);
  const [value, setValue] = useState(null);

  const router = useRouter();

  const rootSplit = router.asPath.split("/");
  const rootPath = rootSplit[0].toLowerCase();

  // change userPlanetsIds to find the correct one
  const claim = async () => {
    if (category === "metal") {
      await diamond.mineMetal(userPlanetsIds[0]);
    }
    if (category === "crystal") {
      await diamond.mineCrystal(userPlanetsIds[0]);
    }
    if (category === "ethereus") {
      await diamond.mineEthereus(userPlanetsIds[0]);
    }
  };

  useEffect(() => {
    if (userMetal && userCrystal && userEthereus) {
      const checkBalance = () => {
        if (category === "metal") {
          setValue(userMetal);
        }
        if (category === "crystal") {
          setValue(userCrystal);
        }
        if (category === "ethereus") {
          setValue(userEthereus);
        }
      };
      checkBalance();
    }
  }, [userMetal, userCrystal, userEthereus, category]);

  return (
    <div className="flex flex-col">
      <div className="flex gap-6 items-start">
        <div className="w-1/2 2xl:w-3/5 rounded-xl p-0.5 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
          <img src={resources[category]?.img} className="w-full rounded-xl" />
        </div>
        <div className="w-1/2 2xl:w-2/5 text-center">
          <div className="text-3xl 2xl:text-4xl font-bold font-audiowide text-brand-lightBlue uppercase">
            {resources[category]?.title}
          </div>
          <div className="uppercase text-2xl 2xl:text-3xl mt-2">
            {resources[category]?.subtitle}
          </div>
          <div className="text-lg 2xl:text-xl mt-5 2xl:mt-8">
            {resources[category]?.desc}
          </div>
          {value && (
            <div className="text-lg 2xl:text-xl mt-2">
              <span className="text-brand-lightCyan">Your balance:</span>{" "}
              {value}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
