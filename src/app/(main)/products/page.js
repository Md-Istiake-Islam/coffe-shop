import React from "react";

export default async function Products() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  console.log(data);

  return <div>Products</div>;
}
