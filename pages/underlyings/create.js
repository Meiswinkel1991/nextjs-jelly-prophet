import { useEffect, useState } from "react";
import { useNotification } from "web3uikit";
import {
  optionManagerAbi,
  optionTokenAbi,
  optionTokenFactoryAbi,
  contractAddresses,
  priceFeedAddresses,
} from "../../constants";

import { useMoralis, useWeb3Contract } from "react-moralis";

import PopOver from "../../components/PopOver";

const CreatePrediciton = () => {
  const [managerContractAddress, setManagerContractAddress] = useState("");

  const [maxDelta, setMaxDelta] = useState("0");
  const [duration, setDuration] = useState("0");
  const [priceFeedAddress, setPriceFeedAddress] = useState("0x");
  const [activeUnderlying, setActiveUnderlying] = useState("");
  const [acceptedChain, setAcceptedChain] = useState(false);

  //Moralis Hooks

  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const priceFeeds =
    chainId in priceFeedAddresses ? priceFeedAddresses[chainId] : null;

  const dispatch = useNotification();

  // Contract Functions

  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();

  const handleCreatePrediction = async () => {
    const options = {
      abi: optionManagerAbi,
      contractAddress: managerContractAddress,
      functionName: "createOption",
      params: { maxDelta, duration, priceFeedAddress },
    };
    await runContractFunction({
      params: options,
      onSuccess: handleSuccess,
      onError: (error) => console.log(error),
    });
  };

  const updateUi = () => {
    if (chainId in contractAddresses) {
      const _acceptedChain = true;
      setAcceptedChain(_acceptedChain);
    } else {
      const _acceptedChain = false;
      setAcceptedChain(_acceptedChain);
    }
    getOwner();
  };

  //contract view functions
  const getOwner = async () => {
    const newContractAddress = contractAddresses[chainId]["optionManager"];

    setManagerContractAddress(newContractAddress);

    const options = {
      abi: optionManagerAbi,
      contractAddress: managerContractAddress,
      functionName: "owner",
    };

    const owner = await runContractFunction({
      params: options,
      onError: (error) => console.log(error),
    });
    console.log("the owner is:", owner);
  };

  useEffect(() => {
    if (isWeb3Enabled) {
      const newPriceFeedAddress = priceFeeds[activeUnderlying];
      const newContractAddress = contractAddresses[chainId]["optionManager"];
      setPriceFeedAddress(newPriceFeedAddress);
      setManagerContractAddress(newContractAddress);
      updateUi();

      console.log("price feed:", priceFeedAddress);
      console.log("manager Contract:", managerContractAddress);
    }
  }, [isWeb3Enabled, chainIdHex]);

  const handleSuccess = async (tx) => {
    await tx.wait(1);
    handleNewNotification(tx);
  };

  const handleNewNotification = () => {
    dispatch({
      type: "info",
      message: "Transaction complete!",
      title: "Tx Notification",
      position: "topR",
      icon: "bell",
    });
  };

  return (
    <div className="mx-auto w-1/4 mt-8">
      <div className=" shadow-lg rounded-lg bg-secondary  px-4 ">
        {acceptedChain ? (
          <div className="mt-8 w-3/4 mx-auto">
            <h1 className="text-2xl font-bold pt-4 text-white mb-8">
              New Price Prediction
            </h1>
            <PopOver
              setActiveUnderlying={setActiveUnderlying}
              activeUnderlying={activeUnderlying}
            />
            <div className="text-lg ">
              <label className="text-white mr-4 ">Prediction Duration</label>
              <input
                className="bg-jellygrey shadow-inner rounded-lg p-2 mb-4"
                placeholder="Enter the duration of the prediction"
                onChange={(event) => setDuration(event.target.value)}
                value={duration}
              />
            </div>
            <div className="">
              <label className="text-white mr-4 ">Maximum Delta</label>
              <input
                className="bg-jellygrey shadow-inner rounded-lg p-2 mb-4"
                placeholder="Enter the duration of the prediction"
                value={maxDelta}
                onChange={(event) => setMaxDelta(event.target.value)}
              />
            </div>

            <button
              onClick={async () => {
                handleCreatePrediction();
              }}
              className="rounded-xl  mb-4 bg-btngrey border-2 border-primary  hover:bg-primary hover:border-white text-white px-4 py-2 duration-300"
            >
              Create Price Prediction
            </button>
          </div>
        ) : (
          <div className="mt-8 w-3/4 mx-auto">
            <h1 className="text-xl font-bold pt-4 text-white mb-8 pb-8">
              Please choose the right Network!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePrediciton;
