import { create } from "zustand";

interface ChartContributionStore {
  monthlyData: number[];
  monthlyLabels: string[];

  contributorData: number[];
  contributorLabels: string[];

  videoApprovalData: number[];
  videoApprovalLabels: string[];
}

const useChartContributionStore = create<ChartContributionStore>(() => ({
  monthlyData: [45, 20, 50, 30, 80, 55], // contoh data
  monthlyLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

  contributorData: [30, 10, 5, 3, 2], // contoh data
  contributorLabels: ["Pura Besakih", "Pura Tanah Lot", "Pura Uluwatu", "Pura Batur", "Pura Lainnya"],

  videoApprovalData: [70, 30], // contoh data (70% approved, 30% not approved)
  videoApprovalLabels: ["Approved", "Not Approved"],
}));

export default useChartContributionStore;
