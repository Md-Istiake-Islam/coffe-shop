export default async function SingleProduct({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const data = await res.json();
  console.log(data);

  return <div>SingleProduct</div>;
}
