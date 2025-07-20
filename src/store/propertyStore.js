import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePropertyStore = create(
  persist(
    (set, get) => ({
      properties: [],
      filteredProperties: [],
      favorites: [],
      filters: {
        budgetMin: null,
        budgetMax: null,
        type: "",
        bhk: "",
      },
      isLoading: true,

      setProperties: (data) =>
        set({
          properties: data,
          filteredProperties: data,
          isLoading: false,
        }),

      filterProperties: (filters) =>
        set((state) => {
          let filtered = state.properties;
          const { budgetMin, budgetMax, type, bhk } = filters;

          if (budgetMin != null && budgetMax != null) {
            filtered = filtered.filter(
              (p) => p.price >= budgetMin && p.price <= budgetMax
            );
          }

          if (type) {
            filtered = filtered.filter((p) => p.type === type);
          }

          if (bhk) {
            filtered = filtered.filter((p) => p.bhk === bhk);
          }

          return { filteredProperties: filtered, filters };
        }),

      toggleFavorite: (id) =>
        set((state) => {
          const isFav = state.favorites.includes(id);
          const newFavs = isFav
            ? state.favorites.filter((favId) => favId !== id)
            : [...state.favorites, id];
          return { favorites: newFavs };
        }),

      isFavorite: (id) => get().favorites.includes(id),

      getFavoriteProperties: () => {
        const { properties, favorites } = get();
        return properties.filter((p) => favorites.includes(p.id));
      },
    }),
    {
      name: "property-store", 
    }
  )
);
