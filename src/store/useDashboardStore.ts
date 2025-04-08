import { create } from "zustand";

interface Pura {
  key: string;
  name: string;
  region: string;
}

interface StoreState {
  temples: number;
  contributions: number;
  users: number;
  onReview: number;
  regions: string[];
  puraList: Pura[];
}

const useDashboardStore = create<StoreState>(() => ({
  temples: 4756,
  contributions: 1200,
  users: 150,
  onReview: 10,
  regions: [
    "Buleleng",
    "Gianyar",
    "Karangasem",
    "Klungkung",
    "Tabanan",
    "Jembrana",
    "Bangli",
    "Badung",
    "Denpasar",
  ],
  puraList: [
    { key: "1", name: "Pura Besakih", region: "Karangasem" },
    { key: "2", name: "Pura Tanah Lot", region: "Tabanan" },
    { key: "3", name: "Pura Uluwatu", region: "Badung" },
    { key: "4", name: "Pura Tirta Empul", region: "Gianyar" },
  ],
}));

export default useDashboardStore;
