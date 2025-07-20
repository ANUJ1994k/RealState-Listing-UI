
import React from "react";

const PropertySkeleton = () => {
    return (
      <div className="bg-gray-200 animate-pulse rounded-xl p-4 space-y-4">
        <div className="h-40 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="h-8 bg-gray-300 rounded w-full"></div>
      </div>
    );
  };
  
  export default PropertySkeleton;
  