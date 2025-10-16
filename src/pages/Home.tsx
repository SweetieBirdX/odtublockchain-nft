import React, { useState, useEffect } from 'react';
import WalletConnect from '../components/WalletConnect';
import RegistrationForm from '../components/RegistrationForm';
import { useWallet } from '../hooks/useWallet';
import { 
  FaEnvelope, 
  FaLink, 
  FaGlobe, 
  FaMedium, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Home: React.FC = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const { isConnected } = useWallet();

  // Cüzdan bağlı olduğunda form kutusunu göster
  useEffect(() => {
    if (isConnected) {
      setShowRegistration(true);
    } else {
      setShowRegistration(false);
    }
  }, [isConnected]);

  const handleWalletConnected = () => {
    setShowRegistration(true);
  };

  const handleRegistrationSuccess = () => {
    // Kayıt başarılı olduğunda ne yapılacağını burada tanımlayabilirsiniz
    console.log('Kayıt başarılı!');
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h1 className="page-title">
        ODTÜ Blockchain NFT Talep Sayfası
      </h1>
      
      <main>
        {/* Form Container */}
        <div className="form-container">
          <h2>
            Etkinliğimize Hoş Geldiniz! 🎉
          </h2>
          <p>
            Etkinliğimizdeki katılımınızın hatırası olarak size NFT hediye ediyoruz. 
            NFT'yi size gönderebilmemiz için cüzdanınızı bağlayın ve bilgilerinizi iletin.
          </p>

          {/* Wallet Section */}
          <div className="wallet-section">
            <WalletConnect onWalletConnected={handleWalletConnected} />
          </div>

          {/* Registration Form - Only show when wallet is connected */}
          {showRegistration && (
            <div>
              <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
            </div>
          )}

          {/* Contact Section */}
          <div className="contact-section">
            <p>
              Sorularınız için{' '}
              <a href="mailto:odtubct@gmail.com">
                bizimle iletişime geçin
              </a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="social-media-section">
            <div className="social-links">
              <a href="mailto:odtubct@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                <div className="social-icon">
                  <FaEnvelope />
                </div>
              </a>
              <a href="https://linktr.ee/odtubc" target="_blank" rel="noopener noreferrer" title="Linktree">
                <div className="social-icon">
                  <FaLink />
                </div>
              </a>
              <a href="https://odtublockchain.vercel.app/" target="_blank" rel="noopener noreferrer" title="Website">
                <div className="social-icon">
                  <FaGlobe />
                </div>
              </a>
              <a href="https://www.bdays.org/" target="_blank" rel="noopener noreferrer" title="Blockchain Days">
                <div className="social-icon">
                  <FaGlobe />
                </div>
              </a>
              <a href="https://medium.com/odtublockchain" target="_blank" rel="noopener noreferrer" title="Medium">
                <div className="social-icon">
                  <FaMedium />
                </div>
              </a>
              <a href="https://x.com/odtublockchain" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                <div className="social-icon">
                  <FaXTwitter />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/eyupefekarakoca/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <div className="social-icon">
                  <FaLinkedin />
                </div>
              </a>
              <a href="https://www.instagram.com/odtublockchain/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <div className="social-icon">
                  <FaInstagram />
                </div>
              </a>
              <a href="https://www.youtube.com/@odtublockchain" target="_blank" rel="noopener noreferrer" title="YouTube">
                <div className="social-icon">
                  <FaYoutube />
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;