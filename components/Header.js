import { ConnectButton } from "web3uikit";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  return (
    <div className="w-full mx-8 bg-white shadow-lg rounded-xl flex mt-8 items-center py-4 pl-4 justify-between">
      <div className="text-xl">Jelly Prophet Project</div>
      <div className="flex">
        <button className="rounded-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white px-4 py-2  ">
          <Link href="/">Buy Prediction Token</Link>
        </button>
        <button className="rounded-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white px-4 py-2 ml-4 ">
          <Link href="/create-prediction">Create Prediction</Link>
        </button>
        <ConnectButton moralisAuth={false} />
      </div>
    </div>
  );
};

export default Header;
