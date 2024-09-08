import { create } from "zustand";

type State = {
  items: string[];
};

type Actions = {
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
  clearCart: () => void;
};

/**
 * Custom hook for managing the cart store.
 *
 * @returns An object containing the cart state and actions.
 */
export const useCartStore = create<State & Actions>((set) => ({
  items: [],

  addItem: (item) => set((state) => ({ items: [...state.items, item] })),

  removeItem: (item) =>
    set((state) => ({
      items: state.items.filter((i) => i !== item),
    })),

  clearCart: () => set({ items: [] }),
}));
