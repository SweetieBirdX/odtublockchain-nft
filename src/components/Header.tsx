import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <div>
          <div>
            <div>
              <h1>
                {import.meta.env.VITE_APP_NAME || 'ODTÜ Blockchain NFT Talep Sayfası'}
              </h1>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;