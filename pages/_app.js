import '@/styles/globals.css';
import { MoralisProvider } from 'react-moralis';
import Header from '@/components/Header';
import Head from 'next/head';
import { NotificationProvider } from 'web3uikit';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: 'https://api.studio.thegraph.com/query/42462/nft-marketplace/v0.0.4',
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>NFT Marketplace</title>
				<meta name="description" content="NFT Marketplace" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MoralisProvider initializeOnMount={false}>
				<ApolloProvider client={client}>
					<NotificationProvider>
						<Header />
						<Component {...pageProps} />
					</NotificationProvider>
				</ApolloProvider>
			</MoralisProvider>
		</>
	);
}
