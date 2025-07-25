import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <header className="container mx-auto flex justify-between items-center py-10">
        <h1 className="text-3xl text-green-700 font-semibold">Natureza</h1>
        <div className="flex items-center gap-14">
          <nav>
            <ul className="flex gap-5">
              <li>
                <a href={"/home"}>Inicio</a>
              </li>
              <li>
                <a href={"/shop"}>Tienda</a>
              </li>
              <li>
                <a href={"/products"}>Productos</a>
              </li>
            </ul>
          </nav>
          <button
            className="flex gap-2 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-10 rounded-lg"
            type="button"
          >
            <ShoppingCart className="inline-block mr-2" />
            Carrito (1)
          </button>
        </div>
      </header>
    </>
  );
}
