import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

interface WalletConnectProps {
  onWalletConnected?: () => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({ onWalletConnected }) => {
  const { isConnected, address } = useAccount();

  // Cüzdan bağlandığında callback'i çağır
  React.useEffect(() => {
    if (isConnected && onWalletConnected) {
      onWalletConnected();
    }
  }, [isConnected, onWalletConnected]);

  return (
    <div>
      <div>
        {isConnected ? (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1em', fontWeight: '600' }}>
              Bağlı: {address?.slice(0, 6)}...{address?.slice(-4)}
            </span>
            <ConnectButton 
              chainStatus="icon"
              accountStatus="address"
              showBalance={false}
            />
          </div>
        ) : (
          <div>
            <p style={{ marginBottom: '15px' }}>
              NFT almak için cüzdanınızı bağlayın
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ConnectButton 
                chainStatus="icon"
                accountStatus="address"
                showBalance={false}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletConnect;