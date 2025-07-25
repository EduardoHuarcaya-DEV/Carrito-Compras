import { create } from "zustand";
import { persist } from "zustand/middleware";

type ToggleViewStore = {
  gridView: boolean;
  toggleView: () => void;
};

export const useToggleViewStore = create<ToggleViewStore>()(
  persist(
    (set) => ({
      gridView: true,
      toggleView: () => set((state) => ({ gridView: !state.gridView })),
    }),
    {
      name: "toggleViewStore", // unique name for the store
    }
  )
);
