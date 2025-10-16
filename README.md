# NFT Etkinlik Kayıt Sistemi

Bu proje, etkinlik katılımcılarına NFT dağıtmak için kullanılan bir web uygulamasıdır. Kullanıcılar MetaMask ile cüzdanlarını bağlayabilir ve etkinlik için kayıt olabilirler.

## 🚀 Özellikler

- **MetaMask Entegrasyonu**: Kullanıcılar cüzdanlarını güvenli bir şekilde bağlayabilir
- **Firebase Firestore**: Katılımcı verileri güvenli şekilde saklanır
- **Modern UI/UX**: TailwindCSS ile responsive ve modern tasarım
- **TypeScript Desteği**: Hem TSX hem JSX dosyaları desteklenir
- **React Router**: Sayfa yönlendirme için

## 🛠️ Teknolojiler

- **Frontend**: React + TypeScript + Vite
- **Styling**: TailwindCSS
- **Web3**: ethers.js + MetaMask
- **Database**: Firebase Firestore
- **Routing**: React Router DOM

## 📦 Kurulum

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Firebase konfigürasyonu:**
   - Firebase Console'da yeni proje oluşturun
   - Firestore Database'i etkinleştirin
   - `.env` dosyasını oluşturun ve Firebase konfigürasyonunuzu ekleyin

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

## 🔧 Firebase Kurulumu

1. [Firebase Console](https://console.firebase.google.com/)'a gidin
2. Yeni proje oluşturun
3. Firestore Database'i etkinleştirin
4. Project Settings > General > Your apps > Web app > Config'den konfigürasyonu kopyalayın
5. Proje kök dizininde `.env` dosyası oluşturun ve değerleri ekleyin

## 📁 Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── Header.tsx
│   ├── WalletConnect.tsx
│   └── RegistrationForm.tsx
├── firebase/           # Firebase konfigürasyonu
│   ├── config.ts
│   └── participants.ts
├── hooks/              # Custom React hooks
│   └── useWallet.ts
├── pages/              # Sayfa bileşenleri
│   └── Home.tsx
├── types/              # TypeScript tip tanımları
│   └── ethereum.d.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🎯 Kullanım

1. Kullanıcı siteye girer
2. "MetaMask Bağla" butonuna tıklar
3. MetaMask'te bağlantıyı onaylar
4. Adını girer ve "NFT İçin Kaydol" butonuna tıklar
5. Veriler Firebase'e kaydedilir

## 🔒 Güvenlik

- MetaMask ile güvenli cüzdan bağlantısı
- Firebase Firestore güvenlik kuralları
- TypeScript ile tip güvenliği
- Input validasyonu

## 🚀 Deployment

1. **Build alın:**
   ```bash
   npm run build
   ```

2. **Static hosting (Vercel, Netlify, vs.):**
   ```bash
   npm run build
   # dist/ klasörünü hosting servisine yükleyin
   ```

## 📝 Firebase Veritabanı Yapısı

```javascript
participants/
  - participantId/
    - name: string
    - walletAddress: string
    - registrationDate: timestamp
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
