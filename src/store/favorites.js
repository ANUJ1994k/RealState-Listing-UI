import { create } from "zustand";

export const useFavoritesStore = create((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],

  addFavorite: (properties) =>
    set((state) => {
      const updated = [...state.favorites, properties];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return { favorites: updated };
    }),

  removeFavorite: (id) =>
    set((state) => {
      const updated = state.favorites.filter((p) => p.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return { favorites: updated };
    }),

  isFavorite: (id) =>
    JSON.parse(localStorage.getItem("favorites") || "[]").some((p) => p.id === id),
}));
