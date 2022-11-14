import { useContext, useState } from "react";
import Galaxygon from "../../context/context";

const PlanetsDropdown = () => {
  const { userPlanetsIds, setPlanetToCheck } = useContext(Galaxygon);
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);

  return (
    <div className="w-28">
      <div
        onClick={() => setOpen(!open)}
        className={`relative w-full p-2 py-1 text-center text-gray-700 bg-white border ${
          open ? "rounded-t-lg" : "rounded-lg"
        } shadow-sm cursor-pointer`}
      >
        <div className="flex items-center gap-5">
          <img
            src={`/brand/planets/${userPlanetsIds[i]}.png`}
            className="w-10 rounded"
          />
          <div>{userPlanetsIds[i]}</div>
        </div>
        <div
          className={`w-[calc(100%+2px)] absolute left-[-1px] top-[35px] z-[100] ${
            open ? "block" : "hidden"
          } p-2.5 py-1 text-gray-500 bg-white border rounded-b-lg shadow-sm`}
        >
          {userPlanetsIds.map((id, j) => (
            <div
              onClick={() => {
                setPlanetToCheck(id);
                setI(j);
              }}
              key={j}
              className={`flex items-center gap-5 ${j !== 0 && "border-b"}`}
            >
              <img src={`/brand/planets/${id}.png`} className="w-10 rounded" />
              <div>{id}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanetsDropdown;
