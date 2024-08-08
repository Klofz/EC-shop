import { create } from "zustand";

interface State {
  choosenBrands: string[];
  choosenProductCategories: string[];
  showFilterSettings: boolean;
}

interface Action {
  updateChoosenBrands: (choosenBrands: State["choosenBrands"]) => void;
  updateChoosenProductCategories: (
    choosenProductCategories: State["choosenProductCategories"]
  ) => void;
  updateShowFilterSettings: (
    showFilterSettings: State["showFilterSettings"]
  ) => void;
}

//Store
const useAppStore = create<State & Action>((set) => ({
  choosenBrands: [],
  choosenProductCategories: [],
  showFilterSettings: false,
  updateChoosenBrands: (choosenBrands) =>
    set(() => ({ choosenBrands: choosenBrands })),
  updateChoosenProductCategories: (choosenProductCategories) =>
    set(() => ({ choosenProductCategories: choosenProductCategories })),
  updateShowFilterSettings: (showFilterSettings) =>
    set(() => ({ showFilterSettings: showFilterSettings })),
}));

export default useAppStore;
