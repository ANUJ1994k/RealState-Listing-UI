import React, { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import PropertySkeleton from "../components/PropertySkeleton";
import propertiesData from "../data/properties.json";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedBHK, setSelectedBHK] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setProperties(propertiesData);
      setFiltered(propertiesData);
      setLoading(false);
    }, 1200); // Simulate API delay
  }, []);

  useEffect(() => {
    let temp = [...properties];
    if (minPrice) temp = temp.filter((p) => p.price >= parseInt(minPrice));
    if (maxPrice) temp = temp.filter((p) => p.price <= parseInt(maxPrice));
    if (selectedType) temp = temp.filter((p) => p.type === selectedType);
    if (selectedBHK) temp = temp.filter((p) => p.bhk === selectedBHK);
    setFiltered(temp);
  }, [minPrice, maxPrice, selectedType, selectedBHK, properties]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🏠 Property Listings</h1>

      {/* Filters (same as before) */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input type="number" placeholder="Min Price" className="p-2 rounded border" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        <input type="number" placeholder="Max Price" className="p-2 rounded border" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        <select className="p-2 rounded border" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Plot">Plot</option>
          <option value="House">House</option>
        </select>
        <select className="p-2 rounded border" value={selectedBHK} onChange={(e) => setSelectedBHK(e.target.value)}>
          <option value="">All BHKs</option>
          <option value="1BHK">1BHK</option>
          <option value="2BHK">2BHK</option>
          <option value="3BHK">3BHK</option>
          <option value="4BHK">4BHK</option>
        </select>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill().map((_, i) => <PropertySkeleton key={i} />)}
        </div>
      ) : filtered.length === 0 ? (
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
