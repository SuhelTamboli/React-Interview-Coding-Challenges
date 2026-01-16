import useFetch from "./useFetch";

interface ProductProps {
  id: number;
  title: string;
}

export default function FetchCustomHook() {
  const { data, error, loading } = useFetch({
    url: "https://dummyjson.com/products",
  });

  return (
    <div className="flex flex-col">
      <p className="text-lg font-bold self-center">Fetch Custom Hook</p>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.map((product: ProductProps) => (
            <li className="list-disc list-inside" key={product.id}>{product.title}</li>
          ))}
        </div>
      )}
      {error && <div className="text-red-600">Error Occurred: {error}</div>}
    </div>
  );
}
