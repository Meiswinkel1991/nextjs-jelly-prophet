import { useEffect } from "react";
import { useNotification } from "web3uikit";
import {
  optionManagerAbi,
  optionTokenAbi,
  optionTokenFactoryAbi,
  contractAddresses,
  priceFeedAddresses,
} from "../constants";
import { useMoralis, useWeb3Contract } from "react-moralis";

const UNDERLYINGS = ["ETH"];

const CreatePrediciton = () => {
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const priceFeeds =
    chainId in priceFeedAddresses ? priceFeedAddresses[chainId] : null;

  useEffect(() => {
    if (isWeb3Enabled) {
      console.log(chainId);
    }
  }, [isWeb3Enabled]);

  return (
    <div className="container mt-8 ml-8 shadow-lg rounded-lg bg-white w-3/4 px-4 ">
      <h1 className="text-2xl font-bold mt-4 text-blue-500">
        Create new Price Prediction Contract
      </h1>
      <form className="mt-8">
        <input
          className="bg-gray-200 shadow-inner rounded-l p-2 mb-4"
          id="email"
          type="email"
          aria-label="email address"
          placeholder="Enter your email address"
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r mb-4"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default CreatePrediciton;
