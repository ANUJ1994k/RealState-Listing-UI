import React, { useEffect } from "react";
import { usePropertyStore } from "../store/properties";
import PropertyCard from "../components/PropertyCard";
import PropertySkeleton from "../components/PropertySkeleton";

const Home = () => {
  const {
    filtered,
    isLoading,
    filters,
    loadProperties,
    updateFilter,
  } = usePropertyStore();

  useEffect(() => {
    loadProperties();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🏠 Property</h1>

      {/* Filters */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="number"
          placeholder="Min Price"
          className="p-2 rounded border"
          value={filters.budgetMin}
          onChange={(e) => updateFilter("budgetMin", e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="p-2 rounded border"
          value={filters.budgetMax}
          onChange={(e) => updateFilter("budgetMax", e.target.value)}
        />
        <select
          className="p-2 rounded border"
          value={filters.type}
          onChange={(e) => updateFilter("type", e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Plot">Plot</option>
        </select>
        <select
          className="p-2 rounded border"
          value={filters.bhk}
          onChange={(e) => updateFilter("bhk", e.target.value)}
        >
          <option value="">All BHKs</option>
          <option value="1BHK">1BHK</option>
          <option value="2BHK">2BHK</option>
          <option value="3BHK">3BHK</option>
          <option value="4BHK">4BHK</option>
        </select>
      </div>

      {/* Listings */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill().map((_, i) => (
            <PropertySkeleton key={i} />
          ))}
        </div>
      ) : !filtered || filtered.length === 0 ? (
        <p className="text-center text-gray-500">No properties found matching filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
