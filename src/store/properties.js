import { create } from "zustand";
import { persist } from "zustand/middleware";
import propertiesData from "../data/properties.json"; // make sure this import exists

export const usePropertyStore = create(
  persist(
    (set, get) => ({
      properties: [],
      filtered: [],
      favorites: [],
      filters: {
        budgetMin: "",
        budgetMax: "",
        type: "",
        bhk: "",
      },
      isLoading: true,

      // ✅ Simulates fetching data
      loadProperties: () => {
        set({ isLoading: true });
        setTimeout(() => {
          set({
            properties: propertiesData,
            filtered: propertiesData,
            isLoading: false,
          });
        }, 1200);
      },

      // ✅ Apply filters
      updateFilter: (key, value) => {
        const filters = { ...get().filters, [key]: value };
        let filtered = [...get().properties];

        if (filters.budgetMin)
          filtered = filtered.filter((p) => p.price >= parseInt(filters.budgetMin));
        if (filters.budgetMax)
          filtered = filtered.filter((p) => p.price <= parseInt(filters.budgetMax));
        if (filters.type)
          filtered = filtered.filter((p) => p.type === filters.type);
        if (filters.bhk)
          filtered = filtered.filter((p) => p.bhk === filters.bhk);

        set({ filters, filtered });
      },

      // ✅ Reset all filters
      resetFilters: () => {
        set({
          filters: {
            budgetMin: "",
            budgetMax: "",
            type: "",
            bhk: "",
          },
          filtered: get().properties,
        });
      },

      // ✅ Favorite toggle
      toggleFavorite: (id) =>
        set((state) => {
          const isFav = state.favorites.includes(id);
          const updatedFavs = isFav
            ? state.favorites.filter((favId) => favId !== id)
            : [...state.favorites, id];
          return { favorites: updatedFavs };
        }),

      // ✅ Favorite check
      isFavorite: (id) => get().favorites.includes(id),

      // ✅ Get full favorite property objects
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
