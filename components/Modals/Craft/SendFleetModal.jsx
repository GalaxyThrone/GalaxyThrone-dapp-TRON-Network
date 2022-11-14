import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import Galaxygon from "../../../context/context";
import { fleetList } from "../../../lib/ships";

const SendFleetModal = ({ showModal, setShowModal, vesusPlanetId }) => {
  const { planetsContract, planetToCheck, diamond } = useContext(Galaxygon);

  const [planetFleet, setPlanetFleet] = useState(null);
  const [toSend, setToSend] = useState([]);

  const send = async () => {
    await diamond.craftFleet(1, planetToCheck);
  };

  useEffect(() => {
    if (planetsContract && planetToCheck) {
      const checkFleet = async () => {
        const amounts = [];

        for (let i = 1; i < 10; i++) {
          const idToAmount = await planetsContract.fleets(planetToCheck, i);
          amounts.push(parseInt(ethers.utils.formatUnits(idToAmount, 0)));
        }

        setPlanetFleet(amounts);
      };

      checkFleet();
    }
  }, [planetsContract, planetToCheck]);

  return (
    <div
      className={`${
        showModal ? "" : "hidden"
      } flex items-center justify-center cursor-pointer bg-brand-modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full`}
    >
      <div className="relative h-auto w-5/6 flex justify-center">
        <div className="w-3/5 rounded-2xl p-1 min-h-[300px] bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
          <div className="h-full w-full flex flex-col gap-6 justify-between bg-brand-darkestBlue rounded-2xl px-10 py-6">
            <div className="font-orbitron text-2xl">Planet Fleet: </div>
            <div className="grid grid-cols-2 gap-4">
              {fleetList.map((f, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-5 ${
                    planetFleet && planetFleet[i] === 0 && "hidden"
                  }`}
                >
                  <img src={f.img} className="w-16" />
                  <div className="uppercase text-2xl w-40">{f.name}</div>
                  <div className="uppercase text-2xl">
                    {planetFleet ? planetFleet[i] : 0}
                  </div>
                  <input
                    onChange={(e) => {
                      if (
                        e.target.value >= 0 &&
                        e.target.value <= planetFleet[i]
                      )
                        setToSend([
                          ...toSend,
                          { id: fleetList[i], amount: e.target.value },
                        ]);
                    }}
                    type="number"
                    placeholder="0"
                    className="w-20 p-2 text-xl text-black rounded-lg outline-none"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-8">
              <div
                onClick={() => setShowModal(!showModal)}
                className="w-1/2 bg-gradient-to-tr from-red-500 to-red-800 uppercase text-2xl text-white text-center font-semibold px-6 py-2 rounded-xl cursor-pointer hover:opacity-90"
              >
                Go back
              </div>
              <div
                onClick={send}
                className="w-1/2 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan uppercase text-2xl text-white text-center font-semibold px-6 py-2 rounded-xl cursor-pointer hover:opacity-90"
              >
                Send Fleet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendFleetModal;
