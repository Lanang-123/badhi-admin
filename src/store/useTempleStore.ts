import {create} from "zustand";

// -------------------------------------
// 1. Definisikan tipe data dan store Zustand
// -------------------------------------
type TempleStatus = 'Pending' | 'Approved' | 'Rejected';

interface Temple {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  dateAdded: string;
  status: TempleStatus;
}

interface TempleState {
  temples: Temple[];
  setTemples: (data: Temple[]) => void;
}

// Membuat store dengan Zustand
const useTempleStore = create<TempleState>((set) => ({
  temples: [],
  setTemples: (data) => set({ temples: data }),
}));

export default useTempleStore;