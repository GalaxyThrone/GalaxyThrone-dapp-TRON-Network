import InnerLayout from "../components/_shared/InnerLayout";

const Home = () => {
  return (
    <InnerLayout>
      <div className="h-full w-full flex-col scroll-smooth overflow-auto">
        <div className="flex h-full gap-6 items-start">
          <div className="relative w-3/5 2xl:w-2/3">
            <div className="w-1/2 absolute top-0 left-0 rounded-xl p-0.5 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
              <img src="/brand/city/city.png" className="w-full rounded-xl" />
            </div>
            <div className="w-1/2 absolute top-5 right-10 2xl:right-5 rounded-xl p-0.5 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
              <img src="/brand/war-scene.png" className="w-full rounded-xl" />
            </div>
            <div className="w-1/2 absolute top-36 2xl:top-52 left-5 rounded-xl p-0.5 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
              <img src="/brand/war-scene1.png" className="w-full rounded-xl" />
            </div>
            <div className="w-1/2 absolute top-40 2xl:top-60 right-5 2xl:right-0 rounded-xl p-0.5 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
              <img src="/brand/city/city3.png" className="w-full rounded-xl" />
            </div>
          </div>
          <div className="w-1/3 h-full 2xl:w-1/3 text-center flex flex-col justify-between 2xl:justify-center gap-28">
            <div className="h-2/5">
              <div className="text-4xl font-bold font-audiowide text-brand-lightBlue uppercase">
                GALAXYGON
              </div>
              <div className="uppercase text-3xl mt-2">
                A NEW ERA OF WEB3 GAMING
              </div>
              <div className="text-2xl mt-8 uppercase text-2xl">
                <ul>
                  <li>claim your planet</li>
                  <li>build your fleet</li>
                  <li>make alliances</li>
                  <li>defend your galactic empire</li>
                </ul>
              </div>
            </div>
            <div className="text-lg h-1/5">
              all of it using the best of the web3 space technologies, that will
              let you gain{" "}
              <span className="fond-bold text-brand-lightCyan">NFTs</span> and{" "}
              <span className="fond-bold text-brand-lightCyan">ERC20</span>{" "}
              tokens
            </div>
          </div>
        </div>
      </div>
    </InnerLayout>
  );
};

export default Home;
