import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useFavoritesStore } from "../store/favorites";

const PropertyCard = ({ property }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const fav = isFavorite(property.id);

  const handleFavorite = () => {
    fav ? removeFavorite(property.id) : addFavorite(property);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition" >  
      <img  src={property.images?.[0] || "https://cdn.rennie.com/images/images/002/324/244/original/body_7_different_types_homes_single_family_home_ishot.jpg"}
  alt={property.title}  className="h-48 w-full object-cover"/>
      <div className="p-4 relative">
        <h2 className="text-xl font-semibold mb-1">{property.title}</h2>
        <p className="text-sm text-gray-600">{property.location}</p>
        <p className="text-lg font-bold text-green-700 mt-2">₹ {property.price.toLocaleString()}</p>

        <Link to={`/property/${property.id}`}>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            View Details
          </button>
        </Link>

        <button onClick={handleFavorite} className="absolute top-4 right-4 text-2xl">
          {fav ? "❤️" : "🤍"}
        </button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
