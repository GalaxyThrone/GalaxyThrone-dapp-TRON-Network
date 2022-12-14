import { ethers } from "ethers";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import InnerLayout from "../../../../components/_shared/InnerLayout";
import Galaxygon from "../../../../context/context";
import { buildingsList } from "../../../../lib/buildings";
import { allPlanets } from "../../../../lib/planets";
import { fleetList } from "../../../../lib/ships";

const App = () => {
  const router = useRouter();
  const { planetsInfo, planetsContract } = useContext(Galaxygon);

  const [planetBuildings, setPlanetBuildings] = useState(null);
  const [planetFleet, setPlanetFleet] = useState(null);
  const [category, setCategory] = useState(null);
  const [id, setId] = useState(null);
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (router.query.category && router.query.id) {
      setCategory(router.query.category);
      setId(router.query.id.toLowerCase());
    }
  }, [router.query]);

  useEffect(() => {
    if (id && category) {
      setItem(allPlanets[Number(id) - 1]);
    }
  }, [category, id]);

  useEffect(() => {
    if (planetsContract && id) {
      const checkBuildings = async () => {
        const amounts = [];

        for (let i = 1; i < 8; i++) {
          const idToAmount = await planetsContract.getBuildings(id, i);
          amounts.push(parseInt(ethers.utils.formatUnits(idToAmount, 0)));
        }

        setPlanetBuildings(amounts);
      };

      const checkFleet = async () => {
        const amounts = [];

        for (let i = 1; i < 10; i++) {
          const idToAmount = await planetsContract.fleets(id, i);
          amounts.push(parseInt(ethers.utils.formatUnits(idToAmount, 0)));
        }

        setPlanetFleet(amounts);
      };

      checkBuildings();
      checkFleet();
    }
  }, [planetsContract, id]);

  return (
    <InnerLayout>
      <div className="h-full flex flex-col overflow-auto gap-6">
        <div className="flex gap-6 items-start">
          <div className="w-1/2 2xl:w-3/5 rounded-xl p-0.5 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
            <img src={item?.img} className="w-full rounded-xl" />
          </div>
          <div className="w-1/2 2xl:w-2/5 h-full text-center flex flex-col justify-between">
            <div>
              <Link href={`/yours/${category}`}>
                <div className="flex items-center justify-center text-4xl font-bold font-audiowide text-brand-lightBlue uppercase cursor-pointer hover:opacity-80 relative">
                  <div className="absolute left-0">{"<"}</div>
                  <div>{item?.name}</div>
                </div>
              </Link>

              <div className="text-2xl mt-2">
                Owner: <span className="text-brand-lightCyan">Your Planet</span>
              </div>

              <div className="text-xl mt-8">{item?.desc}</div>
            </div>

            {planetsInfo.map((p, i) => {
              if (i + 1 == item?.name) {
                return (
                  <div key={i} className="flex flex-col">
                    <div className="flex items-center justify-between mb-14 w-3/4 self-center">
                      <div className="flex items-center gap-2">
                        <div className="w-10 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
                          <div className="w-full rounded-full bg-brand-darkestBlue flex items-center justify-center">
                            <img src="/brand/metal-icon.png" />
                          </div>
                        </div>
                        <div>{parseInt(ethers.utils.formatUnits(p.metal))}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-10 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
                          <div className="w-full rounded-full bg-brand-darkestBlue flex items-center justify-center">
                            <img src="/brand/crystal-icon.png" />
                          </div>
                        </div>
                        <div>
                          {parseInt(ethers.utils.formatUnits(p.crystal))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-10 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
                          <div className="w-full rounded-full bg-brand-darkestBlue flex items-center justify-center">
                            <img src="/brand/eth.png" />
                          </div>
                        </div>
                        <div>
                          {parseInt(ethers.utils.formatUnits(p.ethereus))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 self-end">
                      <div>X: {ethers.utils.formatUnits(p.coordinateX, 0)}</div>
                      <div>Y: {ethers.utils.formatUnits(p.coordinateY, 0)}</div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="flex gap-6 items-start">
          <div className="w-1/2 flex flex-col gap-4">
            <div className="font-orbitron text-2xl">Planet Buldings: </div>
            {buildingsList.map((b, i) => (
              <div key={i} className="flex items-center gap-5">
                <img src={b.img} className="w-16" />
                <div className="uppercase text-2xl w-40">{b.name}</div>
                <div className="uppercase text-2xl">
                  {planetBuildings ? planetBuildings[i] : 0}
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <div className="font-orbitron text-2xl">Planet Fleet: </div>
            {fleetList.map((f, i) => (
              <div key={i} className="flex items-center gap-5">
                <img src={f.img} className="w-16" />
                <div className="uppercase text-2xl w-40">{f.name}</div>
                <div className="uppercase text-2xl">
                  {planetFleet ? planetFleet[i] : 0}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </InnerLayout>
  );
};

export default App;
