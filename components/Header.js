import { ConnectButton } from "web3uikit";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  return (
    <div className="w-full border-b border-secondary flex pt-4 items-center px-4 justify-between">
      <div className="flex">
        <div className="text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-jellyblue to-jellypink">
          Jelly Prophet Project
        </div>
        <div className="flex ml-4">
          <button className="rounded-lg  hover:bg-btngrey  text-white px-2 mr-2  ">
            <Link href="/">Dashboard</Link>
          </button>
          <button className="rounded-lg  hover:bg-btngrey  text-white px-2  mr-2  ">
            <Link href="/create-prediction">Price Predictions</Link>
          </button>
          <button className="rounded-lg  hover:bg-btngrey  text-white px-2 mr-2  ">
            <Link href="/create-prediction">More</Link>
          </button>
        </div>
      </div>
      <ConnectButton moralisAuth={false} />
    </div>
  );
};

export default Header;
