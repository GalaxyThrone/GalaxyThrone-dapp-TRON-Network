import Link from "next/link";
import { useContext } from "react";
import Galaxygon from "../context/context";

const Home = () => {
  const { connect, wallet, diamond, isRegistered, setIsRegistered } =
    useContext(Galaxygon);

  const register = async () => {
    const tx = await diamond.register();
    const recipt = await tx.wait();

    if (Number(recipt.status) === 1) {
      setIsRegistered(true);
    }
  };

  const checkWallet = () => {
    if (!wallet) {
      return (
        <div
          onClick={() => connect()}
          className="bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan mt-10 uppercase text-center text-white text-xl font-semibold font-orbitron py-3 w-full rounded-xl cursor-pointer hover:opacity-90"
        >
          Connect your wallet
        </div>
      );
    } else if (!isRegistered) {
      return (
        <div
          onClick={register}
          className="bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan mt-10 uppercase text-center text-white text-xl font-semibold font-orbitron py-3 w-full rounded-xl cursor-pointer hover:opacity-90"
        >
          Register
        </div>
      );
    } else {
      return (
        <Link href="/home">
          <div className="bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan mt-10 uppercase text-center text-white text-xl font-semibold font-orbitron py-3 w-full rounded-xl cursor-pointer hover:opacity-90">
            Enter
          </div>
        </Link>
      );
    }
  };

  return (
    <div className="bg-[url('/brand/Untitled.png')] bg-cover bg-no-repeat bg-[#4D4D4D] bg-blend-overlay w-full h-full flex items-center justify-center">
      <div className="w-1/2 2xl:w-1/3 rounded-2xl shadow-slide bg-brand-mediumBlue text-white px-16 pb-12 py-10">
        <div className="text-4xl text-center font-bold font-orbitron">
          Welcome to Galaxygon
        </div>
        <div className="mt-6 text-xl font-teko tracking-wider">
          The new era of{" "}
          <span className="font-bold text-brand-lightCyan">Web3 gaming</span>,
          set in a futuristic galaxy! Claim your planet, collect{" "}
          <span className="font-bold text-brand-lightCyan">NFTs</span> and{" "}
          <span className="font-bold text-brand-lightCyan">ERC20</span> tokens,
          craft your fleet and be ready to conquer and defend your galactic
          empire. <br />
          You are just few steps away to become one of the most powerful star
          realms!
        </div>
        {checkWallet()}
      </div>
    </div>
  );
};

export default Home;
