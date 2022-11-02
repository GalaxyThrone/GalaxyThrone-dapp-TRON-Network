const ResourceDisplay = ({ resource, i }) => {
  return (
    <div className="bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan p-0.5 rounded-lg">
      <div className="flex items-center gap-1 bg-white opacity-70 rounded-lg">
        <div className="w-8 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
          <div className="w-full rounded-full bg-brand-darkestBlue flex items-center justify-center">
            <img
              src={
                i == 0
                  ? "/brand/metal-icon.png"
                  : i == 1
                  ? "/brand/crystal-icon.png"
                  : "/brand/eth.png"
              }
            />
          </div>
        </div>
        <div className="pr-2">{resource}</div>
      </div>
    </div>
  );
};

export default ResourceDisplay;
