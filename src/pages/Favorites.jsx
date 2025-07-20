import React from "react";
import { useFavoritesStore } from "../store/favorites";
import PropertyCard from "../components/PropertyCard";

const Favorites = () => {
  const { favorites } = useFavoritesStore();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">❤️ Your Favorites</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">You haven’t saved any properties yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
