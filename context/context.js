import { createContext, useEffect, useState } from "react";
import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import { ethers } from "ethers";
import {
  BUILDINGS_ADDRESS,
  CRYSTAL_ADDRESS,
  DIAMOND_ADDRESS,
  ETHEREUS_ADDRESS,
  FLEETS_ADDRESS,
  METAL_ADDRESS,
  PLANETS_ADDRESS,
} from "../lib/contracts/contracts";
import abi from "../lib/contracts/diamondABI.json";
import buildingsABI from "../lib/contracts/Buildings.json";
import crystalABI from "../lib/contracts/Crystal.json";
import ethereusABI from "../lib/contracts/Ethereus.json";
import fleetsABI from "../lib/contracts/Fleets.json";
import metalABI from "../lib/contracts/Metal.json";
import planetsABI from "../lib/contracts/Planets.json";

const rpcUrl =
  "https://polygon-mumbai.g.alchemy.com/v2/SeyWmSZubocxNcqaWaiR--xe00RiT1ig";
const injected = injectedModule();

init({
  wallets: [injected],
  chains: [
    {
      id: "0x80001",
      token: "MATIC",
      label: "Polygon Mumbai",
      rpcUrl,
    },
  ],
  accountCenter: {
    desktop: {
      enabled: false,
    },
  },
});

const Galaxygon = createContext();

export const GalaxygonProvider = ({ children }) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [mumbaiProvider, setMumbaiProvider] = useState(null);
  const [diamond, setDiamond] = useState(null);
  const [metalContract, setMetalContract] = useState(null);
  const [crystalContract, setCrystalContract] = useState(null);
  const [ethereusContract, setEthereusContract] = useState(null);
  const [planetsContract, setPlanetsContract] = useState(null);
  const [buildingsContract, setBuildingsContract] = useState(null);
  const [fleetsContract, setFleetContract] = useState(null);
  const [isRegistered, setIsRegistered] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [balanceOf, setBalanceOf] = useState(null);
  const [userPlanetsIds, setUserPlanetsIds] = useState([]);
  const [planetsTotalSupply, setPlanetsTotalSupply] = useState(null);
  const [planetsInfo, setPlanetsInfo] = useState([]);

  useEffect(() => {
    const mProvider = new ethers.providers.JsonRpcProvider(rpcUrl);
    setMumbaiProvider(mProvider);
  }, []);

  useEffect(() => {
    if (wallet) {
      const connectedWallets = wallet.label;
      window.localStorage.setItem(
        "connectedWallets",
        JSON.stringify(connectedWallets)
      );

      setProvider(new ethers.providers.Web3Provider(wallet.provider, "any"));

      setUserAddress(wallet.accounts[0].address);
    }
  }, [wallet]);

  useEffect(() => {
    if (provider) {
      setSigner(provider.getSigner());
    }
  }, [provider]);

  useEffect(() => {
    if (signer || provider || mumbaiProvider) {
      setDiamond(
        new ethers.Contract(
          DIAMOND_ADDRESS,
          abi,
          signer || provider || mumbaiProvider
        )
      );
      setMetalContract(
        new ethers.Contract(
          METAL_ADDRESS,
          metalABI.abi,
          signer || provider || mumbaiProvider
        )
      );
      setCrystalContract(
        new ethers.Contract(
          CRYSTAL_ADDRESS,
          crystalABI.abi,
          signer || provider || mumbaiProvider
        )
      );
      setEthereusContract(
        new ethers.Contract(
          ETHEREUS_ADDRESS,
          ethereusABI.abi,
          signer || provider || mumbaiProvider
        )
      );
      setPlanetsContract(
        new ethers.Contract(
          PLANETS_ADDRESS,
          planetsABI.abi,
          signer || provider || mumbaiProvider
        )
      );
      setBuildingsContract(
        new ethers.Contract(
          BUILDINGS_ADDRESS,
          buildingsABI.abi,
          signer || provider || mumbaiProvider
        )
      );
      setFleetContract(
        new ethers.Contract(
          FLEETS_ADDRESS,
          fleetsABI.abi,
          signer || provider || mumbaiProvider
        )
      );
    }
  }, [provider, signer, mumbaiProvider]);

  useEffect(() => {
    if (diamond && userAddress) {
      const getRegistered = async () => {
        const registered = await diamond.getRegistered(userAddress);
        setIsRegistered(registered);
      };
      getRegistered();
    }
  }, [diamond, userAddress]);

  useEffect(() => {
    if (isRegistered && planetsContract && userAddress) {
      const getBalanceOf = async () => {
        const balanceOf = await planetsContract.balanceOf(userAddress);
        setBalanceOf(balanceOf);
      };
      getBalanceOf();

      const getTotalSupply = async () => {
        const totalSupp = await planetsContract.totalSupply();
        setPlanetsTotalSupply(parseInt(ethers.utils.formatUnits(totalSupp, 0)));
      };
      getTotalSupply();
    }
  }, [isRegistered, planetsContract, userAddress]);

  useEffect(() => {
    if (balanceOf) {
      const getIds = async () => {
        let ids = [];
        for (let i = 0; i < balanceOf; i++) {
          const id = await planetsContract.tokenOfOwnerByIndex(userAddress, i);
          ids.push(parseInt(ethers.utils.formatUnits(id, 0)));
        }
        setUserPlanetsIds(ids);
      };
      getIds();
    }
  }, [balanceOf]);

  useEffect(() => {
    if (planetsTotalSupply) {
      const getPlanetInfo = async () => {
        let planets = [];
        for (let i = 1; i <= planetsTotalSupply; i++) {
          const planet = await planetsContract.planets(i);
          planets.push(planet);
        }
        setPlanetsInfo(planets);
      };
      getPlanetInfo();
    }
  }, [planetsTotalSupply]);

  return (
    <Galaxygon.Provider
      value={{
        connect,
        wallet,
        signer,
        provider,
        mumbaiProvider,
        diamond,
        metalContract,
        crystalContract,
        ethereusContract,
        planetsContract,
        buildingsContract,
        fleetsContract,
        isRegistered,
        userAddress,
        setIsRegistered,
        userPlanetsIds,
        planetsInfo,
      }}
    >
      {children}
    </Galaxygon.Provider>
  );
};

export default Galaxygon;
