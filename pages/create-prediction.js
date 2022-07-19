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
      <form className="mt-8 flex flex-col w-1/2 mr-auto">
        <input
          className="bg-gray-200 shadow-inner rounded-l p-2 mb-4"
          id="email"
          type="email"
          aria-label="email address"
          placeholder="Enter your email address"
        />
        <button
          className="rounded-xl w-1/2 mb-8 bg-blue-500 border-2 border-blue-500 hover:bg-white hover:text-blue-500 text-white px-4 py-2 duration-300"
          type="submit"
        >
          Create Price Prediction
        </button>
      </form>
    </div>
  );
};

export default CreatePrediciton;
