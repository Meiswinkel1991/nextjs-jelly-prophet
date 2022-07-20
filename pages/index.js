import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { optionManagerAbi, contractAddresses } from "../constants";

// import styles from "../styles/Home.module.css";

export default function Home() {
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);

  const managerContractAddress =
    chainId in contractAddresses
      ? contractAddresses[chainId]["optionManager"]
      : null;

  const getOptions = async () => {};

  useEffect(() => {
    if (chainId in contractAddresses) {
    }
  }, [isWeb3Enabled]);

  return (
    <div className="container ml-8 mt-12">
      <h1 className="text-4xl font-bold text-white my-8">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="shadow-lg rounded-lg bg-secondary  px-4 text-white">
          <h1 className="pt-8 font-semibold text-xl">Available Underlyings</h1>
          <div className="grid grid-cols-5 gap-2 border-b border-jellygrey">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
