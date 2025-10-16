import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia, polygon, arbitrum, optimism } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'ODTÜ Blockchain NFT',
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'your-project-id',
  chains: [mainnet, sepolia, polygon, arbitrum, optimism],
  ssr: false, // If your dApp uses server side rendering (SSR)
});
