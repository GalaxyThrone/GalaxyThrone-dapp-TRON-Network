const Crafting = ({ setShowCraft }) => {
  return (
    <div className="h-full w-full flex flex-col gap-6 justify-around bg-brand-darkestBlue rounded-2xl px-10 py-6">
      <div className="text-3xl text-center font-bold font-audiowide text-brand-lightBlue uppercase">
        Your Shipyard is already crafting
      </div>
      <div className="rounded-xl w-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
        <img src="/brand/futuristic.gif" className="rounded-xl" />
      </div>
      <div className="text-2xl text-center">Please wait</div>
      <div
        onClick={() => setShowCraft(false)}
        className="bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan uppercase text-center text-white text-xl font-semibold font-orbitron py-3 w-full rounded-xl cursor-pointer hover:opacity-90"
      >
        Go Back
      </div>
    </div>
  );
};

export default Crafting;
