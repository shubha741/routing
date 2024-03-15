import React from "react";
import Link from "../../../../node_modules/next/link";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  console.log(params, "param");
  const course = ["V12", "v13", "14"];
  return (
    <div style={{ height: "60vh" }}>
      {" "}
      Product {params.productId}
      {course.map((x) => (
        <Link href={`/Product/${params.productId}/${x}`}>
          <div>{x}</div>
        </Link>
      ))}
    </div>
  );
};

export default ProductDetails;
