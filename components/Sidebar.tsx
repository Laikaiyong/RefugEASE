import React, { useState } from 'react';
import Link from 'next/link';
import { useListen } from "../hooks/useListen";
import { useMetamask } from "../hooks/useMetamask";
import { Loading } from "./Loading";


interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/education', label: 'Education' },
  { href: '/economic', label: 'Economic' },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  const {
    dispatch,
    state: { status, isMetamaskInstalled, wallet, balance },
  } = useMetamask();
  const listen = useListen();

  const showInstallMetamask =
    status !== "pageNotLoaded" && !isMetamaskInstalled;
  const showConnectButton =
    status !== "pageNotLoaded" && isMetamaskInstalled && !wallet;

  const isConnected = status !== "pageNotLoaded" && typeof wallet === "string";

  const handleConnect = async () => {
    dispatch({ type: "loading" });
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    if (accounts.length > 0) {
      const balance = await window.ethereum!.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      });
      dispatch({ type: "connect", wallet: accounts[0], balance });

      // we can register an event listener for changes to the users wallet
      listen();
    }
  };

  const handleDisconnect = () => {
    dispatch({ type: "disconnect" });
  };

  const handleAddUsdc = async () => {
    dispatch({ type: "loading" });

    await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          symbol: "USDC",
          decimals: 18,
          image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=023",
        },
      },
    });
    dispatch({ type: "idle" });
  };

  return (
    <>
      <button 
        className="fixed top-5 text-xl left-5 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <nav className={`
        fixed top-0 left-0 h-full w-72 bg-gray-800 text-white
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 flex flex-col
      `}>
        <div className="p-5 bg-blue-600">
          <h1 className="text-2xl font-bold">RefugEASE</h1>
        </div>
        <ul className="flex-grow p-5">
          {navItems.map((item) => (
            <li key={item.href} className="mb-4">
              <Link href={item.href} className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="p-5 bg-gray-700">
          <button 
            onClick={() => {
                if(wallet)
                {
                    handleDisconnect();
                } else {

                    handleConnect();
                }
            }}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
          {wallet && balance ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}` : 'Connect Wallet'}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;