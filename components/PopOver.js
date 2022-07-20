// import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Image from "next/image";

const solutions = [
  {
    name: "BTCUSD",
    icon: "/crypto/btc.svg",
    symbol: "BTC",
  },
  {
    name: "ETHUSD",
    icon: "/crypto/eth.svg",
    symbol: "ETH",
  },
];

export default function PopOver(props) {
  const { setActiveUnderlying, activeUnderlying } = props;

  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("");

  const handleUnderlyingSelect = (item) => {
    const newSymbol = item.symbol;
    setActiveUnderlying(newSymbol);
    setOpen(!open);
    setIcon(item.icon);
  };

  return (
    <div className=" w-full mb-4 ">
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className={`
                ${open ? "" : "text-opacity-90"}
                group w-48 inline-flex items-center rounded-md bg-primary px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          {activeUnderlying != "" ? (
            <div>
              <span>{activeUnderlying}</span> <Image src={icon} layout="fill" />
            </div>
          ) : (
            <span>Underlying</span>
          )}
        </button>
        {open ? (
          <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                {solutions.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleUnderlyingSelect(item)}
                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"></div>
                    <Image src={item.icon} width="50" height="50" />
                    <p className="ml-4 text-sm font-medium text-gray-900">
                      {item.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
