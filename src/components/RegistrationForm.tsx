import React, { useState } from 'react';
import { addParticipant } from '../firebase/participants';
import { useWallet } from '../hooks/useWallet';

interface RegistrationFormProps {
  onRegistrationSuccess?: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onRegistrationSuccess }) => {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { account, isConnected } = useWallet();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected || !account) {
      setSubmitError('Lütfen önce cüzdanınızı bağlayın');
      return;
    }

    if (!name.trim()) {
      setSubmitError('Lütfen adınızı girin');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await addParticipant({
        name: name.trim(),
        walletAddress: account,
      });
      
      setSubmitSuccess(true);
      setName('');
      
      if (onRegistrationSuccess) {
        onRegistrationSuccess();
      }
    } catch (error: any) {
      console.error('Kayıt hatası:', error);
      setSubmitError('Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };


  if (submitSuccess) {
    return (
      <div className="success-message">
        <div>
          <div>
            <h3>
              🎉 Kayıt Başarılı!
            </h3>
            <div>
              <p>
                Teşekkürler {name}! NFT'niz daha sonra cüzdanınıza gönderilecektir.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Adınız Soyadınız *
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Adınızı girin"
            disabled={isSubmitting || !isConnected}
          />
        </div>

        {submitError && (
          <div className="error-message">
            <p>{submitError}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !isConnected || !name.trim()}
        >
          {isSubmitting ? (
            <div>
              <span className="loading"></span> Kaydediliyor...
            </div>
          ) : (
            'NFT İçin Kaydol'
          )}
        </button>
      </form>

      {!isConnected && (
        <div className="error-message">
          <p>
            NFT almak için önce cüzdanınızı bağlamanız gerekiyor.
          </p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;