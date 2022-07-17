import { useEffect, useState } from "react";

import PredictionCard from "../components/PredictionCard";

import { useMoralis } from "react-moralis";

// import styles from "../styles/Home.module.css";

export default function Home() {
  const { isWeb3Enabled } = useMoralis();

  useEffect(() => {
    console.log(isWeb3Enabled);
  }, [isWeb3Enabled]);

  return (
    <div className="conttainer ml-8 mt-12">
      <h1 className="text-4xl font-bold text-white my-8">
        Prize Prediction Contracts
      </h1>
      <PredictionCard />
    </div>
  );
}
