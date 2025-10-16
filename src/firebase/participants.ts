import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config';

export interface Participant {
  id?: string;
  name: string;
  walletAddress: string;
  timestamp: any; // Firestore timestamp
}

// Katılımcı kaydetme fonksiyonu
export const addParticipant = async (participant: Omit<Participant, 'id' | 'timestamp'>) => {
  try {
    const docRef = await addDoc(collection(db, 'participants'), {
      ...participant,
      timestamp: serverTimestamp()
    });
    console.log('Katılımcı başarıyla kaydedildi:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Katılımcı kaydedilirken hata oluştu:', error);
    throw error;
  }
};