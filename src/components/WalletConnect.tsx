import React from 'react';
import { useWallet } from '../hooks/useWallet';

interface WalletConnectProps {
  onWalletConnected?: () => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({ onWalletConnected }) => {
  const { 
    account, 
    isConnected, 
    isLoading, 
    error, 
    connectWallet, 
    disconnectWallet, 
    isMetaMaskInstalled 
  } = useWallet();

  const handleConnect = async () => {
    await connectWallet();
    if (onWalletConnected) {
      onWalletConnected();
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (!isMetaMaskInstalled) {
    return (
      <div className="error-message">
        <div>
          <div>
            <h3>
              MetaMask Bulunamadı
            </h3>
            <div>
              <p>
                Bu uygulamayı kullanmak için MetaMask uzantısını yüklemeniz gerekiyor.
                <a 
                  href="https://metamask.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#4ecdc4', marginLeft: '5px' }}
                >
                  MetaMask'i indir
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <div>
          <div>
            <h3>
              Hata
            </h3>
            <div>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        {isConnected ? (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1em', fontWeight: '600' }}>
              Bağlı: {formatAddress(account!)}
            </span>
            <button
              onClick={() => disconnectWallet()}
            >
              Bağlantıyı Kes
            </button>
          </div>
        ) : (
          <div>
            <p style={{ marginBottom: '15px' }}>
              NFT almak için cüzdanınızı bağlayın
            </p>
            <button
              onClick={handleConnect}
              disabled={isLoading}
            >
              {isLoading ? (
                <div>
                  <span className="loading"></span> Bağlanıyor...
                </div>
              ) : (
                'MetaMask Bağla'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletConnect;