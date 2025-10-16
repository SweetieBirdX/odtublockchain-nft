// Cihaz türünü tespit etme utility fonksiyonları

export const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const isIOS = (): boolean => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

export const isAndroid = (): boolean => {
  return /Android/i.test(navigator.userAgent);
};

export const isMetaMaskMobile = (): boolean => {
  return isMobile() && !(window.ethereum?.isMetaMask || false);
};

export const isMetaMaskInstalled = (): boolean => {
  return typeof window.ethereum !== 'undefined' && (window.ethereum.isMetaMask || false);
};

// MetaMask deep link URL'lerini oluştur
export const getMetaMaskDeepLink = (action: 'connect' | 'send' = 'connect'): string => {
  const baseUrl = isIOS() 
    ? 'https://metamask.app.link/dapp/' 
    : 'https://metamask.app.link/dapp/';
  
  const currentUrl = window.location.href;
  
  if (action === 'connect') {
    return `${baseUrl}${encodeURIComponent(currentUrl)}`;
  }
  
  return `${baseUrl}${encodeURIComponent(currentUrl)}`;
};

// Cüzdan bağlantı durumunu kontrol et
export const getWalletConnectionInfo = () => {
  return {
    isMobile: isMobile(),
    isIOS: isIOS(),
    isAndroid: isAndroid(),
    isMetaMaskInstalled: isMetaMaskInstalled(),
    isMetaMaskMobile: isMetaMaskMobile(),
    deepLinkUrl: getMetaMaskDeepLink()
  };
};
