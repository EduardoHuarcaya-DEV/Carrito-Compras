import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
import { data } from "./data/Products";
import { useToggleViewStore } from "./stores/toggleview";

export default function App() {
  const { gridView, toggleView } = useToggleViewStore();

  return (
    <>
      <Navbar />

      <div className="container mx-auto mt-10 py-5 flex justify-between items-end border-b-2 border-gray-200">
        <h1 className="text-5xl font-font">
          Producidos {""}
          <span className="text-lg">
            Actualizado {new Date().toLocaleDateString("es-ES")}{" "}
          </span>
        </h1>
        <div className="flex gap-3">
          <button
            className={`${
              gridView ? "bg-green-700" : "bg-gray-300"
            } text-white text-sm py-2 px-5 rounded-2xl transition-colors duration-200 ${
              !gridView ? "hover:bg-green-600 cursor-pointer" : "cursor-default"
            }`}
            onClick={!gridView ? toggleView : undefined}
          >
            Grid View
          </button>
          <button
            className={`${
              !gridView ? "bg-green-700" : "bg-gray-300"
            } text-white text-sm py-2 px-5 rounded-2xl transition-colors duration-200 ${
              gridView ? "hover:bg-green-600 cursor-pointer" : "cursor-default"
            }`}
            onClick={gridView ? toggleView : undefined}
          >
            List View
          </button>
        </div>
      </div>

      {gridView ? (
        <div className="container mx-auto mt-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 auto-rows-fr">
            {data.map((producto) => (
              <ProductCard key={producto.id} product={producto} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container mx-auto mt-10 px-4">
          <div className="flex flex-col gap-6 w-full">
            {data.map((producto) => (
              <ProductList key={producto.id} product={producto} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
