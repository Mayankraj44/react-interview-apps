import React from "react";

function ProductCard({ title, description, price, thumbnail }) {
  return (
    <div className="flex-1 min-w-56 m-4 border border-white p-2 rounded-lg relative">
      <div className="flex justify-center">
        <img
          className="h-40 text-center"
          src={thumbnail}
          alt="card thumbnail"
        />
      </div>
      <div className="p-4">
        <p className="font-bold text-center">{title}</p>

        <p className="text-sm">{description}</p>
      </div>
      <p className="absolute top-1 right-1 font-bold text-md">$ {price}</p>
    </div>
  );
}

export default ProductCard;
