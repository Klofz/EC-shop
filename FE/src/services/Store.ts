import { create } from "zustand";

interface State {
  choosenBrands: string[];
  choosenProductCategories: string[];
  choosenPriceRange: [string, string];
  choosenProductCategories_Map: Map<string, string[]>;
  showFilterSettings: boolean;
}

interface Action {
  updateChoosenBrands: (
    choosenBrands: State["choosenBrands"],
  ) => void;

  updateChoosenProductCategories: (
    choosenProductCategories: State["choosenProductCategories"],
  ) => void;

  updateChoosenPriceRange: (
    choosenPriceRange: State["choosenPriceRange"],
  ) => void;

  updateChoosenProductCategories_Map: (
    choosenProductCategories_Map: State["choosenProductCategories_Map"],
  ) => void;

  updateShowFilterSettings: (
    showFilterSettings: State["showFilterSettings"],
  ) => void;
}

//Store
const useAppStore = create<State & Action>((set) => ({
  //Attributes
  choosenBrands: [],
  choosenProductCategories: [],
  choosenPriceRange: ["0", "1000"],
  choosenProductCategories_Map: new Map<string, string[]>(),
  showFilterSettings: false,

  // Functions
  updateChoosenBrands: (newBrandArr) =>
    set(() => ({ choosenBrands: newBrandArr })),

  updateChoosenProductCategories: (newProductCategoryArr) =>
    set(() => ({
      choosenProductCategories: newProductCategoryArr,
    })),

  updateChoosenPriceRange: (newPairPrice) =>
    set(() => ({
      choosenPriceRange: newPairPrice,
    })),

  updateChoosenProductCategories_Map: (newMap) =>
    set(() => ({
      choosenProductCategories_Map: newMap,
    })),

  updateShowFilterSettings: (newBooleanValue) =>
    set(() => ({ showFilterSettings: newBooleanValue })),
}));

export default useAppStore;
