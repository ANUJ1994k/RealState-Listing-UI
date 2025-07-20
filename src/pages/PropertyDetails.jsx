import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../data/properties.json";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const found = propertiesData.find((p) => p.id === parseInt(id));
    setProperty(found);
  }, [id]);

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading property...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{property.title}</h2>

      {/* Image carousel (simplified) */}
      <div className="overflow-x-auto flex space-x-4 mb-4">
        {property.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`property-${i}`}
            className="h-64 w-96 object-cover rounded-lg"
          />
        ))}
      </div>

      {/* Info Section */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <p className="text-gray-600"><strong>Location:</strong> {property.location}</p>
        <p className="text-gray-600"><strong>Price:</strong> ₹ {property.price.toLocaleString()}</p>
        <p className="text-gray-600"><strong>Area:</strong> {property.area}</p>
        <p className="text-gray-600"><strong>BHK:</strong> {property.bhk}</p>
        <p className="text-gray-600"><strong>Type:</strong> {property.type}</p>
        <p className="text-gray-600 mb-2"><strong>Amenities:</strong> {property.amenities.join(", ")}</p>

        {/* button */}
        <button
          onClick={() => alert("📩 Enquiry Form (Under development)")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enquire Now
        </button>
      </div>

      {/* Google Map Embed */}
      <div className="mt-6">
        <iframe
          title="map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
          width="100%"
          height="300"
          className="rounded-lg border"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default PropertyDetails;
