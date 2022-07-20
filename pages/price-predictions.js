import Image from "next/image";
import { GoPrimitiveDot } from "react-icons/go";

export default function PricePredictions() {
  return (
    <div className="conttainer ml-8 mt-12">
      <div className="shadow-lg rounded-lg bg-secondary  px-4 text-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
              <h3 className="font-semibold text-lg text-white">
                Price Predictions
              </h3>
            </div>
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
                  Status
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-jellygrey text-primary border-jellypink">
                  TVL
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-jellygrey text-primary border-jellypink">
                  Completion
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
                  <span className="ml-3 font-bold text-white"> Ethereum</span>
                </td>
                <td>
                  <GoPrimitiveDot />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
