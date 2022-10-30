import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import data from "../../utils/data";

const ProductPage = () => {
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>

      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.names}
            width={640}
            height={640}
            layout="responsive"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
