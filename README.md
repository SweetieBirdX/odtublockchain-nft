# ODTÜ Blockchain NFT Talep Sayfası

Bu site ODTÜ Blockchain etkinliklerine katılan katılımcılara NFT dağıtmak için oluşturulmuştur. Etkinlik katılımcıları MetaMask cüzdanlarını bağlayarak NFT talep edebilirler.

## 🎯 Proje Amacı

ODTÜ Blockchain olarak düzenlediğimiz etkinliklerde katılımcılarımıza hatıra olarak özel NFT'ler hediye ediyoruz. Bu platform sayesinde katılımcılar:

- MetaMask cüzdanlarını güvenli şekilde bağlayabilir
- Adlarını girerek NFT talebinde bulunabilir  
- NFT'lerin daha sonra cüzdanlarına gönderilmesini bekleyebilir

## 🚀 Özellikler

- **MetaMask Entegrasyonu**: Güvenli cüzdan bağlantısı
- **Firebase Firestore**: Katılımcı verilerinin güvenli saklanması
- **Modern UI/UX**: Gradient temalı, responsive tasarım
- **TypeScript Desteği**: Tip güvenli kod yapısı
- **React Icons**: Profesyonel sosyal medya ikonları
- **Performance Optimized**: Layout shift önleme

## 🛠️ Teknolojiler

- **Frontend**: React + TypeScript + Vite
- **Styling**: Custom CSS + Glassmorphism
- **Web3**: RainbowKit + Wagmi + WalletConnect
- **Database**: Firebase Firestore

- **Icons**: React Icons (FontAwesome)



## 🎯 Kullanım

1. Kullanıcı siteye girer
2. "Connect Wallet" butonuna tıklar (100+ cüzdan seçeneği)
3. Cüzdanında bağlantıyı onaylar
4. Adını girer ve "NFT İçin Kaydol" butonuna tıklar
5. Veriler Firebase'e kaydedilir ve NFT talep işlemi tamamlanır

## 📦 Kurulum

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Environment Variables (.env dosyası oluşturun):**
   ```env
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id

   # App Configuration
   VITE_APP_NAME=ODTÜ Blockchain NFT Talep Sayfası

   # WalletConnect Project ID (RainbowKit için gerekli)
   VITE_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
   ```

3. **Firebase Setup:**
   - Firebase Console'da proje oluşturun
   - Firestore Database'i etkinleştirin
   - Web app ekleyin ve konfigürasyon bilgilerini alın

4. **WalletConnect Setup:**
   - [WalletConnect Cloud](https://cloud.walletconnect.com/) adresinden ücretsiz project ID alın
   - Project ID'yi `.env` dosyasına ekleyin

5. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

## 🔒 Güvenlik

- RainbowKit ile güvenli multi-wallet bağlantısı (100+ cüzdan)
- Mobil cihazlarda otomatik uygulama yönlendirme
- Firebase Firestore güvenlik kuralları
- TypeScript ile tip güvenliği
- Input validasyonu
- `noopener noreferrer` güvenlik önlemleri

## 

## 📝 Firebase Veritabanı Yapısı

```javascript
participants/
  - participantId/
    - name: string
    - walletAddress: string
    - timestamp: timestamp
```


## 🌐 ODTÜ Blockchain Sosyal Medya

Bizimle iletişime geçin ve güncel gelişmeleri takip edin:

- **LinkedIn**: [ODTÜ Blockchain](https://www.linkedin.com/company/odtublockchain/)
- **X (Twitter)**: [@odtublockchain](https://x.com/odtublockchain)
- **Instagram**: [@odtublockchain](https://www.instagram.com/odtublockchain/)
- **Website**: [odtublockchain.vercel.app](https://odtublockchain.vercel.app/)
- **Blockchain Days**: [bdays.org](https://www.bdays.org/)
- **Email**: odtubct@gmail.com


## 📄 Lisans

Bu proje ODTÜ Blockchain tarafından geliştirilmiştir.

---

**ODTÜ Blockchain** - Building a Blockchain Community