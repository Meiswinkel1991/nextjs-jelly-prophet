import { useEffect, useState } from "react";
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
  const [managerContractAddress, setManagerContractAddress] = useState("");

  const [maxDelta, setMaxDelta] = useState("0");
  const [duration, setDuration] = useState("0");
  const [priceFeedAddress, setPriceFeedAddress] = useState("0x");

  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const priceFeeds =
    chainId in priceFeedAddresses ? priceFeedAddresses[chainId] : null;

  // Contract Functions

  const {
    runContractFunction: createOption,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi: optionManagerAbi,
    functionName: "createOption",
    contractAddress: managerContractAddress,
    params: { maxDelta, duration, priceFeedAddress },
  });

  const updateUi = () => {};

  useEffect(() => {
    if (isWeb3Enabled) {
      console.log(chainId);
      updateUi();
    }
  }, [isWeb3Enabled]);

  return (
    <div className="container mt-8 ml-8 shadow-lg rounded-lg bg-white w-3/4 px-4 ">
      <h1 className="text-2xl font-bold mt-4 text-blue-500">
        Create new Price Prediction Contract
      </h1>
      <form className="mt-8 flex flex-col w-1/2 mr-auto">
        <div className="flex ">
          <label className="text-blue-500 mr-4 text-xl font-semibold w-1/2">
            Prediction Duration
          </label>
          <input
            className="bg-gray-200 shadow-inner rounded-l p-2 mb-4"
            placeholder="Enter the duration of the prediction"
            onChange={(event) => setDuration(event.target.value)}
            value={duration}
          />
        </div>
        <div className="flex">
          <label className="text-blue-500 mr-4 text-xl font-semibold w-1/2">
            Maximum Delta
          </label>
          <input
            className="bg-gray-200 shadow-inner rounded-l p-2 mb-4"
            placeholder="Enter the duration of the prediction"
            value={maxDelta}
            onChange={(event) => setMaxDelta(event.target.value)}
          />
        </div>

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
