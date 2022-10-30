/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`} legacyBehavior>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`} legacyBehavior>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>

        <p className="mb-2">{product.name}</p>
        <p>&#8373; {product.name}</p>
        <button className="primary-button">add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
