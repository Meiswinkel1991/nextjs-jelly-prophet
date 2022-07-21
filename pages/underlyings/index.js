import Image from "next/image";
import Link from "next/link";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect, useState } from "react";
import { optionManagerAbi, contractAddresses } from "../../constants";

export default function Underlyings() {
  // this variable set to true if the connected wallet is the owner of the managerContract
  const [owner, setOwner] = useState(false);
  // only chains with deployed contracts are permitted
  const [permittedChain, setPermittedChain] = useState(false);

  const { chainId: chainIdHex, isWeb3Enabled, account } = useMoralis();

  const { runContractFunction, isLoading, isFetching } = useWeb3Contract();

  //view functions
  const getOwner = async (chainId) => {
    const managerOptionAddress =
      chainId in contractAddresses
        ? contractAddresses[chainId]["optionManager"]
        : null;

    const options = {
      abi: optionManagerAbi,
      contractAddress: managerOptionAddress,
      functionName: "owner",
    };

    if (managerOptionAddress) {
      const _owner = await runContractFunction({
        params: options,
        onError: (error) => console.log(error),
      });

      //check if the actual account is the owner of the manager contract
      //only the owner can create a new price prediction
      if (_owner.toLowerCase() === account) {
        setOwner(true);
      } else {
        setOwner(false);
      }
    }
  };

  useEffect(() => {
    if (isWeb3Enabled) {
      const chainId = parseInt(chainIdHex);
      if (chainId in contractAddresses) {
        setPermittedChain(true);
        getOwner(chainId);
      } else {
        setPermittedChain(false);
      }
    }
  }, [isWeb3Enabled, chainIdHex]);

  return (
    <div className="conttainer ml-8 mt-12">
      <div className="shadow-lg rounded-lg bg-secondary  px-4 text-white">
        {permittedChain ? (
          <>
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                  <h3 className="font-semibold text-lg text-white">
                    Price Predictions
                  </h3>
                </div>
                {owner ? (
                  <Link href="/underlyings/create">
                    <button className="rounded-xl  bg-btngrey border-2 border-primary  hover:bg-primary hover:border-white text-white px-4 py-2 duration-300 ">
                      New Price Prediction
                    </button>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="block w-full overflow-x-auto ">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-jellygrey text-primary border-jellypink">
                      Underlying
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-jellygrey text-primary border-jellypink">
                      Active Predictions
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-jellygrey text-primary border-jellypink">
                      Expired Predictions
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-jellygrey text-primary border-jellypink">
                      Total Value Locked
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-jellygrey text-primary border-jellypink">
                      Total Value Cashed Out
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-jellygrey text-primary border-jellypink">
                      Details
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-jellygrey text-primary border-jellypink"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <Image src="/crypto/eth.svg" width="30" height="30" />
                      <span className="ml-3 font-bold text-white">
                        {" "}
                        Ethereum
                      </span>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      205
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      10
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      1004 ETH
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      1004 ETH
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button className="rounded-xl  bg-btngrey border-2 border-primary  hover:bg-primary hover:border-white text-white px-4 py-2 duration-300 ">
                        Show All
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <h3 className="font-semibold text-lg text-white">
            Choose another Network!
          </h3>
        )}
      </div>
    </div>
  );
}
