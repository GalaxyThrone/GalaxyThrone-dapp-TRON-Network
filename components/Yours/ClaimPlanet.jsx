const ClaimPlanet = ({ info }) => {
  const { claim, i, setOpen, open, planetIds, userPlanetsIds, setPlanetIds } =
    info;

  return (
    <div>
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
                  className={`flex items-center gap-5 ${j !== 0 && "border-b"}`}
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
  );
};

export default ClaimPlanet;
