import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

interface WalletState {
  account: string | null;
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;
}

export const useWallet = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    account: null,
    isConnected: false,
    isLoading: false,
    error: null,
  });

  // MetaMask'in yüklü olup olmadığını kontrol et
  const isMetaMaskInstalled = () => {
    return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';
  };

  // Cüzdan bağlantısı
  const connectWallet = async () => {
    if (!isMetaMaskInstalled()) {
      setWalletState(prev => ({
        ...prev,
        error: 'MetaMask yüklü değil. Lütfen MetaMask uzantısını yükleyin.',
      }));
      return;
    }

    setWalletState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const provider = new ethers.BrowserProvider(window.ethereum!);
      const accounts = await provider.send('eth_requestAccounts', []);
      
      if (accounts.length > 0) {
        setWalletState({
          account: accounts[0],
          isConnected: true,
          isLoading: false,
          error: null,
        });
      }
    } catch (error: any) {
      setWalletState(prev => ({
        ...prev,
        isLoading: false,
        error: error.message || 'Cüzdan bağlantısında hata oluştu.',
      }));
    }
  };

  // Cüzdan bağlantısını kes
  const disconnectWallet = async () => {
    if (!isMetaMaskInstalled()) return;

    try {
      // MetaMask'ten izinleri geri çek
      await window.ethereum!.request({
        method: 'wallet_revokePermissions',
        params: [{
          eth_accounts: {}
        }]
      });
    } catch (error) {
      console.error('MetaMask izinleri geri çekilirken hata:', error);
      
      // Eğer wallet_revokePermissions desteklenmiyorsa, alternatif yöntem
      try {
        await window.ethereum!.request({
          method: 'wallet_requestPermissions',
          params: [{
            eth_accounts: {}
          }]
        });
      } catch (altError) {
        console.error('Alternatif bağlantı kesme yöntemi de başarısız:', altError);
      }
    }

    // Frontend state'ini sıfırla
    setWalletState({
      account: null,
      isConnected: false,
      isLoading: false,
      error: null,
    });
  };

  // Sayfa yüklendiğinde cüzdan durumunu kontrol et
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (!isMetaMaskInstalled()) return;

      try {
        const provider = new ethers.BrowserProvider(window.ethereum!);
        const accounts = await provider.listAccounts();
        
        if (accounts.length > 0) {
          setWalletState({
            account: accounts[0].address,
            isConnected: true,
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        console.error('Cüzdan durumu kontrol edilirken hata:', error);
      }
    };

    checkWalletConnection();

    // MetaMask hesap değişikliklerini dinle
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnectWallet();
      } else {
        setWalletState(prev => ({
          ...prev,
          account: accounts[0],
          isConnected: true,
        }));
      }
    };

    if (isMetaMaskInstalled()) {
      window.ethereum!.on('accountsChanged', handleAccountsChanged);
      
      return () => {
        window.ethereum!.removeListener('accountsChanged', handleAccountsChanged);
      };
    }
  }, []);

  return {
    ...walletState,
    connectWallet,
    disconnectWallet,
    isMetaMaskInstalled: isMetaMaskInstalled(),
  };
};