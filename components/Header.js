import { ConnectButton } from "web3uikit";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  return (
    <div className="w-full mx-8 bg-white shadow-lg rounded-xl flex mt-8 items-center py-4 pl-4 justify-between">
      <div className="text-4xl font-bold text-blue-500">
        Jelly Prophet Project
      </div>
      <div className="flex">
        <button className="rounded-xl bg-blue-500 border-2 border-blue-500 hover:bg-white hover:text-blue-500 text-white px-4 py-2  ">
          <Link href="/">Buy Prediction Token</Link>
        </button>
        <button className="rounded-xl bg-blue-500 border-2 border-blue-500 hover:bg-white hover:text-blue-500 text-white px-4 py-2 ml-4 ">
          <Link href="/create-prediction">Create Prediction</Link>
        </button>
        <ConnectButton moralisAuth={false} />
      </div>
    </div>
  );
};

export default Header;
