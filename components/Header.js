import Link from 'next/link';
import { ConnectButton } from 'web3uikit';

export default function Header() {
	return (
		<nav className="p-5 border-b-2 flex justify-between items-center">
			<h1 className="p-4 font-bold text-3xl">NFT Marketplace</h1>
			<div className="flex items-center space-x-4">
				<Link className="p-6" href="/">
					Home
				</Link>
				<Link className="p-6" href="/sell-nft">
					Sell NFT
				</Link>
				<ConnectButton moralisAuth={false} />
			</div>
		</nav>
	);
}
